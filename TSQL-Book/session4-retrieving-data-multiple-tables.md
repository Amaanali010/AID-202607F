# Session 4: Retrieving Data from Multiple Tables

## 🎯 Learning Objectives
By the end of this session, you will be able to:
- Explain the use of set operators to combine queries
- Explain the working of various types of SQL Joins
- Describe the role of subqueries in T-SQL statements

---

## 1. Set Operators

Set operators combine the results of **two or more `SELECT` statements** into a single result set. The queries must have the same number of columns with compatible data types.

| Operator | Purpose |
|----------|---------|
| `UNION` | Combines results, removes duplicates |
| `UNION ALL` | Combines results, keeps duplicates |
| `INTERSECT` | Returns only rows common to both queries |
| `EXCEPT` | Returns rows in the first query but not in the second |

### Sample tables

**Employees2024**

| Name |
|------|
| Aisha |
| Ravi |
| Chen |

**Employees2025**

| Name |
|------|
| Ravi |
| Maria |

### Examples
```sql
-- UNION: all unique names from both years
SELECT Name FROM Employees2024
UNION
SELECT Name FROM Employees2025;
-- Result: Aisha, Ravi, Chen, Maria

-- INTERSECT: names in both years
SELECT Name FROM Employees2024
INTERSECT
SELECT Name FROM Employees2025;
-- Result: Ravi

-- EXCEPT: names in 2024 but not in 2025
SELECT Name FROM Employees2024
EXCEPT
SELECT Name FROM Employees2025;
-- Result: Aisha, Chen
```

---

## 2. SQL Joins

A **JOIN** combines rows from two or more tables based on a related column.

### Sample tables

**Employees**

| EmployeeID | Name | DepartmentID |
|-----------|------|--------------|
| 1 | Aisha | 10 |
| 2 | Ravi | 20 |
| 3 | Chen | NULL |

**Departments**

| DepartmentID | DepartmentName |
|--------------|-----------------|
| 10 | IT |
| 20 | Sales |
| 30 | HR |

### Types of Joins

| Join Type | Returns |
|-----------|---------|
| `INNER JOIN` | Only matching rows from both tables |
| `LEFT JOIN` | All rows from the left table + matches from the right (unmatched = NULL) |
| `RIGHT JOIN` | All rows from the right table + matches from the left (unmatched = NULL) |
| `FULL JOIN` | All rows from both tables, matched where possible |
| `CROSS JOIN` | Every row from table A combined with every row from table B |
| `SELF JOIN` | A table joined with itself |

### Examples

```sql
-- INNER JOIN: only employees with a valid department
SELECT E.Name, D.DepartmentName
FROM Employees E
INNER JOIN Departments D ON E.DepartmentID = D.DepartmentID;
-- Result: Aisha-IT, Ravi-Sales

-- LEFT JOIN: all employees, department shown if it exists
SELECT E.Name, D.DepartmentName
FROM Employees E
LEFT JOIN Departments D ON E.DepartmentID = D.DepartmentID;
-- Result: Aisha-IT, Ravi-Sales, Chen-NULL

-- RIGHT JOIN: all departments, employee shown if assigned
SELECT E.Name, D.DepartmentName
FROM Employees E
RIGHT JOIN Departments D ON E.DepartmentID = D.DepartmentID;
-- Result: Aisha-IT, Ravi-Sales, NULL-HR

-- FULL JOIN: everything from both sides
SELECT E.Name, D.DepartmentName
FROM Employees E
FULL JOIN Departments D ON E.DepartmentID = D.DepartmentID;
-- Result: Aisha-IT, Ravi-Sales, Chen-NULL, NULL-HR
```

> 💡 **Memory tip:** Picture two overlapping circles (a Venn diagram). `INNER JOIN` = the overlap only. `LEFT JOIN` = the whole left circle. `FULL JOIN` = both circles entirely.

---

## 3. Subqueries

A **subquery** is a query nested inside another query. It runs first, and its result is used by the outer query.

### Types of Subqueries

| Type | Description |
|------|-------------|
| **Scalar subquery** | Returns a single value |
| **Multi-row subquery** | Returns multiple rows, often used with `IN` |
| **Correlated subquery** | References a column from the outer query; runs once per outer row |

### Examples

```sql
-- Scalar subquery: employees earning more than the average salary
SELECT Name, Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees);

-- Multi-row subquery: employees in departments located in 'Bangalore'
SELECT Name
FROM Employees
WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE Location = 'Bangalore');

-- Correlated subquery: employees earning more than their department's average
SELECT E.Name, E.Salary
FROM Employees E
WHERE E.Salary > (
    SELECT AVG(Salary) FROM Employees WHERE DepartmentID = E.DepartmentID
);
```

> 💡 **Tip:** Use a JOIN when you need columns from both tables in the output. Use a subquery when you only need to filter based on another table.

---

## 📝 Summary

- **Set operators** (`UNION`, `UNION ALL`, `INTERSECT`, `EXCEPT`) combine results of multiple queries.
- **Joins** combine columns from related tables: `INNER`, `LEFT`, `RIGHT`, `FULL`, `CROSS`, `SELF`.
- **Subqueries** are queries nested inside another query — scalar, multi-row, or correlated.

---

## ✏️ Assignment: Session 4

Using the `Employees` and `Departments` tables shown above:

1. Write a query using `UNION ALL` to combine the names from `Employees2024` and `Employees2025` **keeping duplicates**.
2. Write an `INNER JOIN` query that lists each employee's name along with their department name.
3. Write a `LEFT JOIN` query that lists **all** employees, showing `NULL` for department if they don't have one.
4. Write a `FULL JOIN` query and explain in one sentence what makes it different from a `LEFT JOIN`.
5. Write a scalar subquery that finds all employees earning **less** than the average salary.
6. **Conceptual:** In your own words, explain when you would choose a `JOIN` over a `subquery`, and give one example scenario for each.

> 📌 **Submission tip:** Save all queries and answers in `session4-assignment.md`.
