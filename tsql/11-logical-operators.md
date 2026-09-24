# Class 11: Logical Operators (AND, OR, NOT, IN, BETWEEN, LIKE)

## 🎯 Learning Objectives
- Combine multiple conditions using AND / OR / NOT
- Filter using IN, BETWEEN, and LIKE for flexible searching

---

## 1. AND — Both Conditions Must Be True
```sql
SELECT Name, Age, City
FROM Students
WHERE Age > 20 AND City = 'Lahore';
```

## 2. OR — At Least One Condition Must Be True
```sql
SELECT Name, City
FROM Students
WHERE City = 'Lahore' OR City = 'Karachi';
```

## 3. NOT — Reverses a Condition
```sql
SELECT Name, City
FROM Students
WHERE NOT City = 'Lahore';
```
(Same as `City <> 'Lahore'`)

## 4. IN — Match Any Value in a List
Instead of writing multiple ORs:
```sql
-- Old way
WHERE City = 'Lahore' OR City = 'Karachi' OR City = 'Multan'

-- Better way
WHERE City IN ('Lahore', 'Karachi', 'Multan')
```
```sql
SELECT Name, City
FROM Students
WHERE City IN ('Lahore', 'Karachi');
```

## 5. BETWEEN — Match a Range (Inclusive)
```sql
SELECT Name, Age
FROM Students
WHERE Age BETWEEN 20 AND 22;
```
This includes students aged 20, 21, and 22.

## 6. LIKE — Pattern Matching with Wildcards

| Wildcard | Meaning | Example |
|----------|---------|---------|
| `%` | Any number of characters | `'A%'` → starts with A |
| `_` | Exactly one character | `'A_'` → 2 letters, starts with A |

### Examples:
```sql
-- Names starting with 'A'
SELECT Name FROM Students WHERE Name LIKE 'A%';

-- Names ending with 'a'
SELECT Name FROM Students WHERE Name LIKE '%a';

-- Names containing 'sh'
SELECT Name FROM Students WHERE Name LIKE '%sh%';

-- Exactly 5-letter names
SELECT Name FROM Students WHERE Name LIKE '_____';
```

## 🔗 Combining Everything
```sql
SELECT Name, Age, City
FROM Students
WHERE (City IN ('Lahore', 'Karachi'))
  AND Age BETWEEN 19 AND 22
  AND Name LIKE 'A%';
```

---

## 📝 Homework / Tasks (Class 11)
1. Write a query using AND to find students aged over 19 AND living in Lahore.
2. Write a query using IN to find students from 3 specific cities of your choice.
3. Write a query using BETWEEN to find students aged between 18 and 21.
4. Write a query using LIKE to find all students whose name starts with a specific letter.
5. Challenge: Combine IN, BETWEEN, and LIKE in a single query with AND/OR.

---
⬅️ **Previous:** [Class 10](10-string-functions.md)  |  ➡️ **Next:** [Class 12 - Aggregate Functions](12-aggregate-functions.md)
