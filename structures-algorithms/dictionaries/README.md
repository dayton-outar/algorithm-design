# Dictionaries

A **dictionary** is a data structure that stores **key → value pairs** and lets you quickly find the value for a given key.

Core operations:

* **Insert** (add a key-value pair)
* **Search** (lookup by key)
* **Delete** (remove by key)

---

**Input:** A set of $n$ records, each identified by one or more keys.

**Goal:** Build and maintain a data structure that can efficiently locate, insert, and delete records based on a query key $q$.

---

The dictionary is one of the most important abstract data types in computer science. Many data structures implement it—hash tables, skip lists, and binary search trees (both balanced and unbalanced). You don’t need to find the perfect one; you just need to avoid choosing a bad one.

Separate the implementation of your dictionary from its interface. Call clear methods to initialize, search, and update the structure instead of embedding logic directly in your code. This keeps your program clean and makes it easy to swap implementations and compare performance. Don’t worry about the overhead of function calls—if performance is that critical, you should be benchmarking implementations anyway.

To choose the right data structure, answer these questions:

* **How large is the data set?**
  Will you know the size in advance? Is it small enough for a simple structure, or large enough to raise memory concerns?

* **What operations dominate?**
  If the data never changes, use a static structure like a sorted array. If you only insert but never delete, a semi-dynamic structure may simplify things.

* **What does access look like?**
  Many systems show skewed access—some keys are used far more than others. They also show locality, where recently accessed items are likely to be accessed again soon. Some structures exploit this.

* **Do you need fast individual operations or low total cost?**
  Real-time systems require consistent speed per operation. Batch-style workloads care more about minimizing total work.

Most developers rely on built-in containers—and that’s usually fine. Still, understanding what’s underneath helps you make better decisions.

---

## What Problems Dictionaries Solve Well

Dictionaries are built for **fast lookup by identifier**.

* **Direct access by key**
  Retrieve data in ${O(1)}$ (hash tables) or ${O(\log n)}$ (trees).

* **Caching / memoization**
  Store computed results and reuse them instantly.

* **Indexing data**
  Map IDs, usernames, or codes to records.

* **Deduplication / membership checks**
  Quickly check if something exists.

* **Counting and frequency tracking**
  Tally occurrences efficiently.

* **Symbol tables (compilers, interpreters)**
  Map variable names to values or memory locations.

---

## When Not to Use a Dictionary

* If you need **ordered traversal**, use a tree or sorted structure.
* If you need **range queries**, dictionaries aren’t ideal.
* If keys don’t matter and order does, use a list or queue.

---

### Bottom Line

Use a dictionary when you need **fast, direct access to data by key**. It’s the go-to structure for turning identifiers into instant answers.

---

## Common Dictionary Implementations

**Unsorted arrays or linked lists**
Use these for small datasets. They are simple but scale poorly because searches take linear time. Once you exceed roughly 50–100 elements, performance drops sharply.

A useful variation is the self-organizing list: move accessed elements to the front. This works well when access is uneven and clustered.

---

**Sorted arrays or linked lists**
Sorted linked lists offer little benefit because you can’t use binary search. Sorted arrays work well when insertions and deletions are rare.

---

**Hash tables**
Use hash tables for medium to large datasets. A hash function maps keys to indices in an array of size $m$. Each index stores a small bucket (often a list). If the hash spreads keys evenly, searches stay fast.

Key design decisions:

* **Collision handling:**
  Open addressing improves cache performance but becomes fragile at high load factors.

* **Table size:**
  With buckets, set $m$ close to the expected number of elements. With open addressing, make it 30–50% larger. Prime sizes reduce bad distributions.

* **Hash function:**
  For strings, a polynomial hash works well:

  ${H(S) = \sum_{i=0}^{|S|-1} \alpha^{|S|-(i+1)} \cdot \text{char}(s_i) \bmod m}$

  Use Horner’s rule to compute it efficiently.

Always measure how evenly keys distribute across buckets. A poor hash function will quietly destroy performance.

---

**Binary search trees**
These support fast insertions, deletions, and searches. However, unbalanced trees can degrade into linked lists if data arrives in sorted order.

Balanced trees fix this using rotations. Red–black trees are widely used. Splay trees adapt dynamically by moving frequently accessed elements toward the root.

In practice, the quality of your implementation matters more than the specific tree type.

---

**B-trees**
Use B-trees when data does not fit in memory. They reduce disk access by grouping multiple levels of a tree into a single node. This dramatically improves performance for large datasets.

They also interact closely with memory systems (cache, RAM, disk), so tuning depends on hardware characteristics.

> **B-trees** are balanced tree data structures designed for **large datasets stored on disk**.
> 
> * They store **multiple keys per node** (not just one like binary trees).
> * This reduces the tree height → **fewer disk reads**.
> * All leaf nodes stay at the same depth → **consistent performance**.
> * They support **fast search, insert, and delete** in ${O(\log n)}$ time.
> 
> **Bottom line:** B-trees are optimized to minimize expensive disk access, which is why databases and file systems use them.

---

**Skip lists**
Skip lists build multiple layers of linked lists using randomization. Each higher level contains fewer elements. Searches move from top to bottom, narrowing the search range efficiently.

They offer expected performance of ${O(\log n)}$ and are easier to implement than balanced trees.

---

## Key Takeaway

Pick a structure that fits your workload, not one that looks theoretically optimal. Measure performance, keep your implementation modular, and switch strategies when the data or access patterns change.