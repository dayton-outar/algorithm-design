# Trees

![Tree showing nodes and edges](/.attachments/tree-node.edges.png)

A **tree** is a hierarchical data structure made of nodes connected by edges. It starts at a **root** and branches downward into children, forming a structure with no cycles.

![Definition of a tree using graphs](/.attachments/tree-graph.definition.png)

![Root node of a tree](/.attachments/binary.tree-root.node.png)

Unlike arrays or lists, trees organize data to reflect **relationships**, not just order.

![Relationships in binary tree](/.attachments/binary.tree-children.png)

![Leaf nodes in binary tree](/.attachments/binary.tree-leaf.nodes.png)

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
