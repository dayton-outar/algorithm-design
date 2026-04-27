# 1.3 Vertex Degrees and Counting

The degree of a vertex is one of the most important graph parameters. We begin by defining standard notation.

## 1.3.1 Definition

For a graph ${G}$ and a vertex ${v}$:

* The **degree** of ${v}$, written ${d(v)}$ or ${d_G(v)}$, is the number of edges incident to ${v}$, counting a loop twice.
* The **maximum degree** is ${\Delta(G)}$.
* The **minimum degree** is ${\delta(G)}$.
* ${G}$ is **k-regular** if every vertex has degree ${k}$.
* The **neighborhood** of ${v}$, written ${N(v)}$ or ${N_G(v)}$, is the set of vertices adjacent to ${v}$. 

## 1.3.2 Definition

The **order** of a graph ${G}$, written ${n(G)}$, is the number of vertices.

The **size** of ${G}$, written ${e(G)}$, is the number of edges.

For ${n \in \mathbb{N}}$, the notation ${[n]}$ means ${{1,2,\dots,n}}$. 

---

# Counting and Bijections

Many graph theory proofs rely on counting the same quantity in two different ways. This often reveals useful identities.

## 1.3.3 Proposition (Degree-Sum Formula)

If ${G}$ is a graph, then

${\sum_{v \in V(G)} d(v) = 2e(G)}$

## Proof

Each edge contributes 2 to the total degree count because every edge has two ends.

This also works for loops, since a loop contributes 2 to the degree of its vertex. 

## 1.3.4 Corollary

For any graph ${G}$,

${\delta(G) \le \frac{2e(G)}{n(G)} \le \Delta(G)}$

So the average degree lies between the minimum and maximum degree. 

## 1.3.5 Corollary

Every graph has an even number of odd-degree vertices.

No graph with odd order can be regular of odd degree. 

## 1.3.6 Corollary

A ${k}$-regular graph with ${n}$ vertices has

${\frac{kn}{2}}$

edges. 

---

# Hypercubes

## 1.3.7 Definition

The **k-dimensional cube** or **hypercube** ${Q_k}$ has:

* vertices = all binary ${k}$-tuples
* edges = pairs of tuples that differ in exactly one position

A **j-dimensional subcube** is any subgraph isomorphic to ${Q_j}$. 

## 1.3.8 Example: Structure of Hypercubes

Key facts about ${Q_k}$:

* Vertices split into even-parity and odd-parity sets, so ${Q_k}$ is bipartite.
* Each vertex has ${k}$ neighbors, so ${Q_k}$ is ${k}$-regular.
* It has ${2^k}$ vertices.
* It has ${k2^{k-1}}$ edges.
* Fixing one coordinate gives two copies of ${Q_{k-1}}$. 

## 1.3.9 Proposition

If ${k>0}$, then a ${k}$-regular bipartite graph has the same number of vertices in each part.

## Proof

Count edges from each side of the bipartition. Both counts equal the number of edges, so the two sides must contain the same number of vertices. 

---

# Vertex-Deleted Subgraphs

## 1.3.11 Proposition

For a simple graph ${G}$ with vertices ${v_1,\dots,v_n}$ and ${n \ge 3}$,

${e(G-v_i)=e(G)-d(v_i)}$

and

${d_{G-v_i}(v)=d_G(v)-1}$ if ${v}$ was adjacent to ${v_i}$, otherwise unchanged.

Deleting a vertex removes exactly its incident edges. 

## 1.3.12 Conjecture (Reconstruction Conjecture)

Every simple graph with at least three vertices is uniquely determined by the collection of its vertex-deleted subgraphs. 

---

# Extremal Problems

Extremal graph theory asks for the largest or smallest possible value of a graph parameter under stated conditions.

## 1.3.13 Proposition

The minimum number of edges in a connected graph with ${n}$ vertices is

${n-1}$

A connected graph with ${n-1}$ edges is a tree. 

## 1.3.14 Remark

To prove ${\beta}$ is the minimum possible value of a parameter ${f(G)}$:

1. Show ${f(G)\ge \beta}$ for every graph.
2. Give an example where ${f(G)=\beta}$. 

## 1.3.15 Proposition

If a simple graph with ${n}$ vertices satisfies

${\delta(G)\ge \frac{n-1}{2}}$

then ${G}$ is connected. 

## 1.3.16 Example

The bound above is sharp:

* If ${n}$ is even, ${K_{n/2}\cup K_{n/2}}$ is disconnected and has minimum degree ${\frac{n}{2}-1}$.
* If ${n}$ is odd, ${K_{\lfloor n/2 \rfloor}\cup K_{\lceil n/2 \rceil}}$ is disconnected and has minimum degree ${\lfloor n/2 \rfloor -1}$. 

## 1.3.17 Definition

The **disjoint union** ${G+H}$ is formed by combining graphs ${G}$ and ${H}$ with no shared vertices. 

## 1.3.18 Example

If ${G}$ and ${H}$ are connected, then ${G+H}$ has exactly two components. 

---

# Optimization Problems

Sometimes we do not just ask for existence—we ask for the best possible structure.

## 1.3.19 Theorem

Every loopless graph ${G}$ has a bipartite subgraph with at least

${\frac{e(G)}{2}}$

edges. 

## Idea of Proof

Start with any bipartition. If moving a vertex to the other side increases crossing edges, move it. Repeat until no improvement is possible. Then at least half the edges cross between the two parts.

This is a classic local-improvement algorithm. 

## 1.3.21 Remark

The maximum number of edges in a bipartite subgraph equals:

total edges minus the fewest edges that must be removed to eliminate all odd cycles. 

---

# Triangle-Free Graphs

## 1.3.22 Definition

A graph is **H-free** if it has no subgraph isomorphic to ${H}$. 

## 1.3.23 Theorem (Mantel)

Every triangle-free simple graph with ${n}$ vertices has at most

${\left\lfloor \frac{n^2}{4}\right\rfloor}$

edges.

This maximum is achieved by the complete bipartite graph with parts as equal as possible. 

---

# Graphic Sequences

We now ask which degree lists can occur in simple graphs.

## 1.3.27 Definition

The **degree sequence** of a graph is the list of vertex degrees written in nonincreasing order:

${d_1 \ge d_2 \ge \dots \ge d_n}$ 

## 1.3.28 Proposition

A list ${d_1,\dots,d_n}$ can be the degree sequence of some graph only if:

* all ${d_i \ge 0}$
* each ${d_i < n}$
* ${\sum d_i}$ is even

These conditions are necessary but not always sufficient. 

## 1.3.29 Definition

A **graphic sequence** is a list of nonnegative integers that is the degree sequence of some simple graph. 

## 1.3.31 Theorem (Havel–Hakimi)

For ${n>1}$, a list ${d}$ is graphic if and only if the list obtained by:

1. removing the largest entry ${\Delta}$
2. subtracting 1 from the next ${\Delta}$ largest entries

is also graphic. 

This gives a recursive algorithm for testing whether a sequence is graphic.

---

## 1.3.32 Definition

A **2-switch** replaces edges ${xy}$ and ${zw}$ with ${xz}$ and ${yw}$, assuming the new edges were absent before.

A 2-switch preserves all vertex degrees. 

## 1.3.33 Theorem

If two simple graphs have the same degree sequence, one can be transformed into the other through a sequence of 2-switches. 