function Queue() {
  let items = [];
  this.enqueue = function(element, priority) {
    items.push(element);
  }
  this.dequeue = function() {
    return items.shift();
  }
  this.front = function() {
    return items[0];
  }
  this.clear = function() {
    items = [];
  }
  this.size = function() {
    return items.length;
  }
  this.print = function() {
    console.log(items);
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
}

// 模拟一个击鼓传花的游戏,最后剩下的为胜利者
function play(names, num) {
  let queue = new Queue();
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }
  let eliminated; // 每轮中被淘汰的那个人
  while (queue.size() > 1) {
    for (let j = 0; j < num; j++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated}被淘汰`);
  }
  console.log(`胜利者是${queue.dequeue()}`);
}
let names = ['a', 'b', 'c', 'd'];
let num = 3;
play(names, num);