# 🔖 Decomposition and Special Graphs

**Definition:**
A graph is **self-complementary** if it is isomorphic to its complement.

A **decomposition** of a graph is a collection of subgraphs such that each edge of the original graph appears in exactly one subgraph.

An ${n}$-vertex graph ${H}$ is self-complementary if and only if ${K_n}$ can be decomposed into two copies of ${H}$.

---

**Example:**
We can decompose ${K_5}$ into two 5-cycles. This shows that the 5-cycle is self-complementary. Any ${n}$-vertex graph that decomposes ${K_n}$ is also self-complementary.

We can also decompose ${K_n}$ into ${K_{n-1}}$ and ${K_{n-1}}$, even though one subgraph omits a vertex.

The diagram on the page shows a decomposition of ${K_4}$ into three copies of ${P_3}$.

![Decomposition Graph](/.attachments/a.decomposition.example.graph.png)

---

**Example:**
A key question in combinatorial design theory is: which complete graphs can be decomposed into copies of ${K_3}$?

---

On the left, we show a decomposition of ${K_7}$. Rotate the triangle through seven positions so that each edge appears exactly once.

On the right, we decompose ${K_6}$ into copies of ${P_4}$. Place one vertex at the center and group the edges into three types: the outer 5-cycle, the inner (crossing) 5-cycle on those vertices, and the edges involving the central vertex. Each 4-vertex path uses one edge from each type. Rotate the diagram to generate the next path.

We call a copy of ${K_3}$ a *triangle*. Short names like this help simplify structural discussions.

**Example 1.1.35 — The Graph Menagerie.**
We often assign a “name” to a graph based on how it looks when drawn. We use these names for all equivalent drawings, so each name represents an isomorphism class.

Here are several graphs with at most five vertices. The most important are the *triangle* (${K_3}$) and the *claw* (${K_{1,3}}$). We also sometimes use the *paw* (${K_{1,3} + e}$) and the *kite* (${K_4 - e}$), though the others appear less often.

The complements of the graphs in the first row are disconnected. The complement of the *house* is ${P_5}$, and the *bull* is self-complementary. Exercise 39 asks which of these graphs can decompose ${K_6}$.

![Graph Menagerie](/.attachments/graph.menagerie.png)

To decompose a graph ${H}$ into copies of a graph ${G}$, the number of edges in ${G}$ must divide the number of edges in ${H}$. This condition alone is not enough—for example, ${K_5}$ cannot be decomposed into two copies of the kite. 

**1.1.36 Definition.**
The Petersen graph is a simple graph whose vertices are the 2-element subsets of a 5-element set, and whose edges connect pairs of disjoint 2-element subsets.

We illustrate the Petersen graph in three different drawings above. It serves as a key example—so much so that an entire book studies it. Its properties follow directly from the adjacency rule defined here.

**1.1.37 Example — Structure of the Petersen graph.**
Let ${[5] = {1,2,3,4,5}}$. Represent each vertex as a pair ${{a,b}}$, or simply ${ab}$. For example, ${12}$ and ${34}$ are disjoint, so they form an edge, but ${12}$ and ${23}$ do not.

For each 2-set ${ab}$, three other 2-sets remain disjoint from it, so each vertex has degree 3.

![Petersen Graph](/.attachments/petersen.graph.png)

The Petersen graph consists of two disjoint 5-cycles, plus edges connecting corresponding vertices across the cycles. From disjointness, ${12, 34, 51, 23, 45}$ form one 5-cycle, and the remaining vertices ${13, 52, 41, 35, 24}$ form the other. Additional edges connect pairs like ${13 \sim 45}$ and ${52 \sim 34}$, as shown in the diagram.

We use the name “Petersen graph” even without specifying labels. It represents an isomorphism class. You can verify that the drawings above are isomorphic by mapping vertices using the 2-element subsets of ${[5]}$ so that adjacency always corresponds to disjointness.

**1.1.38 Proposition.**
If two vertices are not adjacent in the Petersen graph, then they share exactly one common neighbor.

**Proof.**
Nonadjacent vertices correspond to 2-sets that share one element, so their union has size 3. A vertex adjacent to both must be disjoint from both, so it must be the unique 2-set formed from the remaining two elements. 

**1.1.39 Definition.**
The *girth* of a graph is the length of its shortest cycle. If a graph has no cycles, its girth is infinite.

**1.1.40 Corollary.**
The Petersen graph has girth ${5}$.

**Proof.**
The graph is simple, so it has no 1-cycles or 2-cycles. A 3-cycle would require three pairwise disjoint 2-sets, which is impossible within a 5-element set. Therefore, the shortest cycle has length 5.

A 4-cycle without any 3-cycles would require two nonadjacent vertices to share two common neighbors, which contradicts Proposition 1.1.38. Also, the vertices ${12, 34, 51, 23, 45}$ form a 5-cycle, so the girth is ${5}$.

The Petersen graph is highly symmetric. Every permutation of ${{1,2,3,4,5}}$ induces a permutation of the 2-element subsets that preserves disjointness. As a result, the graph has ${5! = 120}$ automorphisms. Exercise 43 shows that no others exist. 

**1.1.41 Definition.**
An *automorphism* of a graph ${G}$ is an isomorphism from ${G}$ to itself.

A graph is *vertex-transitive* if, for any vertices ${u, v \in V(G)}$, some automorphism maps ${u}$ to ${v}$.

The automorphisms of ${G}$ are exactly the permutations of ${V(G)}$ that preserve the adjacency matrix ${A(G)}$ when applied simultaneously to its rows and columns.

**1.1.42 Example — Automorphisms.**
Let ${G}$ be a path with vertex set ${{1,2,3,4}}$ and edge set ${{12, 23, 34}}$. This graph has two automorphisms: the identity and the permutation that swaps ${1 \leftrightarrow 4}$ and ${2 \leftrightarrow 3}$. Swapping ${1}$ and ${2}$ alone is not an automorphism, although the resulting graph is isomorphic to ${G}$.

In ${K_{r,s}}$, permuting vertices within each part does not change adjacency, so these permutations are automorphisms. When ${r = s}$, you can also swap the two parts, yielding additional automorphisms. In total, ${K_{r,s}}$ has ${2(r!)^2}$ automorphisms when ${r = s}$.

The biclique ${K_{r,s}}$ is vertex-transitive if and only if ${r = s}$. For ${n > 2}$, ${P_n}$ is not vertex-transitive, but every cycle is. The Petersen graph is also vertex-transitive.

In a vertex-transitive graph, you can prove any vertex-based statement by checking just one vertex, since all vertices “look the same” under automorphisms.