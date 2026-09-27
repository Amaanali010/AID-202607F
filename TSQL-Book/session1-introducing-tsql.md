# Session 1: Introducing Transact-SQL (T-SQL)

## 🎯 Learning Objectives
By the end of this session, you will be able to:
- Explain the basics of databases and different types of Database Management Systems (DBMS)
- Explain different Transact-SQL (T-SQL) commands
- Describe the functions of SQL Server Management Studio (SSMS)

---

## 1. What is a Database?

A **database** is an organized collection of data stored electronically so it can be easily accessed, managed, and updated.

Think of a database like a digital filing cabinet:
- A **table** = a drawer (e.g., "Students", "Employees", "Products")
- A **row** = one file/record inside the drawer (e.g., one student's details)
- A **column** = a specific field on that file (e.g., Name, Age, Email)

### Example: A simple `Students` table

| StudentID | Name    | Age | Course      |
|-----------|---------|-----|-------------|
| 1         | Aisha   | 21  | Computer Science |
| 2         | Ravi    | 22  | Data Science |
| 3         | Chen    | 20  | Mathematics |

---

## 2. What is a DBMS?

A **Database Management System (DBMS)** is software used to create, manage, and interact with databases.

### Types of DBMS

| Type | Description | Examples |
|------|-------------|----------|
| **Relational DBMS (RDBMS)** | Stores data in tables with rows and columns; tables can be linked (related) to each other | SQL Server, MySQL, PostgreSQL, Oracle |
| **NoSQL DBMS** | Stores data in flexible formats like documents, key-value pairs, or graphs | MongoDB, Redis, Cassandra |
| **Hierarchical DBMS** | Stores data in a tree-like structure (parent-child) | IBM IMS |
| **Network DBMS** | Similar to hierarchical, but allows more complex relationships (many-to-many) | IDMS |

> 💡 **Key takeaway:** SQL Server (which we will use in this course) is a **Relational DBMS**.

---

## 3. What is T-SQL?

**Transact-SQL (T-SQL)** is Microsoft's extension of standard SQL (Structured Query Language). It is used specifically with **SQL Server** to manage and manipulate data.

T-SQL adds extra features on top of standard SQL, such as:
- Procedural programming (loops, variables, conditions)
- Error handling
- Local variables
- Built-in functions

### Categories of T-SQL Commands

| Category | Full Name | Purpose | Example Commands |
|----------|-----------|---------|-------------------|
| **DDL** | Data Definition Language | Define/modify database structure | `CREATE`, `ALTER`, `DROP` |
| **DML** | Data Manipulation Language | Work with the data itself | `SELECT`, `INSERT`, `UPDATE`, `DELETE` |
| **DCL** | Data Control Language | Manage permissions/access | `GRANT`, `REVOKE` |
| **TCL** | Transaction Control Language | Manage transactions | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

### Quick Example
```sql
-- DDL: create a table
CREATE TABLE Students (
    StudentID INT,
    Name VARCHAR(50),
    Age INT
);

-- DML: insert a row
INSERT INTO Students (StudentID, Name, Age)
VALUES (1, 'Aisha', 21);

-- DML: retrieve data
SELECT * FROM Students;
```

---

## 4. What is SQL Server Management Studio (SSMS)?

**SSMS** is a free graphical tool from Microsoft used to:
- Connect to SQL Server databases
- Write and run T-SQL queries
- Design and manage tables, views, and stored procedures
- Manage users and permissions
- Monitor server performance

### Key Parts of SSMS

| Component | Purpose |
|-----------|---------|
| **Object Explorer** | Tree view of all databases, tables, and objects on the server |
| **Query Editor** | Where you type and run T-SQL commands |
| **Results Pane** | Shows the output of your query |
| **Messages Tab** | Shows errors or confirmation messages |

> 💡 **Analogy:** If T-SQL is the *language* you speak, SSMS is the *room* where you have the conversation with the database.

---

## 📝 Summary

- A **database** organizes data into tables, rows, and columns.
- A **DBMS** is the software that manages databases; SQL Server is a **relational DBMS**.
- **T-SQL** is Microsoft's version of SQL, grouped into DDL, DML, DCL, and TCL commands.
- **SSMS** is the tool used to write and execute T-SQL against SQL Server.

---

## ✏️ Assignment: Session 1

Answer the following questions in your own words.

1. **Short Answer:** In your own words, explain the difference between a database and a DBMS.
2. **Short Answer:** List and briefly describe two types of DBMS other than relational DBMS.
3. **Classify:** For each command below, state whether it is DDL, DML, DCL, or TCL:
   - `DROP TABLE`
   - `SELECT`
   - `GRANT`
   - `ROLLBACK`
   - `INSERT`
4. **Practical:** Open SSMS (or note down the steps if you don't have it installed), and describe what you see in:
   - Object Explorer
   - Query Editor
5. **Reflection:** Why do you think Microsoft created T-SQL instead of using only standard SQL? (Hint: think about extra features like error handling and variables.)

> 📌 **Submission tip:** Save your answers in a text file named `session1-assignment.md` and upload it alongside your notes.
