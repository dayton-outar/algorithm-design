# Matrices and Isomorphism

You can describe a graph by listing its vertices and edges (with endpoints), but matrices often work better. A **loopless** graph allows multiple edges between the same vertices but does not allow edges from a vertex to itself.

**Adjacency matrix.**
Let ${G}$ be a loopless graph with vertices ${V(G) = {v_1, \dots, v_n}}$ and edges ${E(G) = {e_1, \dots, e_m}}$. The adjacency matrix ${A(G)}$ is an ${n \times n}$ matrix where entry ${a_{ij}}$ counts how many edges connect ${v_i}$ and ${v_j}$.

**Incidence matrix.**
The incidence matrix ${M(G)}$ is an ${n \times m}$ matrix where entry ${m_{ij} = 1}$ if vertex ${v_i}$ is an endpoint of edge ${e_j}$, and ${0}$ otherwise.

If vertex ${v}$ is an endpoint of edge ${e}$, then ${v}$ and ${e}$ are **incident**. The **degree** of a vertex is the number of edges incident to it.

How you define these matrices (and vertex degrees) changes if loops are allowed, depending on the application.

**Remarks.**
An adjacency matrix depends on how you order the vertices. Every adjacency matrix is symmetric ${(a_{ij} = a_{ji})}$. In a simple graph, entries are 0 or 1, and the diagonal contains only zeros. The degree of a vertex equals the sum of its row entries in either the adjacency or incidence matrix.

For the loopless graph ${G}$ shown below, we present both the adjacency matrix and the incidence matrix corresponding to the vertex ordering ${w}$, ${x}$, ${y}$, ${z}$ and the edge ordering ${a}$, ${b}$, ${c}$, ${d}$, ${e}$. The degree of ${y}$ is ${4}$, which can be determined either by inspection of the graph or by summing the entries in the row corresponding to ${y}$ in either matrix.

![Graph Matrices](/.attachments/g.graph.matrices.png)

We can represent a graph using an adjacency matrix, which implicitly labels the vertices by the order of its rows and columns. Each vertex corresponds to a specific row and column. To store a graph in a computer, we must assign names to its vertices.

However, when we study properties like connectedness, the specific names of vertices don’t matter. What matters is the structure. If we rename the vertices of graph ${G}$ to form graph ${H}$, the two graphs remain structurally the same. In this case, ${G}$ effectively becomes ${H}$.

![Adjacency G and H Matrices](/.attachments/adjacency.g.h.matrices.png)

We formalize this idea for simple graphs. Renaming vertices means defining a function ${f: V(G) \rightarrow V(H)}$ that pairs each vertex in ${G}$ with exactly one vertex in ${H}$. When this pairing is one-to-one and onto, we call it a **bijection**.

**Definition:**
An *isomorphism* from a simple graph ${G}$ to a simple graph ${H}$ is a bijection ${f: V(G) \rightarrow V(H)}$ such that two vertices are connected by an edge in ${G}$ if and only if their images are connected in ${H}$. If such a function exists, we say ${G}$ and ${H}$ are *isomorphic*, written ${G \cong H}$.

**Example:**
Consider two graphs ${G}$ and ${H}$, each with four vertices arranged as paths. Define a function ${f}$ that maps vertices of ${G}$ to vertices of ${H}$. To prove the graphs are isomorphic, check that this mapping preserves all edges.

You can also verify this using adjacency matrices: if you reorder the rows and columns of ${G}$’s matrix to match the mapping, you obtain the matrix for ${H}$. This confirms the graphs are structurally identical.

Another valid mapping between the same graphs also demonstrates an isomorphism.

---

**Remark (Finding isomorphisms):**
To find an isomorphism, compare adjacency matrices. If you reorder the vertices so that the matrices match, you’ve shown the graphs are isomorphic. This reordering applies the same permutation to both rows and columns of ${A(G)}$. If the result equals ${A(H)}$, the permutation defines an isomorphism.

You can also verify an isomorphism directly by checking that adjacency is preserved—without using matrices.

For a bijection ${f}$ to be an isomorphism from ${G}$ to ${H}$, each vertex must keep its degree. In other words, if a vertex has degree ${k}$ in ${G}$, its image under ${f}$ must also have degree ${k}$ in ${H}$.

---

**Remark (Isomorphism for non-simple graphs):**
We can extend isomorphism to graphs with loops and multiple edges. In this case, an isomorphism from ${G}$ to ${H}$ is a bijection ${f}$ that maps vertices ${V(G)}$ to ${V(H)}$ and edges ${E(G)}$ to ${E(H)}$, while preserving endpoints. If an edge connects ${u}$ and ${v}$ in ${G}$, its image connects ${f(u)}$ and ${f(v)}$ in ${H}$.

We won’t focus on this case here since we’re working with simple graphs.

---

Since isomorphism works both ways, if ${G}$ is isomorphic to ${H}$, then ${H}$ is isomorphic to ${G}$. So we say “${G}$ and ${H}$ are isomorphic.” The term *isomorphic* applies to pairs of graphs, not to a single graph.

You can also describe a set of graphs as *pairwise isomorphic* (taken two at a time), but not as “an isomorphic set.”

---

A **relation** on a set ${S}$ is a collection of ordered pairs from ${S}$. An **equivalence relation** is a relation that is reflexive, symmetric, and transitive.

The isomorphism relation—defined as the set of pairs ${ (G, H) }$ where ${G \cong H}$—satisfies all three properties.

---

**Proposition:**
Isomorphism is an equivalence relation on the set of (simple) graphs.

**Proof:**

* **Reflexive:**
  The identity mapping on ${V(G)}$ preserves all edges, so ${G \cong G}$.

* **Symmetric:**
  If ${f: V(G) \rightarrow V(H)}$ is an isomorphism, then its inverse ${f^{-1}}$ is an isomorphism from ${H}$ to ${G}$. So ${G \cong H}$ implies ${H \cong G}$.

* **Transitive:**
  If ${f: V(F) \rightarrow V(G)}$ and ${g: V(G) \rightarrow V(H)}$ are isomorphisms, then their composition ${g \circ f}$ is an isomorphism from ${F}$ to ${H}$. So ${F \cong G}$ and ${G \cong H}$ imply ${F \cong H}$.

---

An equivalence relation splits a set into **equivalence classes**. Two elements belong to the same class if and only if they are related.

**Definition:**
An *isomorphism class* is an equivalence class of graphs under the isomorphism relation.

For example, all paths with ${n}$ vertices are isomorphic to each other, so they form one isomorphism class.

---

**Remark (Unlabeled graphs):**
When we study a graph ${G}$, we usually assign names to its vertices. But structural properties do not depend on those names. Because of this, we often treat graphs that differ only by labeling as the same.

We call this idea an *unlabeled graph*, which really means an isomorphism class of graphs.

Even if we draw graphs with specific layouts or vertex names, those drawings are just representations of the same underlying structure. We can choose any convenient representation and still refer to the same unlabeled graph.

---

Using names and notation is still useful when working with isomorphism classes. We can freely move between a specific representation and the entire class it belongs to.

---

**Definition:**

* A path with ${n}$ vertices is denoted ${P_n}$.
* A cycle with ${n}$ vertices is denoted ${C_n}$.
* An ${n}$-cycle is simply a cycle with ${n}$ vertices.

A **complete graph** is a simple graph where every pair of vertices is adjacent. The complete graph with ${n}$ vertices is denoted ${K_n}$.

A **complete bipartite graph** (or *biclique*) is a simple bipartite graph where every vertex in one part connects to every vertex in the other part. If the two parts have sizes ${r}$ and ${s}$, we denote it by ${K_{r,s}}$.

---

**Remark:**
A complete graph is the same as a graph where all vertices are pairwise adjacent. A **clique** is a set of vertices in a graph that are all pairwise adjacent. While some people use “complete graph” and “clique” interchangeably, it’s useful to keep the distinction so we can talk about cliques inside larger graphs.

---

