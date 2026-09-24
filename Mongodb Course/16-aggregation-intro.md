# Class 16: Introduction to the Aggregation Framework ($match, $group)

## 🎯 Learning Objectives
- Understand what the Aggregation Framework is and why it's used
- Use `$match` to filter documents
- Use `$group` to summarize data (similar to SQL's GROUP BY)

---

## 1. What is Aggregation?
The **Aggregation Framework** processes documents through a series of steps called a **pipeline**, transforming data step-by-step — similar to SQL's `WHERE` + `GROUP BY` + `HAVING` combined, but more powerful and flexible.

## 2. Basic Pipeline Syntax
```javascript
db.collection.aggregate([
  { stage1 },
  { stage2 },
  { stage3 }
]);
```
Each stage takes the output of the previous stage as its input.

## 3. $match — Filter Documents (like WHERE)
```javascript
db.students.aggregate([
  { $match: { city: "Lahore" } }
]);
```
This is equivalent to:
```javascript
db.students.find({ city: "Lahore" });
```
But `$match` is used specifically within an aggregation pipeline, often as the first stage to reduce the dataset early (good for performance on large collections).

## 4. $group — Group Documents & Summarize (like GROUP BY)

### Syntax:
```javascript
{ $group: { _id: "$field", result: { $accumulator: "$otherField" } } }
```

### Example: Count students per city
```javascript
db.students.aggregate([
  { $group: { _id: "$city", totalStudents: { $sum: 1 } } }
]);
```
**Result:**
```json
{ "_id": "Lahore", "totalStudents": 2 }
{ "_id": "Karachi", "totalStudents": 2 }
{ "_id": "Multan", "totalStudents": 1 }
```

## 5. Common Accumulator Operators

| Operator | Purpose |
|---|---|
| `$sum` | Add values (or count with `$sum: 1`) |
| `$avg` | Calculate average |
| `$min` | Find minimum value |
| `$max` | Find maximum value |
| `$push` | Collect values into an array |

### Example: Average age per city
```javascript
db.students.aggregate([
  { $group: { _id: "$city", avgAge: { $avg: "$age" } } }
]);
```

## 6. Combining $match + $group
```javascript
db.students.aggregate([
  { $match: { age: { $gt: 18 } } },
  { $group: { _id: "$city", totalStudents: { $sum: 1 } } }
]);
```
This filters students older than 18 FIRST, then groups them by city — just like `WHERE` before `GROUP BY` in SQL.

## 7. Grouping All Documents Together
```javascript
db.students.aggregate([
  { $group: { _id: null, totalStudents: { $sum: 1 }, avgAge: { $avg: "$age" } } }
]);
```
`_id: null` groups **everything** into a single summary result.

---

## 📝 Homework / Tasks (Class 16)
1. Write an aggregation to count how many students are in each city.
2. Write an aggregation to find the average age of students, grouped by city.
3. Write an aggregation combining `$match` and `$group` — filter students older than 19, then group by city.
4. Write an aggregation with `_id: null` to get overall total student count and average age.
5. Challenge: Use `$push` inside `$group` to collect a list of student names per city.

---
⬅️ **Previous:** [Class 15](15-explain-performance.md)  |  ➡️ **Next:** [Class 17 - Aggregation Pipeline Continued](17-aggregation-pipeline.md)
