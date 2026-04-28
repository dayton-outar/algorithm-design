
# Fundamental Structures and Algorithms

## Data Structures

Some fundamental data structures that are used for solving problems includes,

1. 🔖 Arrays
2. 🔖 Linked Lists
3. 🔖 Stack
4. [Queues](./queues/)
5. [Dictionaries](./dictionaries/)
6. [Graphs](./graphs/)
7. [Trees](./trees/)

## Algorithms

1. [Sorting](./sorting/)
2. [Huffman Coding](./huffman/)

## 🔖 Graph Traversal

There are 2 main methods of traversing a graph (or a tree, which is a type of graph): _Depth-first_ and _Breadth-first_.[^1]

### Reasons for Depth-First

- When you want to find the longest path between two nodes in a graph.
- When you want to detect a cycle in a graph.
- When the tree is very wide (has a lot of branches). BFS would use more memory.
- When you want to visit child nodes before sibling nodes.
- When solving a maze/puzzle problem, a DFS allows you to traverse through all possible paths. This is very useful for creating a decision tree.

There are 3 main ways to do _depth-first_ traversal.

1. Pre-order

   Visits nodes in the following order: root (the current node), left, right.

   ![Pre-order traversal](/.attachments/pre-order-traversal.png)

2. In-order

   Visits nodes in the following order: left, root (current node), right.

   ![In-order traversal](/.attachments/in-order-traversal.png)

3. Post-order

   Visits nodes in the following order: left, right, root (the current node).

   ![Post-order traversal](/.attachments/post-order-traversal.png)

### Reasons for Breadth-First

- When you want to find the shortest path between two nodes in a graph.
- When you have knowledge that a solution is not far from the root of a tree.
- When you want to prioritize searching vertices that are close to the start node.
- When you want to visit sibling nodes before child nodes.

This method essentially visits each node level by level instead of going deep into the left or right. This approach is also called _level-order_ traversal.

![Level-order traversal](/.attachments/level-order-traversal.png)

## Discrete Mathematics

1. [Number Theory](./number-theory/)

## Videos

1. [Binary Heap | GeeksforGeeks](https://youtu.be/uZj0hetLFHU)
2. [Bubble Up and Bubble Down Heap Insertion](https://youtu.be/PkCBI4BKeb8)
3. [Binary Tree Algorithms for Technical Interviews - Full Course](https://youtu.be/fAAZixBzIAI)
4. [Graph Algorithms for Technical Interviews - Full Course](https://youtu.be/tWVWeAqZ0WU)

[^1]: [When to Use Depth-First Search (DFS) vs Breadth-First Search (BFS)](https://medium.com/@alexzelinsky124/when-to-use-depth-first-search-dfs-vs-breadth-first-search-8ad4c514e033)