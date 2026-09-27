# Session 5: Modifying Data Using T-SQL

## 🎯 Learning Objectives
By the end of this session, you will be able to:
- Explain how to insert data into a table
- Describe how to modify data in a table
- Identify ways to delete data from a table
- Describe how to merge data from tables

---

## 1. Inserting Data: `INSERT`

The `INSERT` statement adds new rows to a table.

### Sample table: `Products`

| ProductID | ProductName | Price | Stock |
|-----------|-------------|-------|-------|
| (empty table to start) | | | |

### Basic Insert
```sql
INSERT INTO Products (ProductID, ProductName, Price, Stock)
VALUES (1, 'Notebook', 50.00, 100);
```

### Inserting Multiple Rows
```sql
INSERT INTO Products (ProductID, ProductName, Price, Stock)
VALUES
    (2, 'Pen', 10.00, 500),
    (3, 'Eraser', 5.00, 300);
```

### Inserting Data from Another Table
```sql
INSERT INTO ArchivedProducts (ProductID, ProductName)
SELECT ProductID, ProductName FROM Products WHERE Stock = 0;
```

> 💡 **Tip:** If you list all columns in the same order as the table, you can skip the column names — but it's best practice to always specify them for clarity.

---

## 2. Modifying Data: `UPDATE`

The `UPDATE` statement changes existing data in a table.

### Syntax
```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### Example
```sql
UPDATE Products
SET Price = 55.00
WHERE ProductID = 1;
```

### Updating Multiple Columns
```sql
UPDATE Products
SET Price = Price * 1.10, Stock = Stock - 10
WHERE ProductID = 2;
```

> ⚠️ **Warning:** Always use a `WHERE` clause with `UPDATE`. Without it, **every row** in the table gets updated!

```sql
-- ❌ DANGEROUS: updates ALL products' price to 0
UPDATE Products SET Price = 0;
```

---

## 3. Deleting Data: `DELETE` and `TRUNCATE`

### `DELETE`
Removes specific rows based on a condition. Can be rolled back if inside a transaction.
```sql
DELETE FROM Products
WHERE Stock = 0;
```

### `TRUNCATE`
Removes **all** rows from a table quickly. Faster than `DELETE`, but cannot target specific rows and typically can't be filtered.
```sql
TRUNCATE TABLE Products;
```

### `DELETE` vs `TRUNCATE`

| Feature | `DELETE` | `TRUNCATE` |
|---------|----------|------------|
| Can use `WHERE`? | Yes | No |
| Speed | Slower (logs each row) | Faster (logs minimal info) |
| Resets identity counter? | No | Yes |
| Can be rolled back? | Yes (in a transaction) | Yes, but behavior varies by system |

> ⚠️ **Warning:** Like `UPDATE`, always double-check your `WHERE` clause before running `DELETE`.

---

## 4. Merging Data: `MERGE`

The `MERGE` statement combines `INSERT`, `UPDATE`, and `DELETE` into a single statement. It's useful for **syncing** two tables — for example, updating a target table based on changes in a source table.

### Syntax Overview
```sql
MERGE INTO target_table AS Target
USING source_table AS Source
ON Target.ID = Source.ID
WHEN MATCHED THEN
    UPDATE SET Target.Column1 = Source.Column1
WHEN NOT MATCHED BY TARGET THEN
    INSERT (ID, Column1) VALUES (Source.ID, Source.Column1)
WHEN NOT MATCHED BY SOURCE THEN
    DELETE;
```

### Example: Syncing `Products` with `NewStock`

**NewStock** (incoming data)

| ProductID | ProductName | Price | Stock |
|-----------|-------------|-------|-------|
| 1 | Notebook | 55.00 | 90 |
| 4 | Marker | 15.00 | 200 |

```sql
MERGE INTO Products AS Target
USING NewStock AS Source
ON Target.ProductID = Source.ProductID
WHEN MATCHED THEN
    UPDATE SET Target.Price = Source.Price, Target.Stock = Source.Stock
WHEN NOT MATCHED BY TARGET THEN
    INSERT (ProductID, ProductName, Price, Stock)
    VALUES (Source.ProductID, Source.ProductName, Source.Price, Source.Stock);
```

**What happens:**
- Product 1 (Notebook) already exists → gets **updated**
- Product 4 (Marker) doesn't exist → gets **inserted**

> 💡 **Real-world use case:** Nightly jobs that sync data from a sales system into a reporting database often use `MERGE`.

---

## 📝 Summary

- `INSERT` adds new rows (single, multiple, or from another table).
- `UPDATE` modifies existing rows — always use `WHERE` to avoid accidental full-table updates.
- `DELETE` removes specific rows; `TRUNCATE` removes all rows quickly.
- `MERGE` combines insert/update/delete logic to sync two tables in one statement.

---

## ✏️ Assignment: Session 5

Using the `Products` table structure shown above:

1. Write an `INSERT` statement to add 3 new products of your choice.
2. Write an `UPDATE` statement that increases the price of all products with `Stock` greater than 100 by 5%.
3. Write a `DELETE` statement that removes all products with `Stock = 0`.
4. Explain in 2-3 sentences the key differences between `DELETE` and `TRUNCATE`, including when you would choose one over the other.
5. Using the `NewStock` example above, write your own `MERGE` statement that also **deletes** target rows not present in the source (`WHEN NOT MATCHED BY SOURCE THEN DELETE`).
6. **Reflection:** Why is it risky to run `UPDATE` or `DELETE` without a `WHERE` clause? Describe a real-world consequence this could cause.

> 📌 **Submission tip:** Save all queries and answers in `session5-assignment.md`.
