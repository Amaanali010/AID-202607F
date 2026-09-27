# Session 10: MongoDB Tools

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain the method to connect MongoDB Compass with a MongoDB deployment
- Describe how to use MongoDB Compass to perform create, insert, update, select, and drop operations in a database
- Explain how to install the MongoDB BI Connector
- Describe the process for integrating the MongoDB BI Connector with a MongoDB deployment
- Describe how to connect a MongoDB database to BI tools using ODBC drivers

---

## 1. MongoDB Compass

**MongoDB Compass** is the official **Graphical User Interface (GUI)** tool for MongoDB. It lets you visually explore your data, run queries, and manage databases without writing shell commands.

### 1.1 Connecting Compass to a MongoDB Deployment
1. Download MongoDB Compass from: https://www.mongodb.com/try/download/compass
2. Install and open Compass.
3. On the connection screen, enter your **connection string**:
   ```
   mongodb://localhost:27017
   ```
   (For MongoDB Atlas, copy the connection string from your cluster's "Connect" button — it looks like `mongodb+srv://username:password@cluster.mongodb.net`.)
4. Click **Connect**.
5. You'll now see a list of all databases on that server in the left sidebar.

### 1.2 Performing CRUD Operations in Compass

**Create a Database/Collection:**
- Click **"Create Database"**, enter a database name and initial collection name, then click **Create**.

**Insert a Document:**
- Open a collection → click **"Add Data"** → **"Insert Document"** → enter your JSON document → click **Insert**.

**Update Documents:**
- Find the document in the collection view → click the **pencil (edit) icon** → modify the fields → click **Update**.

**Select (Query) Documents:**
- Use the **filter bar** at the top of the collection view to type a query, e.g.:
  ```json
  { "course": "CS" }
  ```
- Click **Find** to see matching documents.

**Drop a Collection/Database:**
- Click the **trash/delete icon** next to the collection or database name, then confirm the deletion.

> 💡 Compass also provides a visual **Aggregation Pipeline Builder**, **Schema Analyzer**, and **Performance/Explain Plan** viewer — very useful for beginners learning MongoDB visually.

---

## 2. MongoDB BI Connector

The **BI Connector** allows Business Intelligence (BI) tools (like Tableau, Power BI, or Excel) to query MongoDB data using standard **SQL**, even though MongoDB itself uses a different query language.

### 2.1 Installing the MongoDB BI Connector
1. Download it from: https://www.mongodb.com/products/tools/bi-connector
2. Choose the correct package for your OS and install it.
3. Verify installation by checking the version:
   ```bash
   mongosqld --version
   ```

### 2.2 Integrating the BI Connector with a MongoDB Deployment
The BI Connector works using two main components:
- **`mongosqld`** — the daemon that translates SQL queries into MongoDB queries.
- **`mongodrdl`** — a tool that generates a "relational schema" (a mapping of your MongoDB collections into SQL-style tables) from your MongoDB data.

**Steps to integrate:**
```bash
# Step 1: Generate a relational schema (DRDL file) from your MongoDB data
mongodrdl --host localhost --port 27017 --db schoolDB -o schema.drdl

# Step 2: Start the BI Connector daemon using the generated schema
mongosqld --mongo-uri mongodb://localhost:27017 --schema schema.drdl --addr localhost:3307
```
Once running, `mongosqld` listens for SQL queries on the specified address (e.g., `localhost:3307`) and translates them into MongoDB operations.

---

## 3. Connecting MongoDB to BI Tools Using ODBC Drivers

**ODBC (Open Database Connectivity)** is a standard interface that lets applications (like Excel, Power BI, Tableau) communicate with databases using SQL — even databases that aren't natively SQL-based, like MongoDB.

### 3.1 Steps to Connect via ODBC
1. Download and install the **MongoDB ODBC Driver** from the official MongoDB site.
2. Make sure the **BI Connector** (`mongosqld`) is running, since ODBC connects through it.
3. Open your OS's **ODBC Data Source Administrator**:
   - Windows: Search "ODBC Data Sources" in the Start menu.
   - Mac: Use the `iODBC Administrator` tool.
4. Click **Add** a new **Data Source Name (DSN)**.
5. Select the **MongoDB ODBC Driver** from the list.
6. Enter the connection details:
   - **Server:** `localhost` (or your BI Connector's address)
   - **Port:** `3307` (or whichever port `mongosqld` is listening on)
   - **Database:** the schema name you generated with `mongodrdl`
7. Test the connection and click **Save**.
8. Open your BI tool (e.g., Power BI or Excel) → choose **"Connect via ODBC"** → select the DSN you just created.
9. You can now query MongoDB data using familiar SQL-style tools and dashboards.

---

## 📝 Assignment: Session 10

1. Install MongoDB Compass and connect it to your local MongoDB server. Take a screenshot of the connected database list.
2. Using Compass, create a new database and collection, then insert 3 documents through the Compass UI (not the shell).
3. Use the Compass filter bar to query for documents matching a specific condition, and take a screenshot of the results.
4. Explain, in your own words, what problem the **BI Connector** solves (hint: think about the difference between MongoDB's query language and SQL).
5. Describe the roles of `mongodrdl` and `mongosqld` in the BI Connector workflow.
6. **Short answer:** Why would a company that already uses MongoDB still want to connect it to SQL-based BI tools like Power BI or Tableau?

