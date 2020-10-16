sudo docker rmi driver client ebs
cd driver
sudo docker build -t driver .
cd ..
cd restaurant
sudo docker build -t restaurant .
cd ..
cd cliente
sudo docker build -t client .
cd ..
cd ebs
sudo docker build -t ebs .
cd ..
