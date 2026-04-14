# Graphs as Models

Graphs show up everywhere. Their real-world use helps clarify key concepts and the language used to describe their structure.

## Example: Acquaintance relationships and subgraphs

In any group of six people, there are always either three who all know each other or three who are all strangers. Because acquaintance is symmetric, we model the group as a simple graph: each person is a vertex, and each pair who know each other is connected by an edge. The complementary graph represents non-acquaintances using the remaining edges. These ideas introduce key concepts and terminology.

![Acquaintance relations graph and its complement graph](/.attachments/acquaintance.relations.png)

The complement ${\bar{G}}$ of a simple graph $G$ has the same vertex set ${V(G)}$. It includes an edge ${uv}$ exactly when ${uv}$ is not an edge in ${G}$.

A **clique** is a set of vertices where every pair is connected.
An **independent set** (or **stable set**) is a set of vertices where no pair is connected.

In the graph ${G}$, $({u, x, y})$ forms a clique of size 3, and $({u, w})$ forms an independent set of size 2. These are the largest such sets in that graph. In the complement, these roles reverse: cliques become independent sets and vice versa.

This leads to a natural question: in every graph with six vertices, do we always find either a clique of size 3 or an independent set of size 3? Removing edge ${ux}$ from ${G}$ produces a five-vertex graph with neither.

---

## Example: Job assignments and bipartite graphs

Suppose we have ${m}$ jobs and ${n}$ people, where not everyone qualifies for every job. We model this with a graph ${H}$: jobs and people are vertices, and we connect person ${p}$ to job ${j}$ if ${p}$ is qualified for ${j}$.

Each job must be assigned to exactly one person, and each person can take at most one job. So we look for ${m}$ disjoint edges in ${H}$ (a matching).

> Edges are **disjoint** if they don’t share any vertices.
> 
> So if you have edges:
> 
> * ${ (p_1, j_1) }$
> * ${ (p_2, j_2) }$
>
> They are disjoint if:
> 
> * ${ p_1 \neq p_2 }$ and
> * ${ j_1 \neq j_2 }$
>
> No person appears twice, and no job appears twice.
> 
> A **matching** is just a set of disjoint edges.
> 
> In this problem:
> 
> * Each edge = one person assigned to one job
> * “Disjoint” ensures:
> 
>   * A person gets **at most one job**
>   * A job gets **exactly one person**
> 
> You have **m jobs**, and each job needs one person.
> 
> So:
> 
> * You need **m edges**
> * All must be disjoint (no overlaps)
> 
> That gives you a valid assignment of all jobs.
> 
> Think of it as pairing:
> 
> * No person can be in two pairs
> * No job can be in two pairs

![People and jobs graph](/.attachments/people.jobs.graph.png)

More broadly, graphs that model relationships between two distinct groups are important. These graphs have vertex sets that split into two independent sets.

---

**Bipartite graphs.**
A graph ${G}$ is **bipartite** if its vertex set can be divided into two disjoint (possibly empty) independent sets, called *partite sets*.

---

## Example: Scheduling and graph coloring

Suppose we must schedule committee meetings into time slots, and no two committees sharing a member can meet at the same time.

We model this with a graph: each committee is a vertex, and we connect two vertices if the committees share a member. Assigning time slots becomes assigning labels to vertices so that adjacent vertices get different labels.

![Graph used for scheduling time slots](/.attachments/scheduling.graph.png)

In the graph above, three labels suffice, since the graph can be partitioned into three independent sets. A clique forces all its vertices to have different labels, so the minimum number of time slots is three.

Since the labels have no numerical meaning, we call them **colors**.

---

**Chromatic number.**
The **chromatic number** of a graph ${G}$, written ${\chi(G)}$, is the smallest number of colors needed to label the vertices so that adjacent vertices have different colors.

A graph is **${k}$-partite** if its vertex set can be split into ${k}$ (possibly empty) independent sets.

This extends the idea of bipartite graphs (which are 2-partite). All vertices with the same color form an independent set, so ${\chi(G)}$ is the minimum number of independent sets needed to partition ${V(G)}$. A graph is ${k}$-partite if and only if ${\chi(G) \le k}$. When referring to sets in such a partition, we call them *partite sets*.

Graph coloring and chromatic number are studied in detail later. A classic application is coloring maps.

---

## Example: Maps and coloring

A **map** partitions a plane into regions. The question is: can we color every map using at most four colors so that neighboring regions have different colors?

To model this, assign a vertex to each region and connect two vertices if the regions share a boundary. The question becomes whether the resulting graph always has chromatic number at most 4.

If the graph can be drawn in the plane without edge crossings, it is **planar**. Different drawings of the same graph may or may not have crossings; what matters is whether a crossing-free drawing exists. Planar graphs are studied later.

---

## Example: Routes in road networks

We can model a road network as a graph: vertices represent intersections, and edges represent roads. We can assign weights to edges to represent distance or travel time.

With this model, we can ask: what is the shortest route from one location to another?

If vertices represent locations to visit, we might instead ask for a route that visits each location exactly once without revisiting any. We also consider whether such a route exists.

These two types of problems lead to different graph concepts.

---

**Paths and cycles.**
A **path** is a sequence of vertices where each consecutive pair is adjacent.

A **cycle** is a closed path: it starts and ends at the same vertex, with all other vertices distinct, and consecutive vertices are adjacent along the loop.

![Path and cycles](/.attachments/path.and.cycles.png)

The figures above show a path and a cycle by listing the vertices in order: ${x, b, a, z, y}$. Remove any edge from a cycle and you get a path. When studying routes in networks, treat paths and cycles as structures inside the graph. In most cases, you also assume the graph is connected—every vertex can be reached from any other. The next definitions formalize this.

**Subgraph.**
A subgraph of a graph ${G}$ is a graph ${H}$ where ${V(H) \subseteq V(G)}$ and ${E(H) \subseteq E(G)}$, with endpoints assigned the same way as in ${G}$. Write ${H \subseteq G}$ and say that ${G}$ contains ${H}$.

A graph ${G}$ is **connected** if every pair of vertices is linked by a path. Otherwise, it is **disconnected**.

The graph shown under **[Example: Scheduling and graph coloring](#example-scheduling-and-graph-coloring)** contains three subgraphs that are cycles. That graph is connected, but the graph in **[Example: Job assignments and bipartite graphs](#example-job-assignments-and-bipartite-graphs)** is not.
