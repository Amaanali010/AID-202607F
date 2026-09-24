# Class 7: Projection — Selecting Specific Fields

## 🎯 Learning Objectives
- Control which fields are returned in query results using projection
- Understand include vs exclude projection rules

---

## 1. Why Projection Matters
By default, `find()` returns **all fields** of matching documents. For large datasets, returning unnecessary fields wastes bandwidth and memory. **Projection** lets you choose exactly which fields to return.

## 2. Syntax
```javascript
db.collection.find(query, projection);
```

## 3. Including Specific Fields
Use `1` to include a field:
```javascript
db.students.find({}, { name: 1, city: 1 });
```
**Result:** Each document shows only `_id`, `name`, and `city` (the `_id` field is included by default).

## 4. Excluding the `_id` Field
```javascript
db.students.find({}, { name: 1, city: 1, _id: 0 });
```

## 5. Excluding Specific Fields
Use `0` to exclude a field (show everything else):
```javascript
db.students.find({}, { age: 0 });
```
This returns all fields **except** `age`.

⚠️ **Rule:** You cannot mix `1`s and `0`s in the same projection (except for `_id`). Either you specify fields to include, or fields to exclude — not both.

### ❌ Invalid:
```javascript
db.students.find({}, { name: 1, age: 0 });  // ERROR
```

### ✅ Valid:
```javascript
db.students.find({}, { name: 1, _id: 0 });  // OK - _id is an exception
```

## 6. Combining Query + Projection
```javascript
db.students.find(
  { city: "Lahore" },
  { name: 1, age: 1, _id: 0 }
);
```
This finds students from Lahore and only shows their `name` and `age`.

---

## 📝 Homework / Tasks (Class 7)
1. Write a query that returns only `name` and `city` for all students.
2. Write a query that returns all fields except `enrollDate`.
3. Write a query that returns `name` and `age` (without `_id`) for students older than 20.
4. Explain why projection is especially useful when working with large datasets (millions of documents with many fields).
5. Challenge: Try mixing `1` and `0` (excluding `_id`) in a single projection and note the error message you get.

---
⬅️ **Previous:** [Class 6](06-query-operators.md)  |  ➡️ **Next:** [Class 8 - sort(), limit(), skip()](08-sort-limit-skip.md)
