// 集合和字典的区别是，在集合中，感兴趣的是每个值本身，它是以【值，值】的形式存储数据，并把它当做主要元素，
// 而在字典中，我们用【键，值】的形式存储数据
// 字典也称映射
// ES6中的Map数据结构类似于字典
function Dictionary() {
  let items = {};

  this.has = function (key) {
    return items.hasOwnProperty(key);
  }

  this.set = function (key, value) {
    items[key] = value;
  }

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
    }
  }

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  }

  this.clear = function () {
    items = {};
  }

  this.size = function () {
    let size = 0;
    for (let key in items) {
      if (this.has(key)) {
        size++;
      }
    }
    return size;
  }

  this.keys = function () {
    let keys = [];
    for (let key in items) {
      if (this.has(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  this.values = function () {
    let values = [];
    for (let key in items) {
      if (this.has(key)) {
        values.push(items[key]);
      }
    }
    return values;
  }
}

/*
let d1 = new Dictionary();
d1.set('Gandalf', 'gandalf@email.com');
d1.set('John', 'johnsnow@email.com');
d1.set('Tyrion', 'tyrion@email.com');
console.log(d1.has('John'));
console.log(d1.size());
console.log(d1.keys());
console.log(d1.values());
d1.remove('John');
console.log(d1.has('John'));
console.log(d1.size());
console.log(d1.keys());
console.log(d1.values());
*/

module.exports = Dictionary;
