# Class 17: Aggregation Pipeline Continued ($project, $sort, $limit, $lookup)

## 🎯 Learning Objectives
- Reshape documents using `$project`
- Sort and limit aggregation results
- Join data from another collection using `$lookup`

---

## 1. $project — Reshape/Select Fields (like SELECT + calculated fields)
```javascript
db.students.aggregate([
  { $project: { name: 1, city: 1, _id: 0 } }
]);
```

### Adding a computed field:
```javascript
db.students.aggregate([
  { $project: { name: 1, ageInMonths: { $multiply: ["$age", 12] } } }
]);
```

## 2. $sort — Sort Aggregation Results
```javascript
db.students.aggregate([
  { $group: { _id: "$city", totalStudents: { $sum: 1 } } },
  { $sort: { totalStudents: -1 } }
]);
```
This shows cities sorted by student count, highest first.

## 3. $limit — Limit Number of Results in a Pipeline
```javascript
db.students.aggregate([
  { $group: { _id: "$city", totalStudents: { $sum: 1 } } },
  { $sort: { totalStudents: -1 } },
  { $limit: 3 }
]);
```
Shows the top 3 cities by student count.

## 4. $lookup — Join Data From Another Collection (like SQL JOIN)

### Sample Collections
**students**
```json
{ "_id": 1, "name": "Aisha", "courseId": 101 }
```
**courses**
```json
{ "_id": 101, "courseName": "Math", "instructor": "Mr. Khan" }
```

### $lookup Syntax:
```javascript
db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseInfo"
    }
  }
]);
```
**Result:**
```json
{
  "_id": 1,
  "name": "Aisha",
  "courseId": 101,
  "courseInfo": [
    { "_id": 101, "courseName": "Math", "instructor": "Mr. Khan" }
  ]
}
```
Note: `$lookup` always returns an **array** in the `as` field, even if there's only one match.

### Unwrapping the Array with $unwind
```javascript
db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseInfo"
    }
  },
  { $unwind: "$courseInfo" }
]);
```
This flattens the array so `courseInfo` becomes a single object instead of an array of one.

## 5. Full Pipeline Example
```javascript
db.students.aggregate([
  { $match: { age: { $gt: 18 } } },
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseInfo"
    }
  },
  { $unwind: "$courseInfo" },
  { $project: { name: 1, "courseInfo.courseName": 1, _id: 0 } },
  { $sort: { name: 1 } }
]);
```

---

## 📝 Homework / Tasks (Class 17)
1. Write a `$project` stage that shows only `name` and `city`, excluding `_id`.
2. Write a pipeline that groups students by city, sorts by count descending, and limits to the top 2 cities.
3. Create a `courses` collection with a few sample courses, add a `courseId` field to your students, then write a `$lookup` to join them.
4. Add `$unwind` to your `$lookup` result and explain what changes.
5. Challenge: Build a full pipeline combining `$match`, `$lookup`, `$unwind`, `$project`, and `$sort` in one aggregation.

---
⬅️ **Previous:** [Class 16](16-aggregation-intro.md)  |  ➡️ **Next:** [Class 18 - Pagination Strategies for Large Datasets](18-pagination-strategies.md)
