import { Graph } from "./Graph";

const graph = new Graph();
graph.addEdge("1", "2");
graph.addEdge("2", "3");
graph.addEdge("2", "4");
graph.addEdge("4", "5");

console.log(graph.breadthFirstSearch("1", "3"));
