# T-SQL for Beginners — 20 Class Course

A complete beginner-to-intermediate T-SQL course, structured as 20 classes. Each class is a separate Markdown file with theory, examples, and homework tasks.

## 📌 Before You Start: Set Up Your Sample Data

Every class uses the **same sample database** (`SchoolDB`) so that the results you see on your screen match the examples in the lectures.

👉 **Run [`sample-data.sql`](sample-data.sql) in SSMS first** — it creates the database, 3 tables (`Students`, `Courses`, `Enrollment`), and inserts sample rows, including a few intentional NULLs and an unenrolled student/course (used later for NULL handling and JOIN lessons).

### Data at a glance

**Students** (10 rows — includes 1 NULL age, 1 NULL city, 2 students not enrolled in any course)
| StudentID | Name | Age | City |
|---|---|---|---|
| 1 | Aisha | 20 | Lahore |
| 2 | Bilal | 22 | Karachi |
| 3 | Sara | 21 | Islamabad |
| 4 | Omar | 19 | Lahore |
| 5 | Hina | 23 | Multan |
| 6 | Zain | 24 | Peshawar |
| 7 | Nadia | NULL | Quetta |
| 8 | Kamran | 20 | NULL |
| 9 | Fatima | 22 | Karachi |
| 10 | Ali | 21 | Islamabad |

**Courses** (4 rows — 1 course with zero students, used in JOIN lessons)
| CourseID | CourseName | Instructor |
|---|---|---|
| 101 | Math | Mr. Khan |
| 102 | Science | Ms. Ali |
| 103 | English | Mr. Raza |
| 104 | Computer Science | Ms. Fatima |

**Enrollment** (10 rows linking Students ↔ Courses)

As you move through the classes, keep this same database open — later lectures (JOINs, subqueries, GROUP BY) build directly on it.

---

## 📚 Course Outline

| # | Class | File |
|---|-------|------|
| 1 | Intro to Databases, RDBMS Concepts, Installing SQL Server/SSMS | [01-intro-to-databases-rdbms.md](01-intro-to-databases-rdbms.md) |
| 2 | What is T-SQL, Basic Syntax, SELECT Basics | [02-tsql-basics-select.md](02-tsql-basics-select.md) |
| 3 | Filtering with WHERE, Comparison Operators | [03-where-comparison-operators.md](03-where-comparison-operators.md) |
| 4 | Sorting with ORDER BY, TOP, DISTINCT | [04-orderby-top-distinct.md](04-orderby-top-distinct.md) |
| 5 | Working with NULL, IS NULL/IS NOT NULL | [05-working-with-null.md](05-working-with-null.md) |
| 6 | INSERT Statement | [06-insert-statement.md](06-insert-statement.md) |
| 7 | UPDATE Statement | [07-update-statement.md](07-update-statement.md) |
| 8 | DELETE & TRUNCATE | [08-delete-truncate.md](08-delete-truncate.md) |
| 9 | Data Types Deep Dive | [09-data-types.md](09-data-types.md) |
| 10 | String Functions | [10-string-functions.md](10-string-functions.md) |
| 11 | Logical Operators (AND, OR, NOT, IN, BETWEEN, LIKE) | [11-logical-operators.md](11-logical-operators.md) |
| 12 | Aggregate Functions | [12-aggregate-functions.md](12-aggregate-functions.md) |
| 13 | GROUP BY | [13-group-by.md](13-group-by.md) |
| 14 | HAVING Clause | [14-having-clause.md](14-having-clause.md) |
| 15 | Date/Time Functions | [15-datetime-functions.md](15-datetime-functions.md) |
| 16 | Table Relationships & Keys | [16-relationships-keys.md](16-relationships-keys.md) |
| 17 | INNER JOIN | [17-inner-join.md](17-inner-join.md) |
| 18 | LEFT/RIGHT/FULL OUTER JOIN | [18-outer-joins.md](18-outer-joins.md) |
| 19 | Subqueries (Basic) | [19-subqueries.md](19-subqueries.md) |
| 20 | Final Review & Mini Project | [20-final-project.md](20-final-project.md) |

## 🗂 Repo Structure
```
tsql-course/
├── README.md
├── sample-data.sql          ← run this first
├── 01-intro-to-databases-rdbms.md
├── 02-tsql-basics-select.md
├── ...
└── 20-final-project.md
```

## 🖥 Requirements
- SQL Server (Developer or Express edition — free)
- SQL Server Management Studio (SSMS)

## 🙌 How to Use This Course
1. Run `sample-data.sql` once to set up your database.
2. Go through each class file in order — read the theory, copy/run the example queries, then complete the homework tasks at the bottom of each file.
3. By Class 20, you'll combine everything into one mini project.
