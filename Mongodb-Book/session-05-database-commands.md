# Session 5: Database Commands

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain the importance of database commands in MongoDB
- Describe the various types of database commands with examples

---

## 1. What Are Database Commands?

**Database commands** are special instructions sent to the MongoDB server to perform administrative and operational tasks — things beyond basic CRUD operations, like checking server status, managing users, or getting statistics about a database.

They are run using the `runCommand()` method:
```javascript
db.runCommand({ <command>: 1 })
```

### Why Are Database Commands Important?
- They let administrators **monitor** server health and performance.
- They help in **managing** users, roles, and permissions.
- They allow **diagnostics** — understanding how data is stored and how queries perform.
- Many MongoDB Shell helper methods (like `db.stats()`) are actually built on top of these commands internally.

---

## 2. Types of Database Commands

### 2.1 Query and Write Operation Commands
Used to perform data operations directly (an alternative to shell helper methods).
```javascript
db.runCommand({ insert: "students", documents: [{ name: "Alex", age: 21 }] })
db.runCommand({ find: "students", filter: { age: { $gt: 20 } } })
```

### 2.2 Administration Commands
Used to manage databases and collections.
```javascript
// Get statistics about the current database
db.runCommand({ dbStats: 1 })

// Get statistics about a specific collection
db.runCommand({ collStats: "students" })

// Rename a collection
db.runCommand({ renameCollection: "school.students", to: "school.learners" })

// Drop a collection
db.runCommand({ drop: "students" })
```

### 2.3 Diagnostic Commands
Used to check server health and performance.
```javascript
// Check server status (uptime, connections, memory usage)
db.runCommand({ serverStatus: 1 })

// Get the current server build info (version, etc.)
db.runCommand({ buildInfo: 1 })

// Check current running operations
db.runCommand({ currentOp: 1 })
```

### 2.4 User Management Commands
Used to create and manage database users.
```javascript
// Create a new user
db.runCommand({
  createUser: "student1",
  pwd: "securePassword123",
  roles: [{ role: "readWrite", db: "schoolDB" }]
})

// Drop a user
db.runCommand({ dropUser: "student1" })
```

### 2.5 Replication and Sharding Commands
Used to manage replica sets and sharded clusters (covered in more detail in Session 8).
```javascript
// Check replica set status
db.runCommand({ replSetGetStatus: 1 })

// Check sharding status
db.runCommand({ listShards: 1 })
```

---

## 3. Common Shortcuts (Shell Helper Methods)

MongoDB Shell provides simpler helper methods for many common commands:

| Shell Helper | Equivalent Command |
|----------------|--------------------|
| `db.stats()` | `db.runCommand({ dbStats: 1 })` |
| `db.serverStatus()` | `db.runCommand({ serverStatus: 1 })` |
| `db.version()` | Part of `buildInfo` |
| `db.createUser()` | `db.runCommand({ createUser: ... })` |

---

## 📝 Assignment: Session 5

1. Run `db.runCommand({ dbStats: 1 })` on any database and note down at least 3 pieces of information it returns (e.g., number of collections, data size).
2. Run `db.runCommand({ serverStatus: 1 })` and identify the server's uptime and current number of connections.
3. Use a database command to rename a collection of your choice, then verify the change using `show collections`.
4. Create a new user with `readWrite` access to a database of your choice using a database command.
5. **Short answer:** Explain the difference between a shell helper method (like `db.stats()`) and a raw database command (like `db.runCommand({ dbStats: 1 })`). Why might you choose to use `runCommand` directly?

