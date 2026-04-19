# Queues

A **queue** is a simple data structure that processes items in **first-in, first-out (FIFO)** order. You insert items at the back and remove them from the front.

Think of it as a controlled pipeline: items flow through in the order they arrive.

---

## What Problems Queues Solve Well

Queues work best when **order matters** and you need to process things **fairly and sequentially**.

* **Task scheduling**
  Process jobs in the order they arrive (e.g., print queues, job runners).

* **Breadth-first search (BFS)**
  Explore graphs or trees level by level. This guarantees shortest paths in unweighted graphs.

* **Buffering and streaming**
  Handle data arriving at different speeds (e.g., network packets, I/O buffers).

* **Producer–consumer systems**
  Decouple components: one produces work, another consumes it at its own pace.

* **Event handling systems**
  Process events in the order they occur (e.g., message queues, UI event loops).

---

## When Not to Use a Queue

If you need **priority-based processing**, a plain queue is the wrong tool—use a **priority queue (heap)** instead.
If you need **random access or fast lookups**, use arrays, hash tables, or trees.

### Bottom Line

Use a queue when you want **predictable, ordered processing with minimal overhead**. It’s one of the simplest structures—and that simplicity is exactly why it shows up everywhere.

---

## Priority Queues

**Input:** A set of records with totally ordered keys.
**Goal:** Maintain a data structure that gives fast access to the smallest or largest key.

---

A **priority queue** retrieves items based on priority, not insertion order or exact key match. You always remove the highest- or lowest-priority item first.

These structures are especially useful in **simulations**, where you manage future events ordered by time.

If your data never changes after setup, don’t use a priority queue. Just sort the data once and process it sequentially. This works well in cases like fixed event simulations or certain graph algorithms.

You need a priority queue when you **mix insertions, deletions, and queries dynamically**.

To choose the right implementation, consider:

* **What operations do you need?**
  Only extract-min, or also search and delete arbitrary elements?

* **Do you know the maximum size in advance?**
  This determines whether you can preallocate memory.

* **Will priorities change over time?**
  If so, you need efficient support for updating existing elements.

---

### Common Implementations

**Sorted arrays or lists**
These make it fast to find and remove the smallest element. However, inserting new elements is slow because you must maintain order. Use this when no insertions occur after initialization.

---

**Binary heaps**
Binary heaps offer a clean balance: both insertion and extract-min run in ${O(\log n)}$ time.

They store elements in an array that represents a tree where each parent is smaller than its children. The smallest element always sits at the root.

Insert a new element at the bottom and move it upward until it reaches the correct position.

Binary heaps work best when you know an upper bound on the number of elements. You can relax this constraint with dynamic arrays.

---

**Bounded-height priority queues**
Use this when keys fall within a small, known range.

Create an array of buckets, where each index corresponds to a key value. Store items in the appropriate bucket and track the smallest non-empty bucket.

* Insert: ${O(1)}$
* Find-min: ${O(1)}$

This approach works well for problems like grouping graph vertices by degree.

---

**Binary search trees**
These support priority queue operations while also allowing general search.

* Minimum: follow left pointers
* Maximum: follow right pointers

Use trees when you need flexibility or don’t know the key range in advance.

---

**Fibonacci and pairing heaps**
These optimize the **decrease-key** operation, which updates the priority of an existing element.

They are useful in algorithms like shortest paths, where priorities change frequently.

* Insert and decrease-key: ${O(1)}$ (amortized)
* Extract-min: ${O(\log n)}$

In practice, they are harder to implement and come with higher constant overhead. Pairing heaps often deliver similar performance with less complexity.

---

### Key Takeaway

Use a **binary heap** for most cases—it’s simple and fast.
Switch to specialized structures only when your problem demands it (e.g., small key ranges or frequent priority updates).