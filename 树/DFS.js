// 前序遍历递归实现
function preOrderRecur(node) {
  if(!node) {
    return
  }

  console.log(node.val);
  preOrderRecur(node.left);
  preOrderRecur(node.right);
}

// 中序遍历递归实现
function preOrderRecur(node) {
  if(!node) {
    return
  }

  preOrderRecur(node.left);
  console.log(node.val);
  preOrderRecur(node.right);
}
// 后序遍历递归实现
function preOrderRecur(node) {
  if(!node) {
    return
  }

  preOrderRecur(node.left);
  preOrderRecur(node.right);
  console.log(node.val);
 
}

/*
递归实现很简单，也符合我们常规的逻辑，读起来也不费劲，重点来说下非递归实现，
深度优先遍历的非递归都是借助栈的先进后出的特性来实现的
*/


// 前序遍历非递归实现
function preOrderUnRecur(node) {
  if (!node) {
    return
  }
  let stack = [] // 工具栈
  stack.push(node);
  while (stack.length) {
    node = stack.pop();
    console.log(node.val);
    if (node.right) {
      stack.push(node.right); // 后打印的先进
    }
    if (node.left) {
      stack.push(node.left); // 先打印的后进
    }
  }
}
// 中序遍历非递归实现
function midOrderUnRecur(node) {
  if (!node) {
    return
  }
  let stack = [] // 工具栈
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      console.log(node.val);
      node = node.right;
    }
  }
}

// 后续遍历非递归实现方法1（用两个栈）
function postOrderUnRecur1(root) {
  var stack1 = [];
  var stack2 = [];
  var node = root;
  stack1.push(node);
  while (stack1.length) {
    var node = stack1.pop();
    stack2.push(node.val);
    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right);
    }
  }
  while (stack2.length) {
    console.log(stack2.pop());
  }
}

// 后序遍历非递归实现方法2（用一个栈）
function postOrderUnRecur2(root) {
  var stack = [],
    last = root,
    top = null; //　last为最近一次弹出并打印的结点，top为当前栈顶元素
  stack.push(root);
  while (stack.length) {
    top = stack[stack.length - 1];
    if (top.left && last !== top.left && last !== top.right) {
      stack.push(top.left);
    } else if (top.right && last !== top.right) {
      stack.push(top.right);
    } else {
      last = stack.pop();
      console.log(last.val);
    }
  }

}
var tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null
      },
      right: {
        val: 9,
        left: null,
        right: null
      }
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log('===前序===');
preOrderUnRecur(tree);
console.log('===中序===');
midOrderUnRecur(tree);
console.log('===后序1===');
postOrderUnRecur1(tree);
console.log('===后序2===');
postOrderUnRecur2(tree);