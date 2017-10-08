// 队列：先进先出， 后进后出
// 优先级队列：根据优先级剔除元素
// 优先级值越小，优先级越大
// 设置优先队列有两种办法：1、设置优先级，然后在正确的位置添加新元素。2、用入列操作添加元素，然后按照优先级顺序删除它们。
function PriorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function (element, priority) {
    let newEle = new QueueElement(element, priority);
    if (this.isEmpty()) {
      items.push(newEle);
    } else {  // 在正确的位置添加它们，然后按正常队列的顺序删除
      let added = false;
      for (let i = 0; i < items.length; i++) {
        if (newEle.priority < items[i].priority) {
          items.splice(i, 0, newEle);
          added = true;
          break;
        }
      }
      if (added === false) {
        items.push(newEle) // 如果新元素的priority值大于任何一个旧元素，即新元素的优先级最低，则把它添加到队列尾(rear)
      }
    }
  }
  this.dequeue = function () {
    return items.shift();
  }
  this.front = function () {
    return items[0];
  }
  this.clear = function () {
    items = [];
  }
  this.size = function () {
    return items.length;
  }
  this.print = function () {
    console.log(items);
  }
  this.isEmpty = function () {
    return items.length === 0;
  }
}
let queue1 = new PriorityQueue();
console.log(queue1.isEmpty());
queue1.enqueue('eat', 3);
queue1.enqueue('play', 4);
queue1.enqueue('study', 1);
queue1.enqueue('sleep', 2);
queue1.print();
queue1.dequeue();
queue1.print();