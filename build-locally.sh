
# Build frontend
echo "Building frontend …"

cd frontend
npm run build


# Build backend
echo "Building backend …"
cd ../backend
dotnet build

# Copy frontend to backend
echo "Copying stuff over …"
echo "Currently in"
pwd
rm -rfv wwwroot && mkdir wwwroot

cp -r ../frontend/build wwwroot

echo "Finished!"