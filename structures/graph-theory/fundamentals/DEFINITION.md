# Definition

The Königsberg Bridge Problem is said to have been the origin of graph theory.

## Königsberg Bridge Problem

![Map of Königsberg](/.attachments/städte.königsberg-1255.jpg)

[Königsberg](https://en.wikipedia.org/wiki/K%C3%B6nigsberg) was the historic German name of the city that is now modern-day Kaliningrad, Russia. The city consisted of two islands and the surrounding riverbanks, all connected by seven bridges, as shown in the map above and the diagram to the left below. Residents posed a simple but intriguing question: is it possible to start at home, cross each bridge exactly once, and return to the starting point? This challenge can be modeled as the graph (shown on the right), where each land mass is a node and each bridge is an edge connecting them.

> They likely weren’t thinking in abstract mathematical terms at all. The question comes from everyday curiosity—people walking through the city noticed the unusual layout of bridges and naturally wondered if there was a “perfect walk” that would take them across each bridge once without repetition.
> 
> It’s the kind of puzzle that emerges from habit and observation: if you cross bridges regularly, you start noticing patterns—“Have I crossed this one already?”—and that turns into a challenge. Over time, this curiosity gets sharpened into a precise question.
> 
> What matters isn’t whether residents literally sat down to formalize it, but that the city’s layout *invites* the question. It’s a real-world situation that naturally leads to a constraint-based puzzle, which is exactly why it became historically important—it turned a casual curiosity into the foundation of graph theory.

![Königsberg Bridge Illustrations](/.attachments/königsberg.bridge.illustration.png)

The graph on the right makes it clear why such a traversal is impossible. Every time we enter and leave a land mass, we must use two bridges incident to it. Even at the starting point, the first and last bridges can be paired in the same way. Therefore, for such a route to exist, each land mass must be connected by an even number of bridges. In Königsberg, however, this condition fails—each land mass is connected by an odd number of bridges—so the desired traversal cannot exist.

A graph $(G)$ consists of a set of _vertices_ $(V(G))$, a set of _edges_ $(E(G))$, and a _relation_ that assigns to each edge a pair of vertices, called its endpoints.

From the graph on the right, each edge connects a pair of vertices (its endpoints). The endpoint relations are:

* $(e_1: (w, x))$
* $(e_2: (w, x))$
* $(e_3: (w, z))$
* $(e_4: (w, z))$
* $(e_5: (w, y))$
* $(e_6: (x, y))$
* $(e_7: (z, y))$

Notice that some pairs repeat (e.g., $(e_1)$ and $(e_2)$ ), which indicates multiple edges between the same two vertices.
