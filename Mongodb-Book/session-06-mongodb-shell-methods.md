# Session 6: MongoDB Shell Methods

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- List different MongoDB Shell methods
- Describe collection methods in MongoDB Shell
- Explain various database methods in MongoDB Shell
- Explain role management methods in MongoDB Shell
- Describe various user management methods in MongoDB Shell

---

## 1. What Are MongoDB Shell Methods?

**Shell methods** are built-in JavaScript functions provided by `mongosh` that make it easier to interact with MongoDB — without needing to write raw database commands. They are grouped into categories based on what they manage: collections, databases, roles, and users.

## 2. Categories of Shell Methods

| Category | Purpose | Example Prefix |
|----------|---------|-----------------|
| Collection Methods | Manage documents/collections | `db.collectionName.method()` |
| Database Methods | Manage the database itself | `db.method()` |
| Role Management Methods | Manage custom roles/permissions | `db.method()` |
| User Management Methods | Manage users | `db.method()` |

---

## 3. Collection Methods

These operate on a specific collection (`db.collectionName.method()`).

```javascript
// Insert documents
db.students.insertOne({ name: "Alex" })
db.students.insertMany([{ name: "Sam" }, { name: "Priya" }])

// Query documents
db.students.find()
db.students.findOne({ name: "Alex" })

// Count documents
db.students.countDocuments({ course: "CS" })

// Update documents
db.students.updateOne({ name: "Alex" }, { $set: { age: 22 } })

// Delete documents
db.students.deleteOne({ name: "Alex" })

// Create an index
db.students.createIndex({ name: 1 })

// Get collection statistics
db.students.stats()

// Drop the collection
db.students.drop()
```

---

## 4. Database Methods

These operate on the current database (`db.method()`).

```javascript
// Show current database
db

// List all collections in the current database
db.getCollectionNames()
// or
show collections

// Get statistics about the database
db.stats()

// Create a new collection
db.createCollection("teachers")

// Drop the current database
db.dropDatabase()

// Show all databases
show dbs
```

---

## 5. Role Management Methods

Roles define **what actions a user is allowed to perform**. MongoDB has built-in roles (like `read`, `readWrite`, `dbAdmin`) and also allows custom roles.

```javascript
// Create a custom role
db.createRole({
  role: "customReadRole",
  privileges: [
    { resource: { db: "schoolDB", collection: "students" }, actions: ["find"] }
  ],
  roles: []
})

// View role details
db.getRole("customReadRole", { showPrivileges: true })

// Update a role's privileges
db.updateRole("customReadRole", {
  privileges: [
    { resource: { db: "schoolDB", collection: "students" }, actions: ["find", "insert"] }
  ]
})

// Drop a role
db.dropRole("customReadRole")

// List all roles
db.getRoles()
```

---

## 6. User Management Methods

```javascript
// Create a new user
db.createUser({
  user: "teacher1",
  pwd: "strongPassword123",
  roles: [{ role: "readWrite", db: "schoolDB" }]
})

// View user details
db.getUser("teacher1")

// List all users
db.getUsers()

// Update a user's roles
db.updateUser("teacher1", {
  roles: [{ role: "read", db: "schoolDB" }]
})

// Change a user's password
db.changeUserPassword("teacher1", "newPassword456")

// Drop a user
db.dropUser("teacher1")
```

---

## 📝 Assignment: Session 6

1. List 5 collection methods and describe what each one does, in your own words.
2. Create a database called `libraryDB`, then use database methods to: list all collections, view database statistics, and check the current database name.
3. Create a custom role called `librarianRole` that only allows `find` and `insert` actions on a `books` collection.
4. Create a user called `librarian1`, assign them the `librarianRole` you created, and then verify their roles using `db.getUser()`.
5. Change `librarian1`'s password, then drop the user.
6. **Short answer:** Why is it useful to create **custom roles** instead of always using MongoDB's built-in roles like `readWrite` or `dbAdmin`?

