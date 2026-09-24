# Class 2: What is T-SQL, Basic Syntax & SELECT Statement Basics

## 🎯 Learning Objectives
- Understand what T-SQL is used for
- Learn basic T-SQL syntax rules
- Write your first `SELECT` queries

---

## 1. What is T-SQL?
**T-SQL (Transact-SQL)** is a language used to "talk" to SQL Server — to create, read, update, and delete data.

Categories of SQL commands:
| Category | Full Form | Example Commands |
|----------|-----------|-------------------|
| DQL | Data Query Language | SELECT |
| DML | Data Manipulation Language | INSERT, UPDATE, DELETE |
| DDL | Data Definition Language | CREATE, ALTER, DROP |
| DCL | Data Control Language | GRANT, REVOKE |

We start with **DQL** — reading data using `SELECT`.

## 2. Basic Syntax Rules
- T-SQL is **not case-sensitive** (`SELECT` = `select`), but we write keywords in UPPERCASE for readability.
- Every statement typically ends with a semicolon `;` (good habit, sometimes optional).
- Comments:
  ```sql
  -- this is a single line comment
  /* this is a
     multi-line comment */
  ```

## 3. The SELECT Statement

### Basic Syntax:
```sql
SELECT column1, column2
FROM table_name;
```

### Example: Selecting specific columns
```sql
SELECT Name, City
FROM Students;
```

### Selecting ALL columns
```sql
SELECT *
FROM Students;
```
⚠️ Use `*` only for quick checks — in real projects, always name your columns explicitly (faster & clearer).

### Using Column Aliases (renaming output)
```sql
SELECT Name AS StudentName, City AS Location
FROM Students;
```

### Sample Table for Practice: `Students`

| StudentID | Name | Age | City |
|-----------|------|-----|------|
| 1 | Aisha | 20 | Lahore |
| 2 | Bilal | 22 | Karachi |
| 3 | Sara | 21 | Islamabad |
| 4 | Omar | 19 | Lahore |

### Query Example:
```sql
SELECT Name, Age
FROM Students;
```
**Result:**

| Name | Age |
|------|-----|
| Aisha | 20 |
| Bilal | 22 |
| Sara | 21 |
| Omar | 19 |

---

## 📝 Homework / Tasks (Class 2)
1. Create a database called `SchoolDB` using SSMS (right-click Databases → New Database).
2. Create a `Students` table (we'll formally learn CREATE TABLE later — for now, use the SSMS GUI: right-click Tables → New Table) with columns: StudentID, Name, Age, City.
3. Write a query to select only `Name` and `City` from your `Students` table.
4. Write a query that selects all columns using `*`.
5. Write a query that renames `Name` column output to `Full Name` using an alias.

---
⬅️ **Previous:** [Class 1](01-intro-to-databases-rdbms.md)  |  ➡️ **Next:** [Class 3 - WHERE & Comparison Operators](03-where-comparison-operators.md)
