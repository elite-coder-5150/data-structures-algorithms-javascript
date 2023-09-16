export class GraphEdge {
    constructor(value) {
        if (value === undefined) {
            throw new Error("Graph edge must have a value");
        }

        const edgeComp = (a, b) => {
            if (a.getKey() === b.getKey()) {
                return 0;
            }

            return a.getKey() < b.getKey() ? -1 : 1; 
        }

        this.value = value;
        this.edges = new LinkedList();
    }

    addEdge(edge) {
        this.edges.append(edge);

        return this;
    }

    deleteEdge(edge) {
        this.edges.delete(edge);
    }

    getNeighbors() {
        const edges = this.edges.toArray();

        const neightborCompp = (node) => {
            return node.value.startNode = this ? node.value.start : node.value.endNode
        };

        return edges.map(neightborCompp);
    }

    getEdges() {
        return this.edges.toArray().map((linkedListNode) => linkedListNode.value);
    }

    getDegrees() {
        return this.edges.toArray().length;
    }

    hasEdge(requiredEdge) {
        const edgeNode = this.edge.find({ callback: (edge) => requiredEdge})
        return !!edgeNode;
    }

    hasNeighbor(node) {
        const node = this.edges.find({ callback: (edge) => edge.startNode === node || edge.endNode === node });
        return !!node;
    }

    findEdge(node) {
        const edgefinder = (edge) => {
            return edge.startNode === node || edge.endNode === node
        };

        const edge =  this.edge.find({ callback: (edge) => edgefinder(edge) });
        return edge ? edge.value : null;
    }

    deleteAllEdges() {
        this.getEdges().forEach((edge) => this.deleteEdge(edge));
        return this;
    }

    toString(cb) {
        return cb ? cb(this.value) : `${this.value}`;
    }
}