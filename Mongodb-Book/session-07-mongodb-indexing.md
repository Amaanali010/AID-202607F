# Session 7: MongoDB Indexing

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain indexes
- Describe the types of indexes
- List the advantages of using indexes
- Explain how to create and drop indexes

---

## 1. What is an Index?

An **index** is a special data structure that stores a small portion of the collection's data in an easy-to-search form, allowing MongoDB to find documents **without scanning every single document** in the collection.

**Analogy:** Think of the index at the back of a textbook. Instead of flipping through every page to find "Photosynthesis," you check the index, which tells you exactly which page to go to. Without an index, MongoDB has to check every document one by one — this is called a **collection scan**.

---

## 2. Types of Indexes

### 2.1 Single Field Index
Indexes a single field.
```javascript
db.students.createIndex({ name: 1 })   // 1 = ascending, -1 = descending
```

### 2.2 Compound Index
Indexes multiple fields together — useful for queries that filter on more than one field.
```javascript
db.students.createIndex({ course: 1, age: -1 })
```

### 2.3 Multikey Index
Automatically created when you index a field that contains an **array**.
```javascript
db.students.createIndex({ skills: 1 })
```

### 2.4 Text Index
Used for searching text content (like a search engine).
```javascript
db.articles.createIndex({ content: "text" })
db.articles.find({ $text: { $search: "mongodb tutorial" } })
```

### 2.5 Geospatial Index
Used for location-based queries (finding places near a point).
```javascript
db.places.createIndex({ location: "2dsphere" })
```

### 2.6 Unique Index
Ensures no two documents can have the same value for a field.
```javascript
db.students.createIndex({ email: 1 }, { unique: true })
```

### 2.7 Default `_id` Index
MongoDB **automatically** creates a unique index on the `_id` field for every collection — you don't need to create this one yourself.

---

## 3. Advantages of Using Indexes

- **Faster queries** — MongoDB doesn't need to scan the entire collection.
- **Efficient sorting** — indexed fields can be sorted quickly.
- **Enforces uniqueness** — unique indexes prevent duplicate values.
- **Supports specialized searches** — text search, geospatial queries.
- **Reduces resource usage** — less CPU and disk I/O for repeated queries.

### ⚠️ Trade-offs to Remember
- Indexes take up **extra storage space**.
- They can **slow down write operations** (insert/update/delete) since indexes must be updated too.
- Too many indexes can hurt performance — only index fields you frequently query.

---

## 4. Creating and Dropping Indexes

### 4.1 Creating an Index
```javascript
db.students.createIndex({ name: 1 })
```

### 4.2 Viewing All Indexes on a Collection
```javascript
db.students.getIndexes()
```

### 4.3 Dropping a Specific Index
```javascript
db.students.dropIndex({ name: 1 })
```

### 4.4 Dropping All Indexes (except `_id`)
```javascript
db.students.dropIndexes()
```

### 4.5 Checking If a Query Uses an Index
Use `explain()` to see whether MongoDB used an index or performed a full collection scan.
```javascript
db.students.find({ name: "Alex" }).explain("executionStats")
```
Look for `"stage": "IXSCAN"` (index scan — good) vs `"stage": "COLLSCAN"` (collection scan — slow for large data).

---

## 📝 Assignment: Session 7

1. Explain, in your own words, what an index is and why it improves query performance. Use the textbook-index analogy or one of your own.
2. Create a `students` collection, insert at least 10 documents, and create a **single field index** on the `name` field.
3. Create a **compound index** on `course` and `age`. Write a query that would benefit from this index.
4. Create a **unique index** on an `email` field. Try inserting two documents with the same email and describe what happens.
5. Use `.explain("executionStats")` on a query before and after creating an index on the queried field. Compare the `stage` value (`COLLSCAN` vs `IXSCAN`) in both cases.
6. **Short answer:** Why shouldn't you create an index on every single field in a collection?

