# Class 10: String Functions (SUBSTRING, CONCAT, LEN, TRIM)

## 🎯 Learning Objectives
- Manipulate and clean up text data using built-in string functions

---

## 1. LEN() — Get the Length of a String
```sql
SELECT Name, LEN(Name) AS NameLength
FROM Students;
```
`LEN('Aisha')` → returns `5`

## 2. CONCAT() — Join Strings Together
```sql
SELECT CONCAT(Name, ' from ', City) AS Description
FROM Students;
```
Result: `Aisha from Lahore`

You can also use the `+` operator (careful — this fails if any value is NULL):
```sql
SELECT Name + ' from ' + City AS Description
FROM Students;
```

## 3. SUBSTRING() — Extract Part of a String
```sql
SUBSTRING(string, start_position, length)
```
```sql
SELECT Name, SUBSTRING(Name, 1, 3) AS FirstThreeLetters
FROM Students;
```
`SUBSTRING('Aisha', 1, 3)` → `'Ais'`

## 4. TRIM(), LTRIM(), RTRIM() — Remove Extra Spaces
```sql
SELECT TRIM('   Hello World   ') AS Trimmed;
-- Result: 'Hello World'
```
- `LTRIM()` removes spaces from the **left** only
- `RTRIM()` removes spaces from the **right** only
- `TRIM()` removes spaces from **both sides**

## 5. UPPER() and LOWER()
```sql
SELECT UPPER(Name) AS UpperName, LOWER(City) AS LowerCity
FROM Students;
```

## 6. REPLACE() — Replace Part of a String
```sql
SELECT REPLACE(City, 'Lahore', 'LHR') AS ShortCity
FROM Students;
```

## 🔗 Combining Functions
```sql
SELECT CONCAT(UPPER(SUBSTRING(Name,1,1)), LOWER(SUBSTRING(Name,2,LEN(Name)))) AS ProperCaseName
FROM Students;
```
This capitalizes just the first letter of a name.

---

## 📝 Homework / Tasks (Class 10)
1. Write a query that shows each student's Name and the length of their Name.
2. Write a query that combines Name and City into one column like `"Aisha (Lahore)"`.
3. Write a query using SUBSTRING to display only the first 3 letters of each student's Name.
4. Write a query that converts all City values to UPPERCASE.
5. Challenge: Use REPLACE to replace all spaces in a text value with underscores `_`.

---
⬅️ **Previous:** [Class 9](09-data-types.md)  |  ➡️ **Next:** [Class 11 - Logical Operators](11-logical-operators.md)
