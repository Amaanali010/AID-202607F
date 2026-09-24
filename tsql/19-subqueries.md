# Class 19: Subqueries (Basic)

## 🎯 Learning Objectives
- Understand what a subquery is
- Use subqueries inside WHERE, FROM, and SELECT

---

## 1. What is a Subquery?
A **subquery** is a query nested inside another query. The inner query runs first, and its result is used by the outer query.

```sql
SELECT columns
FROM table
WHERE column OPERATOR (SELECT column FROM table WHERE condition);
```

## 2. Subquery in WHERE Clause

### Example: Find students older than the average age
```sql
SELECT Name, Age
FROM Students
WHERE Age > (SELECT AVG(Age) FROM Students);
```
The inner query `(SELECT AVG(Age) FROM Students)` calculates the average first, then the outer query compares each student's age to it.

### Example: Find students enrolled in 'Math' using a subquery
```sql
SELECT Name
FROM Students
WHERE StudentID IN (
    SELECT StudentID 
    FROM Enrollment e
    INNER JOIN Courses c ON e.CourseID = c.CourseID
    WHERE c.CourseName = 'Math'
);
```

## 3. Subquery with NOT IN — Students NOT Enrolled in Any Course
```sql
SELECT Name
FROM Students
WHERE StudentID NOT IN (SELECT StudentID FROM Enrollment);
```
(Note: this is an alternative to the LEFT JOIN approach from Class 18.)

## 4. Subquery in FROM Clause (Derived Table)
```sql
SELECT City, AVG(Age) AS AvgAge
FROM (
    SELECT * FROM Students WHERE Age > 18
) AS AdultStudents
GROUP BY City;
```
Here, the subquery filters students first, and the outer query treats the result like a temporary table.

## 5. Subquery in SELECT Clause
```sql
SELECT Name,
       (SELECT COUNT(*) FROM Enrollment e WHERE e.StudentID = s.StudentID) AS TotalCourses
FROM Students s;
```
This shows each student's name along with a count of how many courses they're enrolled in.

## 6. Subqueries vs JOINs
Many subqueries can be rewritten as JOINs and vice versa. Subqueries are often easier to read for simple filtering; JOINs are usually more efficient for combining large datasets. As you grow more advanced, you'll learn when to use each.

---

## 📝 Homework / Tasks (Class 19)
1. Write a subquery to find students younger than the average age.
2. Write a subquery to find students who ARE enrolled in a specific course (using IN).
3. Write a subquery to find students who are NOT enrolled in any course (using NOT IN).
4. Write a query using a subquery in the SELECT clause to show each student's total number of enrolled courses.
5. Challenge: Rewrite task #2 (subquery version) as an equivalent INNER JOIN query, and compare the two approaches.

---
⬅️ **Previous:** [Class 18](18-outer-joins.md)  |  ➡️ **Next:** [Class 20 - Final Review & Mini Project](20-final-project.md)
