# Class 1: Intro to NoSQL vs SQL, What is MongoDB, Use Cases for Large Datasets

## 🎯 Learning Objectives
- Understand the difference between SQL (relational) and NoSQL databases
- Understand what MongoDB is and why it's used
- Learn when MongoDB is a good choice for large datasets

---

## 1. SQL vs NoSQL

| | SQL (Relational) | NoSQL (e.g., MongoDB) |
|---|---|---|
| Structure | Tables, rows, columns (fixed schema) | Collections, documents (flexible schema) |
| Data format | Rows with fixed columns | JSON-like documents (BSON) |
| Relationships | Joins between tables | Embedding or referencing |
| Scaling | Usually scales vertically (bigger server) | Designed to scale horizontally (more servers) |
| Best for | Structured data, complex transactions | Large, fast-changing, or unstructured data |

## 2. What is MongoDB?
**MongoDB** is a **document-oriented NoSQL database**. Instead of tables and rows, it stores data as **documents** inside **collections**.

A document looks like this (JSON-style):
```json
{
  "_id": 1,
  "name": "Aisha",
  "age": 20,
  "city": "Lahore",
  "skills": ["SQL", "Python"]
}
```

## 3. Why MongoDB for Large Datasets?
- **Flexible schema** — you don't need to predefine every field; documents in the same collection can even differ slightly.
- **Horizontal scaling (sharding)** — large datasets can be split across multiple servers.
- **Fast reads/writes** — great for logging, analytics, real-time apps, IoT data.
- **Native support for nested/array data** — no need for complex joins for many use cases.

## 4. Real-World Use Cases
- E-commerce product catalogs (millions of products, varying attributes)
- User activity logs / analytics events
- Content management systems
- IoT sensor data
- Social media feeds

## 5. Key MongoDB Terminology

| MongoDB Term | Roughly Equivalent SQL Term |
|---|---|
| Database | Database |
| Collection | Table |
| Document | Row |
| Field | Column |
| `_id` | Primary Key |

---

## 📝 Homework / Tasks (Class 1)
1. In your own words, write 3 differences between SQL and MongoDB.
2. List 3 real-world applications where you think MongoDB would be a better fit than SQL, and explain why.
3. Research: Name 2 companies that use MongoDB in production.
4. Write a sample JSON document (by hand) representing a "Product" with at least 5 fields, including one array field.

---
⬅️ **Previous:** —  |  ➡️ **Next:** [Class 2 - Installing MongoDB & Compass/mongosh](02-installing-mongodb.md)
