# Session 4: Aggregation Pipeline

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain the aggregation pipeline in MongoDB
- Describe the stages in the aggregation pipeline
- Explain the expressions that can be used in the aggregation pipeline

---

## 1. What is the Aggregation Pipeline?

The **aggregation pipeline** is a framework in MongoDB used to process data and return computed/summarized results — similar to how `GROUP BY`, `SUM()`, and `JOIN` work in SQL.

Think of it as an **assembly line**: data (documents) enters the pipeline, passes through a series of **stages**, and each stage transforms the data before passing it to the next stage.

```
Input Documents → [Stage 1] → [Stage 2] → [Stage 3] → Final Output
```

**Basic syntax:**
```javascript
db.collection.aggregate([
  { stage1 },
  { stage2 },
  { stage3 }
])
```

---

## 2. Common Aggregation Stages

### 2.1 `$match` — Filters documents (like `find()`)
```javascript
db.orders.aggregate([
  { $match: { status: "completed" } }
])
```

### 2.2 `$group` — Groups documents and performs calculations
```javascript
db.orders.aggregate([
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } }
])
```
This groups all orders by `customerId` and calculates the total amount spent by each customer.

### 2.3 `$project` — Reshapes documents, similar to projection in `find()`
```javascript
db.orders.aggregate([
  { $project: { customerId: 1, amount: 1, _id: 0 } }
])
```

### 2.4 `$sort` — Sorts documents
```javascript
db.orders.aggregate([
  { $sort: { amount: -1 } }   // -1 = descending, 1 = ascending
])
```

### 2.5 `$limit` and `$skip` — Control the number of documents
```javascript
db.orders.aggregate([
  { $sort: { amount: -1 } },
  { $limit: 5 }
])
```

### 2.6 `$lookup` — Joins data from another collection (like a SQL JOIN)
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails"
    }
  }
])
```

### 2.7 `$unwind` — Breaks an array field into separate documents
```javascript
db.students.aggregate([
  { $unwind: "$skills" }
])
```
If a student has `skills: ["Python", "MongoDB"]`, this produces **two** separate documents — one for each skill.

---

## 3. Aggregation Expressions

Expressions let you perform calculations and transformations inside pipeline stages.

| Expression Type | Examples | Purpose |
|-------------------|----------|---------|
| Arithmetic | `$sum`, `$avg`, `$multiply`, `$subtract` | Perform math operations |
| String | `$concat`, `$toUpper`, `$toLower` | Manipulate text |
| Comparison | `$eq`, `$gt`, `$lt` | Compare values |
| Conditional | `$cond`, `$ifNull` | If-else logic |
| Date | `$year`, `$month`, `$dayOfWeek` | Extract date parts |

**Example — combining expressions:**
```javascript
db.orders.aggregate([
  {
    $project: {
      customerName: { $toUpper: "$name" },
      finalPrice: { $multiply: ["$price", 0.9] },   // 10% discount
      year: { $year: "$orderDate" }
    }
  }
])
```

---

## 4. Putting It All Together — Full Example

```javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
  { $sort: { totalSpent: -1 } },
  { $limit: 3 }
])
```
This pipeline finds all completed orders, groups them by customer, calculates each customer's total spending, sorts by highest spender, and returns the **top 3 customers**.

---

## 📝 Assignment: Session 4

Using an `orders` collection with documents like:
```json
{ "customerId": "C1", "product": "Phone", "amount": 15000, "status": "completed", "orderDate": ISODate("2024-03-15") }
```

1. Write an aggregation pipeline to find the **total amount** spent by each customer.
2. Extend the pipeline to only include orders with `status: "completed"` **before** grouping.
3. Write a pipeline that sorts customers by total spending in descending order and returns only the **top 5**.
4. Use `$project` to create a new field called `discountedAmount` that is 90% of the `amount` field.
5. Use `$unwind` on a collection where a field contains an array (e.g., a `cart` field with multiple products) and explain what changes in the output.
6. **Short answer:** In your own words, explain why the aggregation pipeline is described as a "pipeline" — what does that word suggest about how stages work together?

