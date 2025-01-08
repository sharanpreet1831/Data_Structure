class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    // Add an edge to the graph
    addEdge(u, v) {
        if (!this.adjList.has(u)) this.adjList.set(u, []);
        this.adjList.get(u).push(v);
    }

    // Topological Sort using DFS
    topologicalSortDFS() {
        const visited = new Set();
        const stack = [];

        const dfs = (node) => {
            visited.add(node);

            if (this.adjList.has(node)) {
                for (const neighbor of this.adjList.get(node)) {
                    if (!visited.has(neighbor)) {
                        dfs(neighbor);
                    }
                }
            }
            stack.push(node);
        };

        for (let i = 1; i <= this.vertices; i++) {
            if (!visited.has(i)) dfs(i);
        }

        return stack.reverse();
    }

    // Topological Sort using Kahn's Algorithm
    topologicalSortKahn() {
        const inDegree = Array(this.vertices + 1).fill(0);
        const queue = [];
        const result = [];

        // Calculate in-degrees of all vertices
        for (const [u, neighbors] of this.adjList.entries()) {
            for (const v of neighbors) {
                inDegree[v]++;
            }
        }

        // Enqueue vertices with in-degree 0
        for (let i = 1; i <= this.vertices; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }

        // Process vertices
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node);

            if (this.adjList.has(node)) {
                for (const neighbor of this.adjList.get(node)) {
                    inDegree[neighbor]--;
                    if (inDegree[neighbor] === 0) queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

// Example Usage
const graph = new Graph(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(2, 4);

// Topological Sort using DFS
console.log("Topological Order (DFS):", graph.topologicalSortDFS());

// Topological Sort using Kahn's Algorithm
console.log("Topological Order (Kahn's):", graph.topologicalSortKahn());