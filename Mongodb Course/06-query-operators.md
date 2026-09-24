# Class 6: Query Operators ($eq, $gt, $lt, $in, $and, $or)

## 🎯 Learning Objectives
- Use comparison operators to filter documents
- Combine multiple conditions using logical operators

---

## 1. Comparison Operators

| Operator | Meaning | Example |
|---|---|---|
| `$eq` | Equal to | `{ age: { $eq: 20 } }` |
| `$ne` | Not equal to | `{ age: { $ne: 20 } }` |
| `$gt` | Greater than | `{ age: { $gt: 20 } }` |
| `$gte` | Greater than or equal | `{ age: { $gte: 20 } }` |
| `$lt` | Less than | `{ age: { $lt: 20 } }` |
| `$lte` | Less than or equal | `{ age: { $lte: 20 } }` |

### Example:
```javascript
db.students.find({ age: { $gt: 20 } });
```
(Note: `{ age: 20 }` is shorthand for `{ age: { $eq: 20 } }`)

## 2. $in and $nin — Match Any/None in a List
```javascript
db.students.find({ city: { $in: ["Lahore", "Karachi"] } });

db.students.find({ city: { $nin: ["Lahore", "Karachi"] } });
```

## 3. $and — All Conditions Must Be True
```javascript
db.students.find({
  $and: [
    { age: { $gt: 19 } },
    { city: "Lahore" }
  ]
});
```
**Shortcut:** In MongoDB, listing multiple fields in one query object is an implicit AND:
```javascript
db.students.find({ age: { $gt: 19 }, city: "Lahore" });
```

## 4. $or — At Least One Condition Must Be True
```javascript
db.students.find({
  $or: [
    { city: "Lahore" },
    { city: "Karachi" }
  ]
});
```

## 5. Combining $and and $or
```javascript
db.students.find({
  $and: [
    { age: { $gte: 19 } },
    { $or: [ { city: "Lahore" }, { city: "Multan" } ] }
  ]
});
```

## 6. $not — Negates a Condition
```javascript
db.students.find({ age: { $not: { $gt: 20 } } });
```

---

## 📝 Homework / Tasks (Class 6)
1. Write a query to find students older than 20 using `$gt`.
2. Write a query to find students from 3 specific cities using `$in`.
3. Write a query using `$and` to find students aged between 19 and 22 (hint: combine `$gte` and `$lte`).
4. Write a query using `$or` to find students who are either from Lahore OR younger than 20.
5. Challenge: Combine `$and` + `$or` in a single query with at least 3 conditions total.

---
⬅️ **Previous:** [Class 5](05-find-basics.md)  |  ➡️ **Next:** [Class 7 - Projection](07-projection.md)
