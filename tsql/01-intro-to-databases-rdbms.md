# Class 1: Introduction to Databases, RDBMS Concepts & Installing SQL Server/SSMS

## 🎯 Learning Objectives
By the end of this class, you will be able to:
- Explain what a database is and why we use one
- Understand what an RDBMS is
- Know key terms: table, row, column, primary key, foreign key
- Install SQL Server and SQL Server Management Studio (SSMS)

---

## 1. What is a Database?
A **database** is an organized collection of data stored electronically so it can be easily accessed, managed, and updated.

Think of it like a digital filing cabinet:
- A **cabinet** = database
- A **drawer** = table
- A **folder inside the drawer** = row (record)
- **Labels on the folder** = columns (fields)

**Example:** A school database might store data about `Students`, `Teachers`, and `Courses`.

## 2. What is an RDBMS?
**RDBMS** = Relational Database Management System.

It's software that stores data in **tables** (rows and columns) and allows tables to be **related** to each other using keys.

Popular RDBMS software:
- Microsoft SQL Server ✅ (what we'll use)
- MySQL
- PostgreSQL
- Oracle

## 3. Key Terms You Must Know

| Term | Meaning | Example |
|------|---------|---------|
| Table | A collection of related data | `Students` table |
| Row (Record) | One entry in a table | One student's info |
| Column (Field) | A property of the data | `StudentName`, `Age` |
| Primary Key | Uniquely identifies each row | `StudentID` |
| Foreign Key | Links one table to another | `CourseID` in Enrollment table |

### Example Table: `Students`

| StudentID (PK) | Name | Age | City |
|----------------|------|-----|------|
| 1 | Aisha | 20 | Lahore |
| 2 | Bilal | 22 | Karachi |
| 3 | Sara | 21 | Islamabad |

## 4. What is T-SQL?
**T-SQL (Transact-SQL)** is Microsoft's extension of SQL used specifically in SQL Server. We will learn T-SQL throughout this course.

## 5. Installing SQL Server & SSMS

### Step 1: Install SQL Server (Developer/Express Edition — Free)
1. Go to the official Microsoft SQL Server download page
2. Choose **Developer Edition** (free, full-featured, for learning)
3. Run the installer → choose **Basic** installation → Install

### Step 2: Install SSMS (SQL Server Management Studio)
1. Download **SSMS** from Microsoft's website (search "Download SSMS")
2. Run the installer → click Install → restart your PC if asked

### Step 3: Connect to Your Server
1. Open SSMS
2. In the "Connect to Server" window:
   - Server type: Database Engine
   - Server name: `localhost` or `.\SQLEXPRESS`
   - Authentication: Windows Authentication
3. Click **Connect**

✅ If you see the Object Explorer panel on the left, you're successfully connected!

---

## 📝 Homework / Tasks (Class 1)
1. Install SQL Server and SSMS on your computer (screenshot the successful connection).
2. In your own words, write definitions for: Database, RDBMS, Table, Row, Column, Primary Key.
3. Draw (on paper or in Word) a simple table structure for a `Books` table you would use in a library — include at least 4 columns and mark the primary key.
4. Research question: Name two RDBMS other than SQL Server and one real company that uses each.

---
⬅️ **Previous:** —  |  ➡️ **Next:** [Class 2 - T-SQL Basics & SELECT](02-tsql-basics-select.md)
