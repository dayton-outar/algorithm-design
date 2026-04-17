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