## Paths, Cycles, and Trails

We revisit the Königsberg Bridge Problem and determine when we can traverse every edge of a graph. Before solving that, we review key concepts and introduce mathematical induction, which we’ll use repeatedly.

### Mathematical Induction

Use induction to prove statements that depend on an integer ${ n }$.

Start by proving the statement holds for the first value (usually ${ n = 1 }$). Then assume it holds for all values up to ${ k }$, and use that assumption to prove it holds for ${ k + 1 }$.

If both steps succeed, the statement holds for all positive integers.

This works because if the statement ever failed, there would be a smallest value where it fails. But the induction step prevents that from happening.

---

### Walks, Trails, and Paths

A **walk** is a sequence of vertices and edges where each edge connects the vertices before and after it.

A **trail** is a walk with no repeated edges.

A **path** is a walk with no repeated vertices.

If the first and last vertices are the same, the walk is **closed**.

We list edges in a walk to avoid ambiguity, especially in graphs with multiple edges between the same vertices.

---

### Cycles

A **cycle** is a closed walk with no repeated edges or vertices (except the start and end).

You can also describe a cycle by listing vertices, but then you must repeat the first vertex at the end to show closure.

---

### Example (from diagram on page 21)

Following a path from one vertex to another, then continuing along another path, may create a walk that repeats vertices or edges.

A walk can contain a path as a subsequence, but the vertices and edges of the path may not appear consecutively.

---

### Key Result

Every walk between two vertices contains a path between those vertices.

In other words, you can always remove loops and repetitions from a walk to get a simpler path.

---

### Connected Graphs

A graph is **connected** if there is a path between every pair of vertices.

This defines a relationship: two vertices are connected if a path exists between them.

This relationship is:

* **Reflexive** (a vertex connects to itself),
* **Symmetric** (paths work both ways),
* **Transitive** (paths can be combined).

---

### Components

A **component** is a maximal connected subgraph.

That means:

* Every vertex in the component connects to every other vertex in it.
* You cannot add another vertex without losing connectivity.

Components partition the graph into separate connected pieces.

---

## Connectivity and Components

We use the word *connected* only for graphs and pairs of vertices. Saying “u is connected to v” means there is a path between them.

This idea defines a **connection relation** on the vertices. It groups vertices into sets where each vertex connects to every other vertex in the same set.

These sets are called **components**.

* A component is a maximal connected subgraph.
* Every vertex belongs to exactly one component.
* A vertex with no edges forms its own component.

### Key properties

* Components do not overlap.
* Adding an edge can merge two components into one.
* Removing an edge or vertex can split a component into multiple components.

---

## Deleting and Induced Subgraphs

Removing vertices or edges changes the structure of a graph:

* Removing a vertex deletes all edges attached to it.
* Removing an edge keeps the endpoints but removes the connection.

An **induced subgraph** forms by selecting a set of vertices and including all edges between them that exist in the original graph.

A set of vertices is **independent** if no edges connect any pair of them.

---

## Cut-Edges and Cycles

A **cut-edge** (or bridge) is an edge whose removal increases the number of components.

Key fact:

An edge is a cut-edge **if and only if** it does not belong to any cycle.

Why this matters:

* If an edge is part of a cycle, you can still reach its endpoints another way.
* If not, removing it breaks connectivity.

---

## Bipartite Graphs

A graph is **bipartite** if you can split its vertices into two sets such that:

* No edge connects vertices within the same set.
* All edges go between the two sets.

### Equivalent condition

A graph is bipartite **if and only if** it contains no odd-length cycles.

This gives two ways to check bipartiteness:

* Try to divide vertices into two sets.
* Look for odd cycles.

### Useful construction

You can assign vertices to sets based on distance from a starting vertex:

* Even distance → one set
* Odd distance → the other set

If this assignment fails, the graph is not bipartite.

---

## Decomposing Graphs

You can express a graph as a union of subgraphs.

This helps analyze structure, especially when edges belong to multiple subgraphs.

---

## Eulerian Circuits

We now return to the original problem: can we walk through every edge exactly once?

A graph is **Eulerian** if it has a closed trail that uses every edge exactly once.

---

### Key Conditions

A connected graph is Eulerian **if and only if** every vertex has even degree.

* If any vertex has odd degree, you cannot return to it properly.
* Even degrees ensure you can “enter and leave” each vertex cleanly.

---

### Why this works

Each time you pass through a vertex, you use two edges:

* One entering
* One leaving

So the total number of edges at that vertex must be even.

---

### Building Eulerian Circuits

If all vertices have even degree:

1. Start anywhere and follow edges without repeating.
2. You will eventually return to your starting point.
3. If unused edges remain, repeat the process from a vertex already in your path.
4. Merge the smaller circuits into one.

---

## Decomposition into Cycles

Every graph with all vertices of even degree can be broken into cycles.

This supports the construction of Eulerian circuits.

---

## Extending Paths

A **maximal path** cannot be extended further.

If every vertex has degree at least 2, any maximal path must form a cycle.

More generally:

* If every vertex has degree at least ( k ), the graph contains a path of length at least ( k ).

---

## Eulerian Trail Condition (General Case)

A connected graph has an Eulerian circuit **if and only if**:

* It has at most one nontrivial component, and
* Every vertex has even degree.

---

## Final Result

If a connected graph has exactly ( 2k ) vertices of odd degree, then:

* You can partition its edges into ( k ) trails,
* Each trail starts and ends at odd-degree vertices.

This generalizes the Eulerian idea:

* 0 odd vertices → 1 Eulerian circuit
* 2 odd vertices → 1 Eulerian path
* More → multiple trails needed