# Class 5: Working with NULL, IS NULL / IS NOT NULL

## 🎯 Learning Objectives
- Understand what NULL means in SQL
- Correctly check for NULL values
- Avoid common NULL mistakes

---

## 1. What is NULL?
`NULL` means **no value** / **unknown** / **missing data**. It is NOT the same as:
- `0` (zero)
- `''` (empty string)
- `'NULL'` (the text word "null")

NULL simply means "we don't know" or "nothing was entered."

### Example Table: `Students`

| StudentID | Name | Age | City |
|-----------|------|-----|------|
| 1 | Aisha | 20 | Lahore |
| 2 | Bilal | NULL | Karachi |
| 3 | Sara | 21 | NULL |
| 4 | Omar | 19 | Lahore |

Here, Bilal's age is unknown, and Sara's city is unknown.

## 2. Why Can't We Use `= NULL`?
```sql
-- ❌ WRONG - this will NOT work as expected
SELECT * FROM Students WHERE Age = NULL;
```
This returns **nothing**, because NULL cannot be compared using `=`. NULL is not "equal" to anything, even another NULL.

## 3. The Correct Way: IS NULL / IS NOT NULL

### Find rows WHERE a column IS NULL:
```sql
SELECT Name, Age
FROM Students
WHERE Age IS NULL;
```
Result: Bilal

### Find rows WHERE a column IS NOT NULL:
```sql
SELECT Name, City
FROM Students
WHERE City IS NOT NULL;
```
Result: Aisha, Bilal, Omar

## 4. Handling NULL in Output: ISNULL() and COALESCE()

### ISNULL() — replace NULL with a default value
```sql
SELECT Name, ISNULL(Age, 0) AS Age
FROM Students;
```
This shows `0` instead of NULL for Bilal.

### COALESCE() — returns the first non-NULL value from a list
```sql
SELECT Name, COALESCE(City, 'Unknown') AS City
FROM Students;
```

---

## 📝 Homework / Tasks (Class 5)
1. Insert (via SSMS GUI) 2 new students where Age or City is left blank/NULL.
2. Write a query to find all students where City IS NULL.
3. Write a query to find all students where Age IS NOT NULL.
4. Write a query using `ISNULL()` to replace NULL cities with the text `'Not Provided'`.
5. Challenge: Why does `WHERE Age = NULL` return zero rows even if NULL values exist? Explain in your own words.

---
⬅️ **Previous:** [Class 4](04-orderby-top-distinct.md)  |  ➡️ **Next:** [Class 6 - INSERT Statement](06-insert-statement.md)
