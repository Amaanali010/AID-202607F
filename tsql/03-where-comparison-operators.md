# Class 3: Filtering with WHERE & Comparison Operators

## 🎯 Learning Objectives
- Filter rows using the `WHERE` clause
- Use comparison operators to build conditions

---

## 1. Why Filter Data?
Without filtering, `SELECT` returns **all** rows. Usually we want specific data — e.g., "students older than 20" or "students from Lahore".

## 2. The WHERE Clause

### Syntax:
```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

### Example:
```sql
SELECT Name, Age
FROM Students
WHERE City = 'Lahore';
```

## 3. Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `=` | Equal to | `Age = 20` |
| `<>` or `!=` | Not equal to | `City <> 'Lahore'` |
| `>` | Greater than | `Age > 20` |
| `<` | Less than | `Age < 20` |
| `>=` | Greater than or equal | `Age >= 20` |
| `<=` | Less than or equal | `Age <= 20` |

### Examples using our `Students` table:

| StudentID | Name | Age | City |
|-----------|------|-----|------|
| 1 | Aisha | 20 | Lahore |
| 2 | Bilal | 22 | Karachi |
| 3 | Sara | 21 | Islamabad |
| 4 | Omar | 19 | Lahore |

**Students older than 20:**
```sql
SELECT Name, Age
FROM Students
WHERE Age > 20;
```
Result: Bilal (22), Sara (21)

**Students NOT from Lahore:**
```sql
SELECT Name, City
FROM Students
WHERE City <> 'Lahore';
```
Result: Bilal (Karachi), Sara (Islamabad)

**Note:** Text values need single quotes `'Lahore'`, numbers do not `Age = 20`.

---

## 📝 Homework / Tasks (Class 3)
1. Write a query to find all students aged exactly 20.
2. Write a query to find all students whose age is greater than or equal to 21.
3. Write a query to find all students who are NOT from Karachi.
4. Add 3 more rows of sample data into your `Students` table (use SSMS GUI for now) and re-test the above queries.
5. Challenge: Write a query showing only the names of students younger than 21.

---
⬅️ **Previous:** [Class 2](02-tsql-basics-select.md)  |  ➡️ **Next:** [Class 4 - ORDER BY, TOP, DISTINCT](04-orderby-top-distinct.md)
