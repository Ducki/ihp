git pull 
sudo docker stop ihp
sudo docker build -t ihp .
sudo docker run -d --restart always --rm -p 5000:5000 --name ihp ihp