


class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addNode(node){
        if (!this.adjacencyList[node]) {
        this.adjacencyList[node] = [];
    }
    }

    addEdge(node1, node2){
      
        if(node1 in this.adjacencyList && node2 in this.adjacencyList){
            this.adjacencyList[node1].push(node2);
        }
    }

    
    removeEdge(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(n => n !== node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(n => n !== node1);
    }


    removeNode(node) {
        while (this.adjacencyList[node].length) {
        const adjacentNode = this.adjacencyList[node].pop();
        this.removeEdge(node, adjacentNode);
    }
        delete this.adjacencyList[node];
    }

move(start, end){
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0 && queue.length <= 20) {
        
        const path = queue.shift();          // Get the next path from queue
        const node = path[path.length - 1];  // Get the last node in the path
        const nodeKey = Array.isArray(node) ? node.join(",") : node;

        if (nodeKey === (Array.isArray(end) ? end.join(",") : end)) {
            console.log("found");
            return path; // Found the shortest path to goal
        }

        if (!visited.has(nodeKey)) {
            visited.add(nodeKey);

            for (const neighbor of this.adjacencyList[nodeKey] || []) {
                const newPath = [...path, neighbor];
                queue.push(newPath);
                
            }
        }
    }
    return null; // No path found
    }
    
      
        print(){
        console.log(this.adjacencyList);
        }

}




function createTiles(graph){
    const boardSize = 8;
    const tiles = [];

    for(let i = 0; i < boardSize; i++){
        tiles.push(i);
    }
    
    tiles.forEach((tile) => {
        
        tiles.forEach((subTile) => {
            graph.addNode([tile, subTile]);
        })
    })
    
}

function applyPaths(graph, pathing){

    Object.keys(graph.adjacencyList).forEach((key) => {
        const position = key.split(",");
        const movesArray = pathing(Number(position[0]), Number(position[1]));

        movesArray.forEach(move => graph.addEdge(key, move));
    });
}

function applyknightPathing(tile, subTile){
    const positionArray = [[2, 1], [2, -1], [1, 2],
     [1, -2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]

    const moves = []

    const add = (num1, num2) =>
        moves.push([tile + num1, subTile + num2]);
        

    positionArray.forEach((position) => {
        add(position[0], position[1])
    });

    return moves

   
}



const chessBoard = new Graph();


createTiles(chessBoard);
applyPaths(chessBoard, applyknightPathing);
chessBoard.print()
console.log(chessBoard.move([0,0], [2, 1]));