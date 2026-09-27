# Session 1: Introduction to MongoDB

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain various types of databases
- Describe how data is stored in the MongoDB Server
- Explain the installation of MongoDB Server and MongoDB Shell

---

## 1. What is a Database?

A **database** is an organized collection of data that can be easily accessed, managed, and updated. Think of it like a digital filing cabinet — instead of paper folders, you store information electronically so it can be searched and updated quickly.

## 2. Types of Databases

### 2.1 Relational Databases (SQL)
- Store data in **tables** made up of rows and columns (like an Excel sheet).
- Each table has a fixed **schema** (structure) that every row must follow.
- Data across tables is connected using **relationships** (foreign keys).
- Examples: MySQL, PostgreSQL, Oracle, SQL Server.

**Analogy:** Imagine a school register where every student's row has the exact same columns: Name, Roll No, Class, Marks. You can't add a new column for just one student without changing the whole table.

### 2.2 Non-Relational Databases (NoSQL)
- Do **not** require a fixed schema.
- Store data in flexible formats like documents, key-value pairs, graphs, or wide columns.
- Designed to handle large volumes of unstructured or semi-structured data.
- Examples: MongoDB, Redis, Cassandra, Neo4j.

**Analogy:** Imagine a folder where each file (document) can have different information. One file might have "Name, Age, Hobby" and another might have "Name, Company, Salary" — no fixed structure required.

### 2.3 Common NoSQL Database Types
| Type | Description | Example |
|------|-------------|---------|
| Document Database | Stores data as JSON-like documents | **MongoDB** |
| Key-Value Store | Stores data as simple key-value pairs | Redis |
| Column-Family Store | Stores data in columns instead of rows | Cassandra |
| Graph Database | Stores data as nodes and relationships | Neo4j |

---

## 3. What is MongoDB?

**MongoDB** is a popular **document-oriented NoSQL database**. Instead of tables and rows, MongoDB stores data as **documents** inside **collections**.

- A **document** is a record, stored in a format called **BSON** (Binary JSON).
- A **collection** is a group of documents (similar to a "table" in SQL).
- A **database** is a container that holds one or more collections.

### Example of a MongoDB Document
```json
{
  "_id": "1",
  "name": "Alex Johnson",
  "age": 21,
  "course": "Computer Science",
  "skills": ["Python", "MongoDB", "JavaScript"]
}
```

Notice that:
- Data is stored as **key-value pairs**, similar to JSON.
- Fields like `skills` can hold an **array** of values.
- Every document automatically gets a unique `_id` field.

### How MongoDB Data is Organized
```
MongoDB Server
 └── Database (e.g., "school")
      └── Collection (e.g., "students")
           └── Documents (individual student records)
```

Unlike SQL tables, documents in the **same collection do not need identical fields**. For example, one student document might have a `"scholarship"` field while another doesn't — MongoDB allows this flexibility.

---

## 4. Installing MongoDB Server and MongoDB Shell

### 4.1 MongoDB Server (mongod)
The MongoDB Server (`mongod`) is the core program that stores and manages your data.

**Steps to install (Windows/Mac/Linux):**
1. Visit the official MongoDB download page: https://www.mongodb.com/try/download/community
2. Choose your operating system and download the installer.
3. Run the installer and follow the setup wizard (choose "Complete" setup type).
4. During installation, you can optionally install **MongoDB Compass** (a GUI tool).
5. After installation, start the server by running:
   ```
   mongod
   ```
   This starts the database server, usually listening on port `27017`.

### 4.2 MongoDB Shell (mongosh)
The **MongoDB Shell** (`mongosh`) is a command-line tool used to interact with your MongoDB server — you can create databases, insert data, and run queries from it.

**Steps to install:**
1. Download `mongosh` from: https://www.mongodb.com/try/download/shell
2. Install it following the setup instructions for your OS.
3. Open a terminal/command prompt and type:
   ```
   mongosh
   ```
4. If installed correctly, you'll see a prompt like:
   ```
   test>
   ```
   This means you're connected to your local MongoDB server and ready to run commands.

---

## 📝 Assignment: Session 1

1. In your own words, explain the difference between a relational database and a non-relational database. Give one real-world example of when you would use each.
2. List three types of NoSQL databases and describe one use case for each.
3. Draw (or describe in text) the hierarchy of how data is organized in MongoDB, from Server → Database → Collection → Document.
4. Install MongoDB Server and MongoDB Shell on your computer. Take a screenshot showing `mongosh` connected successfully, and note down the version number shown.
5. **Short answer:** Why do you think MongoDB is a good choice for applications where the data structure changes often?

