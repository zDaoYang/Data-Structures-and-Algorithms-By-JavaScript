function DoublyLinkedList() {
  let length = 0;
  let head = null; // 对第一项的引用，初始化为null
  let tail = null; // 对最后一项的引用，初始化为null
  let Node = function(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
  this.append = function(element) { // 向后添加一个元素
    let node = new Node(element), current;
    if (head === null && tail === null) { // 如果是空链表,就把当前节点设为头结点
      head = node;
      tail = node;
    } else {
      current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      tail = node;
    }
    length++;  
  }
  this.insert = function(position, element) {
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
      if (position === length) { // 如果是在最后一个位置插入
        tail.next = node;
        node.prev = tail;
        tail = node;
      }
      while(index < position) {
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
  this.remove = function(element) {
    let current = head,
        previous,
        index = 0,
        flag = false;
    if (head.element === element) {
      head = current.next;
      current.next.next.prev = head;
      return true;
    }   
    while(index < length) {
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
  this.indexOf = function(element) {
    let current = head;
    for(let i = 0; i < length; i++) {
      if(current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  this.removeAt = function(position) {
    let result;
    if (position < 0 || position > length - 1) {
      return null;  // 越界返回null
    } else {
      let previous, current = head, index = 0
      if (position === 0) {
        head = current.head; // 如果是第一项，就直接移除
      }
      while(index < position) {
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
  this.isEmpty = function() {
    return length===0;
  } 
  this.size = function() {
    return length;
  }
  this.toString = function() {

  }
  this.print = function() {
    let current = head;
    while(current.next) {
      console.log(current.element);
      current = current.next;
    }
    console.log(current.element);
  }
}

let list1 = new DoublyLinkedList();
console.log(list1.isEmpty());
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
console.log(list1.size());
list1.print();
list1.insert(2, 999);
console.log(`插入后的链表为`);
list1.print();
list1.remove(1);
list1.removeAt(1);
console.log(`删除后的链表为`);
list1.print();


