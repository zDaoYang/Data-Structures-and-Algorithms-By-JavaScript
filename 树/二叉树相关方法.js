var tree = {
  root: {
    key: 1,
    left: {
      key: 2,
      left: {
        key: 4,
        left: null,
        right: {
          key: 7,
          left: null,
          right: null
        }
      }
    },
    right: {
      key: 3,
      left: {
        key: 5,
        left: null,
        right: null
      },
      right: {
        key: 6,
        left: {
          key: 8,
          left: null,
          right: null
        }
      }
    }
  }
};

// 求二叉树的高度
function height(node) {
  if (!node) {
    return 0; //递归结束，空树的高度为0
  } else {
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
    return (leftHeight > rightHeight) ? leftHeight + 1 : rightHeight + 1; // 返回左右子树高度的最大值加1     
  }
}
console.log('树的高度为: ' + height(tree.root));

// 求某个给定结点的双亲（未实现。有问题）
function getParent(root, key) {
  console.log(root.key);
  if(root.key === key) {
    return null; // 如果key就是root结点的值，则返回null（表示没有双亲结点）
  }
  if((root.left && root.left.key === key) || (root.right && root.right.key === key)) { // 获取左右子树key值的前提是子树存在，不然会出错
    return root.key  // 如果key的双亲结点就是root结点，就返回root的值
  }
  var value = getParent(root.left, key); //　递归查找左子树
  console.log('开始递归' + value);
  if (value != null) {
    console.log(value)
    return value;
  } else {　// 没有找到，就递归查找右子树
    console.log('开始右递归');
    return getParent(root.right, key);
  }
}
console.log('8的双亲结点是: ' + getParent(tree.root, 7));