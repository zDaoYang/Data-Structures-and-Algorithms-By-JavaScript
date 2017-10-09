# 树

## 二叉树
一棵普通的二叉树在JS里就是这样的
```JS
var BinaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null, //　规范起见，树的叶子节点的左右结点都要设为null
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
 
```
二叉树的遍历方式分为深度优先(DFS:depth first search)遍历和广度优先遍历(BFS:breadth first search)两种，其中DFS又分为前序遍历、中序遍历、后续遍历、每种遍历都有递归和非递归实现。

- [DFS](https://github.com/zDaoYang/Data-Structures-and-Algorithms-By-JavaScript/blob/master/%E6%A0%91/DFS.js)
- [BFS](https://github.com/zDaoYang/Data-Structures-and-Algorithms-By-JavaScript/blob/master/%E6%A0%91/BFS.js)

