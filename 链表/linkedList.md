# 链表
链表的存储方式分为两种，一种是顺序存储，另一种是链式存储，

## 顺序存储
顺序存储在JS里其实可以看做是数组

顺序存储的特点是查找方便，而删除、插入不方便。

比如
```js
var linkedList = [1, 2, 3, 5, 6]; 

// 对于每一个元素都有一个特定的下标index，我们可以通过linkedList[index] (0 <= index < length)，来直接访问任意一个元素。
```

而删除呢和添加呢，想象一下，我们现在要在上面这个链表中合适的位置插入4，那么5和6的位置就要移动（它们各自的下标都要加1），有一种牵一发动全身的感觉。造成元素的大量移动，因而性能消耗也就大了，同理，如果我们要删除3这个元素，那么5和6的下标也会改变。

所以说，顺序存储的特点是查找方便，而删除、添加不方便。

关于顺序存储不做过多介绍，一切插入、删除、更新的操作我们都可以借助Array的splice等方法来实现。重要的是掌握这种思维，能够区分顺序存储和链式存储的区别就好，我们重点介绍链式存储。
## 链式存储
链式存储的特点是查找不方便，而删除、添加方便。

顺序存储里，元素是依次存放在连续的存储单元中的，而链式存储中，元素和元素是靠某种东西关联起来的，因此顺序存储里，每个元素除了要存储自己的数据信息之外，还要存储指向直接后继或者前驱元素的指针（JS里并没有指针这一说法，为了便于理解我借用了这个概念）。

不多说废话，便于形象理解，我们直接来看一下链式存储的链表在JS里到底是个什么东西

```JS
var linkedList = {
  head: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    }
  }
}
```

是不是很简单呢，这个linkedList对象其实就是一个链式存储的链表，链表的最后一个元素的next指向null，代表链表到结尾了。

### 单向链表
单向链表的特点是每个元素只知道自己的下一个元素是什么，而不知道自己的上一个元素是什么。

常规的链表属性有：
- 长度 length
- 头结点 head
- ...

常规的链表方法有：
- 添加元素 append
- 在特定位置插入元素 insert
- 按值删除特定元素，如果有多个相同的元素，删除第一个即可 remove
- 删除指定位置的元素 removeAt
- 判断链表是否为空 isEmpty
- 返回头结点 getHead
- 打印链表 print

我们基于构造函数构造链表

```js
function LinkedList() {
  let length = 0;
  let head = null;
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  this.append = function (element) {}...

  this.insert = function (position, element) {}...

  this.remove = function (element) {}...

  this.removeAt = function (position) {}...

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.print = function () {
    let current = head;
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }

  this.getHead = function () {
    return head;
  }
}
```
详细代码见目录下的[单链表.js](https://github.com/zDaoYang/Data-Structures-and-Algorithms-By-JavaScript/blob/master/%E9%93%BE%E8%A1%A8/%E5%8D%95%E9%93%BE%E8%A1%A8.js)

### 双向链表
单向链表实现了从头到尾遍历链表的功能，但是它的链接关系是单向的，我们只能朝一个方向遍历，如果指定一个结点，让我们求这个结点的上一个结点是什么，那么单向链表就无能为力了。这个时候就要用到双向链表，双向链表是在单向链表的基础上，为每个元素添加了一个指向上一个元素的指针prev，这样就既可以实现从头到尾的遍历，也可以实现从尾到头的遍历

双向链表的属性和方法和单向链表几乎是一模一样的，只是有些方法实现起来稍微有点不同，注意的东西也较单向链表多，这里就不再列举，请直接看代码


[双向链表](https://github.com/zDaoYang/Data-Structures-and-Algorithms-By-JavaScript/blob/master/%E9%93%BE%E8%A1%A8/%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.js)

### 循环链表



[循环链表](https://github.com/zDaoYang/Data-Structures-and-Algorithms-By-JavaScript/blob/master/%E9%93%BE%E8%A1%A8/%E5%BE%AA%E7%8E%AF%E9%93%BE%E8%A1%A8.js)
