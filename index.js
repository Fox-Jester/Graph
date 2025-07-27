


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

function knightPathing(graph){

    Object.keys(graph.adjacencyList).forEach(key => console.log(typeof key));


    moves(tile, subTile){
        const tile = num1
        const subTile = num2

        graph.addEdge([tile, subTile], [tile - 2, subTile + 1]);
    }
    
}

const chessBoard = new Graph();


createTiles(chessBoard);
knightPathing(chessBoard);
chessBoard.print()