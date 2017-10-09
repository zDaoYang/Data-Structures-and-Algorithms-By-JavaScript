
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