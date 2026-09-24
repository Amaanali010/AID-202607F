/* =========================================================
   T-SQL Course - Master Sample Database Script
   Use this SAME dataset throughout Classes 1-20 so results
   in the lectures match what you see on your own screen.
   ========================================================= */

CREATE DATABASE SchoolDB;
GO
USE SchoolDB;
GO

-- =========================
-- 1. STUDENTS TABLE
-- =========================
CREATE TABLE Students (
    StudentID   INT PRIMARY KEY,
    Name        VARCHAR(50) NOT NULL,
    Age         INT NULL,
    City        VARCHAR(50) NULL,
    EnrollDate  DATE NULL
);
GO

INSERT INTO Students (StudentID, Name, Age, City, EnrollDate) VALUES
(1,  'Aisha',  20, 'Lahore',      '2026-01-10'),
(2,  'Bilal',  22, 'Karachi',     '2026-01-15'),
(3,  'Sara',   21, 'Islamabad',   '2026-02-01'),
(4,  'Omar',   19, 'Lahore',      '2026-02-10'),
(5,  'Hina',   23, 'Multan',      '2026-03-05'),
(6,  'Zain',   24, 'Peshawar',    '2026-03-20'),
(7,  'Nadia',  NULL, 'Quetta',    '2026-04-01'),   -- NULL age example
(8,  'Kamran', 20, NULL,          '2026-04-15'),   -- NULL city example
(9,  'Fatima', 22, 'Karachi',     '2026-05-01'),
(10, 'Ali',    21, 'Islamabad',   '2026-05-10');
GO

-- =========================
-- 2. COURSES TABLE
-- =========================
CREATE TABLE Courses (
    CourseID    INT PRIMARY KEY,
    CourseName  VARCHAR(50) NOT NULL,
    Instructor  VARCHAR(50) NOT NULL
);
GO

INSERT INTO Courses (CourseID, CourseName, Instructor) VALUES
(101, 'Math',        'Mr. Khan'),
(102, 'Science',     'Ms. Ali'),
(103, 'English',     'Mr. Raza'),
(104, 'Computer Science', 'Ms. Fatima');
-- Note: CourseID 104 will intentionally have ZERO enrolled students
GO

-- =========================
-- 3. ENROLLMENT TABLE (links Students <-> Courses)
-- =========================
CREATE TABLE Enrollment (
    EnrollmentID INT PRIMARY KEY,
    StudentID    INT FOREIGN KEY REFERENCES Students(StudentID),
    CourseID     INT FOREIGN KEY REFERENCES Courses(CourseID)
);
GO

INSERT INTO Enrollment (EnrollmentID, StudentID, CourseID) VALUES
(1,  1, 101),  -- Aisha  -> Math
(2,  1, 102),  -- Aisha  -> Science
(3,  2, 101),  -- Bilal  -> Math
(4,  3, 102),  -- Sara   -> Science
(5,  4, 101),  -- Omar   -> Math
(6,  5, 103),  -- Hina   -> English
(7,  6, 103),  -- Zain   -> English
(8,  9, 102),  -- Fatima -> Science
(9,  10, 101), -- Ali    -> Math
(10, 10, 103); -- Ali    -> English
-- Note: StudentID 7 (Nadia) and 8 (Kamran) are intentionally
-- NOT enrolled in anything, so LEFT JOIN / subquery lessons work.
GO

-- =========================
-- Quick check: view all data
-- =========================
SELECT * FROM Students;
SELECT * FROM Courses;
SELECT * FROM Enrollment;
