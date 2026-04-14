# Graphs as Models

Graphs show up everywhere. Their real-world use helps clarify key concepts and the language used to describe their structure.

**Example: Acquaintance relationships and subgraphs.**

In any group of six people, there are always either three who all know each other or three who are all strangers. Because acquaintance is symmetric, we model the group as a simple graph: each person is a vertex, and each pair who know each other is connected by an edge. The complementary graph represents non-acquaintances using the remaining edges. These ideas introduce key concepts and terminology.

![Acquaintance relations graph and its complement graph](/.attachments/acquaintance.relations.png)

The complement ${\bar{G}}$ of a simple graph $G$ has the same vertex set ${V(G)}$. It includes an edge ${uv}$ exactly when ${uv}$ is not an edge in ${G}$.

A **clique** is a set of vertices where every pair is connected.
An **independent set** (or **stable set**) is a set of vertices where no pair is connected.

In the graph ${G}$, $({u, x, y})$ forms a clique of size 3, and $({u, w})$ forms an independent set of size 2. These are the largest such sets in that graph. In the complement, these roles reverse: cliques become independent sets and vice versa.

This leads to a natural question: in every graph with six vertices, do we always find either a clique of size 3 or an independent set of size 3? Removing edge ${ux}$ from ${G}$ produces a five-vertex graph with neither.

---

**Example: Job assignments and bipartite graphs.**

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

**Example: Scheduling and graph coloring.**

Suppose we must schedule committee meetings into time slots, and no two committees sharing a member can meet at the same time.

We model this with a graph: each committee is a vertex, and we connect two vertices if the committees share a member. Assigning time slots becomes assigning labels to vertices so that adjacent vertices get different labels.

In the example, three labels suffice, since the graph can be partitioned into three independent sets. A clique forces all its vertices to have different labels, so the minimum number of time slots is three.

Since the labels have no numerical meaning, we call them **colors**.

---

