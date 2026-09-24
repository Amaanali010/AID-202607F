# Class 2: Installing MongoDB & MongoDB Compass/mongosh, Connecting to a Server

## 🎯 Learning Objectives
- Install MongoDB Community Server
- Install MongoDB Compass (GUI) and mongosh (shell)
- Connect to your local MongoDB server

---

## 1. What You'll Install
| Tool | Purpose |
|---|---|
| MongoDB Community Server | The actual database engine |
| mongosh | Command-line shell to run MongoDB commands |
| MongoDB Compass | Visual GUI tool to browse/query data |

## 2. Installing MongoDB Community Server
1. Go to the official MongoDB website's download page
2. Choose **Community Server**, select your OS
3. Run the installer — choose **Complete** setup
4. On Windows, it's usually installed as a service and starts automatically
5. On Mac/Linux, you may need to start it manually:
```bash
mongod --dbpath /path/to/data
```

## 3. Installing mongosh (Mongo Shell)
1. Download `mongosh` from the MongoDB download page
2. Install it, then open a terminal and type:
```bash
mongosh
```
If it connects, you'll see a prompt like:
```
test>
```

## 4. Installing MongoDB Compass
1. Download **Compass** from the MongoDB website
2. Install and open it
3. Connect using the default connection string:
```
mongodb://localhost:27017
```
4. You should see a list of existing databases (like `admin`, `local`, `config`)

## 5. Basic mongosh Commands to Confirm Setup
```javascript
// Show all databases
show dbs

// Switch to (or create) a database
use schoolDB

// Show current database
db

// Show collections in current database
show collections
```

## 6. Connecting to a Cloud Server (Optional — MongoDB Atlas)
For real projects, many developers use **MongoDB Atlas** (free-tier cloud hosting):
1. Sign up at MongoDB Atlas
2. Create a free cluster
3. Get your connection string (looks like `mongodb+srv://username:password@cluster.mongodb.net/`)
4. Use this string in Compass or mongosh to connect remotely

---

## 📝 Homework / Tasks (Class 2)
1. Install MongoDB Community Server, mongosh, and Compass.
2. Open mongosh and run `show dbs` — screenshot the result.
3. Create a new database called `schoolDB` using `use schoolDB` in mongosh.
4. Open Compass and connect to `mongodb://localhost:27017` — screenshot your connected view.
5. (Optional) Create a free MongoDB Atlas account and try connecting to it from Compass.

---
⬅️ **Previous:** [Class 1](01-intro-nosql-mongodb.md)  |  ➡️ **Next:** [Class 3 - Databases, Collections, Documents](03-databases-collections-documents.md)
