// 又称二叉搜索树、BST
function BinarySearchTree() {
  let root = null;

  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  this.insert = function (key) {
    let insertNode = function (node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  this.remove = function (key) {
    function findMinNode(node) { // 辅助函数
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    function removeNode(node, key) {
      if (node === null) {
        return null;
      }
      if (key < node.key) { // 键值不等于node.key，继续递归查找
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.key) { // 键值不等于node.key，继续递归查找
        node.right = removeNode(node.right, key);
        return node;
      } else { // 键值等于node.key，就说明找到了，接下来判断这个要删除的结点的类型
        // 1、如果这个节点是叶子结点
        if (node.left === null && node.right === null) {
          return null;
          // 2、如果这个结点只有一个子节点（只有左子节点或者只有右子节点）
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        } else {
          let aux = findMinNode(node.right);
          node.key = aux.key;
          node.right = removeNode(node.right, aux.key);
          return node;
        }
      }
    }
    root = removeNode(root, key);
  }

  // 中序遍历（LDR），左中右inOrder ，
  this.midOrderTraverse = function (callback) {
    let midOrderTraverseNode = function (node, callback) {
      if (node !== null) {
        midOrderTraverseNode(node.left, callback);
        callback(node.key);
        midOrderTraverseNode(node.right, callback);
      }
    }
    midOrderTraverseNode(root, callback);
  }

  // 先序遍历(DLR)，中左右
  this.preOrderTraverse = function (callback) {
    let preOrderTraverseNode = function (node, callback) {
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    }
    preOrderTraverseNode(root, callback);
  }

  // 后序遍历
  this.postOrderTraverse = function (callback) {
    let postOrderTraverseNode = function (node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    }
    postOrderTraverseNode(root, callback);
  }

  this.search = function (key) {
    let searchNode = function (node, key) {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else {
        return true;
      }
    }
    return searchNode(root, key);
  }

  this.min = function () {
    let node = root;
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    } else {
      return null;
    }
  }

  this.max = function () {
    let node = root;
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    } else {
      return null;
    }
  }

}

let tree1 = new BinarySearchTree();
tree1.insert(5);
tree1.insert(2);
tree1.insert(-5);
tree1.insert(8);
tree1.insert(12);
tree1.insert(17);
tree1.insert(13);
tree1.insert(14);
tree1.insert(20);
tree1.insert(3);
tree1.midOrderTraverse((value) => { console.log(value) })
console.log('====先序遍历====')
tree1.preOrderTraverse((value) => { console.log(value) })
console.log('====后序遍历====')
tree1.postOrderTraverse((value) => { console.log(value) })
tree1.remove(8);
tree1.remove(17);
tree1.remove(5);
console.log('====先序遍历====')
tree1.preOrderTraverse((value) => { console.log(value) })
console.log(tree1.search(20));
