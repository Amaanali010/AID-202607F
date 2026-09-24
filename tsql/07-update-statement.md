# Class 7: UPDATE Statement

## 🎯 Learning Objectives
- Modify existing data using `UPDATE`
- Understand why `WHERE` is critical in UPDATE statements
- Update single and multiple columns/rows

---

## 1. Basic UPDATE Syntax
```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### Example: Update one student's city
```sql
UPDATE Students
SET City = 'Rawalpindi'
WHERE StudentID = 3;
```

## 2. ⚠️ THE MOST IMPORTANT RULE OF UPDATE
**Always use a WHERE clause**, unless you genuinely want to update EVERY row.

### ❌ DANGER — updates ALL rows:
```sql
UPDATE Students
SET City = 'Lahore';
```
This sets **every single student's** city to Lahore! Always double-check before running UPDATE.

### ✅ Safe practice:
1. First run a `SELECT` with the same `WHERE` condition to see what will be affected:
```sql
SELECT * FROM Students WHERE StudentID = 3;
```
2. Then run the `UPDATE` with the same condition.

## 3. Updating Multiple Columns at Once
```sql
UPDATE Students
SET Age = 25, City = 'Faisalabad'
WHERE Name = 'Hina';
```

## 4. Updating Multiple Rows
```sql
UPDATE Students
SET City = 'Lahore'
WHERE Age < 20;
```
This updates ALL students whose Age is less than 20.

---

## 📝 Homework / Tasks (Class 7)
1. Write an UPDATE statement to change one student's Age.
2. Write an UPDATE statement that changes both Age and City for a specific StudentID.
3. Write a SELECT statement first, then an UPDATE statement, that changes the City for all students older than 22.
4. Challenge: Explain in your own words why running UPDATE without WHERE is dangerous, using an example from your own table.
5. Verify all your updates using `SELECT * FROM Students`.

---
⬅️ **Previous:** [Class 6](06-insert-statement.md)  |  ➡️ **Next:** [Class 8 - DELETE & TRUNCATE](08-delete-truncate.md)
