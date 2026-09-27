# Session 11: MongoDB Cloud (Atlas)

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain how to create an Atlas account and set up a cluster
- Describe how to access the MongoDB Atlas cluster
- Explain how to import data into the Atlas cluster from a MongoDB instance and manage the imported data
- Explain how to export data from the Atlas cluster into a MongoDB instance and manage the exported data
- Describe how to perform administrative tasks in the MongoDB cluster

---

## 1. What is MongoDB Atlas?

**MongoDB Atlas** is MongoDB's official **cloud database service**. Instead of installing and managing MongoDB on your own machine or server, Atlas hosts it for you — handling setup, backups, scaling, and security in the cloud.

**Analogy:** Instead of building and maintaining your own power generator, you simply plug into the electricity grid and let the utility company handle the infrastructure. Atlas is the "grid" for your database.

---

## 2. Creating an Atlas Account and Setting Up a Cluster

### 2.1 Creating an Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up using your email, or use Google/GitHub sign-in.
3. Verify your email address if prompted.

### 2.2 Setting Up a Cluster
A **cluster** is a group of servers that store your data on Atlas.

1. After logging in, click **"Build a Database"**.
2. Choose a deployment type:
   - **Free (M0)** — great for learning and small projects.
   - **Dedicated/Serverless** — for production workloads.
3. Choose a **cloud provider** (AWS, Google Cloud, or Azure) and a **region** closest to your users.
4. Give your cluster a name (e.g., `Cluster0`).
5. Click **Create Cluster** — Atlas will take a few minutes to provision it.
6. Set up **database access**:
   - Create a database username and password.
7. Set up **network access**:
   - Add your current IP address (or `0.0.0.0/0` to allow access from anywhere — not recommended for production).

---

## 3. Accessing the Atlas Cluster

Once your cluster is ready, you can access it in a few ways:

### 3.1 Via MongoDB Shell (`mongosh`)
1. Click **Connect** on your cluster dashboard.
2. Choose **"Shell"**.
3. Copy the provided connection command, e.g.:
   ```bash
   mongosh "mongodb+srv://cluster0.mongodb.net/" --username myUser
   ```
4. Run it in your terminal and enter your password when prompted.

### 3.2 Via MongoDB Compass
1. Click **Connect** → choose **"Compass"**.
2. Copy the connection string (e.g., `mongodb+srv://myUser:<password>@cluster0.mongodb.net/`).
3. Paste it into Compass and click **Connect**.

### 3.3 Via Application Code (Drivers)
1. Click **Connect** → choose **"Drivers"** → select your programming language (e.g., Python, Node.js).
2. Copy the provided connection string into your application's code.

---

## 4. Importing Data Into an Atlas Cluster

You can import data from a local MongoDB instance into your Atlas cluster.

### 4.1 Using `mongoimport`
```bash
mongoimport --uri "mongodb+srv://myUser:<password>@cluster0.mongodb.net/schoolDB" \
  --collection students --file students.json --jsonArray
```

### 4.2 Using `mongorestore` (for BSON dumps)
```bash
mongorestore --uri "mongodb+srv://myUser:<password>@cluster0.mongodb.net" ./dump
```

### 4.3 Managing Imported Data
- Use **Atlas Data Explorer** (in the Atlas dashboard) to view, edit, and delete imported documents visually.
- Use **Compass** connected to your Atlas cluster for a richer GUI experience.
- Verify data integrity by comparing document counts:
  ```javascript
  db.students.countDocuments()
  ```

---

## 5. Exporting Data From an Atlas Cluster

You can also move data **out** of Atlas back to a local MongoDB instance or another destination.

### 5.1 Using `mongoexport`
```bash
mongoexport --uri "mongodb+srv://myUser:<password>@cluster0.mongodb.net/schoolDB" \
  --collection students --out students_export.json --jsonArray
```

### 5.2 Using `mongodump` (for full BSON backups)
```bash
mongodump --uri "mongodb+srv://myUser:<password>@cluster0.mongodb.net" --out ./backup
```

### 5.3 Managing Exported Data
- Store exported files in a version-controlled backup location.
- Validate exported data by re-importing it into a local test database and comparing record counts.

---

## 6. Administrative Tasks in the Atlas Cluster

The Atlas dashboard provides many administrative features without needing shell commands:

| Task | How to Do It in Atlas |
|------|------------------------|
| Monitor performance | **Metrics** tab — view CPU, memory, connections |
| Set up alerts | **Alerts** tab — get notified of issues (e.g., high CPU usage) |
| Manage backups | **Backup** tab — enable continuous or scheduled backups |
| Scale the cluster | **Cluster settings** → change tier/storage size |
| Manage database users | **Database Access** tab — add/remove users and roles |
| Manage network access | **Network Access** tab — control which IPs can connect |
| Pause/resume cluster | Cluster **"..."** menu → Pause (saves cost when not in use) |

---

## 📝 Assignment: Session 11

1. Create a free MongoDB Atlas account and set up a free-tier (M0) cluster. Take a screenshot of your cluster dashboard.
2. Set up database access (create a user) and network access (allow your IP), then connect to your cluster using `mongosh`. Paste the connection command you used (hide your password).
3. Export a small collection from your local MongoDB instance using `mongoexport`, then import it into your Atlas cluster using `mongoimport`. Verify the document count matches in both places.
4. Explore the **Metrics** tab in your Atlas dashboard and note down 3 metrics you can monitor.
5. Describe the steps to set up an automated backup for your Atlas cluster.
6. **Short answer:** What are two advantages of using MongoDB Atlas over managing your own MongoDB server manually?

