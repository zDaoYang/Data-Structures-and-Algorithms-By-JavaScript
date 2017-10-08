// Breadth first search
// 广度优先算法
// 构造一棵普通的二叉树
var tree = {
  root: {
    key: 1,
    left: {
      key: 2,
      left: {
        key: 4,
        right: {
          key: 7
        }
      }
    },
    right: {
      key: 3,
      left: {
        key: 5
      },
      right: {
        key: 6,
        left: {
          key: 8
        }
      }
    }
  }
};

// 广度优先遍历
function bfsTraverse(root) {
  if (!root) {
    console.log('the tree is empty');
    return;
  }
    var queue = [];
    queue.push(root);
    while (queue.length !== 0) {
      var node = queue.shift();
      console.log(node.key);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    // while (queue.length !== 0) {
    //   console.log(queue.shift().key);
    // }
}

bfsTraverse(tree.root);
