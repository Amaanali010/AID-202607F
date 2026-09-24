# Class 6: INSERT Statement

## 🎯 Learning Objectives
- Add new rows of data into a table using `INSERT INTO`
- Insert full rows and partial rows
- Insert multiple rows at once

---

## 1. Basic INSERT Syntax
```sql
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```

### Example:
```sql
INSERT INTO Students (StudentID, Name, Age, City)
VALUES (5, 'Hina', 23, 'Multan');
```

## 2. Inserting Without Specifying Columns
If you provide values for **all** columns, in the correct order, you can skip naming them:
```sql
INSERT INTO Students
VALUES (6, 'Zain', 24, 'Peshawar');
```
⚠️ Risky — if table structure changes, this can insert data incorrectly. Best practice: **always name your columns.**

## 3. Inserting a Row with a Missing Value (NULL)
```sql
INSERT INTO Students (StudentID, Name, City)
VALUES (7, 'Nadia', 'Quetta');
```
Here, `Age` was not provided, so it becomes `NULL` (assuming the column allows NULLs).

## 4. Inserting Multiple Rows at Once
```sql
INSERT INTO Students (StudentID, Name, Age, City)
VALUES 
    (8, 'Kamran', 20, 'Lahore'),
    (9, 'Fatima', 22, 'Karachi'),
    (10, 'Ali', 21, 'Islamabad');
```

## 5. Verifying Your Insert
Always check your work:
```sql
SELECT * FROM Students;
```

---

## 📝 Homework / Tasks (Class 6)
1. Insert one new student with all column values filled in.
2. Insert one new student where the `Age` column is left out (resulting in NULL).
3. Insert 3 students in a single `INSERT` statement using multiple `VALUES`.
4. Run `SELECT * FROM Students` and screenshot the final table.
5. Challenge: What error do you think you'd get if you tried to insert a StudentID that already exists (if StudentID is a Primary Key)? Try it and explain the result.

---
⬅️ **Previous:** [Class 5](05-working-with-null.md)  |  ➡️ **Next:** [Class 7 - UPDATE Statement](07-update-statement.md)
