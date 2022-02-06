FROM mcr.microsoft.com/dotnet/aspnet:6.0.1-alpine3.14 AS base
WORKDIR /app

ENV PORT=8080
ENV ASPNETCORE_URLS=http://+:${PORT}

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-dotnet-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser


#####
FROM node:lts-alpine as npminstall
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY frontend/ .
RUN npm install
FROM npminstall as npmbuild
RUN npm run build

####

FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /src
COPY ["backend/backend.csproj", "./"]
RUN dotnet restore "backend.csproj"
COPY backend/ .
# copy frontend stuff
COPY --from=npmbuild /usr/src/app/build wwwroot/
# go on with rest
WORKDIR "/src/."
#RUN dotnet build "backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "backend.dll"]
