# Class 17: INNER JOIN

## 🎯 Learning Objectives
- Combine data from two or more tables using INNER JOIN
- Understand how JOIN conditions work

---

## 1. Why Do We Need JOIN?
Since we split data into multiple tables (Class 16), we need a way to bring related data back together for reporting. That's what `JOIN` does.

### Sample Tables

**Students**
| StudentID | Name |
|---|---|
| 1 | Aisha |
| 2 | Bilal |
| 3 | Sara |

**Courses**
| CourseID | CourseName |
|---|---|
| 101 | Math |
| 102 | Science |

**Enrollment**
| EnrollmentID | StudentID | CourseID |
|---|---|---|
| 1 | 1 | 101 |
| 2 | 2 | 101 |
| 3 | 3 | 102 |

## 2. INNER JOIN Syntax
```sql
SELECT columns
FROM tableA
INNER JOIN tableB ON tableA.column = tableB.column;
```

`INNER JOIN` returns only rows where there is a **match in both tables**.

### Example: Show each student's enrolled course
```sql
SELECT Students.Name, Courses.CourseName
FROM Enrollment
INNER JOIN Students ON Enrollment.StudentID = Students.StudentID
INNER JOIN Courses ON Enrollment.CourseID = Courses.CourseID;
```

**Result:**

| Name | CourseName |
|------|------------|
| Aisha | Math |
| Bilal | Math |
| Sara | Science |

## 3. Using Table Aliases (Cleaner Syntax)
```sql
SELECT s.Name, c.CourseName
FROM Enrollment e
INNER JOIN Students s ON e.StudentID = s.StudentID
INNER JOIN Courses c ON e.CourseID = c.CourseID;
```
`e`, `s`, `c` are aliases — shortcuts for table names, making queries easier to read.

## 4. Important: INNER JOIN Excludes Non-Matches
If a student has NOT enrolled in any course, they will **NOT appear** in an INNER JOIN result, because there's no matching row in Enrollment.

This is the key difference from `LEFT JOIN`, which we'll learn next class!

## 5. Adding WHERE to a JOIN
```sql
SELECT s.Name, c.CourseName
FROM Enrollment e
INNER JOIN Students s ON e.StudentID = s.StudentID
INNER JOIN Courses c ON e.CourseID = c.CourseID
WHERE c.CourseName = 'Math';
```

---

## 📝 Homework / Tasks (Class 17)
1. Write an INNER JOIN query showing Student Name + Course Name for all enrollments.
2. Rewrite the same query using table aliases.
3. Write an INNER JOIN + WHERE query to show only students enrolled in a specific course.
4. Add a 4th student to your Students table who is NOT enrolled in any course. Run your INNER JOIN query again — confirm that student does NOT appear.
5. Challenge: Join all three tables (Students, Enrollment, Courses) and also display the Instructor name.

---
⬅️ **Previous:** [Class 16](16-relationships-keys.md)  |  ➡️ **Next:** [Class 18 - LEFT/RIGHT/FULL OUTER JOIN](18-outer-joins.md)
