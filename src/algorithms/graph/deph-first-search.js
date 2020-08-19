const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const dephFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      dephFirstSearchVisit(w, color, adjList, callback);
    }
  }
  color[u] = Colors.BLACK;
};

export const dephFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      dephFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};
