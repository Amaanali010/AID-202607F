# Session 3: MongoDB Operators

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Describe the types of MongoDB operators
- Explain how to use the query and projection operators
- Explain how to modify field and array data using update operators

---

## 1. What Are MongoDB Operators?

**Operators** in MongoDB are special keywords (prefixed with `$`) that let you perform comparisons, filtering, updates, and calculations on your data. They are the building blocks for writing powerful queries.

## 2. Types of MongoDB Operators

| Operator Type | Purpose | Example |
|----------------|---------|---------|
| Query Operators | Filter documents based on conditions | `$gt`, `$lt`, `$in` |
| Projection Operators | Control which fields are returned | `$`, `$slice` |
| Update Operators | Modify field values | `$set`, `$inc` |
| Array Update Operators | Modify array fields | `$push`, `$pull` |
| Logical Operators | Combine multiple conditions | `$and`, `$or` |
| Element Operators | Check field existence/type | `$exists`, `$type` |

---

## 3. Query Operators

Query operators help you **filter** documents.

### 3.1 Comparison Operators
```javascript
db.students.find({ age: { $gt: 20 } })    // greater than
db.students.find({ age: { $gte: 20 } })   // greater than or equal
db.students.find({ age: { $lt: 25 } })    // less than
db.students.find({ age: { $lte: 25 } })   // less than or equal
db.students.find({ age: { $ne: 21 } })    // not equal
db.students.find({ course: { $in: ["CS", "IT"] } })   // matches any value in array
db.students.find({ course: { $nin: ["CS", "IT"] } })  // matches none of the values
```

### 3.2 Logical Operators
```javascript
// AND - both conditions must be true
db.students.find({ $and: [ { age: { $gt: 20 } }, { course: "CS" } ] })

// OR - at least one condition must be true
db.students.find({ $or: [ { course: "CS" }, { course: "IT" } ] })

// NOT - negates a condition
db.students.find({ age: { $not: { $gt: 25 } } })
```

### 3.3 Element Operators
```javascript
// Check if a field exists
db.students.find({ scholarship: { $exists: true } })

// Check the datatype of a field
db.students.find({ age: { $type: "int" } })
```

---

## 4. Projection Operators

**Projection** controls which fields are included or excluded in the query result — like choosing which columns to display.

```javascript
// Show only name and course fields (1 = include)
db.students.find({}, { name: 1, course: 1 })

// Exclude the age field (0 = exclude)
db.students.find({}, { age: 0 })

// $slice - limit the number of array elements returned
db.students.find({ name: "Alex" }, { skills: { $slice: 2 } })
```

> Note: You cannot mix `1` (include) and `0` (exclude) in the same projection, except for `_id`.

---

## 5. Update Operators

Update operators modify existing document fields.

### 5.1 Field Update Operators
```javascript
// $set - set or update a field's value
db.students.updateOne({ name: "Alex" }, { $set: { age: 22 } })

// $unset - remove a field
db.students.updateOne({ name: "Alex" }, { $unset: { scholarship: "" } })

// $inc - increase/decrease a numeric value
db.students.updateOne({ name: "Alex" }, { $inc: { age: 1 } })

// $rename - rename a field
db.students.updateOne({ name: "Alex" }, { $rename: { course: "program" } })
```

### 5.2 Array Update Operators
```javascript
// $push - add a value to an array
db.students.updateOne({ name: "Alex" }, { $push: { skills: "React" } })

// $pull - remove a value from an array
db.students.updateOne({ name: "Alex" }, { $pull: { skills: "React" } })

// $addToSet - add a value only if it doesn't already exist
db.students.updateOne({ name: "Alex" }, { $addToSet: { skills: "Python" } })

// $pop - remove the first (-1) or last (1) element of an array
db.students.updateOne({ name: "Alex" }, { $pop: { skills: 1 } })
```

---

## 📝 Assignment: Session 3

Using a `products` collection with documents like:
```json
{ "name": "Laptop", "price": 55000, "category": "Electronics", "inStock": true, "tags": ["new", "featured"] }
```

1. Write a query to find all products priced between 10,000 and 60,000 using `$gte` and `$lte`.
2. Write a query using `$or` to find products in the "Electronics" **or** "Furniture" category.
3. Write a projection query that returns only the `name` and `price` fields (hide `_id`).
4. Use `$set` and `$inc` to increase the price of a product by 500 and update its category in a single update.
5. Use `$push` to add a new tag to a product's `tags` array, then use `$pull` to remove a different tag.
6. **Short answer:** What is the difference between `$in` and `$or`? When would you use one over the other?

