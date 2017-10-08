function BinaryTree() {
  var root = null;
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  this.setRoot = function (value) {
    root = value;
  }

  this.midOrderTraverse = function () {
    function midOrderTraverseNode(root) {
      if (root !== null) {
        midOrderTraverseNode(root.left);
        console.log(root.key);
        midOrderTraverseNode(root.right);
      }
    }
    return midOrderTraverseNode(root);
  }
}


function pre_mid_constructor(preOrder, midOrder) {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var rootKey = preOrder[0];
  var root = new Node(rootKey);
  var leftChildTreeLen = midOrder.indexOf(rootKey);
  var rightChildTreeLen = midOrder.length - leftChildTreeLen - 1;
  if (leftChildTreeLen === 0) {
    root.left = null;
  } else {
    root.left = pre_mid_constructor(preOrder.slice(1, leftChildTreeLen + 1), midOrder.slice(0, leftChildTreeLen));
  }
  if (rightChildTreeLen === 0) {
    root.right = null;
  } else {
    root.right = pre_mid_constructor(preOrder.slice(-rightChildTreeLen), midOrder.slice(-rightChildTreeLen));
  }
  return root;
}

var BinaryTree = new BinaryTree();
var left = [1, 2, 4, 7, 3, 5, 6, 8];
var right = [4, 7, 2, 1, 5, 3, 8, 6];
BinaryTree.setRoot(pre_mid_constructor(left, right));
// BinaryTree.getRoot();
console.log('===midorder');
BinaryTree.midOrderTraverse();

