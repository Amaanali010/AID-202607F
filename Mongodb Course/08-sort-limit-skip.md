# Class 8: Sorting, Limiting, Skipping — sort(), limit(), skip() (Critical for Large Datasets)

## 🎯 Learning Objectives
- Sort query results
- Limit the number of returned documents
- Skip documents (basic pagination)
- Understand why these matter for large datasets

---

## 1. sort() — Sorting Results
```javascript
db.collection.find().sort({ field: 1 or -1 });
```
- `1` = ascending
- `-1` = descending

### Example:
```javascript
db.students.find().sort({ age: 1 });   // youngest first
db.students.find().sort({ age: -1 });  // oldest first
```

### Sorting by multiple fields:
```javascript
db.students.find().sort({ city: 1, age: -1 });
```

## 2. limit() — Restrict Number of Results
```javascript
db.students.find().limit(5);
```
Returns only the first 5 matching documents.

### Combined with sort — Top N pattern:
```javascript
// Get the 3 oldest students
db.students.find().sort({ age: -1 }).limit(3);
```

## 3. skip() — Skip a Number of Documents
```javascript
db.students.find().skip(5);
```
Skips the first 5 documents and returns the rest.

## 4. ⚠️ Why This Matters for Large Datasets
If you have **1 million documents** and only display 20 per page:
```javascript
db.students.find().sort({ _id: 1 }).skip(0).limit(20);   // Page 1
db.students.find().sort({ _id: 1 }).skip(20).limit(20);  // Page 2
db.students.find().sort({ _id: 1 }).skip(40).limit(20);  // Page 3
```

**Problem:** `skip()` gets SLOWER as the number grows, because MongoDB still has to scan through and discard all skipped documents. For page 50,000 this can be very slow.

**Better approach for large datasets:** cursor-based (range) pagination — we'll cover this properly in Class 18.

## 5. Combining sort + limit + skip
```javascript
db.students.find({ city: "Lahore" })
  .sort({ age: -1 })
  .skip(2)
  .limit(3);
```
Order of methods in code doesn't matter (Mongo applies sort → skip → limit internally), but writing them in this order is a good habit.

---

## 📝 Homework / Tasks (Class 8)
1. Write a query to sort all students by age (youngest first).
2. Write a query to get the 3 oldest students using sort + limit.
3. Write a query that skips the first 2 students and returns the next 3 (basic pagination).
4. Explain in your own words why `skip()` becomes a performance problem on very large collections.
5. Challenge: Write queries simulating "Page 1", "Page 2", and "Page 3" of a student list, 5 students per page.

---
⬅️ **Previous:** [Class 7](07-projection.md)  |  ➡️ **Next:** [Class 9 - updateOne(), updateMany(), $set, $inc](09-update-documents.md)
