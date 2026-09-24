# MongoDB for Beginners — 20 Class Course (Managing Large Datasets)

A complete beginner-to-intermediate MongoDB course, structured as 20 classes, with a special focus on techniques for handling **large datasets** (indexing, aggregation, pagination, bulk operations).

## 📌 Before You Start: Set Up Your Sample Data

Every class uses the **same sample database** (`schoolDB`) so results you see on your screen match the lecture examples.

👉 **Run [`sample-data.js`](sample-data.js) in `mongosh` first** — it creates a `students` collection and a `courses` collection with sample documents, including:
- A student with a `null` age (`Nadia`)
- A student missing the `city` field entirely (`Kamran`)
- Two students not enrolled in any course (used for `$lookup` / referencing lessons)
- One course with zero enrolled students (`Computer Science`)
- Embedded `address` documents and `skills` arrays (used in the data types & array lessons)

### How to run it
```bash
mongosh < sample-data.js
```
or open `mongosh`, then paste the contents of `sample-data.js` directly.

### Data at a glance

**students** (10 documents)
| _id | name | age | city | skills | courseIds |
|---|---|---|---|---|---|
| 1 | Aisha | 20 | Lahore | SQL, Python | 101, 102 |
| 2 | Bilal | 22 | Karachi | JavaScript | 101 |
| 3 | Sara | 21 | Islamabad | MongoDB, Node.js | 102 |
| 4 | Omar | 19 | Lahore | SQL | 101 |
| 5 | Hina | 23 | Multan | Python, Docker | 103 |
| 6 | Zain | 24 | Peshawar | Java | 103 |
| 7 | Nadia | null | Quetta | (none) | (none) |
| 8 | Kamran | 20 | (missing) | SQL, MongoDB | (none) |
| 9 | Fatima | 22 | Karachi | Python, MongoDB, SQL | 102 |
| 10 | Ali | 21 | Islamabad | C++ | 101, 103 |

**courses** (4 documents — one with zero enrolled students)
| _id | courseName | instructor |
|---|---|---|
| 101 | Math | Mr. Khan |
| 102 | Science | Ms. Ali |
| 103 | English | Mr. Raza |
| 104 | Computer Science | Ms. Fatima |

Keep this same database open as you move through the classes — later lectures ($lookup, aggregation, pagination) build directly on it.

---

## 📚 Course Outline

| # | Class | File |
|---|-------|------|
| 1 | Intro to NoSQL vs SQL, What is MongoDB, Use Cases for Large Datasets | [01-intro-nosql-mongodb.md](01-intro-nosql-mongodb.md) |
| 2 | Installing MongoDB & Compass/mongosh, Connecting to a Server | [02-installing-mongodb.md](02-installing-mongodb.md) |
| 3 | Databases, Collections, Documents — JSON/BSON Structure | [03-databases-collections-documents.md](03-databases-collections-documents.md) |
| 4 | Basic CRUD: insertOne(), insertMany() | [04-insert-documents.md](04-insert-documents.md) |
| 5 | Basic CRUD: find(), findOne(), Query Basics | [05-find-basics.md](05-find-basics.md) |
| 6 | Query Operators ($eq, $gt, $lt, $in, $and, $or) | [06-query-operators.md](06-query-operators.md) |
| 7 | Projection — Selecting Specific Fields | [07-projection.md](07-projection.md) |
| 8 | Sorting, Limiting, Skipping (sort/limit/skip) | [08-sort-limit-skip.md](08-sort-limit-skip.md) |
| 9 | Updating Documents: updateOne(), updateMany(), $set, $inc | [09-update-documents.md](09-update-documents.md) |
| 10 | Deleting Documents: deleteOne(), deleteMany() | [10-delete-documents.md](10-delete-documents.md) |
| 11 | Data Types (ObjectId, Dates, Arrays, Embedded Docs) | [11-data-types.md](11-data-types.md) |
| 12 | Embedding vs Referencing (Schema Design Basics) | [12-embedding-vs-referencing.md](12-embedding-vs-referencing.md) |
| 13 | Working with Arrays ($push, $pull, $addToSet) | [13-arrays.md](13-arrays.md) |
| 14 | Indexes — Why They Matter for Large Datasets | [14-indexes.md](14-indexes.md) |
| 15 | explain() and Query Performance Basics | [15-explain-performance.md](15-explain-performance.md) |
| 16 | Aggregation Framework Intro: $match, $group | [16-aggregation-intro.md](16-aggregation-intro.md) |
| 17 | Aggregation Pipeline Continued: $project, $sort, $limit, $lookup | [17-aggregation-pipeline.md](17-aggregation-pipeline.md) |
| 18 | Pagination Strategies for Large Datasets | [18-pagination-strategies.md](18-pagination-strategies.md) |
| 19 | Bulk Operations & Performance Tips (bulkWrite, Batch Inserts) | [19-bulk-operations.md](19-bulk-operations.md) |
| 20 | Final Review & Mini Project | [20-final-project.md](20-final-project.md) |

## 🗂 Repo Structure
```
mongodb-course/
├── README.md
├── sample-data.js          ← run this first (in mongosh)
├── 01-intro-nosql-mongodb.md
├── 02-installing-mongodb.md
├── ...
└── 20-final-project.md
```

## 🖥 Requirements
- MongoDB Community Server (free)
- `mongosh` (Mongo Shell)
- MongoDB Compass (optional GUI)

## 🙌 How to Use This Course
1. Install MongoDB + mongosh + Compass (Class 2 covers this in detail).
2. Run `sample-data.js` once to set up your `schoolDB` database.
3. Go through each class file in order — read the theory, run the example commands in `mongosh`, then complete the homework tasks at the bottom of each file.
4. From Class 8 onward, pay close attention to the performance-focused lessons (indexes, aggregation, pagination, bulk ops) — these are the concepts that matter most once your collections grow large.
5. By Class 20, you'll combine everything into one mini project.
