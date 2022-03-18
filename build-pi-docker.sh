git pull 
sudo docker stop ihp
sudo docker container rm ihp
sudo docker build -t ihp .
sudo docker run -d --restart always -e ASPNETCORE_URLS=http://+:5000 -p 5000:5000 --name ihp ihp