# Class 9: Data Types Deep Dive (varchar, int, datetime, etc.)

## 🎯 Learning Objectives
- Understand major SQL Server data types
- Choose the right data type for the right column
- Learn about CREATE TABLE using proper data types

---

## 1. Why Data Types Matter
Every column in a table must have a data type — it defines what kind of data can be stored (numbers, text, dates, etc.) and how much space it uses.

## 2. Numeric Data Types

| Type | Description | Example |
|------|-------------|---------|
| `INT` | Whole numbers (-2B to 2B) | 25, -10, 1000 |
| `BIGINT` | Very large whole numbers | 9223372036854775807 |
| `SMALLINT` | Small whole numbers | 100 |
| `DECIMAL(p,s)` | Exact decimal numbers | `DECIMAL(10,2)` → 12345.67 |
| `FLOAT` | Approximate decimal numbers | 3.14159 |

## 3. Character/String Data Types

| Type | Description | Example |
|------|-------------|---------|
| `CHAR(n)` | Fixed-length text | `CHAR(5)` always uses 5 chars |
| `VARCHAR(n)` | Variable-length text | `VARCHAR(50)` up to 50 chars |
| `VARCHAR(MAX)` | Very long text | For big paragraphs |
| `NVARCHAR(n)` | Variable-length Unicode text | Supports Urdu, Chinese, emojis, etc. |

**Rule of thumb:** Use `VARCHAR` for regular text, `NVARCHAR` when you need multi-language support.

## 4. Date/Time Data Types

| Type | Description | Example |
|------|-------------|---------|
| `DATE` | Date only | 2026-07-17 |
| `TIME` | Time only | 14:30:00 |
| `DATETIME` | Date + time | 2026-07-17 14:30:00 |
| `DATETIME2` | Date + time, more precise | 2026-07-17 14:30:00.1234567 |

## 5. Other Common Types

| Type | Description |
|------|-------------|
| `BIT` | Boolean-like: 0, 1, or NULL |
| `MONEY` | Currency values |

## 6. Putting It Together: CREATE TABLE
```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT,
    City VARCHAR(50),
    EnrollDate DATE,
    IsActive BIT
);
```

- `PRIMARY KEY` → uniquely identifies each row
- `NOT NULL` → this column cannot be left empty

---

## 📝 Homework / Tasks (Class 9)
1. Use `CREATE TABLE` to build a new table called `Products` with columns: ProductID (INT, Primary Key), ProductName (VARCHAR), Price (DECIMAL), InStock (BIT), DateAdded (DATE).
2. Insert 3 sample products into your new table.
3. Explain, in your own words, the difference between CHAR and VARCHAR.
4. Explain when you'd use DATETIME vs DATE.
5. Challenge: What happens if you try to insert text into an INT column? Try it and note the error message.

---
⬅️ **Previous:** [Class 8](08-delete-truncate.md)  |  ➡️ **Next:** [Class 10 - String Functions](10-string-functions.md)
