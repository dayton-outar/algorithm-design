# 8.3 Shortest Paths

Finding the shortest path is a classical problem in graph theory, and a large number of different solutions have been proposed. Edges are assigned certain weights representing, for example,

 - distances between cities
 - times separating the execution of certain tasks
 - costs of transmitting information between locations
 - amounts of some substance transported from one place to another,

and so on.

When determining the shortest path from vertex $v$ to vertex $u$, information about distances between intermediate vertices $w$ has to be recorded.

In Dijkstra’s algorithm, a number of paths $p_1, \dots, p_n$ from a vertex $v$ are tried, and each time, the shortest path is chosen among them, which may mean that the same path $p_i$ can be continued by adding one more edge to it. But if $p_i$ turns out to be longer than any other path that can be tried, $p_i$ is abandoned and this other path is tried by resuming from where it was left off and by adding one more edge to it. ­Because paths can lead to vertices with more than one outgoing edge, new paths for possible exploration are added for each outgoing edge. Each vertex is tried once, all paths leading from it are opened, and the vertex itself is put away and not used anymore. After all vertices are visited, the algorithm is finished. This is a [greedy approach](../../lessons/codility/greedy/).

## Observations

Let's start the observation of the implementation of _Dijkstra_ algorithm found in the `dijkstra.js` file.

```js
function miniDist(distance, tset) {
  let minimum = Number.MAX_SAFE_INTEGER;
  let index = -1;

  for (let k = 0; k < 6; k++) {
    if (tset[k] === false && distance[k] <= minimum) {
      minimum = distance[k];
      index = k;
    }
  }

  return index;
}

function dijkstraAlgo(graph, src) {
  const distance = new Array(6);
  const tset = new Array(6);

  for (let k = 0; k < 6; k++) {
    distance[k] = Number.MAX_SAFE_INTEGER;
    tset[k] = false;
  }

  distance[src] = 0;

  for (let k = 0; k < 6; k++) {
    const m = miniDist(distance, tset);
    tset[m] = true;

    for (let j = 0; j < 6; j++) {
      if (
        !tset[j] &&
        graph[m][j] &&
        distance[m] !== Number.MAX_SAFE_INTEGER &&
        distance[m] + graph[m][j] < distance[j]
      ) {
        distance[j] = distance[m] + graph[m][j];
      }
    }
  }

  for (let k = 0; k < 6; k++) {
    const str = String.fromCharCode(65 + k);
    console.log(`${str}\t\t\t${distance[k]}`);
  }
}

const graph = [
  [0, 1, 2, 0, 0, 0],
  [1, 0, 0, 5, 1, 0],
  [2, 0, 0, 2, 3, 0],
  [0, 5, 2, 0, 2, 2],
  [0, 1, 3, 2, 0, 1],
  [0, 0, 0, 2, 1, 0]
];

dijkstraAlgo(graph, 0);
```

The program starts off with an adjacency matrix as follows,

```js
const graph = [
  [0, 1, 2, 0, 0, 0],
  [1, 0, 0, 5, 1, 0],
  [2, 0, 0, 2, 3, 0],
  [0, 5, 2, 0, 2, 2],
  [0, 1, 3, 2, 0, 1],
  [0, 0, 0, 2, 1, 0]
];
```

Let's visualize this in a table, where the columns and rows are the vertices of the graph. See table below,

|       | A | B | C | D | E | F |
|:-----:|:-:|:-:|:-:|:-:|:-:|:-:|
| **A** |   | 1 | 2 |   |   |   |
| **B** | 1 |   |   | 5 | 1 |   |
| **C** | 2 |   |   | 2 | 3 |   |
| **D** |   | 5 | 2 |   | 2 | 2 |
| **E** |   | 1 | 3 | 2 |   | 1 |
| **F** |   |   |   | 2 | 1 |   |

A visual representation of this graph with the weights mentioned in the table can be shown below,

![Graph representing the 6 by 6 adjacency matrix](/.attachments/dijkstra.graph-1.png)

Entering the `dijkstraAlgo` function, the arrays `distance` and `tset` are initialized in the first loop. Every value in `distance` is set to a very large number, `Number.MAX_SAFE_INTEGER`, which is being used here as the JavaScript equivalent of infinity. The `tset` array keeps track of which vertices have already been visited.

The source vertex is then assigned a distance of `0`. In this example, the source is vertex `A`, which has index `0`.

In the second loop, the first important step is finding the unvisited vertex with the smallest current distance from the source. This is done by calling `miniDist(distance, tset)`. The returned index is stored in `m`, and that vertex is then marked as visited by setting `tset[m] = true`.

The next important step is updating the distances of the neighboring vertices of `m`. For each vertex `j`, the algorithm checks four things:

1. the vertex has not already been visited,
2. there is an edge from `m` to `j`,
3. the distance to `m` is not still effectively infinity,
4. going through `m` gives a shorter path than the currently stored distance to `j`.

If all of these conditions are true, `distance[j]` is updated to `distance[m] + graph[m][j]`.

This process continues until all vertices have been considered. At the end, the algorithm prints the shortest distance from the source vertex `A` to every other vertex.

In this graph, there are two shortest paths from source `A` to destination `D`, both with the same total cost.

The time complexity of this implementation of Dijkstra’s algorithm is ${O(V^2)}$, where ${V}$ is the number of vertices. The outer loop runs ${V}$ times, and during each iteration:

1. `miniDist` scans all vertices to find the smallest unvisited distance, which takes ${O(V)}$,
2. the inner loop also scans all vertices in the adjacency matrix, which takes ${O(V)}$.

Since both of these happen inside the outer loop, the total running time is ${O(V^2)}$.
