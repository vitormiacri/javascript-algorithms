import Dictionary from './dictionary';

export default class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }
}
