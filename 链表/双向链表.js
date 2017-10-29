function DoublyLinkedList() {
  let length = 0;
  let head = null; // 头结点，初始化为null
  let tail = null; // 尾结点，初始化为null
  let Node = function (element) {
    this.element = element;
    this.prev = null; // 新增的属性，指向上一个结点
    this.next = null;
  }

  this.append = function (element) { // 在链尾添加一个元素
    let node = new Node(element), current;
    if (head === null && tail === null) { // 如果是空链表,就把当前节点设为头结点
      head = node;
      tail = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current; // current是新结点的上一个结点，这里将新结点的prev指针设为current，即完成了双向链接
      tail = node;
    }
    length++; // 细节，注意添加完成以后链表长度length要加1
  }

  // 插入的操作也和单链表大同小异，就是要注意新结点需要进行4次链接操作
  this.insert = function (position, element) {
    if (position < 0 || position > length) {
      return false; // 越界就返回false
    } else {
      let node = new Node(element),
        previous,
        current = head,
        index = 0;
      if (position === 0) {
        if (!head) { // 如果原来链表是空
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      }
      if (position === length) { // 如果position为链表长度，就相当于是append操作，就在最后一个位置插入新结点
        tail.next = node;
        node.prev = tail;
        tail = node;
      }
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = node;
      node.prev = previous;
      node.next = current;
      current.prev = node;
    }
    length++;
    return true;
  }

  this.remove = function (element) {
    let current = head,
      previous,
      index = 0,
      flag = false;
    if (head.element === element) {
      head = current.next;
      current.next.next.prev = head;
      return true;
    }
    while (index < length) {
      if (current.element === element) {
        previous.next = current.next;
        flag = true;
        break;
      }
      previous = current;
      current = current.next;
      index++;
    }
    length--;
    return flag;
  }

  this.indexOf = function (element) {
    let current = head;
    for (let i = 0; i < length; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  this.removeAt = function (position) {
    let result;
    if (position < 0 || position > length - 1) {
      return null;  // 越界返回null
    } else {
      let previous, current = head, index = 0
      if (position === 0) {
        head = current.head; // 如果是第一项，就直接移除
      }
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
      result = current;
    }
    length--;
    return result.element; // 返回被删除的元素
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.print = function () {
    let current = head;
    while (current.next) {
      console.log(current.element);
      current = current.next;
    }
    console.log(current.element);
  }
}
/*
测试用例
输出的信息应该是:

  链表是否为空？true
  现在链表长度为 4
  ====打印链表====
  1
  2
  3
  4
  ====在位置2插入结点999====
  打印插入后的链表
  1
  2
  999
  3
  4
  删除结点1
  打印删除结点1后的链表为
  2
  999
  3
  4

请自行测试代码
*/


let list1 = new DoublyLinkedList();
console.log(`链表是否为空？${list1.isEmpty()}`);
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
console.log(`现在链表长度为 ${list1.size()}`);
console.log('====打印链表====');
list1.print();
console.log('====在位置2插入结点999====');
list1.insert(2, 999);
console.log('打印插入后的链表');
list1.print();
console.log('删除结点1');
list1.remove(1);
console.log('打印删除结点1后的链表为');
list1.print();



