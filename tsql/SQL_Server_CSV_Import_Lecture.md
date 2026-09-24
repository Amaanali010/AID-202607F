# Import CSV File into SQL Server

This lecture explains how to import a CSV file into **SQL Server** using **SQL Server Management Studio (SSMS)**. It covers the easiest beginner-friendly method as well as importing data with SQL using `BULK INSERT`.

---

## 📌 What is a CSV File?

**CSV** stands for **Comma-Separated Values**. It is a simple file format commonly used to store tabular data.

Example CSV data:

```csv
customer_id,product_id,quantity,unit_price,total_amount,sale_date,payment_method
1,101,2,500,1000,2026-08-08,Cash
2,105,1,1500,1500,2026-08-08,Card
3,102,3,300,900,2026-08-07,Online
```

Each row represents a record, while each comma-separated value represents a column.

---

# Method 1: Import CSV Using SSMS

For beginners, the easiest way to import a CSV file into SQL Server is through **SQL Server Management Studio (SSMS)**.

## Step 1: Create a Database

First, create a database named `SalesDB`.

```sql
CREATE DATABASE SalesDB;
GO

USE SalesDB;
GO
```

### Explanation

- `CREATE DATABASE SalesDB;` creates a new database.
- `USE SalesDB;` selects the database so that the following SQL commands are executed inside it.
- `GO` separates SQL batches in SSMS.

---

## Step 2: Create the Sales Table

Before importing the CSV, create a table that matches the CSV columns.

```sql
CREATE TABLE sales (
    sale_id INT IDENTITY(1,1) PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    total_amount DECIMAL(10,2),
    sale_date DATE,
    payment_method VARCHAR(50)
);
```

### Explanation of Columns

| Column | Data Type | Description |
|---|---|---|
| `sale_id` | `INT` | Unique ID automatically generated for each sale |
| `customer_id` | `INT` | ID of the customer |
| `product_id` | `INT` | ID of the product |
| `quantity` | `INT` | Number of products sold |
| `unit_price` | `DECIMAL(10,2)` | Price of one product |
| `total_amount` | `DECIMAL(10,2)` | Total amount of the sale |
| `sale_date` | `DATE` | Date when the sale occurred |
| `payment_method` | `VARCHAR(50)` | Payment method such as Cash, Card, or Online |

> **Note:** `sale_id` is not included in the CSV because SQL Server automatically generates it using `IDENTITY(1,1)`.

---

## Step 3: Import the CSV File

Now import your CSV file using SSMS.

### Steps in SSMS

1. Open **SQL Server Management Studio (SSMS)**.
2. Connect to your SQL Server.
3. Find your database named **SalesDB**.
4. Right-click **SalesDB**.
5. Select **Tasks**.
6. Select **Import Flat File**.
7. Select your `.csv` file.
8. SSMS will detect the CSV columns automatically.
9. Review and correct the column data types if necessary.
10. Select the target database/table.
11. Complete the import process by clicking **Finish**.

After the import is complete, your CSV data should be available in the `sales` table.

---

## Step 4: Check the Imported Data

Run the following query:

```sql
SELECT * FROM sales;
```

You should see records similar to:

| sale_id | customer_id | product_id | quantity | unit_price | total_amount | sale_date | payment_method |
|---:|---:|---:|---:|---:|---:|---|---|
| 1 | 1 | 101 | 2 | 500.00 | 1000.00 | 2026-08-08 | Cash |
| 2 | 2 | 105 | 1 | 1500.00 | 1500.00 | 2026-08-08 | Card |
| 3 | 3 | 102 | 3 | 300.00 | 900.00 | 2026-08-07 | Online |

---

# Method 2: Import CSV Using SQL

Another way to import a CSV file is by using the SQL Server `BULK INSERT` command.

This method is useful when you want to import data using SQL instead of the SSMS graphical interface.

## BULK INSERT Example

```sql
BULK INSERT sales
FROM 'C:\Users\YourName\Downloads\sales.csv'
WITH (
    FORMAT = 'CSV',
    FIRSTROW = 2,
    FIELDQUOTE = '"',
    ROWTERMINATOR = '0x0a',
    TABLOCK
);
```

---

## Understanding BULK INSERT Options

### `BULK INSERT sales`

Specifies the table where the CSV data will be inserted.

```sql
BULK INSERT sales
```

### `FROM`

Specifies the location of the CSV file.

```sql
FROM 'C:\Users\YourName\Downloads\sales.csv'
```

Replace the example path with the actual path of your CSV file.

### `FORMAT = 'CSV'`

Tells SQL Server that the source file is a CSV file.

```sql
FORMAT = 'CSV'
```

### `FIRSTROW = 2`

Skips the first row of the CSV because it contains column names.

```csv
customer_id,product_id,quantity,unit_price,total_amount,sale_date,payment_method
```

Therefore:

```sql
FIRSTROW = 2
```

starts importing from the second row.

### `FIELDQUOTE = '"'`

Specifies that double quotes can be used to surround CSV fields.

```sql
FIELDQUOTE = '"'
```

### `ROWTERMINATOR = '0x0a'`

Specifies the character used to identify the end of a row.

```sql
ROWTERMINATOR = '0x0a'
```

### `TABLOCK`

Requests a table-level lock during the bulk operation and can improve bulk-loading performance.

```sql
TABLOCK
```

---

# Check the Imported Data

After using `BULK INSERT`, run:

```sql
SELECT * FROM sales;
```

If the import was successful, the CSV records will appear in the `sales` table.

---

# ⚠️ Important: CSV File Path and Permissions

When using `BULK INSERT`, the CSV file path must be accessible to the **SQL Server service**.

For example:

```sql
FROM 'C:\Users\YourName\Downloads\sales.csv'
```

may produce a path or permission error depending on where SQL Server is running and which account the SQL Server service uses.

This is one reason why **Import Flat File in SSMS is generally easier for beginners**.

---

# Common Problems

## 1. File Not Found

You may get an error if the file path is incorrect.

Check:

- The CSV file exists.
- The path is correct.
- The filename and extension are correct.
- SQL Server can access the specified location.

---

## 2. Permission Error

SQL Server may not have permission to access the folder containing the CSV file.

Make sure the SQL Server service account has appropriate access to the file/location.

---

## 3. Data Type Problems

Make sure your CSV values match the SQL Server table data types.

For example:

```text
quantity → INT
unit_price → DECIMAL(10,2)
sale_date → DATE
```

Invalid values can cause import errors.

---

## 4. Header Row Imported as Data

If you are using `BULK INSERT` and your CSV has a header row, use:

```sql
FIRSTROW = 2
```

This tells SQL Server to skip the header.

---

# Complete Example

Here is the complete SQL setup:

```sql
-- Create database
CREATE DATABASE SalesDB;
GO

-- Select database
USE SalesDB;
GO

-- Create sales table
CREATE TABLE sales (
    sale_id INT IDENTITY(1,1) PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    total_amount DECIMAL(10,2),
    sale_date DATE,
    payment_method VARCHAR(50)
);
GO

-- Import CSV
BULK INSERT sales
FROM 'C:\Users\YourName\Downloads\sales.csv'
WITH (
    FORMAT = 'CSV',
    FIRSTROW = 2,
    FIELDQUOTE = '"',
    ROWTERMINATOR = '0x0a',
    TABLOCK
);
GO

-- View imported data
SELECT * FROM sales;
```

---

# 🎯 Which Method Should You Use?

| Method | Difficulty | Best For |
|---|---|---|
| **Import Flat File (SSMS)** | ⭐ Easy | Beginners |
| **BULK INSERT** | ⭐⭐ Medium | SQL-based imports and automation |

### Recommendation

If you are learning SQL Server, start with **Import Flat File in SSMS**.

Once you understand the process, learn `BULK INSERT` because it gives you more control and is useful for repeated or automated data imports.

---

# 📝 Quick Revision

Remember these important points:

- **CSV** means Comma-Separated Values.
- **SSMS** provides an easy graphical way to import CSV files.
- Create the database and table before importing when using a predefined schema.
- **Import Flat File** is beginner-friendly.
- `BULK INSERT` allows CSV import using SQL.
- `FIRSTROW = 2` skips the CSV header.
- Check the imported records using:

```sql
SELECT * FROM sales;
```

- When using `BULK INSERT`, make sure SQL Server can access the CSV file path.

---

## Practice Task

Create a database named `SalesDB`, create the `sales` table, and import the following CSV data:

```csv
customer_id,product_id,quantity,unit_price,total_amount,sale_date,payment_method
1,101,2,500,1000,2026-08-08,Cash
2,105,1,1500,1500,2026-08-08,Card
3,102,3,300,900,2026-08-07,Online
```

Then run:

```sql
SELECT * FROM sales;
```

Try importing the same CSV using both:

1. **Import Flat File in SSMS**
2. **BULK INSERT**

This will help you understand both methods.
