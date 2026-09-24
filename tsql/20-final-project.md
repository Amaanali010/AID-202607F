# Class 20: Final Review & Mini Project

## 🎯 Learning Objectives
- Review all major concepts from Classes 1–19
- Apply everything learned in one combined mini project

---

## 1. Quick Recap of Everything We Learned

| Class | Topic |
|---|---|
| 1 | Databases, RDBMS, installing SQL Server/SSMS |
| 2 | T-SQL basics, SELECT |
| 3 | WHERE, comparison operators |
| 4 | ORDER BY, TOP, DISTINCT |
| 5 | NULL, IS NULL/IS NOT NULL |
| 6 | INSERT |
| 7 | UPDATE |
| 8 | DELETE, TRUNCATE |
| 9 | Data types |
| 10 | String functions |
| 11 | Logical operators (AND, OR, NOT, IN, BETWEEN, LIKE) |
| 12 | Aggregate functions |
| 13 | GROUP BY |
| 14 | HAVING |
| 15 | Date/time functions |
| 16 | Table relationships & keys |
| 17 | INNER JOIN |
| 18 | LEFT/RIGHT/FULL OUTER JOIN |
| 19 | Subqueries |

---

## 2. Mini Project: "School Management Reports"

You will build a small database and write queries that use everything from this course.

### Step 1: Create the Database & Tables
```sql
CREATE DATABASE SchoolDB;
GO
USE SchoolDB;
GO

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT,
    City VARCHAR(50),
    EnrollDate DATE
);

CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(50),
    Instructor VARCHAR(50)
);

CREATE TABLE Enrollment (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT FOREIGN KEY REFERENCES Students(StudentID),
    CourseID INT FOREIGN KEY REFERENCES Courses(CourseID)
);
```

### Step 2: Insert Sample Data
Insert at least:
- 8 students (varied ages/cities, at least one with NULL city)
- 4 courses
- 10 enrollments (leave at least 1 student unenrolled, and 1 course with no students)

### Step 3: Write These Report Queries

1. **List all students sorted by age (oldest first).**
2. **Find all students from a specific city using WHERE.**
3. **Find all students whose name starts with a certain letter (LIKE).**
4. **Count how many students are enrolled in each course (GROUP BY + JOIN).**
5. **Find courses with more than 2 enrolled students (HAVING).**
6. **Find the average age of students per city.**
7. **List each student along with their enrolled course name (INNER JOIN).**
8. **List ALL students and their course (or NULL if not enrolled) using LEFT JOIN.**
9. **Find students who are NOT enrolled in any course (LEFT JOIN + IS NULL, or subquery).**
10. **Find courses with zero students enrolled.**
11. **Update a student's city.**
12. **Delete one enrollment record safely (SELECT first, then DELETE).**
13. **Use a subquery to find students older than the average age.**
14. **Show each student's name, total enrolled courses (subquery in SELECT), sorted by total courses descending.**
15. **Bonus: Use DATEDIFF to find students who enrolled in the last 90 days.**

### Step 4: Present Your Work
- Save all your queries in a single `.sql` file
- Be ready to explain what each query does and why you wrote it that way

---

## 🎓 Congratulations!
You now understand the fundamentals of T-SQL — from basic SELECT statements to JOINs and subqueries. This is a strong foundation for real-world database work, and for learning more advanced topics next such as: Views, Stored Procedures, Functions, Indexes, Transactions, and Window Functions.

---
⬅️ **Previous:** [Class 19](19-subqueries.md)  |  🏠 **Back to:** [Course Home](README.md)
