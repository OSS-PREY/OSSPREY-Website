This is the dir for running the backend of ospex; 

building the docker image:
sudo docker build -t ospex .

to save docker image in tar file:
sudo docker save -o ospex.tar ospex:latest

ospex.tar -> change this by the location, where you want to save the image

to load the docker image from tar file:
sudo docker load -i ospex.tar

then, running the docker image
sudo docker run -it ospex



to get inside of the docker image:
docker run -it --rm ospex /bin/bash

after getting inside you have to make sure everything is configured; to do this:
First Step



go to OSS-fetech-Github dir; this is the dir which will the heart of the backend system. It serves the rest api endpoints
follow the readme of that dir;

next, go to the oss-scraper dir, make sure rust is installed in the system; and the miner is working (follow the installation guides, as specified in readme,.md of oss-scraper dir)

Install mongodb and mongohs installation (install_mongo.sh, install_mongosh.sh)

then type- (mongosh) in the terminal
then do the following

use decal-db
db.createUser({
  user: "priyalsoniwritings",
  pwd: "FL3YyVGCr79xlPT0",
  roles: [{ role: "readWrite", db: "decal-db" }]
}) 




to insert data to mongodb:
run the insert_data_to_mongodb.sh (sh insert_data_to_mongodb.sh); it is in the parent dir 


run the following to start:
gunicorn -w 4 --max-requests 100 --max-requests-jitter 10 --timeout 120 -b 0.0.0.0:5000 run:app


for debugging:
python -m flask run

python -m flask run --host=0.0.0.0 --port=5000 (this will ensure that system is accessible by outside pcs)
