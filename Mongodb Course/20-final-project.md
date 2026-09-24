# Class 20: Final Review & Mini Project

## 🎯 Learning Objectives
- Review all major MongoDB concepts from Classes 1–19
- Apply everything in one combined mini project using a larger dataset

---

## 1. Quick Recap of Everything We Learned

| Class | Topic |
|---|---|
| 1 | NoSQL vs SQL, what is MongoDB, use cases for large datasets |
| 2 | Installing MongoDB, Compass, mongosh |
| 3 | Databases, Collections, Documents, JSON/BSON |
| 4 | insertOne(), insertMany() |
| 5 | find(), findOne(), query basics |
| 6 | Query operators ($eq, $gt, $lt, $in, $and, $or) |
| 7 | Projection |
| 8 | sort(), limit(), skip() |
| 9 | updateOne(), updateMany(), $set, $inc |
| 10 | deleteOne(), deleteMany() |
| 11 | Data types (ObjectId, dates, arrays, embedded docs) |
| 12 | Embedding vs Referencing |
| 13 | Array operators ($push, $pull, $addToSet) |
| 14 | Indexes |
| 15 | explain() and query performance |
| 16 | Aggregation: $match, $group |
| 17 | Aggregation: $project, $sort, $limit, $lookup |
| 18 | Pagination strategies for large datasets |
| 19 | Bulk operations & performance tips |

---

## 2. Mini Project: "Student & Course Management on a Larger Dataset"

### Step 1: Set Up Collections
Use `students` and `courses` collections. Insert:
- At least 50 student documents (use a script/loop to generate more if you want a "large dataset" feel — e.g., 1,000+)
- At least 5 course documents
- Reference courses from students using a `courseIds` array field

### Step 2: Create Indexes
```javascript
db.students.createIndex({ city: 1 });
db.students.createIndex({ age: 1 });
db.courses.createIndex({ courseName: 1 });
```

### Step 3: Write These Queries/Aggregations

1. **Find all students from a specific city.**
2. **Find students aged between 20 and 25 using `$gte`/`$lte`.**
3. **Return only `name` and `city` fields using projection.**
4. **Get the 5 oldest students using `sort()` + `limit()`.**
5. **Update all students from a city to add a new field `region`.**
6. **Add a new skill to a student's `skills` array using `$push`.**
7. **Delete a specific student safely (preview with `find()` first).**
8. **Count how many students are in each city using `$group`.**
9. **Find the average age of students per city using aggregation.**
10. **Use `$lookup` to join `students` with `courses` and show each student's enrolled course names.**
11. **Sort the grouped city counts descending and limit to top 3 cities.**
12. **Run `explain("executionStats")` on one of your queries before and after adding an index — compare results.**
13. **Implement cursor-based pagination to fetch "page 2" of students sorted by `_id`.**
14. **Use `bulkWrite()` to insert 2, update 1, and delete 1 student in a single call.**
15. **Bonus: Write an aggregation pipeline combining `$match`, `$group`, `$sort`, and `$limit` to answer: "What are the top 3 cities by average student age, considering only students older than 18?"**

### Step 4: Present Your Work
- Save all your queries/aggregations in a `.js` file (or `.txt`)
- Be ready to explain what each query does, and why you chose embedding vs referencing for your schema

---

## 🎓 Congratulations!
You now understand MongoDB fundamentals — from basic CRUD operations to indexing, aggregation pipelines, and performance strategies for large datasets. Great next topics to explore: sharding, replica sets, schema validation, and the MongoDB driver for your favorite programming language (Node.js, Python, etc.).

---
⬅️ **Previous:** [Class 19](19-bulk-operations.md)  |  🏠 **Back to:** [Course Home](README.md)
