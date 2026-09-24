# Class 14: HAVING Clause

## 🎯 Learning Objectives
- Filter GROUPED results using HAVING
- Understand the difference between WHERE and HAVING

---

## 1. Why Do We Need HAVING?
`WHERE` filters **individual rows** BEFORE grouping.
`HAVING` filters **groups** AFTER grouping/aggregation.

❌ You **cannot** use aggregate functions inside `WHERE`:
```sql
-- This will cause an ERROR
SELECT City, COUNT(*) AS Total
FROM Students
WHERE COUNT(*) > 1
GROUP BY City;
```

✅ Use `HAVING` instead:
```sql
SELECT City, COUNT(*) AS Total
FROM Students
GROUP BY City
HAVING COUNT(*) > 1;
```

## 2. Order of Clauses (Very Important!)
```sql
SELECT column, AGGREGATE(column)
FROM table_name
WHERE condition          -- filters rows first
GROUP BY column          -- then groups them
HAVING condition          -- then filters the groups
ORDER BY column;          -- finally sorts result
```

## 3. Example: Cities with More Than 1 Student
```sql
SELECT City, COUNT(*) AS TotalStudents
FROM Students
GROUP BY City
HAVING COUNT(*) > 1;
```

## 4. Example: Cities Where Average Age > 20
```sql
SELECT City, AVG(Age) AS AvgAge
FROM Students
GROUP BY City
HAVING AVG(Age) > 20;
```

## 5. Combining WHERE + GROUP BY + HAVING
```sql
SELECT City, COUNT(*) AS TotalStudents
FROM Students
WHERE Age > 18
GROUP BY City
HAVING COUNT(*) >= 2
ORDER BY TotalStudents DESC;
```
This:
1. Filters students older than 18 (`WHERE`)
2. Groups remaining students by City (`GROUP BY`)
3. Keeps only cities with 2+ students (`HAVING`)
4. Sorts result by total students, highest first (`ORDER BY`)

## 6. WHERE vs HAVING — Quick Comparison

| | WHERE | HAVING |
|---|-------|--------|
| Filters | Individual rows | Groups |
| Runs | Before grouping | After grouping |
| Can use aggregate functions? | ❌ No | ✅ Yes |

---

## 📝 Homework / Tasks (Class 14)
1. Write a query to find cities that have more than 1 student.
2. Write a query to find cities where the average student age is above 20.
3. Write a query combining WHERE, GROUP BY, and HAVING together.
4. Explain in your own words: why can't we write `WHERE COUNT(*) > 1`?
5. Challenge: Find cities with exactly 2 students, sorted alphabetically by City.

---
⬅️ **Previous:** [Class 13](13-group-by.md)  |  ➡️ **Next:** [Class 15 - Date/Time Functions](15-datetime-functions.md)
