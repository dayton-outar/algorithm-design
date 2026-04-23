# Trees

A **tree** is a hierarchical data structure made of nodes connected by edges.

![Definition of a tree using graphs](/.attachments/tree-graph.definition-2.png)

It starts at a **root** and branches downward into children, forming a structure with no cycles.

![Root node of a tree](/.attachments/binary.tree-root.node-2.png)

Unlike arrays or lists, trees organize data to reflect **relationships**, not just order.

![Relationships in binary tree](/.attachments/binary.tree-children-2.png)

![Leaf nodes in binary tree](/.attachments/binary.tree-leaf.nodes-2.png)

## What Problems Trees Solve Well

Trees shine when you need **structured access, fast search, or hierarchical representation**.

* **Fast search, insert, delete**
  Balanced trees give ${O(\log n)}$ performance (e.g., binary search trees, B-trees).

* **Hierarchical data modeling**
  Represent structures like file systems, org charts, or XML/JSON.

* **Sorted data with efficient updates**
  Maintain order while allowing frequent inserts and deletes.

* **Range queries and ordered traversal**
  Easily process data in sorted order or within bounds.

* **Indexing large datasets**
  B-trees minimize disk access, making them ideal for databases.

* **Prefix and pattern matching**
  Tries and suffix trees handle string problems efficiently.

## When Not to Use Trees

* If you need **constant-time lookup**, use a hash table.
* If your data is small and simple, a tree adds unnecessary complexity.
* If you don’t need hierarchy or ordering, simpler structures work better.

---

### Bottom Line

Use trees when you need **structured, scalable access to ordered or hierarchical data**. They sit in the sweet spot between raw speed (hashing) and flexibility (lists).

## Balanced Trees

**Input:** A set of values with frequent insertions and lookups
**Goal:** Support fast search *and* fast insertion

---

### The Core Problem

We want:

* **Fast search** → like a sorted array → ${ O(\log n) }$
* **Fast insertion** → like a linked list → ${ O(1) }$

But:

* Arrays → slow insert ${ O(n) }$
* Linked lists → slow search ${ O(n) }$

So the question is:

> Can we combine both advantages?

![Combined Performance of Arrays and Linked Lists](/.attachments/combined.performance-array.linked.list.png)

---

### Binary Search Trees (BST)

A **binary search tree** organizes data so that:

* Left subtree → values **smaller**
* Right subtree → values **greater**

![A Balanced Tree](/.attachments/balanced.tree.illustrated.png)

---

### Searching in a BST

To search for a value `( x )`:

* Start at root
* If `( x < node )` → go left
* If `( x > node )` → go right
* Repeat until found or null

**Time:**

* Best case: ${ O(\log n) }$
* Worst case: ${ O(n) }$

---

### Why Height Matters

The **height of the tree** determines performance.

![Showing best and worst case of two binary trees](/.attachments/two.trees-best.case.worst.case.png)

* Short tree → fewer steps → faster
* Tall tree → more steps → slower

| Case       | Height        | Search Time   |
| ---------- | ------------- | ------------- |
| Best case  | ${ O(\log n) }$ | ${ O(\log n) }$ |
| Worst case | ${ O(n) }$      | ${ O(n) }$      |

Worst case looks like a **linked list**.

![Showing big savings using balanced binary tree](/.attachments/tree.time.complexity-big.savings.png)

---

### The Problem with BSTs

If data is inserted in order:

* Tree becomes **skewed**
* Height becomes ${ O(n) }$
* Performance degrades

So:

> **BSTs are only fast if they stay balanced**

## AVL Trees

**Goal:** Keep tree height at ${ O(\log n) }$

---

### What is an AVL Tree?

A **self-balancing BST** that:

* Automatically adjusts structure
* Maintains near-equal subtree heights

> **AVL** stands for **Adelson-Velsky and Landis** — the two Russian mathematicians who introduced it.

![Showing the balancing of a tree](/.attachments/self.balancing-rotate.tree.png)

---

### Balance Condition

Each node tracks:

* **Height**, or
* **Balance Factor, ${ BF }$**

${\large
BF = height(left) - height(right)
}$

![Examples of calculated balance factors](/.attachments/avl.balance.factor.png)

Allowed values:

* ( -1, 0, 1 ) → OK
* ( < -1 ) or ( > 1 ) → **rebalance needed**

![Showing binary trees needing rebalancing](/.attachments/avl.rebalancing.needed.png)

---

### Rotations (Core Idea)

When tree becomes unbalanced → **rotate nodes**

Example:

* Left-heavy → right rotation
* Right-heavy → left rotation

 (see rotation diagram on page 11)

---

### Insert Operation (AVL)

Steps:

1. Insert like a normal BST
2. Update height / balance factor up the tree
3. If imbalance detected, perform rotation
4. Stop after first fix (usually enough)

---

### Performance

| Operation | Time          |
| --------- | ------------- |
| Search    | ( O(\log n) ) |
| Insert    | ( O(\log n) ) |

---

### Key Takeaway

* BST → fast *if balanced*
* AVL → **guarantees balance**
* Result → consistently fast operations

## Splay Trees

**Idea:** Recently accessed items become faster to access again

---

### How It Works

After accessing a node:

* Move it to the **root** using rotations

 (see repeated lookup example on page 18)

---

### Behavior

* Frequently accessed nodes → near top
* Rare nodes → deeper

---

### Tradeoff

* Not always balanced
* Some operations can be slow

But:

* **Amortized time per operation:** ( O(\log n) )

---

### When to Use

Good when:

* Access patterns are **repetitive**
* Recently used data is likely reused

## B-Trees

**Goal:** Optimize for real-world storage (disk access)

---

### Key Idea

Disk access is expensive (**seek time**).

So instead of:

* Many small reads → slow

We do:

* Fewer large reads → faster

---

### Structure

Unlike BSTs:

* Nodes can have **multiple keys**
* Nodes can have **many children**

 (see B-tree structure on page 20)

---

### Properties

* Keys inside node are **sorted**
* Children split value ranges
* Number of children = keys + 1

---

### Why B-Trees Are Fast

* Fewer levels → fewer disk reads
* More data per node → better throughput

Analogy:

> One trip to the grocery store vs multiple trips

---

### Performance

| Operation | Time          |
| --------- | ------------- |
| Search    | ( O(\log n) ) |
| Insert    | ( O(\log n) ) |

But with **much fewer disk operations**

---

### Where They Are Used

* Databases
* File systems
* Storage engines


## Suffix Trees and Arrays

**Input:** A reference string $S$
**Goal:** Build a data structure to quickly find all occurrences of a query string $q$ in $S$

---

Suffix trees and suffix arrays solve string problems efficiently. When used properly, they reduce many algorithms from ${O(n^2)}$ to linear time.

---

### Tries and Suffix Trees

A **trie** stores strings as paths in a tree. Each edge represents a character, and each path from the root forms a string.

To check if a string $q$ exists:

* Start at the root
* Follow edges matching each character in $q$

If a path breaks, the string does not exist. Otherwise, you find it in ${O(|q|)}$ time, regardless of how many strings are stored.

Tries are easy to build and fast to search, but they use a lot of memory.

---

A **suffix tree** extends this idea. It stores all suffixes of $S$.

Any substring of $S$ must be a prefix of some suffix. That means you can check if $q$ appears in $S$ in ${O(|q|)}$ time.

---

### Making Suffix Trees Efficient

A naive suffix tree uses ${O(n^2)}$ time and space because it stores many overlapping suffixes.

You can fix this by **compressing paths**:

* Collapse chains of nodes into single edges
* Represent each edge using start and end indices in $S$

This reduces space to ${O(n)}$.

Efficient algorithms can also build this compressed tree in linear time.

---

### What You Can Do with Suffix Trees

* **Find all occurrences of $q$ in $S$**
  Traverse to the node representing $q$, then explore its descendants.
  Time: ${O(|q| + k)}$, where $k$ is the number of matches.

* **Find the longest common substring across multiple strings**
  Build one tree for all strings and track which strings appear under each node.
  Then scan for the best candidate in linear time.

* **Find the longest palindrome in $S$**
  Build a tree using $S$ and its reverse.
  Identify nodes that align matching forward and reversed substrings.

---

### Suffix Arrays

A **suffix array** stores all suffixes of $S$ in sorted order.

* Use binary search to find $q$ in ${O(\log n)}$ comparisons
* With additional indexing, reduce comparisons to about ${\log n + |q|}$

Suffix arrays are often:

* **Simpler to implement**
* **More memory-efficient** (about 4× smaller than suffix trees)

Each suffix is represented only by its starting index, and the original string provides the actual data.

---

### Construction Considerations

Suffix arrays must be built carefully because the total number of characters across all suffixes is ${O(n^2)}$.

You can:

* Build a suffix tree and extract the sorted suffixes
* Or use modern algorithms that construct suffix arrays directly in linear time

---

### Key Takeaway

* Use **suffix trees** for maximum power and flexibility
* Use **suffix arrays** when you want similar performance with less complexity and memory

## KD-Trees

**Input:** A set $S$ of $n$ points (or geometric objects) in $k$ dimensions
**Goal:** Build a tree that partitions space so each object lies in its own box-shaped region

---

KD-trees organize space by recursively splitting it into smaller regions. Each split divides the data into two groups, creating a hierarchy of regions that makes spatial queries fast.

To locate a point, you traverse the tree from the root, narrowing down to the smallest region that contains it, then scan the few points inside that region.

---

### How KD-Trees Work

Each node splits space using a plane aligned with one dimension.

* At each level, choose a dimension and divide the points into two groups
* Continue splitting until each point sits in its own region
* The tree typically has height ${O(\log n)}$

As you move down the tree, the sequence of splits defines a box-shaped region in space.

---

### Variants of Spatial Partitioning

Different strategies exist for choosing how to split:

* **Cycle through dimensions**
  Alternate between dimensions in order.

* **Split along the largest dimension**
  Choose the dimension that keeps regions balanced and well-shaped.

* **Quadtrees / octrees**
  Split space into 4 regions in 2D or 8 regions in 3D using multiple planes.

* **Random projection trees**
  Split using randomly oriented planes instead of axis-aligned ones.

* **BSP trees**
  Use arbitrary planes to partition space, allowing more flexibility but more complexity.

* **Ball trees**
  Group points into overlapping spheres instead of boxes. These work better in higher dimensions.

---

### What KD-Trees Are Good For

* **Point location**
  Find which region contains a query point in time proportional to tree height.

* **Nearest-neighbor search**
  Find the closest point to a query by checking nearby regions and pruning the rest.

* **Range search**
  Find all points inside a query region by skipping irrelevant parts of space.

* **Partial key search**
  Search using incomplete information by exploring multiple branches where necessary.

---

### Practical Considerations

Good splits aim to:

* Balance the number of points in each region
* Keep regions well-shaped (not too stretched)

You often can’t achieve both perfectly, so you trade off depending on the data.

---

### Limitations

KD-trees work best in **low to moderate dimensions** (roughly 2–20).

As dimensions increase:

* The number of neighboring regions grows exponentially (${2^k}$)
* Searches become less efficient
* Many regions must be checked for queries like nearest-neighbor

In high dimensions, performance degrades significantly.

---

### Key Takeaway

Use KD-trees when you need fast spatial queries in low-dimensional space.
Avoid them in high-dimensional problems—simplify the data or use alternative structures.

## Heaps

A **heap** is a tree-like data structure that enforces a simple rule:

* In a **max-heap**, every parent is greater than its children
* In a **min-heap**, every parent is smaller than its children

This rule—called the **heap property**—is what makes heaps powerful.

---

Heaps, unlike other tree data structures, use an array to store data instead of having pointers to their children. A heap node’s children’s positions (indices) in the array can be calculated easily. This is because the parent-child relationship is easily defined with a heap.

There are many types of heaps that have different numbers of children. Let's consider binary heaps for this explanation. Since a heap uses an array to store the data, the indices of the array define the order/height of each element. A binary heap can be built by placing the first array element as the root and then filling each left and right element in order.

For example, for the heap shown below,

![Heap indices](/.attachments/heap-indices.png)

would look like this: [2, 4, 23, 12, 13].

There are two types of binary heaps: max-heap and min-heap. In _max-heap_, the root node has the highest value, and each node’s value is greater than its children. In _min-heap_, the root node has the lowest value, and each node’s value is smaller than its children.

Heaps can store any values of any type: strings, integer, and even custom classes.

A ***max-heap*** is a heap where the parent is always greater than any of its children.

![Max-heap](/.attachments/max-heap.png)

A ***min-heap*** is a heap where the parent is always smaller than any of its children

![Min-heap](/.attachments/min-heap.png)

For a binary heap, an array is used to represent the heap by using the following indices, where N is the index of the node:

| Node          | Index              |
|:--------------|-------------------:|
| (itself)      | $N$                |
| Parent        | $(N - 1) / 2$      |
| Left Child    | $(N \times 2) + 1$ |
| Right Child   | $(N \times 2) + 2$ |

See below illustration of formulas used in reference to node relations,

![Heap relationship](/.attachments/heap-relationship.png)

---

### Why Heaps Exist

Heaps solve one specific problem extremely well:

> **“Give me the largest (or smallest) item quickly, while still allowing inserts.”**

They are not about full sorting or fast lookup by key. They are about **priority**.

---

### Core Strength

* **Access top element:** ${O(1)}$
* **Insert:** ${O(\log n)}$
* **Remove top:** ${O(\log n)}$

That combination is hard to beat when you constantly need the “next most important” item.

---

### How Heaps Store Data

Unlike most trees, heaps don’t use pointers. They use a **compact array representation**.

This works because the structure is always a **complete binary tree** (filled level by level, left to right).

For any node at index ${N}$:

* Parent → ${\lfloor (N - 1) / 2 \rfloor}$
* Left child → ${2N + 1}$
* Right child → ${2N + 2}$

This lets you move up and down the tree with simple arithmetic—no extra memory overhead.

---

### What Makes Heaps Different

Heaps are **partially ordered**, not fully sorted.

* You only know the root is the smallest/largest
* Everything else is loosely organized

That’s intentional. It keeps operations fast.

---

### Types of Heaps

* **Max-heap** → largest value at the root
* **Min-heap** → smallest value at the root

Both behave the same structurally—the only difference is the comparison rule.

---

### What Problems Heaps Solve Well

Heaps shine when you need **continuous prioritization**:

* **Priority queues**
  Always process the most important task next

* **Scheduling systems**
  Pick the next job, event, or timer efficiently

* **Graph algorithms**
  Used in shortest path and minimum spanning tree computations

* **Streaming data (top-k problems)**
  Keep track of the top ${k}$ largest or smallest items

* **Heapsort**
  Turn an unsorted array into a sorted one in ${O(n \log n)}$ time

---

### When Not to Use a Heap

* If you need **fast lookup by key** → use a dictionary
* If you need **fully sorted traversal** → use a tree
* If you need **range queries** → heaps are weak here

---

### Intuition

Think of a heap as a **smart funnel**:

* You can throw data in freely
* It constantly reorganizes just enough
* And always keeps the “most important” item at the top

---

### Bottom Line

Use a heap when you care about **priority over order**.
It’s the simplest and most efficient way to repeatedly answer:

> “What’s the next best thing to process?”

## Final Takeaway

* **BST** → simple, but unstable performance
* **AVL trees** → guaranteed ${ O(\log n) }$, strict balance
* **Splay trees** → adaptive, good for repeated access
* **B-trees** → optimized for real-world storage systems
* **Suffix trees** → best for **string pattern matching**
  * Search substrings in ( O(|q|) )
  * Heavy memory usage, very powerful
* **KD-trees** → best for **multi-dimensional data** (e.g. points, coordinates)
  * Efficient nearest neighbor search
  * Common in graphics, ML, spatial queries
* **Heaps** → best for **priority-based operations**
  * Fast access to min/max in ( O(1) )
  * Insert/delete in ( O(\log n) )
  * Used in priority queues, scheduling, Dijkstra

> If performance must be consistent → use **balanced trees**
> If access patterns repeat → use **splay trees**
> If working with strings → use **suffix trees**
> If working with spatial data → use **KD-trees**
> If working with priorities → use **heaps**
> If storage/disk is involved → use **B-trees**