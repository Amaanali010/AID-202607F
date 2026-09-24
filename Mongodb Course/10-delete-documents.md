# Class 10: Deleting Documents — deleteOne(), deleteMany()

## 🎯 Learning Objectives
- Delete a single document using `deleteOne()`
- Delete multiple documents using `deleteMany()`
- Understand the danger of deleting without a filter

---

## 1. deleteOne() — Delete the First Matching Document
```javascript
db.collection.deleteOne({ filter });
```

### Example:
```javascript
db.students.deleteOne({ name: "Omar" });
```
**Result:**
```json
{ acknowledged: true, deletedCount: 1 }
```

## 2. deleteMany() — Delete All Matching Documents
```javascript
db.students.deleteMany({ city: "Multan" });
```
This deletes **every** student document where city is "Multan".

## 3. ⚠️ DANGER — Deleting Everything
```javascript
db.students.deleteMany({});
```
An empty filter `{}` matches **every document** — this deletes the entire collection's contents (but keeps the empty collection itself).

## 4. Golden Rule: Preview Before You Delete
Always run a `find()` with the same filter first:
```javascript
// Step 1: Preview what will be deleted
db.students.find({ city: "Multan" });

// Step 2: Delete only after confirming
db.students.deleteMany({ city: "Multan" });
```

## 5. Dropping an Entire Collection
```javascript
db.students.drop();
```
This removes the **collection itself**, not just its documents — similar to `DROP TABLE` in SQL.

## 6. Comparison Table

| Operation | Removes | Keeps Collection? |
|---|---|---|
| `deleteOne()` | One matching document | ✅ Yes |
| `deleteMany()` | All matching documents | ✅ Yes |
| `deleteMany({})` | All documents | ✅ Yes (empty collection) |
| `drop()` | Entire collection + its documents | ❌ No |

---

## 📝 Homework / Tasks (Class 10)
1. Write a query to delete one specific student using `deleteOne()`.
2. Write a query to delete all students from a specific city using `deleteMany()`.
3. Write the "preview first" pattern: a `find()` followed by a `deleteMany()` using the same filter.
4. Explain, in your own words, the risk of running `deleteMany({})`.
5. Challenge: Create a temporary test collection, insert a few documents, then practice `drop()` on it (NOT your main `students` collection).

---
⬅️ **Previous:** [Class 9](09-update-documents.md)  |  ➡️ **Next:** [Class 11 - Data Types in MongoDB](11-data-types.md)
