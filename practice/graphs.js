// also 'vertx' or 'node'
// edge/connection - two vertexes connected
// no limnit to how many vericies a vertex can connect to. (have 'edges' with)
// paths between edges are 'rated' based on the cost - so sometimes the faster/ more efficeint path is the 'longer' one between verticies (more nodes)
// e.g. routing protocols - two fast links, one slow link
// bidirectional vs 1 way platforms
// trees and LL are also graphs with certain restrictions on how many other connections they can have

// adjacency matrix - graph which shows which other values in hte matrix each value it points to
// repd by 1s and 0s in graph. 45 degree line of 0
// if all bidirectional connections, will be symmetrical.
// but with additional connections - 
// also, if we make the graph weighted - we can changed the 1s to the const of each connection


// // adjacency matrix can be represented like A ["B", "E"] (adj list)



// adjacency matrix 0 (|V| squared)
// very inefficient for space complexity b/c have to resepnt all the non-connections, too (0s)

// adjacency list - 0 (|v| + |E| ) verticies plus edges. 


// adding a new vertex:
// adj list: just slide it in at the end 0(1)
// adj matrix: eqivalent of adding a new matrix 0 (|V| squared)

// connceting that vertex: 0(1) for both

// removing an edge: matrix: 0(1), list 0(|E|)

// removing a vertex: 
// list - easy to remove vertex, but also have to check all the edges for ocnnections to that vertex
// if you have bidirectional, theres a shortcut, but still have to look. 0(|V| + |E|)

// matrix: 0 (|V| 2)


// matrixes VERY inefficient when they become too large. sooo many 0s to store.


class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
        return true
    }
    return false
    }

    addEdge(vertex1, vertex2) {
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return true
    }
    return false
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
            .filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
            .filter(v => v !== vertex1)
            return true
        }
     return false
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined
        while(this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, temp)
        }
        delete this.adjacencyList[vertex]
        return this
    }
}

const myGraph = new Graph()

myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')



myGraph.addEdge('A', 'B')
myGraph.addEdge('B', 'C')
myGraph.addEdge('C', 'A')



// myGraph.removeEdge('A', 'B')

myGraph.removeVertex('C')

console.log(myGraph)
