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

First Step: Clone all the repos, which makes the entire system:
Commands:
git clone https://github.com/OSS-PREY/OSSPREY-FrontEnd-Server
git clone https://github.com/OSS-PREY/OSSPREY-BackEnd-Server
git clone https://github.com/OSS-PREY/OSSPREY-ReACT-API
git clone https://github.com/OSS-PREY/OSSPREY-Pex-Forecaster
git clone https://github.com/OSS-PREY/OSSPREY-OSS-Scraper-Tool

Second Step: Installation
For Front-End Server:

1. **Ensure Node.js Version**: Make sure Node.js version 14.x or above is installed.
   Run the following command to ensure npm is installed in your machine:
   ```
   sudo apt install npm
   ```

3. **Install Dependencies**:

   ```sh
   npm install
   ```

### Compile and Hot-Reload for Development

To start the development server:

```sh
npm run dev
```

### Type-Check, Compile, and Minify for Production

```sh
npm run build
```

### Clear Cache and Reinstall Dependencies (if issues arise)

If the project fails to build locally, clear the cache and retry:

```sh
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```


For Back-End Server:
1. Acrivate a python enviroment, recommended python 3.10
python3 -m venv venv
source venv/bin/activate

2. Download the requirements.txt file from here (https://github.com/OSS-PREY/OSSPREY-Website/blob/main/requirements.txt), and then install all required python packages using pip. 
pip install -r requirements.txt

3. Go to OSSPREY-OSS-Scraper-Tool Dir:
cd OSS-Scraper-Tool

4. Rust and Cargo installed on your system. You can follow the official Rust installation guide at:  
   https://www.rust-lang.org/tools/install
5. Run the following commands to prepare the environment and build the OSS Scraper tool:

    cargo update
    cargo clean
    cargo build
    cargo fix --bin "miner"
Running the tool will create a miner file inside the target dir

6. go to OSS-fetech-Github dir; this is the dir which is the heart of the backend system. It serves the rest api endpoints

Install mongodb and mongohs installation (install_mongo.sh, install_mongosh.sh)

then type- (mongosh) in the terminal
then do the following

use decal-db
db.createUser({
  user: "ossprey-backend",
  pwd: "FL3YyVGCr79xlPT0",
  roles: [{ role: "readWrite", db: "decal-db" }]
}) 


 

to insert data to mongodb:
run the insert_data_to_mongodb.sh (sh insert_data_to_mongodb.sh); it is in the parent dir 


run the following to start:
gunicorn -w 4 --max-requests 100 --max-requests-jitter 10 --timeout 120 -b 0.0.0.0:5000 run:app


for debugging:
python -m flask run

python -m flask run --host=0.0.0.0 --port=5000 (this will ensure that system is accessible by outside pcs at port 5000)
