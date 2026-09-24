# Class 9: Updating Documents — updateOne(), updateMany(), $set, $inc

## 🎯 Learning Objectives
- Update documents using `updateOne()` and `updateMany()`
- Use `$set` to modify field values
- Use `$inc` to increase/decrease numeric fields

---

## 1. updateOne() — Update the First Matching Document

### Syntax:
```javascript
db.collection.updateOne(
  { filter },
  { update operators }
);
```

### Example:
```javascript
db.students.updateOne(
  { name: "Aisha" },
  { $set: { city: "Rawalpindi" } }
);
```

## 2. $set — Set/Change a Field's Value
```javascript
db.students.updateOne(
  { _id: 1 },
  { $set: { age: 21, city: "Faisalabad" } }
);
```
If the field doesn't exist yet, `$set` will **add** it.

## 3. updateMany() — Update All Matching Documents
```javascript
db.students.updateMany(
  { city: "Lahore" },
  { $set: { region: "Punjab" } }
);
```
⚠️ **Just like SQL's UPDATE**, always double-check your filter. Running `updateMany({}, {...})` with an empty filter updates **every document** in the collection.

## 4. $inc — Increment/Decrement a Numeric Field
```javascript
db.students.updateOne(
  { name: "Bilal" },
  { $inc: { age: 1 } }
);
```
This increases Bilal's age by 1. Use a negative number to decrease:
```javascript
db.students.updateOne(
  { name: "Bilal" },
  { $inc: { age: -1 } }
);
```

## 5. $unset — Remove a Field
```javascript
db.students.updateOne(
  { name: "Sara" },
  { $unset: { city: "" } }
);
```

## 6. upsert — Insert if Not Found
```javascript
db.students.updateOne(
  { name: "Zoya" },
  { $set: { age: 20, city: "Sialkot" } },
  { upsert: true }
);
```
If no document matches `{ name: "Zoya" }`, MongoDB **inserts** a new one with these fields.

## 7. Verifying Updates
```javascript
db.students.find({ name: "Aisha" });
```

---

## 📝 Homework / Tasks (Class 9)
1. Write an `updateOne()` query to change one student's city using `$set`.
2. Write an `updateMany()` query to add a new field `status: "active"` to all students from a specific city.
3. Write a query using `$inc` to increase a student's age by 1.
4. Write a query using `$unset` to remove a field from one student.
5. Challenge: Use `upsert: true` to update a student that doesn't exist yet, and confirm it gets inserted as new.

---
⬅️ **Previous:** [Class 8](08-sort-limit-skip.md)  |  ➡️ **Next:** [Class 10 - deleteOne(), deleteMany()](10-delete-documents.md)
