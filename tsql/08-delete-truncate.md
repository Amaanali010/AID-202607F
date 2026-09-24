# Class 8: DELETE & TRUNCATE

## 🎯 Learning Objectives
- Remove specific rows using `DELETE`
- Remove all rows using `TRUNCATE`
- Understand the key differences between DELETE, TRUNCATE, and DROP

---

## 1. DELETE Statement

### Syntax:
```sql
DELETE FROM table_name
WHERE condition;
```

### Example: Delete one student
```sql
DELETE FROM Students
WHERE StudentID = 10;
```

### ⚠️ DANGER — deletes ALL rows (but keeps the table structure):
```sql
DELETE FROM Students;
```

**Golden Rule:** Just like UPDATE, always run a `SELECT` with the same `WHERE` clause first to preview what will be deleted.

```sql
-- Step 1: Preview
SELECT * FROM Students WHERE City = 'Multan';

-- Step 2: Delete (only after confirming)
DELETE FROM Students WHERE City = 'Multan';
```

## 2. TRUNCATE Statement
`TRUNCATE` removes **all rows** from a table instantly. It cannot be used with `WHERE`.

```sql
TRUNCATE TABLE Students;
```

## 3. DELETE vs TRUNCATE vs DROP

| Feature | DELETE | TRUNCATE | DROP |
|---------|--------|----------|------|
| Removes specific rows (WHERE) | ✅ Yes | ❌ No | ❌ No |
| Removes all rows | ✅ Yes | ✅ Yes | ✅ Yes (removes table too) |
| Removes table structure | ❌ No | ❌ No | ✅ Yes |
| Speed | Slower | Faster | N/A |
| Can be rolled back (in a transaction) | ✅ Yes | ✅ Yes (limited) | ✅ Yes |
| Resets identity/auto-increment | ❌ No | ✅ Yes | N/A |

## 4. DROP TABLE (bonus mention)
```sql
DROP TABLE Students;
```
This deletes the **entire table**, including its structure. Use with extreme caution.

---

## 📝 Homework / Tasks (Class 8)
1. Write a SELECT + DELETE pair to remove one specific student by StudentID.
2. Write a query to delete all students from a specific city.
3. In your own words, explain the difference between DELETE and TRUNCATE.
4. Challenge: Why might a company prefer DELETE over TRUNCATE even though TRUNCATE is faster? (Hint: think about WHERE conditions and audit logs.)
5. (Optional, be careful!) Create a temporary/test table, insert a few rows, then practice TRUNCATE on it — NOT on your main Students table.

---
⬅️ **Previous:** [Class 7](07-update-statement.md)  |  ➡️ **Next:** [Class 9 - Data Types Deep Dive](09-data-types.md)
