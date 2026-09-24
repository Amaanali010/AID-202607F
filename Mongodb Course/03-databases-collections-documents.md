# Class 3: Databases, Collections, Documents — The JSON/BSON Structure

## 🎯 Learning Objectives
- Understand the hierarchy: Database → Collection → Document → Field
- Understand JSON vs BSON
- Create your first database and collection

---

## 1. The MongoDB Hierarchy
```
MongoDB Server
 └── Database (e.g., schoolDB)
      └── Collection (e.g., students)
           └── Document (e.g., one student's record)
                └── Field (e.g., name, age, city)
```

## 2. What is a Document?
A document is the basic unit of data in MongoDB — similar to a row in SQL, but stored as **JSON-like** key-value pairs.

```json
{
  "_id": ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  "name": "Aisha",
  "age": 20,
  "city": "Lahore",
  "isActive": true,
  "enrollDate": ISODate("2026-01-10")
}
```

## 3. JSON vs BSON
- **JSON** (JavaScript Object Notation) = the human-readable text format you write/see.
- **BSON** (Binary JSON) = the binary format MongoDB actually stores data in internally — supports extra types like `ObjectId`, `Date`, `Binary`, etc.

You write JSON-like syntax; MongoDB stores it as BSON automatically.

## 4. The `_id` Field
Every document has a unique `_id` field — like a Primary Key in SQL.
- If you don't provide one, MongoDB auto-generates an `ObjectId`.
- `ObjectId` is a special 12-byte identifier, unique across your collection.

## 5. Creating a Database and Collection
```javascript
// Switch to (creates if not exists) a database
use schoolDB

// Create a collection explicitly (optional - auto-created on first insert)
db.createCollection("students")

// Show collections
show collections
```

⚠️ **Important:** A database/collection isn't actually saved to disk until you insert at least one document into it.

## 6. Schema Flexibility (Key MongoDB Feature)
Unlike SQL tables, documents in the same collection don't need identical fields:
```json
{ "name": "Aisha", "age": 20 }
{ "name": "Bilal", "age": 22, "city": "Karachi" }
{ "name": "Sara", "hobbies": ["reading", "chess"] }
```
All three can live in the same `students` collection. This is powerful, but requires discipline in real projects (we'll discuss schema design later).

---

## 📝 Homework / Tasks (Class 3)
1. Create a database called `schoolDB` (if not already created).
2. Create a collection called `students` inside it.
3. Write (on paper or in a text file) 3 sample student documents with at least 4 fields each, where one document has an extra field the others don't have.
4. Explain in your own words the difference between JSON and BSON.
5. Challenge: What do you think happens if you try to switch to a database using `use` but never insert any data? Try it, then run `show dbs` and observe.

---
⬅️ **Previous:** [Class 2](02-installing-mongodb.md)  |  ➡️ **Next:** [Class 4 - insertOne(), insertMany()](04-insert-documents.md)
