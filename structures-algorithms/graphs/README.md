# Graph

**Input:** A graph $G$
**Goal:** Represent $G$ using a flexible and efficient data structure

---

You typically represent graphs in two ways:

* **Adjacency matrix**
* **Adjacency list**

In most cases, **adjacency lists are the better choice**.

![Graph, adjacency list and adjacency matrix](/.attachments/adjacency-matrix.png)

---

## How to Choose the Right Representation

* **Graph size**
  If your graph has $n$ vertices, an adjacency matrix uses ${n^2}$ space. This works for small graphs, but becomes expensive as $n$ grows.

* **Graph density**
  If the graph is dense (many edges), you already need about ${\Theta(n^2)}$ space, so matrices are acceptable. For sparse graphs, adjacency lists are far more efficient.

* **Algorithm requirements**

  * Use adjacency matrices when you frequently check if an edge exists between two vertices.
  * Use adjacency lists for most traversal-based algorithms like DFS.

---

## Additional Design Considerations

* **Will the graph change?**
  If the structure stays fixed, use a simpler, static representation.
  If it changes, choose a structure that supports updates efficiently.

  Store attributes (like weights, labels, or colors) directly in vertex or edge records.

* **Will the graph persist long-term?**
  Large, real-world graphs often live in databases rather than memory. Specialized graph databases handle this better than basic structures.

---

## Practical Advice

Building a full-featured graph structure from scratch is a big task. Use existing libraries when possible.

You can convert between adjacency matrices and lists in linear time relative to the graph size. This conversion is usually cheap, so you can use both representations if needed.

---

## Special Graph Types

**Planar graphs**
These can be drawn without edge crossings. They are always sparse and should be stored using adjacency lists. If the geometric layout matters, represent them with geometric data.

---

**Hypergraphs**
In hypergraphs, edges can connect more than two vertices.

You can represent them using:

* **Incidence matrices**
  A matrix where rows represent vertices and columns represent edges. Entry ${M[i, j]}$ is non-zero if vertex $i$ belongs to edge $j$.

* **Bipartite incidence structures**
  Build a bipartite graph where one set of nodes represents vertices and the other represents edges. Connect them when a vertex belongs to an edge. Store this using adjacency lists.

---

## Handling Very Large Graphs

When graphs become huge:

* Reduce memory usage (e.g., remove pointers, pack data tightly)
* Use arrays instead of pointer-heavy structures when the graph is static
* Compress the graph by grouping vertices into clusters (hierarchical representation)

For example, you might group a road network into regions, cities, and districts.

Before doing complex optimizations, confirm that simpler structures actually fail to meet your needs.

---

## Key Takeaway

* Use **adjacency lists** for most graphs
* Use **adjacency matrices** for dense graphs or frequent edge checks
* Optimize only when scale forces you to
