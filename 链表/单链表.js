function LinkedList() {
  let length = 0;
  let head = null;
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }

  this.append = function (element) {
    let node = new Node(element), current;
    if (head === null) {   // 如果是空链表,就把当前节点设为头结点
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;   // 将新结点插入到最后面
    }
    length++;  // 同时链表长度加1
  }

  this.insert = function (position, element) { // 在下标为position的位置插入元素element
    if (position < 0 || position > length) {
      return false; // 越界返回false
    } else {
      let node = new Node(element),
        previous,
        current = head,
        index = 0;
      if (position === 0) {   // 如果position为0，即在链表的头部插入一个新结点
        node.next = current;
        head = node; // 更新链表属性head为新结点
      }
      while (index < position) { // 实时记录previous和current的位置
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = node;   // 在previous和current之间插入新结点
      node.next = current;
    }
    length++;
    return true;
  }

  this.remove = function (element) { // remove和insert的操作差不多，关键还是要实时记录previous和current的位置，
    let current = head,              // 以便于删除结点而不至于让链表断裂
      previous,
      index = 0,
      flag = false;
    if (head.element === element) {
      head = current.next;
      return true;
    }
    while (index < length) {
      if (current.element === element) {
        previous.next = current.next;
        flag = true;
        break;  // 一旦找要删除的结点，删除后即跳出循环
      }
      previous = current;    
      current = current.next;
      index++;
    }
    length--;
    return flag;  // 返回删除是否成功（true or flase）
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

  this.length = function () {
    return length;
  }

  this.print = function () {
    let current = head;
    while (current) {  // 一直打印结点直到当前结点current为null
      console.log(current.element);
      current = current.next;
    }
  }

  this.getHead = function () { // 我们不能直接访问私有变量head，必须通过getHead()方法访问
    return head;
  }
}


/*
测试用例：

控制台输出的信息应该是:

  链表是否为空： true
  ====打印链表====
  1
  2
  3
  4
  现在链表的长度为： 3
  ====打印链表====
  1
  9
  2
  4

请自行测试代码
*/


let list = new LinkedList();
console.log(`链表是否为空： ${list.isEmpty()}`);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log('====打印链表====');
list.print();
list.remove(3);
console.log(`现在链表的长度为： ${list.length()}`);
list.insert(1, 9); // 在下标为1的位置插入结点9
console.log('====打印链表====');
list.print();




