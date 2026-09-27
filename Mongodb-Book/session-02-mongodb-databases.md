# Session 2: MongoDB Databases

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain the installation of MongoDB Database Tools and set the environment variable for them
- Explain the method to load a sample dataset into MongoDB server
- Describe different datatypes in MongoDB
- Explain the methods to create a database and collection
- Describe the ways to insert, query, update, and delete documents, collections, and databases

---

## 1. MongoDB Database Tools

**MongoDB Database Tools** are a set of command-line utilities used for importing, exporting, and managing data in MongoDB (for example, `mongoimport`, `mongoexport`, `mongodump`, `mongorestore`).

### 1.1 Installing MongoDB Database Tools
1. Download the tools from: https://www.mongodb.com/try/download/database-tools
2. Choose your operating system and download the ZIP/package.
3. Extract the files to a folder, e.g., `C:\mongodb-database-tools\bin` (Windows) or `/usr/local/mongodb-database-tools/bin` (Mac/Linux).

### 1.2 Setting the Environment Variable
So you can run these tools from **any** terminal location, add their folder to your system's PATH.

**Windows:**
1. Search "Environment Variables" in the Start menu.
2. Click **Edit the system environment variables** → **Environment Variables**.
3. Under **System variables**, select `Path` → **Edit** → **New**.
4. Paste the path to the `bin` folder (e.g., `C:\mongodb-database-tools\bin`).
5. Click OK and restart your terminal.

**Mac/Linux:**
Add this line to your `~/.bashrc` or `~/.zshrc` file:
```bash
export PATH=$PATH:/usr/local/mongodb-database-tools/bin
```
Then run `source ~/.bashrc` (or `~/.zshrc`) to apply the change.

**Verify installation:**
```bash
mongoimport --version
```
If it prints a version number, the setup worked.

---

## 2. Loading a Sample Dataset

MongoDB provides free sample datasets (like `sample_mflix`, a movie database) useful for practice.

**Steps:**
1. If using **MongoDB Atlas** (cloud), go to your cluster → click **"..."** → **Load Sample Dataset**.
2. If working **locally**, download a sample dataset (JSON/CSV files) and use `mongoimport`:
   ```bash
   mongoimport --db sample_db --collection movies --file movies.json --jsonArray
   ```
   - `--db` → target database name
   - `--collection` → target collection name
   - `--file` → path to your data file
   - `--jsonArray` → tells MongoDB the file contains an array of JSON documents

---

## 3. Datatypes in MongoDB

Since MongoDB stores documents in **BSON** format, it supports many datatypes:

| Datatype | Description | Example |
|----------|-------------|---------|
| String | Text data | `"name": "Alex"` |
| Integer | Whole numbers (32-bit or 64-bit) | `"age": 21` |
| Double | Decimal numbers | `"price": 99.99` |
| Boolean | True/False values | `"isActive": true` |
| Array | List of values | `"tags": ["a", "b"]` |
| Object/Embedded Document | Nested document | `"address": {"city": "Pune"}` |
| Date | Date and time | `"createdAt": ISODate("2024-01-01")` |
| ObjectId | Unique identifier for documents | `"_id": ObjectId("64f...")` |
| Null | Empty/no value | `"middleName": null` |

---

## 4. Creating a Database and Collection

### 4.1 Creating/Switching to a Database
```javascript
use schoolDB
```
> Note: MongoDB only actually **creates** the database once you insert data into it.

### 4.2 Creating a Collection
```javascript
db.createCollection("students")
```
Or, a collection is automatically created the first time you insert a document into it.

---

## 5. CRUD Operations: Insert, Query, Update, Delete

**CRUD** stands for **C**reate, **R**ead, **U**pdate, **D**elete — the four basic operations for managing data.

### 5.1 Insert Documents
```javascript
// Insert one document
db.students.insertOne({ name: "Alex", age: 21, course: "CS" })

// Insert multiple documents
db.students.insertMany([
  { name: "Priya", age: 22, course: "IT" },
  { name: "Sam", age: 20, course: "CS" }
])
```

### 5.2 Query (Read) Documents
```javascript
// Find all documents
db.students.find()

// Find with a condition
db.students.find({ course: "CS" })

// Find one document
db.students.findOne({ name: "Alex" })
```

### 5.3 Update Documents
```javascript
// Update one document
db.students.updateOne(
  { name: "Alex" },
  { $set: { age: 22 } }
)

// Update multiple documents
db.students.updateMany(
  { course: "CS" },
  { $set: { department: "Computer Science" } }
)
```

### 5.4 Delete Documents
```javascript
// Delete one document
db.students.deleteOne({ name: "Sam" })

// Delete multiple documents
db.students.deleteMany({ course: "IT" })
```

### 5.5 Deleting a Collection or Database
```javascript
// Drop a collection
db.students.drop()

// Drop the current database
db.dropDatabase()
```

---

## 📝 Assignment: Session 2

1. Install MongoDB Database Tools and set the environment variable. Run `mongoimport --version` and paste the output.
2. Download any sample dataset (or use MongoDB Atlas's sample dataset) and load it into your MongoDB server. Show the command you used.
3. Create a database called `libraryDB` and a collection called `books`.
4. Insert **5 book documents** into the `books` collection, each with fields: `title` (String), `author` (String), `price` (Double), `available` (Boolean), and `tags` (Array).
5. Write queries to:
   - Find all books priced above 500.
   - Update one book's `available` status to `false`.
   - Delete a book from the collection.
6. **Short answer:** Why does MongoDB not require you to define a schema before inserting data?

