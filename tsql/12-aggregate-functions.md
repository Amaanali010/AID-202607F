# Class 12: Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)

## 🎯 Learning Objectives
- Perform calculations across multiple rows using aggregate functions

---

## 1. What Are Aggregate Functions?
Aggregate functions take many rows of data and calculate ONE summary value (a total, average, count, etc.)

## 2. COUNT() — Count Rows
```sql
SELECT COUNT(*) AS TotalStudents
FROM Students;
```

Count non-NULL values in a specific column:
```sql
SELECT COUNT(Age) AS StudentsWithAge
FROM Students;
```
(If some students have NULL age, they won't be counted here.)

## 3. SUM() — Add Up Values
```sql
SELECT SUM(Age) AS TotalAge
FROM Students;
```

## 4. AVG() — Calculate Average
```sql
SELECT AVG(Age) AS AverageAge
FROM Students;
```

## 5. MIN() and MAX() — Smallest and Largest Values
```sql
SELECT MIN(Age) AS YoungestAge, MAX(Age) AS OldestAge
FROM Students;
```

## 6. Combining Aggregate Functions
```sql
SELECT 
    COUNT(*) AS TotalStudents,
    AVG(Age) AS AvgAge,
    MIN(Age) AS MinAge,
    MAX(Age) AS MaxAge
FROM Students;
```

## 7. Aggregate Functions + WHERE
```sql
SELECT COUNT(*) AS LahoreStudents
FROM Students
WHERE City = 'Lahore';
```

⚠️ **Important:** Aggregate functions summarize ALL matching rows into one result. If you want summaries **per group** (e.g., per city), you need `GROUP BY` — coming up in Class 13!

---

## 📝 Homework / Tasks (Class 12)
1. Write a query to count the total number of students in your table.
2. Write a query to find the average age of all students.
3. Write a query to find the youngest and oldest student's age.
4. Write a query to count how many students live in a specific city.
5. Challenge: Write a single query showing COUNT, SUM, AVG, MIN, and MAX of Age all together.

---
⬅️ **Previous:** [Class 11](11-logical-operators.md)  |  ➡️ **Next:** [Class 13 - GROUP BY](13-group-by.md)
