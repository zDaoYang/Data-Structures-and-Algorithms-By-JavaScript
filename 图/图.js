/*
强连通图：一个有向图，对每一对顶点vi和vj，都存在vi => vj, vj => vi，这个有向图是强联通的
强连通图定理：一个有向图G是强连通的，当且仅当G中只有一个回路，它至少包含每个节点一次。
图的表示：邻接矩阵（判断两个顶点是否相邻的时候用邻接矩阵更快）、邻接表（较邻接矩阵节省空间）
、关联矩阵（一般用于边比顶点数大很多的情况下）

*/
var Dictionary = require('../字典、散列表/字典');
function Graph() {
  var vertices = [];
  var adjList = new Dictionary();
  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  }
  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  }
  function initializeColor() {
    var color = {};
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 0;  //　初始化color数组
    }
    return color;
  }
  // 0代表已经没访问过、1代表被访问过，但未探索过、2代表访问并完全探索过
  this.bfs = function (v) {
    var color = initializeColor();
    var queue = [];
    queue.push(v);
    while (queue.length !== 0) {
      var u = queue.shift();
      var neighbors = adjList.get(u);
      color[u] = 1;
      for (var j = 0; j < neighbors.length; j++) {
        var w = neighbors[j];
        if (color[w] === 0) {
          color[w] = 1;
          queue.push(w);
        }
      }
      color[u] = 2;
      console.log(u);
    }
  };

  this.dfs = function() {
    var color = initializeColor();
    for(var i = 0; i < vertices.length; i++) {
      if(color[vertices[i]] === 0) {
        dfsVisit(vertices[i], color);
      }
    }
    function dfsVisit(u, color) {
      color[u] = 1;
      console.log(u);
      var neighbors = adjList.get(u);
      for(var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if(color[w] === 0) {
          dfsVisit(w, color);
        }
      }
      color[u] = 2;
    }
    
  }

  this.print = function () {
    var s
    for (var i = 0; i < vertices.length; i++) {
      s = vertices[i] + ' -> ';
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s = s + neighbors[j] + ' ';
      }
      console.log(s);
    }
  }
}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.print();
graph.dfs()