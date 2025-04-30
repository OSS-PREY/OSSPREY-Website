# OSSPREY Installation Manual

## Step 1: Clone All Repositories

OSSPREY consists of multiple modular components. Begin by cloning all required repositories:

```
git clone https://github.com/OSS-PREY/OSSPREY-FrontEnd-Server
git clone https://github.com/OSS-PREY/OSSPREY-BackEnd-Server
git clone https://github.com/OSS-PREY/OSSPREY-ReACT-API
git clone https://github.com/OSS-PREY/OSSPREY-Pex-Forecaster
git clone https://github.com/OSS-PREY/OSSPREY-OSS-Scraper-Tool
```

## Step 2: Front-End Installation

1. **Ensure Node.js & npm are installed (version 14.x or above):**
   ```
   sudo apt install npm
   ```

2. **Install project dependencies:**
   ```
   npm install
   ```

3. **Start development server (hot reload):**
   ```
   npm run dev
   ```

4. **Build for production:**
   ```
   npm run build
   ```

5. **Clear cache and reinstall (if build issues occur):**
   ```
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   ```

## Step 3: Back-End Installation

1. **Create and activate Python environment (Python 3.10 recommended):**
   ```
   python3 -m venv venv
   source venv/bin/activate
   ```

2. **Install Python dependencies:**  
   Download `requirements.txt` from [GitHub](https://github.com/OSS-PREY/OSSPREY-Website/blob/main/static/installation-files/requirements.txt) and run:
   ```
   pip install -r requirements.txt
   ```

3. **Navigate to OSSPREY-OSS-Scraper-Tool directory:**
   ```
   cd OSSPREY-OSS-Scraper-Tool
   ```

4. **Install Rust and Cargo:**  
   Follow the official guide at [rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

5. **Environment File Configuration**  
   Create a `.env` file in the `OSSPREY-OSS-Scraper-Tool` directory with the following content:
   ```
   GITHUB_TOKEN="PERSONAL-TOKEN"
   ```
   Replace `PERSONAL-TOKEN` with your GitHub personal access token. The token should be fine-grained access tokens with read access to the public repositories on GitHub.

6. **Prepare and build the OSS Scraper tool:**
   ```
   cargo update
   cargo clean
   cargo build
   cargo fix --bin "miner"
   ```
   The built binary will appear inside the `target` directory.

7. **Navigate to the core backend directory (OSSPREY-BackEnd-Server):**
   ```
   cd ../OSSPREY-BackEnd-Server
   ```
   This directory contains the Flask server that serves API endpoints.

8. **Install MongoDB and Mongosh:**  
   Use the provided scripts ([MongoDB](https://github.com/OSS-PREY/OSSPREY-Website/blob/main/static/installation-files/install_mongo.sh) and [Mongosh](https://github.com/OSS-PREY/OSSPREY-Website/blob/main/static/installation-files/install_mongosh.sh)) to install MongoDB and Mongosh:
   ```
   sh install_mongo.sh
   sh install_mongosh.sh
   ```

9. **Set up the database user in mongosh:**
   ```
   mongosh

   use decal-db
   db.createUser({
     user: "ossprey-backend",
     pwd: "FL3YyVGCr79xlPT0",
     roles: [{ role: "readWrite", db: "decal-db" }]
   })
   ```

10. **Download Foundational Data:**  
    [Download](https://zenodo.org/records/15307373) the foundational data and place it in the `parent` directory.

11. **Insert data into MongoDB:**  
    Run the following script from the given [Insert-Data](https://github.com/OSS-PREY/OSSPREY-Website/blob/main/static/installation-files/insert_data_to_mongodb.sh) file.
    ```
    sh insert_data_to_mongodb.sh
    ```

12. **Environment File Configuration**  
    Create a `.env` file in the `OSSPREY-BackEnd-Server` directory with the following content:
    ```
    GITHUB_TOKEN_1="PERSONAL-TOKEN-1" 
    GITHUB_TOKEN_2="PERSONAL-TOKEN-2"
    GITHUB_TOKEN_3="PERSONAL-TOKEN-3"
    GITHUB_TOKEN_4="PERSONAL-TOKEN-4"
            
    PEX_GENERATOR_REPO_URL="https://github.com/arjashok/pex-forecaster.git"
    OSS_SCRAPER_REPO_URL="https://github.com/priyalsoni15/OSS-scraper.git"
    PEX_GENERATOR_DIR="/mnt/data1/OSPEX/root-linode/pex-forecaster"
    OSS_SCRAPER_DIR="/OSSPREY-OSS-Scraper-Tool"
    REACT_API_DIR="/OSSPREY-ReACT-API"
    GITHUB_USERNAME="GITHUB_USERNAME"
    MONGODB_URI="mongodb://ossprey-backend:FL3YyVGCr79xlPT0@localhost:27017/decal-db?retryWrites=true&w=majority"
    ```
    Replace `PERSONAL-TOKEN-1`, `PERSONAL-TOKEN-2`, `PERSONAL-TOKEN-3`, and `PERSONAL-TOKEN-4` with your GitHub personal access tokens. These should be fine-grained access tokens with read access to public repositories. Also, replace `GITHUB_USERNAME` with your GitHub username.

13. **Start the Flask backend using Gunicorn (production):**
    ```
    gunicorn -w 4 --max-requests 100 --max-requests-jitter 10 --timeout 120 -b 0.0.0.0:5000 run:app
    ```

14. **Debug locally using Flask (development):**
    ```
    python -m flask run
    ```
    Or, to allow external access:
    ```
    python -m flask run --host=0.0.0.0 --port=5000
    ```
