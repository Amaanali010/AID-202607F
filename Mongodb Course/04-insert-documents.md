# Class 4: Basic CRUD — insertOne(), insertMany()

## 🎯 Learning Objectives
- Insert a single document using `insertOne()`
- Insert multiple documents using `insertMany()`
- Understand auto-generated `_id` values

---

## 1. insertOne() — Insert a Single Document

### Syntax:
```javascript
db.collection.insertOne({ field1: value1, field2: value2 });
```

### Example:
```javascript
use schoolDB

db.students.insertOne({
  name: "Aisha",
  age: 20,
  city: "Lahore",
  enrollDate: new Date("2026-01-10")
});
```

**Result:**
```json
{
  acknowledged: true,
  insertedId: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1")
}
```

## 2. Providing Your Own `_id`
```javascript
db.students.insertOne({
  _id: 1,
  name: "Bilal",
  age: 22,
  city: "Karachi"
});
```
⚠️ If you insert a document with an `_id` that already exists, you'll get a **duplicate key error**.

## 3. insertMany() — Insert Multiple Documents at Once

### Syntax:
```javascript
db.collection.insertMany([
  { field1: value1 },
  { field1: value2 }
]);
```

### Example:
```javascript
db.students.insertMany([
  { _id: 2, name: "Sara", age: 21, city: "Islamabad" },
  { _id: 3, name: "Omar", age: 19, city: "Lahore" },
  { _id: 4, name: "Hina", age: 23, city: "Multan" }
]);
```

**Result:**
```json
{
  acknowledged: true,
  insertedIds: { '0': 2, '1': 3, '2': 4 }
}
```

## 4. Verifying Your Inserts
```javascript
db.students.find();
```
This returns all documents in the `students` collection (we'll dive deeper into `find()` next class).

## 5. Common Mistakes to Avoid
- Forgetting a comma between fields → JSON syntax error
- Using duplicate `_id` values → duplicate key error
- Mixing data types inconsistently across documents (not an error, but bad practice for large datasets)

---

## 📝 Homework / Tasks (Class 4)
1. Insert one document into a `students` collection using `insertOne()` with at least 4 fields.
2. Insert 4 more students using a single `insertMany()` call.
3. Try inserting a document with an `_id` that already exists — record the exact error message you get.
4. Insert a document that's missing a field the others have (e.g., no `city`) — run `find()` and observe that MongoDB doesn't complain.
5. Challenge: Insert a document where one field is an array (e.g., `hobbies: ["reading", "chess"]`).

---
⬅️ **Previous:** [Class 3](03-databases-collections-documents.md)  |  ➡️ **Next:** [Class 5 - find(), findOne(), Query Basics](05-find-basics.md)
