import { LinkedList } from "../list/linked-list";

export class GraphNode {
    constructor() {
        this.data = null;
        this.edges = [];
    }

    addEdge(node) {
        this.edges.push(node);
    }

    removeEdge(node) {
        const index = this.edges.indexOf(node);
        if (index > -1) {
            this.edges.splice(index, 1);
        }
    }

    getNeighbors() {
        return this.edges;
    }

    isNeighbor(node) {
        return this.edges.includes(node);
    }

    getDegree() {
        return this.edges.length;
    }

    hasEdges() {
        return this.edges.length > 0;
    }

    hasNeighbor(node) {
        return this.edges.includes(node);
    }
}