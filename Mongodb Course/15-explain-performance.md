# Class 15: explain() and Query Performance Basics

## 🎯 Learning Objectives
- Use `explain()` to analyze how MongoDB executes a query
- Identify slow queries (collection scans) vs fast queries (index scans)
- Learn basic tips to optimize queries on large datasets

---

## 1. Why Analyze Query Performance?
On a small collection, almost any query feels instant. On a **large dataset** (millions of documents), a poorly optimized query can take seconds or minutes. `explain()` helps you see exactly what MongoDB is doing behind the scenes.

## 2. Basic Usage
```javascript
db.students.find({ city: "Lahore" }).explain();
```

### More detailed stats:
```javascript
db.students.find({ city: "Lahore" }).explain("executionStats");
```

## 3. Key Fields to Look At

| Field | Meaning |
|---|---|
| `stage` | `COLLSCAN` = full scan (slow), `IXSCAN` = index used (fast) |
| `nReturned` | Number of documents returned |
| `totalDocsExamined` | Number of documents MongoDB had to look at |
| `executionTimeMillis` | Time taken to run the query |

### Ideal scenario:
`nReturned` and `totalDocsExamined` are close in value (MongoDB didn't waste time scanning irrelevant documents).

### Problem scenario:
`totalDocsExamined` is MUCH higher than `nReturned` — meaning MongoDB scanned way more documents than it needed to (usually means missing an index).

## 4. Example Comparison

**Without an index:**
```javascript
db.students.find({ city: "Lahore" }).explain("executionStats");
// stage: "COLLSCAN", totalDocsExamined: 1,000,000, nReturned: 500
```

**After creating an index:**
```javascript
db.students.createIndex({ city: 1 });
db.students.find({ city: "Lahore" }).explain("executionStats");
// stage: "IXSCAN", totalDocsExamined: 500, nReturned: 500
```

## 5. Basic Query Optimization Tips
- Create indexes on fields you frequently query, filter, or sort by
- Use projection to return only needed fields (less data to transfer)
- Avoid `$regex` searches with a leading wildcard (e.g., `/.*abc/`) — these can't use indexes efficiently
- Use `limit()` when you only need a small number of results
- Structure compound indexes to match your most common query patterns (filter fields first, then sort fields)

## 6. Real-World Habit
Before deploying a query that will run against a large production collection, always run `explain("executionStats")` first to confirm it uses an index.

---

## 📝 Homework / Tasks (Class 15)
1. Run `explain("executionStats")` on a query filtering by a non-indexed field. Note the `stage` and `totalDocsExamined`.
2. Create an index on that field, then run the same query again and compare the results.
3. Explain, in your own words, what `COLLSCAN` vs `IXSCAN` means.
4. Write a query using projection + `limit()` combined, then run `explain()` on it.
5. Challenge: Create a compound index and test explain() with a query that filters on both fields — confirm it uses `IXSCAN`.

---
⬅️ **Previous:** [Class 14](14-indexes.md)  |  ➡️ **Next:** [Class 16 - Aggregation Framework: $match, $group](16-aggregation-intro.md)
