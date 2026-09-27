# Session 6: Working with Built-in Functions

## 🎯 Learning Objectives
By the end of this session, you will be able to:
- List different types of built-in functions in T-SQL
- Describe the purpose of the built-in functions
- Explain the working of the built-in functions

---

## 1. What is a Built-in Function?

A **built-in function** is a ready-made piece of code provided by SQL Server that performs a specific task — such as calculating, formatting, or transforming data — without you having to write the logic yourself.

### Categories of Built-in Functions

| Category | Purpose |
|----------|---------|
| **String functions** | Work with text data |
| **Date/Time functions** | Work with dates and times |
| **Mathematical functions** | Perform calculations |
| **Aggregate functions** | Summarize data across multiple rows |
| **Conversion functions** | Convert between data types |
| **Logical functions** | Return values based on conditions |

---

## 2. String Functions

| Function | Purpose | Example | Result |
|----------|---------|---------|--------|
| `UPPER()` | Converts to uppercase | `UPPER('hello')` | `HELLO` |
| `LOWER()` | Converts to lowercase | `LOWER('HELLO')` | `hello` |
| `LEN()` | Returns string length | `LEN('hello')` | `5` |
| `SUBSTRING()` | Extracts part of a string | `SUBSTRING('hello', 2, 3)` | `ell` |
| `CONCAT()` | Joins strings together | `CONCAT('Hello', ' ', 'World')` | `Hello World` |
| `TRIM()` | Removes leading/trailing spaces | `TRIM('  hi  ')` | `hi` |
| `REPLACE()` | Replaces part of a string | `REPLACE('hello', 'l', 'L')` | `heLLo` |

### Example
```sql
SELECT UPPER(Name) AS NameUpper, LEN(Name) AS NameLength
FROM Employees;
```

---

## 3. Date and Time Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `GETDATE()` | Returns current date and time | `SELECT GETDATE();` |
| `DATEADD()` | Adds an interval to a date | `DATEADD(DAY, 7, GETDATE())` |
| `DATEDIFF()` | Difference between two dates | `DATEDIFF(DAY, HireDate, GETDATE())` |
| `YEAR()` / `MONTH()` / `DAY()` | Extracts part of a date | `YEAR(HireDate)` |
| `FORMAT()` | Formats a date as text | `FORMAT(GETDATE(), 'dd-MM-yyyy')` |

### Example
```sql
SELECT Name, HireDate, DATEDIFF(YEAR, HireDate, GETDATE()) AS YearsEmployed
FROM Employees;
```

---

## 4. Mathematical Functions

| Function | Purpose | Example | Result |
|----------|---------|---------|--------|
| `ROUND()` | Rounds a number | `ROUND(15.456, 2)` | `15.46` |
| `ABS()` | Absolute (positive) value | `ABS(-10)` | `10` |
| `CEILING()` | Rounds up | `CEILING(4.1)` | `5` |
| `FLOOR()` | Rounds down | `FLOOR(4.9)` | `4` |
| `POWER()` | Raises to a power | `POWER(2, 3)` | `8` |
| `SQRT()` | Square root | `SQRT(16)` | `4` |

### Example
```sql
SELECT ProductName, ROUND(Price, 1) AS RoundedPrice
FROM Products;
```

---

## 5. Aggregate Functions

Aggregate functions summarize data across **multiple rows**, usually with `GROUP BY`.

| Function | Purpose |
|----------|---------|
| `COUNT()` | Counts rows |
| `SUM()` | Adds up values |
| `AVG()` | Calculates the average |
| `MIN()` | Finds the smallest value |
| `MAX()` | Finds the largest value |

### Example
```sql
SELECT Department, COUNT(*) AS EmployeeCount, AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department;
```

> 💡 **Tip:** When using aggregate functions with other columns, you must use `GROUP BY` on the non-aggregated columns.

---

## 6. Conversion Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `CAST()` | Converts data type (ANSI standard) | `CAST(Salary AS VARCHAR)` |
| `CONVERT()` | Converts data type (SQL Server specific, supports formatting) | `CONVERT(VARCHAR, GETDATE(), 103)` |

### Example
```sql
SELECT CAST(Price AS INT) AS RoundedPrice
FROM Products;

SELECT CONVERT(VARCHAR, HireDate, 103) AS FormattedDate
FROM Employees;
```

---

## 7. Logical Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `CASE` | Returns different values based on conditions | See below |
| `ISNULL()` | Replaces `NULL` with a specified value | `ISNULL(Bonus, 0)` |
| `COALESCE()` | Returns the first non-`NULL` value from a list | `COALESCE(Bonus, DefaultBonus, 0)` |

### `CASE` Example
```sql
SELECT Name, Salary,
    CASE
        WHEN Salary >= 60000 THEN 'High'
        WHEN Salary >= 45000 THEN 'Medium'
        ELSE 'Low'
    END AS SalaryBand
FROM Employees;
```

### `ISNULL` vs `COALESCE`
```sql
SELECT Name, ISNULL(Bonus, 0) AS BonusAmount FROM Employees;
SELECT Name, COALESCE(Bonus, 500) AS BonusAmount FROM Employees;
```

---

## 📝 Summary

- **String functions** manipulate text (`UPPER`, `LEN`, `SUBSTRING`, `CONCAT`).
- **Date/time functions** work with dates (`GETDATE`, `DATEADD`, `DATEDIFF`).
- **Mathematical functions** perform calculations (`ROUND`, `ABS`, `POWER`).
- **Aggregate functions** summarize data across rows (`COUNT`, `SUM`, `AVG`).
- **Conversion functions** change data types (`CAST`, `CONVERT`).
- **Logical functions** return conditional results (`CASE`, `ISNULL`, `COALESCE`).

---

## ✏️ Assignment: Session 6

Using the `Employees` and `Products` tables from earlier sessions:

1. Write a query that shows each employee's name in uppercase along with the length of their name.
2. Write a query that shows each employee's `HireDate` and how many years they have been employed (as of today).
3. Write a query that rounds all product prices to the nearest whole number.
4. Write a query that groups employees by `Department` and shows the count of employees and average salary per department.
5. Write a `CASE` statement that labels each employee's salary as `'High'`, `'Medium'`, or `'Low'` based on thresholds of your choice.
6. **Conceptual:** Explain the difference between `ISNULL()` and `COALESCE()`, including one scenario where `COALESCE()` would be more useful.

> 📌 **Submission tip:** Save all queries and answers in `session6-assignment.md`.
