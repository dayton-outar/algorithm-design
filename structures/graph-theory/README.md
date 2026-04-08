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

---

## Fundamental Concepts

### Fundamentals

* [The Definition](./fundamentals/DEFINITION.md)
* Graphs as Models
* Matrices and Isomorphism
* Decomposition and Special Graphs

### Paths, Cycles, and Trails

* Connection in Graphs
* Bipartite Graphs
* Eulerian Circuits

### Vertex Degrees and Counting

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