# Class 16: Table Relationships & Keys (Primary/Foreign)

## 🎯 Learning Objectives
- Understand why databases use multiple related tables
- Learn Primary Keys and Foreign Keys in depth
- Understand One-to-Many, Many-to-Many relationships

---

## 1. Why Split Data Into Multiple Tables?
Instead of one giant table with repeated data, we split data logically to avoid duplication.

### ❌ Bad Design (data repeated):
| StudentName | CourseName | CourseInstructor |
|---|---|---|
| Aisha | Math | Mr. Khan |
| Bilal | Math | Mr. Khan |
| Sara | Science | Ms. Ali |

The course info repeats unnecessarily.

### ✅ Good Design (split into related tables):

**Students Table**
| StudentID (PK) | Name |
|---|---|
| 1 | Aisha |
| 2 | Bilal |
| 3 | Sara |

**Courses Table**
| CourseID (PK) | CourseName | Instructor |
|---|---|---|
| 101 | Math | Mr. Khan |
| 102 | Science | Ms. Ali |

**Enrollment Table** (links the two)
| EnrollmentID (PK) | StudentID (FK) | CourseID (FK) |
|---|---|---|
| 1 | 1 | 101 |
| 2 | 2 | 101 |
| 3 | 3 | 102 |

## 2. Primary Key (PK)
- Uniquely identifies each row in a table
- Cannot be NULL
- Cannot have duplicate values

```sql
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(50),
    Instructor VARCHAR(50)
);
```

## 3. Foreign Key (FK)
- A column that references the Primary Key of another table
- Creates a **link/relationship** between two tables
- Prevents "orphan" records (e.g., an enrollment pointing to a Student that doesn't exist)

```sql
CREATE TABLE Enrollment (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT FOREIGN KEY REFERENCES Students(StudentID),
    CourseID INT FOREIGN KEY REFERENCES Courses(CourseID)
);
```

## 4. Types of Relationships

| Relationship | Description | Example |
|---------------|-------------|---------|
| One-to-Many | One row in Table A relates to many rows in Table B | One Student → Many Enrollments |
| Many-to-Many | Many rows in A relate to many rows in B (needs a junction table) | Students ↔ Courses (via Enrollment table) |
| One-to-One | One row in A relates to exactly one row in B | Student ↔ StudentPassportDetails |

## 5. Why This Matters for T-SQL
Understanding relationships is essential because next class we'll learn **JOINs** — which combine data from multiple related tables into one result.

---

## 📝 Homework / Tasks (Class 16)
1. Create a `Courses` table with CourseID (PK), CourseName, Instructor.
2. Create an `Enrollment` table with EnrollmentID (PK), StudentID (FK), CourseID (FK).
3. Insert 3 courses and 5 enrollment records linking your existing students to these courses.
4. Draw (on paper) the relationship diagram between Students, Courses, and Enrollment.
5. Challenge: Try inserting an Enrollment record with a StudentID that doesn't exist in the Students table. What error do you get? Explain why.

---
⬅️ **Previous:** [Class 15](15-datetime-functions.md)  |  ➡️ **Next:** [Class 17 - INNER JOIN](17-inner-join.md)
