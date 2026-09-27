# Session 12: MongoDB Database Connectivity with Python

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Describe how to connect Python with MongoDB
- Explain how to install the PyMongo Driver
- Describe how to create a database and collection in MongoDB using Python
- Describe the ways to query, sort, update, and delete documents in MongoDB using Python

---

## 1. Connecting Python with MongoDB

To interact with MongoDB from a Python program, you need a **driver** — a library that translates Python code into commands MongoDB understands. For MongoDB, this driver is called **PyMongo**.

```
Python Application  ──▶  PyMongo Driver  ──▶  MongoDB Server
```

---

## 2. Installing the PyMongo Driver

### 2.1 Install via pip
Open your terminal and run:
```bash
pip install pymongo
```

### 2.2 Verify Installation
```python
import pymongo
print(pymongo.version)
```
If this prints a version number without errors, PyMongo is installed correctly.

### 2.3 Connecting to MongoDB
```python
from pymongo import MongoClient

# Connect to a local MongoDB server
client = MongoClient("mongodb://localhost:27017/")

# Connect to a MongoDB Atlas cluster
# client = MongoClient("mongodb+srv://myUser:<password>@cluster0.mongodb.net/")

print(client.list_database_names())  # Lists all databases on the server
```

---

## 3. Creating a Database and Collection Using Python

```python
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")

# "Create" a database (it's only actually created once data is inserted)
db = client["schoolDB"]

# "Create" a collection
students = db["students"]
```

> 💡 Just like in the shell, MongoDB doesn't physically create the database or collection until you insert at least one document into it.

---

## 4. Inserting Documents Using Python

```python
# Insert a single document
student = { "name": "Alex", "age": 21, "course": "CS" }
result = students.insert_one(student)
print("Inserted ID:", result.inserted_id)

# Insert multiple documents
student_list = [
    { "name": "Priya", "age": 22, "course": "IT" },
    { "name": "Sam", "age": 20, "course": "CS" }
]
result = students.insert_many(student_list)
print("Inserted IDs:", result.inserted_ids)
```

---

## 5. Querying Documents Using Python

```python
# Find one document
student = students.find_one({ "name": "Alex" })
print(student)

# Find all documents
for student in students.find():
    print(student)

# Find with a condition
for student in students.find({ "course": "CS" }):
    print(student)

# Find with comparison operators
for student in students.find({ "age": { "$gt": 20 } }):
    print(student)
```

---

## 6. Sorting Documents Using Python

```python
# Sort by age in ascending order (1) or descending order (-1)
for student in students.find().sort("age", 1):
    print(student)

# Sort by multiple fields
for student in students.find().sort([("course", 1), ("age", -1)]):
    print(student)
```

---

## 7. Updating Documents Using Python

```python
# Update one document
students.update_one(
    { "name": "Alex" },
    { "$set": { "age": 22 } }
)

# Update multiple documents
students.update_many(
    { "course": "CS" },
    { "$set": { "department": "Computer Science" } }
)
```

---

## 8. Deleting Documents Using Python

```python
# Delete one document
students.delete_one({ "name": "Sam" })

# Delete multiple documents
students.delete_many({ "course": "IT" })

# Delete all documents in a collection (empties it, but keeps the collection)
students.delete_many({})

# Drop the entire collection
students.drop()
```

---

## 9. Full Example Program

```python
from pymongo import MongoClient

# Step 1: Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["schoolDB"]
students = db["students"]

# Step 2: Insert data
students.insert_many([
    { "name": "Alex", "age": 21, "course": "CS" },
    { "name": "Priya", "age": 22, "course": "IT" }
])

# Step 3: Query data
print("All students:")
for s in students.find():
    print(s)

# Step 4: Update data
students.update_one({ "name": "Alex" }, { "$set": { "age": 23 } })

# Step 5: Delete data
students.delete_one({ "name": "Priya" })

# Step 6: Final check
print("Remaining students:")
for s in students.find():
    print(s)
```

---

## 📝 Assignment: Session 12

1. Install PyMongo and write a Python script that connects to your local MongoDB server and prints the list of all databases.
2. Using Python, create a database called `libraryDB` and a collection called `books`. Insert at least 5 book documents (fields: `title`, `author`, `price`, `available`).
3. Write a Python script to query and print all books priced above 300.
4. Write a Python script that sorts the books collection by `price` in descending order and prints the results.
5. Write a Python script that updates the `available` status of one book to `False`, then deletes a different book from the collection.
6. **Short answer:** Why do we need a driver like PyMongo instead of writing raw MongoDB shell commands directly inside a Python program?

