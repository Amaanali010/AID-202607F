# Class 18: Pagination Strategies for Large Datasets (skip/limit vs Cursor-Based)

## 🎯 Learning Objectives
- Understand the limitations of `skip()`/`limit()` pagination at scale
- Implement cursor-based (range) pagination
- Choose the right pagination strategy for a large dataset

---

## 1. Recap: skip()/limit() Pagination
```javascript
// Page 1
db.students.find().sort({ _id: 1 }).skip(0).limit(20);
// Page 2
db.students.find().sort({ _id: 1 }).skip(20).limit(20);
// Page 50,000
db.students.find().sort({ _id: 1 }).skip(999980).limit(20);
```

### ⚠️ The Problem
For page 50,000, MongoDB must still walk through (and discard) the first 999,980 documents before returning the 20 you actually want. On large collections, this gets progressively **slower** the deeper you paginate.

## 2. Cursor-Based (Range) Pagination — The Better Approach
Instead of "skip N documents", we remember the **last seen value** and query "give me documents after this point."

### Step 1: Get the first page
```javascript
db.students.find().sort({ _id: 1 }).limit(20);
```
Note the `_id` of the **last document** returned — say it's `ObjectId("64f1...c9")`.

### Step 2: Get the next page using that value
```javascript
db.students.find({ _id: { $gt: ObjectId("64f1...c9") } })
  .sort({ _id: 1 })
  .limit(20);
```
Because `_id` is indexed by default, this query jumps directly to the right spot — **no scanning and discarding** needed, regardless of how deep you paginate.

## 3. Cursor Pagination with a Different Sort Field
If sorting by something other than `_id` (e.g., `enrollDate`), use that field (plus `_id` as a tiebreaker for documents with identical values):
```javascript
db.students.find({ enrollDate: { $gt: lastSeenDate } })
  .sort({ enrollDate: 1, _id: 1 })
  .limit(20);
```
⚠️ Make sure the sort field has an index, or this will still be slow.

## 4. skip/limit vs Cursor-Based — Comparison

| | skip()/limit() | Cursor-Based |
|---|---|---|
| Simple to implement | ✅ Very simple | ⚠️ Slightly more code |
| Performance on deep pages | ❌ Gets slower | ✅ Stays fast |
| Supports "jump to page N" | ✅ Yes | ❌ Not directly (sequential only) |
| Best for | Small/medium datasets, admin UIs with page numbers | Large datasets, infinite scroll, APIs |

## 5. When to Use Which
- **skip/limit**: fine for small-to-medium collections, or when users need to jump to a specific page number.
- **Cursor-based**: recommended for large collections (100k+ documents), infinite-scroll UIs, and APIs serving high-traffic data feeds.

---

## 📝 Homework / Tasks (Class 18)
1. Implement basic skip/limit pagination for 3 "pages" of your students collection (5 per page).
2. Implement cursor-based pagination: get page 1, note the last `_id`, then fetch "page 2" using `$gt`.
3. Explain, in your own words, why `skip()` becomes slower on large, deeply-paginated collections.
4. Challenge: Implement cursor-based pagination sorted by `enrollDate` instead of `_id`, handling ties with `_id` as a secondary sort field.
5. Research: Look up how a real API (e.g., a well-known REST API) implements pagination — does it use page numbers or cursor tokens?

---
⬅️ **Previous:** [Class 17](17-aggregation-pipeline.md)  |  ➡️ **Next:** [Class 19 - Bulk Operations & Performance Tips](19-bulk-operations.md)
