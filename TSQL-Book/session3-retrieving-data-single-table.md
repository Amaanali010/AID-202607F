# Session 3: Retrieving Data from a Single Table

## 🎯 Learning Objectives
By the end of this session, you will be able to:
- Explain the elements in a `SELECT` statement of T-SQL
- Describe options used in `SELECT` statements to achieve specific functionality
- Describe the `ORDER BY` clause
- Explain different clauses and predicates used to filter data
- Explain the working of logical operators in `SELECT` statements

---

## 1. Elements of a `SELECT` Statement

The `SELECT` statement retrieves data from a table. Here is its general structure:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
GROUP BY column
HAVING condition
ORDER BY column;
```

### Sample table: `Employees`

| EmployeeID | Name  | Department | Salary | HireDate |
|-----------|-------|------------|--------|----------|
| 1 | Aisha | IT | 60000 | 2022-01-10 |
| 2 | Ravi | Sales | 45000 | 2021-06-15 |
| 3 | Chen | IT | 72000 | 2020-03-22 |
| 4 | Maria | HR | 50000 | 2023-02-01 |

### Basic example
```sql
SELECT Name, Salary
FROM Employees;
```
**Result:** Returns just the `Name` and `Salary` columns for every row.

---

## 2. Useful `SELECT` Options

| Option | Purpose | Example |
|--------|---------|---------|
| `*` | Select all columns | `SELECT * FROM Employees;` |
| `DISTINCT` | Remove duplicate rows | `SELECT DISTINCT Department FROM Employees;` |
| `TOP n` | Limit number of rows returned | `SELECT TOP 2 * FROM Employees;` |
| `AS` | Rename a column (alias) | `SELECT Name AS EmployeeName FROM Employees;` |

### Example
```sql
SELECT DISTINCT Department
FROM Employees;
```
**Result:** IT, Sales, HR (no duplicates)

---

## 3. The `ORDER BY` Clause

`ORDER BY` sorts the result set.

| Keyword | Meaning |
|---------|---------|
| `ASC` | Ascending order (default) |
| `DESC` | Descending order |

### Example
```sql
SELECT Name, Salary
FROM Employees
ORDER BY Salary DESC;
```
**Result:** Employees sorted from highest to lowest salary.

You can also sort by multiple columns:
```sql
SELECT Name, Department, Salary
FROM Employees
ORDER BY Department ASC, Salary DESC;
```

---

## 4. Filtering Data: Clauses and Predicates

### `WHERE` Clause
Filters rows **before** grouping.
```sql
SELECT * FROM Employees
WHERE Department = 'IT';
```

### Common Predicates

| Predicate | Purpose | Example |
|-----------|---------|---------|
| `=`, `<>`, `>`, `<` | Comparison | `WHERE Salary > 50000` |
| `BETWEEN` | Range check | `WHERE Salary BETWEEN 40000 AND 60000` |
| `IN` | Match any value in a list | `WHERE Department IN ('IT', 'HR')` |
| `LIKE` | Pattern matching | `WHERE Name LIKE 'A%'` (starts with A) |
| `IS NULL` / `IS NOT NULL` | Check for missing values | `WHERE HireDate IS NULL` |

### Example
```sql
SELECT Name, Department
FROM Employees
WHERE Department IN ('IT', 'Sales')
  AND Salary > 45000;
```

### `LIKE` wildcards

| Wildcard | Meaning | Example |
|----------|---------|---------|
| `%` | Any number of characters | `'A%'` matches Aisha, Amit |
| `_` | Exactly one character | `'C_en'` matches Chen |

---

## 5. Logical Operators in `SELECT`

| Operator | Purpose | Example |
|----------|---------|---------|
| `AND` | Both conditions must be true | `WHERE Dept='IT' AND Salary>50000` |
| `OR` | At least one condition must be true | `WHERE Dept='IT' OR Dept='HR'` |
| `NOT` | Negates a condition | `WHERE NOT Dept='Sales'` |

### Example combining everything
```sql
SELECT TOP 3 Name, Department, Salary
FROM Employees
WHERE Salary > 40000
  AND (Department = 'IT' OR Department = 'HR')
ORDER BY Salary DESC;
```

---

## 📝 Summary

- `SELECT` retrieves specific columns; `*` retrieves all columns.
- `DISTINCT` removes duplicates; `TOP` limits row count; `AS` renames columns.
- `ORDER BY` sorts results (`ASC`/`DESC`).
- `WHERE` filters rows using predicates like `BETWEEN`, `IN`, `LIKE`, and `IS NULL`.
- Logical operators (`AND`, `OR`, `NOT`) combine multiple conditions.

---

## ✏️ Assignment: Session 3

Using the `Employees` table shown above, write T-SQL queries for the following:

1. Select the `Name` and `Department` of all employees, removing any duplicate department values shown as a separate query (`DISTINCT` on Department only).
2. Select all columns of employees who work in the `IT` department, sorted by `Salary` descending.
3. Select the `Name` and `Salary` of employees whose salary is between 45,000 and 65,000.
4. Select all employees whose name starts with the letter "A" or "C" using `LIKE`.
5. Select the top 2 highest-paid employees, showing only `Name` and `Salary`, with the column `Salary` renamed to `AnnualPay`.
6. Write a query using `AND`/`OR`/`NOT` to find employees who are **not** in the Sales department **and** earn more than 48,000.

> 📌 **Submission tip:** Save all 6 queries with comments explaining each in `session3-assignment.md`.
