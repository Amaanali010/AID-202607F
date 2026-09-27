# Session 2: Getting Familiar with T-SQL Language Elements

## 🎯 Learning Objectives
By the end of this session, you will be able to:
- Explain the data types in T-SQL
- Identify the operators
- Identify the usage of block comments
- Describe the use of statements such as `GO` and `USE`
- Describe expressions
- Explain how to handle control of flow, errors, and transactions

---

## 1. Data Types in T-SQL

A **data type** defines what kind of value a column or variable can hold.

| Category | Data Types | Example |
|----------|-----------|---------|
| **Numeric** | `INT`, `BIGINT`, `DECIMAL`, `FLOAT`, `MONEY` | `Age INT`, `Price DECIMAL(10,2)` |
| **Character/String** | `CHAR`, `VARCHAR`, `NVARCHAR`, `TEXT` | `Name VARCHAR(50)` |
| **Date/Time** | `DATE`, `TIME`, `DATETIME`, `DATETIME2` | `BirthDate DATE` |
| **Boolean-like** | `BIT` (0 = false, 1 = true) | `IsActive BIT` |
| **Binary** | `BINARY`, `VARBINARY` | Used for images, files |

### Example
```sql
CREATE TABLE Products (
    ProductID INT,
    ProductName VARCHAR(100),
    Price DECIMAL(10,2),
    InStock BIT,
    DateAdded DATE
);
```

> 💡 **Tip:** Use `VARCHAR` instead of `CHAR` when text length varies (it saves space).

---

## 2. Operators in T-SQL

Operators let you perform actions on values.

| Type | Operators | Example |
|------|-----------|---------|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%` | `SELECT 10 + 5;` |
| **Comparison** | `=`, `<>`, `>`, `<`, `>=`, `<=` | `WHERE Age > 18` |
| **Logical** | `AND`, `OR`, `NOT` | `WHERE Age > 18 AND City = 'Delhi'` |
| **Assignment** | `=` | `SET @Total = 100` |

### Example
```sql
SELECT ProductName, Price
FROM Products
WHERE Price > 500 AND InStock = 1;
```

---

## 3. Comments in T-SQL

Comments are notes in code that SQL Server ignores when running the script. They help explain what the code does.

| Type | Syntax | Example |
|------|--------|---------|
| **Single-line comment** | `--` | `-- This is a comment` |
| **Block comment** | `/* ... */` | `/* This is a multi-line comment */` |

### Example
```sql
/*
This script creates the Products table
and inserts one sample record.
*/
CREATE TABLE Products (...);  -- create table
INSERT INTO Products VALUES (...);  -- insert sample data
```

---

## 4. `GO` and `USE` Statements

- **`USE`**: Switches the active database you are working in.
- **`GO`**: Signals the end of a batch of T-SQL statements, telling SSMS to send everything before it to the server for execution.

### Example
```sql
USE SchoolDB;
GO

SELECT * FROM Students;
GO
```

> 💡 **Note:** `GO` is not a T-SQL command itself — it's a signal understood by tools like SSMS to separate batches.

---

## 5. Expressions

An **expression** is a combination of values, operators, and functions that evaluates to a single value.

### Examples
```sql
SELECT 5 + 3;                     -- Numeric expression → 8
SELECT 'Hello' + ' ' + 'World';   -- String expression → Hello World
SELECT GETDATE();                 -- Function expression → current date/time
SELECT Price * 1.18 AS PriceWithTax FROM Products;  -- Column expression
```

---

## 6. Control of Flow

Control-of-flow statements let you control the order in which T-SQL statements execute.

| Statement | Purpose |
|-----------|---------|
| `IF...ELSE` | Conditional execution |
| `WHILE` | Loop while a condition is true |
| `BEGIN...END` | Groups multiple statements together |
| `BREAK` / `CONTINUE` | Exit or skip a loop iteration |

### Example
```sql
DECLARE @Count INT = 1;

WHILE @Count <= 5
BEGIN
    PRINT 'Count is: ' + CAST(@Count AS VARCHAR);
    SET @Count = @Count + 1;
END
```

---

## 7. Error Handling

T-SQL uses `TRY...CATCH` blocks to handle errors gracefully instead of letting the script crash.

### Example
```sql
BEGIN TRY
    SELECT 10 / 0;  -- This will cause an error
END TRY
BEGIN CATCH
    PRINT 'An error occurred: ' + ERROR_MESSAGE();
END CATCH
```

---

## 8. Transactions

A **transaction** is a group of operations that must all succeed together, or none of them happen. This keeps data consistent.

| Command | Purpose |
|---------|---------|
| `BEGIN TRANSACTION` | Start a transaction |
| `COMMIT` | Save all changes made in the transaction |
| `ROLLBACK` | Undo all changes made in the transaction |

### Example
```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;

COMMIT; -- Save changes
-- If something went wrong, we would use ROLLBACK; instead
```

> 💡 **Real-world analogy:** Transferring money between bank accounts — both the withdrawal and deposit must succeed, or neither should happen.

---

## 📝 Summary

- T-SQL supports numeric, string, date/time, boolean-like, and binary **data types**.
- **Operators** perform arithmetic, comparison, and logical operations.
- **Comments** (`--` and `/* */`) document code without affecting execution.
- **`USE`** switches databases; **`GO`** separates batches.
- **Expressions** combine values/operators/functions into a single result.
- **Control-of-flow** statements (`IF`, `WHILE`) direct execution order.
- **`TRY...CATCH`** handles errors; **transactions** ensure data consistency.

---

## ✏️ Assignment: Session 2

1. **Data Types:** Create a table called `Employees` with columns for `EmployeeID` (integer), `FullName` (text, max 100 characters), `Salary` (decimal with 2 decimal places), `IsManager` (true/false), and `HireDate` (date). Write the full `CREATE TABLE` statement.
2. **Operators:** Write a query that selects employees from the `Employees` table where `Salary` is greater than 50000 **and** `IsManager` is true.
3. **Comments:** Rewrite the query from Question 2, adding a block comment above it explaining what it does.
4. **Control of Flow:** Write a `WHILE` loop that prints the numbers 10 down to 1.
5. **Error Handling:** Write a `TRY...CATCH` block that attempts to insert a duplicate `EmployeeID` and prints a friendly error message if it fails.
6. **Transactions:** Explain in 2-3 sentences why you would use `BEGIN TRANSACTION` and `ROLLBACK` when transferring money between two bank accounts.

> 📌 **Submission tip:** Save your SQL code and answers in `session2-assignment.md`.
