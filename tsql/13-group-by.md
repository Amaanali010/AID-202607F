# Class 13: GROUP BY

## 🎯 Learning Objectives
- Group rows that share a value and apply aggregate functions per group

---

## 1. Why GROUP BY?
`GROUP BY` splits your rows into groups (e.g., by City) and lets you calculate an aggregate value **for each group** separately.

### Example Table: `Students`

| StudentID | Name | Age | City |
|-----------|------|-----|------|
| 1 | Aisha | 20 | Lahore |
| 2 | Bilal | 22 | Karachi |
| 3 | Sara | 21 | Lahore |
| 4 | Omar | 19 | Karachi |
| 5 | Hina | 23 | Multan |

## 2. Basic Syntax
```sql
SELECT column, AGGREGATE_FUNCTION(column)
FROM table_name
GROUP BY column;
```

### Example: Count students per city
```sql
SELECT City, COUNT(*) AS TotalStudents
FROM Students
GROUP BY City;
```
**Result:**

| City | TotalStudents |
|------|----------------|
| Lahore | 2 |
| Karachi | 2 |
| Multan | 1 |

### Example: Average age per city
```sql
SELECT City, AVG(Age) AS AvgAge
FROM Students
GROUP BY City;
```

## 3. Important Rule ⚠️
Every column in your `SELECT` list must either:
1. Be inside an aggregate function (like `COUNT()`, `AVG()`), OR
2. Be listed in the `GROUP BY` clause

### ❌ This will cause an error:
```sql
SELECT City, Name, COUNT(*)
FROM Students
GROUP BY City;
```
(`Name` is not aggregated and not in GROUP BY)

## 4. Grouping by Multiple Columns
```sql
SELECT City, Age, COUNT(*) AS Total
FROM Students
GROUP BY City, Age;
```

## 5. GROUP BY + WHERE
```sql
SELECT City, COUNT(*) AS TotalStudents
FROM Students
WHERE Age > 19
GROUP BY City;
```
Note: `WHERE` filters rows **before** grouping happens.

---

## 📝 Homework / Tasks (Class 13)
1. Write a query showing the total number of students grouped by City.
2. Write a query showing the average Age grouped by City.
3. Write a query showing MIN and MAX age grouped by City.
4. Add a WHERE clause to only include students older than 18, then group by City.
5. Challenge: Group by both City and Age, and count how many students fall in each combination.

---
⬅️ **Previous:** [Class 12](12-aggregate-functions.md)  |  ➡️ **Next:** [Class 14 - HAVING Clause](14-having-clause.md)
