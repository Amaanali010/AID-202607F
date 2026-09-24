# Class 5: Basic CRUD — find(), findOne(), Query Basics

## 🎯 Learning Objectives
- Retrieve documents using `find()` and `findOne()`
- Filter documents using basic query conditions
- Understand cursors

---

## 1. find() — Retrieve Multiple Documents

### Get ALL documents:
```javascript
db.students.find();
```

### Pretty-print the results:
```javascript
db.students.find().pretty();
```

## 2. findOne() — Retrieve a Single Document
Returns only the **first matching document**.
```javascript
db.students.findOne({ name: "Aisha" });
```

## 3. Filtering with a Query Document
```javascript
db.collection.find({ field: value });
```

### Example: Find students from Lahore
```javascript
db.students.find({ city: "Lahore" });
```

### Example: Find a student by exact age
```javascript
db.students.find({ age: 20 });
```

## 4. Finding by `_id`
```javascript
db.students.find({ _id: 1 });
```
If using auto-generated ObjectIds:
```javascript
db.students.find({ _id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1") });
```

## 5. Understanding Cursors
`find()` technically returns a **cursor** (a pointer to the result set), not the data all at once — this matters a lot for large datasets, since MongoDB doesn't load everything into memory immediately. In mongosh, it auto-iterates and prints the first 20 results.

```javascript
// Manually iterate a cursor
let cursor = db.students.find();
cursor.forEach(doc => printjson(doc));
```

## 6. Counting Documents
```javascript
db.students.countDocuments({ city: "Lahore" });
```

## 7. Checking if Any Document Exists
```javascript
db.students.findOne({ city: "Multan" }) !== null;
```

---

## 📝 Homework / Tasks (Class 5)
1. Write a query to find all students from a specific city.
2. Write a query to find one student by name using `findOne()`.
3. Write a query to find a student by their `_id`.
4. Write a query to count how many students are aged 20.
5. Challenge: Explain in your own words why `find()` returning a "cursor" (instead of loading everything at once) is helpful for large datasets.

---
⬅️ **Previous:** [Class 4](04-insert-documents.md)  |  ➡️ **Next:** [Class 6 - Query Operators](06-query-operators.md)
