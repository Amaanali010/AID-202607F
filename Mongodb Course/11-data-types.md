# Class 11: Data Types in MongoDB (ObjectId, Dates, Arrays, Embedded Documents)

## 🎯 Learning Objectives
- Understand the major BSON data types
- Use dates, arrays, and embedded (nested) documents correctly

---

## 1. Common BSON Data Types

| Type | Example | Notes |
|---|---|---|
| String | `"Aisha"` | Text data |
| Number (Int32/Double) | `20`, `20.5` | Whole or decimal numbers |
| Boolean | `true` / `false` | |
| Date | `ISODate("2026-01-10")` | Stored as UTC internally |
| ObjectId | `ObjectId("64f1a2...")` | Default unique ID type |
| Array | `["SQL", "Python"]` | Ordered list of values |
| Embedded Document | `{ street: "Main St", city: "Lahore" }` | A document inside a document |
| Null | `null` | Represents missing/unknown value |

## 2. ObjectId
```javascript
db.students.insertOne({ name: "Aisha" });
// _id is auto-generated, e.g.: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1")
```
An `ObjectId` encodes a timestamp, so you can even extract when a document was created:
```javascript
let doc = db.students.findOne({ name: "Aisha" });
doc._id.getTimestamp();
```

## 3. Dates
```javascript
db.students.insertOne({
  name: "Bilal",
  enrollDate: new Date("2026-01-15")
});
```
Query by date range:
```javascript
db.students.find({
  enrollDate: { $gte: new Date("2026-01-01"), $lt: new Date("2026-02-01") }
});
```

## 4. Arrays
```javascript
db.students.insertOne({
  name: "Sara",
  skills: ["SQL", "Python", "MongoDB"]
});
```
Query documents where an array **contains** a value:
```javascript
db.students.find({ skills: "Python" });
```

## 5. Embedded (Nested) Documents
Instead of a separate "address" table (like in SQL), MongoDB often embeds related data directly:
```javascript
db.students.insertOne({
  name: "Omar",
  address: {
    street: "123 Main St",
    city: "Lahore",
    zip: "54000"
  }
});
```
Query a nested field using dot notation:
```javascript
db.students.find({ "address.city": "Lahore" });
```

## 6. Checking a Field's Type
```javascript
db.students.find({ age: { $type: "int" } });
```

---

## 📝 Homework / Tasks (Class 11)
1. Insert a student document with an embedded `address` field (street, city, zip).
2. Write a query to find students living in a specific city using dot notation on the embedded field.
3. Insert a student with a `skills` array field containing at least 3 skills.
4. Write a query to find students who have a specific skill in their array.
5. Challenge: Insert a student with an `enrollDate`, then write a query to find students who enrolled in a specific month using `$gte`/`$lt`.

---
⬅️ **Previous:** [Class 10](10-delete-documents.md)  |  ➡️ **Next:** [Class 12 - Embedding vs Referencing](12-embedding-vs-referencing.md)
