# Class 14: Indexes — Why They Matter for Large Datasets, Creating Indexes

## 🎯 Learning Objectives
- Understand what an index is and why it speeds up queries
- Create single-field and compound indexes
- View existing indexes

---

## 1. What is an Index?
An **index** is a special data structure that stores a small, sorted portion of the collection's data, making it much faster to find documents — similar to an index at the back of a book instead of reading every page.

## 2. Without an Index (Collection Scan)
By default, MongoDB has to check **every document** in a collection to satisfy a query — called a **COLLSCAN**. For a collection with millions of documents, this is slow.

## 3. Creating an Index
```javascript
db.students.createIndex({ city: 1 });
```
- `1` = ascending index
- `-1` = descending index

Now queries filtering or sorting by `city` become much faster.

## 4. Viewing Existing Indexes
```javascript
db.students.getIndexes();
```
Every collection automatically has a default index on `_id`.

## 5. Compound Indexes (Multiple Fields)
```javascript
db.students.createIndex({ city: 1, age: -1 });
```
This is useful when queries filter/sort by **both** fields together. Order of fields in a compound index matters — it should match your most common query patterns.

## 6. Unique Indexes
```javascript
db.students.createIndex({ email: 1 }, { unique: true });
```
Prevents duplicate values in the `email` field, similar to a `UNIQUE` constraint in SQL.

## 7. Checking Query Performance with explain()
```javascript
db.students.find({ city: "Lahore" }).explain("executionStats");
```
Look for:
- `"stage": "COLLSCAN"` → no index used (slow, scans everything)
- `"stage": "IXSCAN"` → index used (fast)

We'll dig deeper into `explain()` next class.

## 8. Dropping an Index
```javascript
db.students.dropIndex({ city: 1 });
```

## 9. ⚠️ Index Tradeoffs
- Indexes make **reads faster** but make **writes slightly slower** (since the index must be updated on every insert/update/delete).
- Don't over-index — only create indexes for fields you frequently query, sort, or filter by, especially on large collections.

---

## 📝 Homework / Tasks (Class 14)
1. Create an index on the `city` field of your `students` collection.
2. Run `getIndexes()` and list all indexes currently on the collection.
3. Create a compound index on `city` and `age`.
4. Create a unique index on an `email` field (add this field to your documents first).
5. Challenge: Run `explain("executionStats")` on a query before and after creating an index on the filtered field, and compare the `nReturned` and `totalDocsExamined` values.

---
⬅️ **Previous:** [Class 13](13-arrays.md)  |  ➡️ **Next:** [Class 15 - explain() and Query Performance](15-explain-performance.md)
