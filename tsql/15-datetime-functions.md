# Class 15: Date/Time Functions (GETDATE, DATEADD, DATEDIFF)

## 🎯 Learning Objectives
- Retrieve the current date/time
- Add or subtract time from dates
- Calculate the difference between two dates

---

## 1. GETDATE() — Current Date and Time
```sql
SELECT GETDATE() AS CurrentDateTime;
```
Returns something like: `2026-07-17 14:32:10.123`

Other similar functions:
```sql
SELECT SYSDATETIME() AS MorePreciseCurrentTime;
```

## 2. DATEADD() — Add or Subtract Time
```sql
DATEADD(datepart, number, date)
```

### Examples:
```sql
-- Add 7 days to today
SELECT DATEADD(DAY, 7, GETDATE()) AS NextWeek;

-- Subtract 1 month from today
SELECT DATEADD(MONTH, -1, GETDATE()) AS LastMonth;

-- Add 2 years to a specific date
SELECT DATEADD(YEAR, 2, '2024-01-01') AS TwoYearsLater;
```

Common date parts: `DAY`, `MONTH`, `YEAR`, `HOUR`, `MINUTE`, `SECOND`, `WEEK`

## 3. DATEDIFF() — Find Difference Between Two Dates
```sql
DATEDIFF(datepart, start_date, end_date)
```

### Examples:
```sql
-- Days between two dates
SELECT DATEDIFF(DAY, '2026-01-01', '2026-07-17') AS DaysPassed;

-- Age in years (approx) based on birthdate
SELECT DATEDIFF(YEAR, '2000-05-10', GETDATE()) AS ApproxAge;
```

## 4. Other Useful Date Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `YEAR(date)` | Extract year | `YEAR(GETDATE())` → 2026 |
| `MONTH(date)` | Extract month | `MONTH(GETDATE())` → 7 |
| `DAY(date)` | Extract day | `DAY(GETDATE())` → 17 |
| `FORMAT(date, format)` | Format date as text | `FORMAT(GETDATE(), 'dd-MM-yyyy')` |

### Example: Extracting parts of enrollment date
```sql
SELECT Name, EnrollDate, YEAR(EnrollDate) AS EnrollYear
FROM Students;
```

## 5. Real-World Example: Students Enrolled in the Last 30 Days
```sql
SELECT Name, EnrollDate
FROM Students
WHERE DATEDIFF(DAY, EnrollDate, GETDATE()) <= 30;
```

---

## 📝 Homework / Tasks (Class 15)
1. Write a query to display the current date and time.
2. Write a query that shows the date 30 days from today.
3. Write a query that calculates how many days have passed since a specific date (e.g., your birthdate).
4. Add an `EnrollDate` column to your Students table (if not already present) and write a query showing each student's enrollment year using `YEAR()`.
5. Challenge: Find all students who enrolled within the last 6 months using `DATEDIFF`.

---
⬅️ **Previous:** [Class 14](14-having-clause.md)  |  ➡️ **Next:** [Class 16 - Table Relationships & Keys](16-relationships-keys.md)
