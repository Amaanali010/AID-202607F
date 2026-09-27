# Session 9: Transaction Management

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain transactions in MongoDB
- Describe the transaction Application Programming Interfaces (API) in MongoDB
- Explain various error labels in MongoDB
- Describe properties of transactions in MongoDB
- Explain sessions and transactions within the sessions in MongoDB

---

## 1. What is a Transaction?

A **transaction** is a group of one or more operations that are executed as a **single unit** — either **all** of them succeed, or **none** of them do.

**Real-world analogy:** Think of a bank transfer. If you send money from Account A to Account B, two things must happen: money is deducted from A, and money is added to B. If the deduction succeeds but the addition fails (e.g., due to a system crash), the whole transfer must be **rolled back** — you can't leave the money "missing." Transactions guarantee this safety.

### Why Do We Need Transactions?
Without transactions, a failure halfway through a multi-step operation could leave your database in an **inconsistent state** — some changes applied, others not. Transactions prevent this.

---

## 2. Properties of Transactions: ACID

MongoDB transactions follow the **ACID** properties:

| Property | Meaning |
|----------|---------|
| **A**tomicity | All operations in the transaction succeed, or none do |
| **C**onsistency | The database moves from one valid state to another valid state |
| **I**solation | Transactions don't interfere with each other while running |
| **D**urability | Once committed, changes are permanently saved, even after a crash |

---

## 3. Sessions and Transactions

A **transaction** in MongoDB always runs **within a session**. A session is a logical grouping of related read/write operations, letting MongoDB track their order and context.

### 3.1 Starting a Session
```javascript
const session = db.getMongo().startSession()
```

### 3.2 Running a Transaction Within a Session
```javascript
session.startTransaction()

try {
  const accounts = session.getDatabase("bank").accounts

  accounts.updateOne({ name: "Alice" }, { $inc: { balance: -100 } })
  accounts.updateOne({ name: "Bob" }, { $inc: { balance: 100 } })

  session.commitTransaction()   // Save all changes permanently
  print("Transaction committed successfully")
} catch (error) {
  session.abortTransaction()    // Roll back all changes
  print("Transaction aborted due to: " + error)
} finally {
  session.endSession()
}
```

**Step-by-step explanation:**
1. `startSession()` — begins a session that will track the transaction.
2. `startTransaction()` — marks the beginning of a transaction.
3. Operations are performed **inside** the transaction (they aren't visible to others until committed).
4. `commitTransaction()` — makes all changes permanent.
5. `abortTransaction()` — cancels all changes if something goes wrong.
6. `endSession()` — closes the session and frees up resources.

---

## 4. The Transaction API

MongoDB provides two main approaches to work with transactions:

### 4.1 Core API (Manual Control)
You manually call `startTransaction()`, `commitTransaction()`, and `abortTransaction()`, as shown above. This gives you fine-grained control but requires you to handle retries and errors yourself.

### 4.2 Callback API (Recommended)
The **callback API** (`withTransaction()`) automatically handles retries for certain errors, making it safer and easier to use in application code (commonly used with drivers like PyMongo, Node.js driver, etc.).

```javascript
session.withTransaction(() => {
  const accounts = session.getDatabase("bank").accounts
  accounts.updateOne({ name: "Alice" }, { $inc: { balance: -100 } }, { session })
  accounts.updateOne({ name: "Bob" }, { $inc: { balance: 100 } }, { session })
})
```

---

## 5. Error Labels in MongoDB Transactions

When a transaction operation fails, MongoDB may attach an **error label** to help your application decide what to do next.

| Error Label | Meaning | Recommended Action |
|-------------|---------|----------------------|
| `TransientTransactionError` | A temporary error occurred (e.g., network blip) | Safe to **retry the entire transaction** |
| `UnknownTransactionCommitResult` | Unclear whether the commit succeeded or failed | Safe to **retry the commit operation** |

**Example handling in code:**
```javascript
try {
  // transaction operations
} catch (error) {
  if (error.hasErrorLabel("TransientTransactionError")) {
    // retry the whole transaction
  }
}
```

---

## 6. Best Practices for Transactions

- Keep transactions **short** — long-running transactions can hurt performance.
- Limit the number of documents/collections involved when possible.
- Use the **callback API** (`withTransaction()`) in application code for automatic retry handling.
- Always call `endSession()` when done, to free up server resources.

---

## 📝 Assignment: Session 9

1. In your own words, explain what a transaction is and why the bank transfer example demonstrates the need for atomicity.
2. Define each of the four ACID properties and give a one-sentence example of what could go wrong if that property were violated.
3. Write a transaction (using the Core API) that transfers a value between two documents in a collection of your choice. Include proper `try/catch` error handling with `abortTransaction()`.
4. Rewrite the same transaction using the **callback API** (`withTransaction()`).
5. Explain the difference between `TransientTransactionError` and `UnknownTransactionCommitResult`, and what action your application should take for each.
6. **Short answer:** Why must every transaction in MongoDB run within a session?

