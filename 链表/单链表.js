function LinkedList() {
  let length = 0;
  let head = null;
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  this.append = function (element) {
    let node = new Node(element), current;
    if (head === null) { // 如果是空链表,就把当前节点设为头结点
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  this.insert = function (position, element) {
    if (position < 0 || position > length) {
      return false; // 越界返回false
    } else {
      let node = new Node(element),
        previous,
        current = head,
        index = 0;
      if (position === 0) {
        node.next = current;
        head = node;
      }
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = node;
      node.next = current;
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
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }
  this.getHead = function () {
    return head;
  }
}

/*
let list1 = new LinkedList();
console.log(list1.isEmpty());
list1.append(1);
list1.print();
*/


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


