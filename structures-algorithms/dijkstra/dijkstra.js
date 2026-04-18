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