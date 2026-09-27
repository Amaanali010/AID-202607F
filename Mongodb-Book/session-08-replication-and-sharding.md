# Session 8: MongoDB Replication and Sharding

## 🎯 Learning Objectives
By the end of this lecture, you will be able to:
- Explain replication
- Describe the ways to implement replication
- Explain sharding
- Describe the ways to implement sharding

---

## 1. What is Replication?

**Replication** means keeping multiple copies of the same data on different servers. This ensures that if one server fails, your data is still safe and available on another server.

**Analogy:** Imagine you keep a backup copy of your important documents in a second location. If your house catches fire, you still have your documents safe elsewhere.

### Why Do We Need Replication?
- **High availability** — the database stays accessible even if one server goes down.
- **Data redundancy** — protects against data loss.
- **Disaster recovery** — backups exist in different physical locations.
- **Read scaling** — read operations can be spread across multiple servers.

---

## 2. How Replication Works: The Replica Set

MongoDB implements replication using a **Replica Set** — a group of `mongod` servers that maintain the same data set.

### Components of a Replica Set
- **Primary Node**: Receives all **write** operations. Only one primary exists at a time.
- **Secondary Nodes**: Copy data from the primary. Can serve **read** operations.
- **Arbiter (optional)**: Doesn't hold data — it only participates in elections to break ties when choosing a new primary.

```
        ┌─────────────┐
        │   PRIMARY   │ ← All writes go here
        └──────┬──────┘
               │ replicates data
     ┌─────────┴─────────┐
┌────▼────┐         ┌────▼────┐
│SECONDARY│         │SECONDARY│ ← Can serve reads
└─────────┘         └─────────┘
```

If the primary node fails, the remaining nodes automatically hold an **election** to choose a new primary — this process is called **automatic failover**.

### 2.1 Implementing Replication
```javascript
// Step 1: Start each mongod instance with a replica set name
mongod --replSet "rs0" --port 27017 --dbpath /data/db1
mongod --replSet "rs0" --port 27018 --dbpath /data/db2
mongod --replSet "rs0" --port 27019 --dbpath /data/db3

// Step 2: Connect to one instance and initiate the replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
})

// Step 3: Check replica set status
rs.status()
```

---

## 3. What is Sharding?

**Sharding** is the process of splitting a large dataset across multiple servers to handle data that is too big or too busy for a single server to manage.

**Analogy:** Imagine a huge library with millions of books. Instead of keeping them all in one building, you split them across multiple branch libraries organized by genre (fiction in Branch A, non-fiction in Branch B). Each branch holds a *portion* of the total collection.

### Why Do We Need Sharding?
- **Horizontal scaling** — spreads data across many servers instead of relying on one powerful (and expensive) machine.
- **Handles massive datasets** — useful when data grows beyond what a single server can store.
- **Improves performance** — distributes read/write load across multiple servers.

---

## 4. How Sharding Works

### Components of a Sharded Cluster
- **Shard**: A server (or replica set) that stores a portion of the data.
- **Config Servers**: Store metadata about which shard holds which data.
- **Mongos (Query Router)**: Routes client requests to the correct shard(s).

```
             ┌──────────┐
 Client ───▶ │  mongos  │  (Query Router)
             └────┬─────┘
        ┌─────────┼─────────┐
   ┌────▼───┐ ┌────▼───┐ ┌───▼────┐
   │ Shard 1│ │ Shard 2│ │ Shard 3│
   └────────┘ └────────┘ └────────┘
```

### 4.1 Shard Key
A **shard key** is a field (or fields) used to determine how data is distributed across shards. Choosing a good shard key is critical for even data distribution.

### 4.2 Implementing Sharding
```javascript
// Step 1: Start config servers and shard servers (each as replica sets)

// Step 2: Start a mongos router pointing to the config servers
mongos --configdb configReplSet/localhost:27019

// Step 3: Add shards to the cluster
sh.addShard("shard1ReplSet/localhost:27017")
sh.addShard("shard2ReplSet/localhost:27018")

// Step 4: Enable sharding on a database
sh.enableSharding("schoolDB")

// Step 5: Shard a specific collection using a shard key
sh.shardCollection("schoolDB.students", { studentId: 1 })
```

---

## 5. Replication vs. Sharding — Key Difference

| Aspect | Replication | Sharding |
|--------|-------------|----------|
| Purpose | Data redundancy & availability | Data distribution & scalability |
| Data | Same data copied on every node | Different data split across nodes |
| Solves | Server failure / downtime | Server storage/performance limits |

> Note: In production, replication and sharding are often **used together** — each shard is typically itself a replica set, giving you both scalability and high availability.

---

## 📝 Assignment: Session 8

1. In your own words, explain the difference between replication and sharding, and why a real-world application might need both.
2. Describe the role of the **Primary**, **Secondary**, and **Arbiter** nodes in a replica set.
3. Set up a local 3-node replica set (or describe the steps in detail if you don't have the resources to run it) and run `rs.status()`. Note down what information it shows.
4. Explain what a **shard key** is and why choosing a bad shard key could cause problems (hint: think about uneven data distribution).
5. Describe the roles of the **config servers** and **mongos router** in a sharded cluster.
6. **Short answer:** If your application experiences frequent server crashes, would you solve this primarily with replication or sharding? Explain your reasoning.

