# Graph Theory

**Based on:** West, Douglas B.(2001)._Introduction to Graph Theory, Second Edition_. Pearson Education, Inc.

**Study assistant:** GPT LLM

Graph theory is about solving real-world connection problems.

Examples:

* How to connect cities with minimum cost (like cable networks)
* Finding shortest routes (maps, logistics)
* Assigning jobs efficiently
* Designing computer networks
* Scheduling tournaments
* Coloring maps so neighbors differ
* Planning optimal travel paths

Core idea: many different problems reduce to **connections between things**.

At first glance, it seems straightforward. You have a set of teams, a list of matches to be played, and a limited number of time slots. But as soon as you try to organize it, the complexity shows up. Every team must play others, no team can be in two matches at once, and ideally the schedule should feel fair—no team overburdened early or left idle too long.

Trying to manage this manually quickly turns into a juggling act.

This is where graph theory steps in and brings clarity.

You start by modeling the situation. Each team becomes a point—a vertex. Every match between two teams becomes a connection—an edge. What looked like a messy scheduling problem is now a clean structure: a graph of relationships between teams.

From there, the problem shifts. You’re no longer asking, “How do I arrange these matches?” Instead, you ask, “How do I assign time slots so that no team has overlapping matches?”

Graph theory gives a precise way to do this. Think of each time slot as a color. Now assign a color to every match (edge), with one rule: no two matches connected to the same team can share the same color. In other words, a team cannot be scheduled for two matches at the same time.

This transforms scheduling into what’s known as an edge-coloring problem.

The power here is that this isn’t guesswork. Graph theory provides proven results. For example, in a round-robin tournament where every team plays every other team, the structure becomes a complete graph. From that alone, you can determine the minimum number of rounds needed and construct a schedule that guarantees no conflicts.

Even tricky cases—like having an odd number of teams—have clean solutions. You simply introduce a “bye” (a dummy team), and the same logic applies.

What started as a frustrating logistical problem becomes a structured, solvable system. You reduce conflicts, minimize total time, and ensure fairness—not by trial and error, but by applying a model that has already been worked out mathematically.

That’s the real value of graph theory. It doesn’t just help you draw connections—it helps you take a complex real-world problem and turn it into something you can solve with certainty.

## A Glance at Graphs

**Input:** A graph $G$
**Goal:** Represent $G$ using a flexible and efficient data structure

You typically represent graphs in two ways:

* **Adjacency matrix**
* **Adjacency list**

In most cases, **adjacency lists are the better choice**.

![Graph, adjacency list and adjacency matrix](/.attachments/adjacency-matrix.png)

### How to Choose the Right Representation

* **Graph size**
  If your graph has $n$ vertices, an adjacency matrix uses ${n^2}$ space. This works for small graphs, but becomes expensive as $n$ grows.

* **Graph density**
  If the graph is dense (many edges), you already need about ${\Theta(n^2)}$ space, so matrices are acceptable. For sparse graphs, adjacency lists are far more efficient.

* **Algorithm requirements**

  * Use adjacency matrices when you frequently check if an edge exists between two vertices.
  * Use adjacency lists for most traversal-based algorithms like DFS.

### Additional Design Considerations

* **Will the graph change?**
  If the structure stays fixed, use a simpler, static representation.
  If it changes, choose a structure that supports updates efficiently.

  Store attributes (like weights, labels, or colors) directly in vertex or edge records.

* **Will the graph persist long-term?**
  Large, real-world graphs often live in databases rather than memory. Specialized graph databases handle this better than basic structures.

### Practical Advice

Building a full-featured graph structure from scratch is a big task. Use existing libraries when possible.

You can convert between adjacency matrices and lists in linear time relative to the graph size. This conversion is usually cheap, so you can use both representations if needed.

### Special Graph Types

**Planar graphs**
These can be drawn without edge crossings. They are always sparse and should be stored using adjacency lists. If the geometric layout matters, represent them with geometric data.

**Hypergraphs**
In hypergraphs, edges can connect more than two vertices.

You can represent them using:

* **Incidence matrices**
  A matrix where rows represent vertices and columns represent edges. Entry ${M[i, j]}$ is non-zero if vertex $i$ belongs to edge $j$.

* **Bipartite incidence structures**
  Build a bipartite graph where one set of nodes represents vertices and the other represents edges. Connect them when a vertex belongs to an edge. Store this using adjacency lists.

### Handling Very Large Graphs

When graphs become huge:

* Reduce memory usage (e.g., remove pointers, pack data tightly)
* Use arrays instead of pointer-heavy structures when the graph is static
* Compress the graph by grouping vertices into clusters (hierarchical representation)

For example, you might group a road network into regions, cities, and districts.

Before doing complex optimizations, confirm that simpler structures actually fail to meet your needs.

### Key Takeaway

* Use **adjacency lists** for most graphs
* Use **adjacency matrices** for dense graphs or frequent edge checks
* Optimize only when scale forces you to

---

## Fundamental Concepts

### Fundamentals

* [The Definition](./fundamentals/DEFINITION.md)
* [Graphs as Models](./fundamentals/MODELS.md)
* [Matrices and Isomorphism](./fundamentals/MATRICES.md)
* 🔖 [Decomposition and Special Graphs](./fundamentals/DECOMPOSITION.md)

### [Paths, Cycles, and Trails](./PATHS.md)

* [Connection in Graphs](./PATHS.md#connected-graphs)
* [Bipartite Graphs](./PATHS.md#bipartite-graphs)
* [Eulerian Circuits](./PATHS.md#eulerian-circuits)

### [Vertex Degrees and Counting](./VERTEX.md)

* Counting and Bijections
* Extremal Problems
* Graphic Sequences

### Directed Graphs

* Definitions and Examples
* Vertex Degrees
* Eulerian Digraphs
* Orientations and Tournaments

## Trees and Distance

### Basic Properties

* Properties of Trees
* Distance in Trees and Graphs
* Disjoint Spanning Trees (optional)

### Spanning Trees and Enumeration

* Enumeration of Trees
* Spanning Trees in Graphs
* Decomposition and Graceful Labelings
* Branchings and Eulerian Digraphs (optional)

### Optimization and Trees

* Minimum Spanning Tree
* Shortest Paths
* Trees in Computer Science (optional)

## Matchings and Factors

### Matchings and Covers

* Maximum Matchings
* Hall’s Matching Condition
* Min-Max Theorems
* Independent Sets and Covers
* Dominating Sets (optional)

### Algorithms and Applications

* Maximum Bipartite Matching
* Weighted Bipartite Matching
* Stable Matchings (optional)
* Faster Bipartite Matching (optional)

### Matchings in General Graphs

* Tutte’s 1-factor Theorem
* f-factors of Graphs (optional)
* Edmonds’ Blossom Algorithm (optional)

## Connectivity and Paths

### Cuts and Connectivity

* Connectivity
* Edge-connectivity
* Blocks

### k-connected Graphs

* 2-connected Graphs
* Connectivity of Digraphs
* k-connected and k-edge-connected Graphs
* Applications of Menger’s Theorem

### Network Flow Problems

* Maximum Network Flow
* Integral Flows
* Supplies and Demands (optional)

## Coloring of Graphs

### Vertex Colorings and Upper Bounds

* Definitions and Examples
* Upper Bounds
* Brooks’ Theorem

### Structure of k-chromatic Graphs

* Graphs with Large Chromatic Number
* Extremal Problems and Turán’s Theorem
* Color-Critical Graphs
* Forced Subdivisions

### Enumerative Aspects

* Counting Proper Colorings
* Chordal Graphs
* A Hint of Perfect Graphs
* Counting Acyclic Orientations (optional)

## Planar Graphs

### Embeddings and Euler’s Formula

* Drawings in the Plane
* Dual Graphs
* Euler’s Formula

### Characterization of Planar Graphs

* Preparation for Kuratowski’s Theorem
* Convex Embeddings
* Planarity Testing (optional)

### Parameters of Planarity

* Coloring of Planar Graphs
* Crossing Number
* Surfaces of Higher Genus (optional)

## Edges and Cycles

### Line Graphs and Edge-coloring

* Edge-colorings
* Characterization of Line Graphs (optional)

### Hamiltonian Cycles

* Necessary Conditions
* Sufficient Conditions
* Cycles in Directed Graphs (optional)

### Planarity, Coloring, and Cycles

* Tait’s Theorem
* Grinberg’s Theorem
* Snarks (optional)
* Flows and Cycle Covers (optional)

## More Topics

### Perfect Graphs

* The Perfect Graph Theorem
* Chordal Graphs Revisited
* Other Classes of Perfect Graphs
* Imperfect Graphs
* The Strong Perfect Graph Conjecture

### Matroids

* Hereditary Systems and Examples
* Properties of Matroids
* The Span Function
* The Dual of a Matroid
* Matroid Minors and Planar Graphs
* Matroid Intersection
* Matroid Union

### Ramsey Theory

* The Pigeonhole Principle Revisited
* Ramsey’s Theorem
* Ramsey Numbers
* Graph Ramsey Theory
* Sperner’s Lemma and Bandwidth

### More Extremal Problems

* Encodings of Graphs
* Branchings and Gossip
* List Coloring and Choosability
* Partitions Using Paths and Cycles
* Circumference

### Random Graphs

* Existence and Expectation
* Properties of Almost All Graphs
* Threshold Functions
* Evolution and Graph Parameters
* Connectivity, Cliques, and Coloring
* Martingales

### Eigenvalues of Graphs

* The Characteristic Polynomial
* Linear Algebra of Real Symmetric Matrices
* Eigenvalues and Graph Parameters
* Eigenvalues of Regular Graphs
* Eigenvalues and Expanders
* Strongly Regular Graphs

---

## Videos

1. [Graph Theory](https://youtube.com/playlist?list=PLztBpqftvzxXBhbYxoaZJmnZF6AUQr1mH&si=_IvhDWpQaJCymubg) - [Wrath of Math](https://www.youtube.com/@WrathofMath)