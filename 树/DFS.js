// depth first search 
// 深度优先遍历有三种：前序遍历，中序遍历，后序遍历
function BinaryTree() {
  var root = null;
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  // 根据前序，中序构造二叉树
  this.pre_mid_constructor = function (preOrder, midOrder) {
    function pre_mid(preOrder, midOrder) {
      var rootKey = preOrder[0];
      var root = new Node(rootKey);
      var leftChildTreeLen = midOrder.indexOf(rootKey);
      var rightChildTreeLen = midOrder.length - leftChildTreeLen - 1;
      root.left = leftChildTreeLen <= 0 ? null : pre_mid(preOrder.slice(1, leftChildTreeLen + 1), midOrder.slice(0, leftChildTreeLen));
      root.right = rightChildTreeLen <= 0 ? null : pre_mid(preOrder.slice(-rightChildTreeLen), midOrder.slice(-rightChildTreeLen));
      return root;
    }
    root = pre_mid(preOrder, midOrder); // 将构建的新树的返回值，即新数的根节点赋值给该树的根节点
  }

  // 根据中序，后序构造二叉树
  this.mid_post_constructor = function (midOrder, postOrder) {
    function mid_post(midOrder, postOrder) {
      var len = postOrder.length;
      var rootKey = postOrder[len - 1];
      var root = new Node(rootKey);
      var leftChildTreeLen = midOrder.indexOf(rootKey);
      var rightChildTreeLen = len - leftChildTreeLen - 1;
      if (leftChildTreeLen <= 0) {
        root.left = null;
      } else {
        root.left = mid_post(midOrder.slice(0, leftChildTreeLen), postOrder.slice(0, leftChildTreeLen));
      }
      if (rightChildTreeLen <= 0) {
        root.right = null;
      } else {
        root.right = mid_post(midOrder.slice(-rightChildTreeLen), postOrder.slice(-(rightChildTreeLen + 1), -1));
      }
      return root;
    }
    root = mid_post(midOrder, postOrder);
  }
  
  // 前序遍历(递归实现)
  this.preOrderRecur = function () {
    function preOrderRecurNode(node) {
      if (node !== null) {
        console.log(node.key);
        preOrderRecurNode(node.left);
        preOrderRecurNode(node.right);
      }
    }
    return preOrderRecurNode(root);
  }

  // 前序遍历（非递归实现）
  this.preOrerUnRecur = function () {
    if (!root) {
      console.log('empty tree');
    } else {
      var stack = [];
      stack.push(root);
      while (stack.length !== 0) {
        var node = stack.pop();
        console.log(node.key);
        if (node.right) { // 因为使用的是栈，所以left子树先入栈，这样left子树就会先出栈
          stack.push(node.right);
        }
        if (node.left) {
          stack.push(node.left);
        }
      }
    }
  }

  // 中序遍历（递归实现）
  this.midOrderRecur = function () {
    function midOrderRecurNode(node) {
      if (!node) {
        return;
      } else {
        midOrderRecurNode(node.left);
        console.log(node.key);
        midOrderRecurNode(node.right);
      }
    }
    if (!root) {
      console.log('empty Tree');
    } else {
      return midOrderRecurNode(root);
    }
  }

  // 中序遍历(非递归)
  this.midOrderUnRecur = function () {
    var node = root; //　避免直接修改root
    if (!node) {
      console.log('empty tree');
    } else {
      var stack = [];
      while (stack.length !== 0 || node) { //终止条件：当stack为空且node为null
        if (node) {        // 一直向左下方向寻找左结点，如果还有左结点就一直push进栈
          stack.push(node);
          node = node.left;
        } else { // 左结点全部进栈，开始输出
          node = stack.pop(); //　由于是栈结构，pop出的第一个结点就是“最左”的那个结点
          console.log(node.key);
          node = node.right;
        }
      }
    }
  }

}
var tree1 = new BinaryTree();
var tree2 = new BinaryTree();
var preOrder = [1, 2, 4, 7, 3, 5, 6, 8];
var midOrder = [4, 7, 2, 1, 5, 3, 8, 6];
var postOrder = [7, 4, 2, 5, 8, 6, 3, 1];
tree1.pre_mid_constructor(preOrder, midOrder);
tree2.mid_post_constructor(midOrder, postOrder);


console.log('==midOrder递归====');
tree2.midOrderRecur();
console.log('==midOrder非递归====');
tree2.midOrderUnRecur();