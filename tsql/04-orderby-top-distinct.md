# Class 4: Sorting with ORDER BY, TOP, and DISTINCT

## 🎯 Learning Objectives
- Sort query results using `ORDER BY`
- Limit results using `TOP`
- Remove duplicates using `DISTINCT`

---

## 1. ORDER BY — Sorting Results

### Syntax:
```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 [ASC|DESC];
```
- `ASC` = ascending (default, smallest → largest / A → Z)
- `DESC` = descending (largest → smallest / Z → A)

### Example:
```sql
SELECT Name, Age
FROM Students
ORDER BY Age ASC;
```

```sql
SELECT Name, Age
FROM Students
ORDER BY Age DESC;
```

### Sorting by multiple columns:
```sql
SELECT Name, City, Age
FROM Students
ORDER BY City ASC, Age DESC;
```
This sorts by City first, then by Age (descending) within each city.

---

## 2. TOP — Limiting Rows Returned

### Syntax:
```sql
SELECT TOP (n) column1, column2
FROM table_name;
```

### Example: Get the 2 oldest students
```sql
SELECT TOP (2) Name, Age
FROM Students
ORDER BY Age DESC;
```

### Using TOP with PERCENT
```sql
SELECT TOP (50) PERCENT Name, Age
FROM Students
ORDER BY Age DESC;
```

---

## 3. DISTINCT — Removing Duplicates

### Syntax:
```sql
SELECT DISTINCT column1
FROM table_name;
```

### Example: Get unique list of cities
```sql
SELECT DISTINCT City
FROM Students;
```
If multiple students share a city (e.g., Lahore appears twice), it will only show once.

---

## 🔗 Combining All Three
```sql
SELECT DISTINCT TOP (3) City
FROM Students
ORDER BY City ASC;
```

---

## 📝 Homework / Tasks (Class 4)
1. Write a query that lists all students sorted by Name (A to Z).
2. Write a query that shows the top 3 oldest students.
3. Write a query that shows the distinct list of cities in your Students table.
4. Write a query sorting students by City ascending, then Age descending.
5. Challenge: Get the youngest student's name and age using `TOP` and `ORDER BY`.

---
⬅️ **Previous:** [Class 3](03-where-comparison-operators.md)  |  ➡️ **Next:** [Class 5 - Working with NULL](05-working-with-null.md)
