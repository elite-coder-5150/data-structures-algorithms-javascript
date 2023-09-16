export class Graph {
    constructor(isDirected = false) {
        this.nodes = {};
        this.edges = {};
        this.isDirected = isDirected;
    }

    addNode(node) {
        this.nodes[node.getKey()] = node;
    }

    getNodebyKey(key) {
        return this.nodes[key];
    }

    getNeighbors(node) {
        return node.getNeighbors();
    }

    getAllNodes() {
        return Object.values(this.nodes);
    }

    getAllEdges() {
        return Object.values(this.edges);
    }

    addEdge() {
        let sn = this.getNodebyKey(edge.sn.getKey());
        let en = this.getNodebyKey(edge.en.getKey());

        if (!sn) {
            this.addNode(edge.sn);
            sn = this.getNodebyKey(edge.sn.getKey());
        }

        if (!en) {
            this.addNode(edge.en);
            en = this.getNodebyKey(edge.en.getKey());
        }

        if (this.edge[edge.getKey()]) {
            throw new Error("Edge already exists");
        } else {
            this.edges[edge.getKey()] = edge;
        }

        if (this.isDirected) {
            sn.addEdge(edge);
        } else {
            sn.addEdge(edge);
            en.addEdge(edge);
        }

        return this;
    }

    deleteEdge(edge) {
        if (this.edges[edge.getKey()]) {
            delete this.edges[edge.getKey()];
        } else {
            throw new Error("Edge does not exist");
        }

        const sn = this.getNodebyKey(edge.sn.getKey());
        const en = this.getNodebyKey(edge.en.getKey());

        sn.deleteEdge(edge);
        en.deleteEdge(edge);
    }

    findEdge() {
        const edge = this.edges.find({ callback });

        if (!edge) {
            return null;
        }

        return edge;
    }

    reverse() {
        this.getAllEdges().forEach((edge) => {
            this.deleteEdge(edge);

            edge.reverse();

            this.addEdge(edge);
        });

        return this;
    }

    getNodeIndices() {
        const nodes = {};

        this.getAllNodes().forEach((node, index) => {
            nodes[node.getKey()] = index;
        });

        return nodes;
    }

    getAdjMatrix() {
        const node = this.getAllNodes();
        const nodeIndices = this.getNodeIndices();

        const adjMatrix = Array(nodes.length).fill(null).map(() => {
            return Array(nodes.length).fill(Infinity);
        });

        this.nodes.forEach((node, index) => {
            node.getNeighbors().forEach((neighbor) => {
                adjMatrix[neighbor][index] = this.findEdge(node, neighbor).weight;
            });
        });

        return adjMatrix;
    }

    toString() {
        return Object.keys(this.nodes).toString();
    }
}