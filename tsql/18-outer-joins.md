# Class 18: LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN

## 🎯 Learning Objectives
- Understand the difference between INNER and OUTER joins
- Use LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN correctly

---

## 1. Quick Recap
`INNER JOIN` only returns rows that match in **both** tables. But sometimes we want to see **unmatched** rows too (e.g., students with NO enrollment). That's where OUTER JOINs help.

### Sample Tables

**Students**
| StudentID | Name |
|---|---|
| 1 | Aisha |
| 2 | Bilal |
| 3 | Sara |
| 4 | Omar |  ← has NOT enrolled in any course

**Enrollment**
| StudentID | CourseID |
|---|---|
| 1 | 101 |
| 2 | 101 |
| 3 | 102 |

## 2. LEFT JOIN (a.k.a. LEFT OUTER JOIN)
Returns **all rows from the LEFT table**, plus matching rows from the right table. If there's no match, the right side shows `NULL`.

```sql
SELECT s.Name, e.CourseID
FROM Students s
LEFT JOIN Enrollment e ON s.StudentID = e.StudentID;
```

**Result:**

| Name | CourseID |
|------|----------|
| Aisha | 101 |
| Bilal | 101 |
| Sara | 102 |
| Omar | NULL |

Omar appears even though he has no enrollment — with `CourseID` as NULL.

## 3. RIGHT JOIN (a.k.a. RIGHT OUTER JOIN)
Returns **all rows from the RIGHT table**, plus matching rows from the left. Opposite of LEFT JOIN.

```sql
SELECT s.Name, e.CourseID
FROM Students s
RIGHT JOIN Enrollment e ON s.StudentID = e.StudentID;
```
This is less commonly used — you can usually flip the table order and use LEFT JOIN instead.

## 4. FULL OUTER JOIN
Returns **all rows from BOTH tables** — matched where possible, NULL where not.

```sql
SELECT s.Name, e.CourseID
FROM Students s
FULL OUTER JOIN Enrollment e ON s.StudentID = e.StudentID;
```
This shows every student (even unenrolled ones) AND every enrollment (even if somehow a student record was missing).

## 5. Finding Unmatched Rows Only
A common real-world task: "Find students who have NOT enrolled in any course."
```sql
SELECT s.Name
FROM Students s
LEFT JOIN Enrollment e ON s.StudentID = e.StudentID
WHERE e.StudentID IS NULL;
```

## 6. Quick Comparison

| JOIN Type | Returns |
|-----------|---------|
| INNER JOIN | Only matching rows in both tables |
| LEFT JOIN | All rows from left + matches from right |
| RIGHT JOIN | All rows from right + matches from left |
| FULL OUTER JOIN | All rows from both, matched or not |

---

## 📝 Homework / Tasks (Class 18)
1. Write a LEFT JOIN query showing all students and their enrolled course (including students with no course).
2. Write a query to find students who have NOT enrolled in any course (using LEFT JOIN + IS NULL).
3. Write a RIGHT JOIN version of your Students/Enrollment query and compare the result to LEFT JOIN.
4. Write a FULL OUTER JOIN query and explain what you observe.
5. Challenge: Add a course in the Courses table that has zero enrolled students. Write a query using LEFT JOIN to find "courses with no students."

---
⬅️ **Previous:** [Class 17](17-inner-join.md)  |  ➡️ **Next:** [Class 19 - Subqueries](19-subqueries.md)
