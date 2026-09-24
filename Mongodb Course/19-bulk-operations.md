# Class 19: Bulk Operations & Performance Tips for Large Collections (bulkWrite, Batch Inserts)

## 🎯 Learning Objectives
- Perform multiple different write operations efficiently using `bulkWrite()`
- Understand batch insert performance considerations
- Learn general performance tips for large collections

---

## 1. Why Bulk Operations Matter
Inserting/updating documents **one at a time** in a loop is slow due to network round-trips for every single operation. **Bulk operations** send many operations to the server in one request.

## 2. insertMany() Revisited — Batch Inserts
```javascript
db.students.insertMany([
  { name: "Ayesha", age: 20 },
  { name: "Hamza", age: 22 },
  // ... hundreds/thousands more
]);
```
For very large datasets (e.g., importing 100,000 records), it's best to insert in **batches** (e.g., 1,000 at a time) rather than one giant `insertMany()` call, to avoid memory/network issues.

```javascript
// Pseudocode idea: split a large array into chunks of 1000 and insert each chunk
```

## 3. bulkWrite() — Mixed Operations in One Call
`bulkWrite()` lets you combine inserts, updates, and deletes into a **single** request.

```javascript
db.students.bulkWrite([
  { insertOne: { document: { name: "Zara", age: 19 } } },
  { updateOne: {
      filter: { name: "Aisha" },
      update: { $set: { city: "Sialkot" } }
  }},
  { deleteOne: { filter: { name: "OldRecord" } } }
]);
```

## 4. Ordered vs Unordered Bulk Writes
```javascript
db.students.bulkWrite([...], { ordered: false });
```
- `ordered: true` (default) — stops at the first error
- `ordered: false` — continues processing remaining operations even if one fails (often faster for large batch jobs, since operations can run in parallel)

## 5. General Performance Tips for Large Collections
- **Use indexes** on frequently queried/sorted fields (Class 14)
- **Use projection** to avoid transferring unnecessary fields (Class 7)
- **Avoid `skip()` for deep pagination** — use cursor-based pagination instead (Class 18)
- **Batch your writes** instead of single-document loops
- **Use `$match` early** in aggregation pipelines to reduce the working dataset as soon as possible
- **Monitor with `explain()`** regularly as your dataset grows — an index that worked fine at 10k documents may need adjustment at 10 million

## 6. Real-World Import Example
```javascript
// Import a CSV/JSON dataset using mongoimport (command line tool, not mongosh)
mongoimport --db schoolDB --collection students --file students.json --jsonArray
```

---

## 📝 Homework / Tasks (Class 19)
1. Write a `bulkWrite()` call that inserts 2 new students, updates 1 existing student, and deletes 1 student — all in one call.
2. Explain the difference between `ordered: true` and `ordered: false` in your own words.
3. Research the `mongoimport` command-line tool — what file formats does it support?
4. List 3 performance tips from this class that you think would matter most for a collection with 5 million documents.
5. Challenge: Simulate inserting a large dataset by generating 1,000 sample student documents (using a script or loop) and inserting them in batches of 100 rather than all at once.

---
⬅️ **Previous:** [Class 18](18-pagination-strategies.md)  |  ➡️ **Next:** [Class 20 - Final Review & Mini Project](20-final-project.md)
