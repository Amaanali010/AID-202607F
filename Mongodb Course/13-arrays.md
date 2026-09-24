# Class 13: Working with Arrays ($push, $pull, $addToSet, Array Queries)

## 🎯 Learning Objectives
- Add and remove items from array fields
- Query documents based on array contents
- Avoid duplicate entries in arrays

---

## 1. Recap: Arrays in Documents
```javascript
db.students.insertOne({
  name: "Aisha",
  skills: ["SQL", "Python"]
});
```

## 2. $push — Add an Item to an Array
```javascript
db.students.updateOne(
  { name: "Aisha" },
  { $push: { skills: "MongoDB" } }
);
```
Now `skills` = `["SQL", "Python", "MongoDB"]`

### Push multiple items at once:
```javascript
db.students.updateOne(
  { name: "Aisha" },
  { $push: { skills: { $each: ["JavaScript", "Docker"] } } }
);
```

## 3. $addToSet — Add Only If Not Already Present
```javascript
db.students.updateOne(
  { name: "Aisha" },
  { $addToSet: { skills: "SQL" } }
);
```
Since "SQL" already exists in the array, nothing changes (no duplicate added). This is different from `$push`, which would add it again.

## 4. $pull — Remove Item(s) Matching a Condition
```javascript
db.students.updateOne(
  { name: "Aisha" },
  { $pull: { skills: "Python" } }
);
```
Removes "Python" from the array if present.

## 5. $pop — Remove First or Last Element
```javascript
// Remove last element
db.students.updateOne({ name: "Aisha" }, { $pop: { skills: 1 } });

// Remove first element
db.students.updateOne({ name: "Aisha" }, { $pop: { skills: -1 } });
```

## 6. Querying Arrays

### Match if array CONTAINS a value:
```javascript
db.students.find({ skills: "SQL" });
```

### Match if array contains ALL specified values:
```javascript
db.students.find({ skills: { $all: ["SQL", "MongoDB"] } });
```

### Match by array size:
```javascript
db.students.find({ skills: { $size: 3 } });
```

### Match using elemMatch (for arrays of embedded documents):
```javascript
db.students.find({
  courses: { $elemMatch: { courseName: "Math", grade: { $gte: 80 } } }
});
```

---

## 📝 Homework / Tasks (Class 13)
1. Add a new skill to a student's `skills` array using `$push`.
2. Try adding the same skill twice using `$addToSet` — confirm no duplicate is created.
3. Remove a specific skill from a student using `$pull`.
4. Write a query to find all students who have "MongoDB" listed in their skills.
5. Challenge: Insert a student with a `courses` array of embedded documents (each with `courseName` and `grade`), then use `$elemMatch` to find students who scored above 80 in a specific course.

---
⬅️ **Previous:** [Class 12](12-embedding-vs-referencing.md)  |  ➡️ **Next:** [Class 14 - Indexes](14-indexes.md)
