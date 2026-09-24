# Class 12: Embedding vs Referencing (Schema Design Basics)

## 🎯 Learning Objectives
- Understand two ways to model relationships in MongoDB
- Choose between embedding and referencing based on use case
- Understand tradeoffs for large datasets

---

## 1. The Core Question
In SQL, relationships are handled with foreign keys and JOINs. In MongoDB, you have two choices:
1. **Embedding** — store related data directly inside the parent document
2. **Referencing** — store just an `_id` reference, similar to a foreign key

## 2. Embedding Example
```javascript
db.students.insertOne({
  name: "Aisha",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Lahore"
  },
  courses: [
    { courseName: "Math", instructor: "Mr. Khan" },
    { courseName: "Science", instructor: "Ms. Ali" }
  ]
});
```
✅ **Pros:** One single read gets everything; fast for data that's always accessed together.
❌ **Cons:** Data duplication if the same course info repeats across many students; large documents can hurt performance if they grow unbounded (MongoDB has a 16MB document size limit).

## 3. Referencing Example
```javascript
// courses collection
db.courses.insertOne({ _id: 101, courseName: "Math", instructor: "Mr. Khan" });

// students collection - stores a reference (courseId) instead of full course data
db.students.insertOne({
  name: "Aisha",
  age: 20,
  courseIds: [101, 102]
});
```
✅ **Pros:** No duplication; easier to update shared data (e.g., change instructor once, applies everywhere); works well when related data is large or grows unbounded.
❌ **Cons:** Requires a second query (or `$lookup`, covered in Class 17) to fetch full related data — similar to a JOIN.

## 4. When to Embed vs Reference — Rule of Thumb

| Use Embedding When... | Use Referencing When... |
|---|---|
| Related data is always read together | Related data is large or reused across many documents |
| Related data doesn't grow unbounded (e.g., a few addresses) | Related data changes independently/frequently |
| "Contains" relationship (order contains items) | "Many-to-many" relationships (students ↔ courses) |
| Data is mostly one-to-few | Data is one-to-many or many-to-many at scale |

## 5. Large Dataset Consideration ⚠️
For **large datasets**, referencing is often preferred when:
- A parent document could accumulate thousands of embedded sub-documents (e.g., a "user" with millions of "activity log" entries) — this risks hitting the 16MB document limit and slows down reads.
- Related entities are queried/updated independently at scale (e.g., product catalog with millions of products vs. a small set of categories).

## 6. Hybrid Approach
Often real projects use **both**: embed small, stable, frequently-accessed data (like an address), and reference large or independently-changing data (like orders, logs, or many-to-many relationships).

---

## 📝 Homework / Tasks (Class 12)
1. Design (on paper) a schema for a `Blog` app with `Posts` and `Comments` — should comments be embedded or referenced? Justify your answer.
2. Rewrite the Students/Courses example using embedding, then again using referencing.
3. Explain, in your own words, why embedding unbounded data (like millions of log entries per user) is risky.
4. Challenge: Design a schema for an e-commerce `Orders` system — should Order Items be embedded in the Order document, or referenced separately? Explain your reasoning.

---
⬅️ **Previous:** [Class 11](11-data-types.md)  |  ➡️ **Next:** [Class 13 - Working with Arrays](13-arrays.md)
