let LinkedList = require('../链表/链表');

function HashTable() {
  let table = [];

  function simpleHash(key) { // 辅助散列函数
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // 返回位置
  }

  function ValuePair(key, value) { // 辅助ValuePair类
    this.key = key;
    this.value = value;
  }

  this.put = function (key, value) {
    let pos = simpleHash(key);
    if (table[pos] == undefined) {
      table[pos] = new LinkedList();
    }
    table[pos].append(new ValuePair(key, value));
  }

  this.remove = function (key) {
    let pos = simpleHash(key);
    if (table[pos] == undefined) {
      return false;
    } else {
      let current = table[pos].getHead();
      while (current) {
        if (current.element.key === key) {
          table[pos].remove(current.element);
          return true;
        }
        current = current.next;
      }
    }
  }

  this.get = function (key) {
    let pos = simpleHash(key);
    if (table[pos] !== undefined) {
      let current = table[pos].getHead();
      while (current) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  this.print = function () {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        table[i].print();
      }
    }
  }
}

let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com'); // 19
hash.put('John', 'johnsnow@email.com'); // 29
hash.put('Tyrion', 'tyrion@email.com'); // 16 
hash.put('Aaron', 'aaron@email.com');   // 16
hash.put('Donnie', 'donnie@email.com'); //13
hash.put('Ana', 'ana@email.com');      //13
hash.put('Jonathan', 'jonathan@email.com'); //5
hash.put('Jamie', 'jamie@email.com');  //5
hash.put('Sue', 'sue@email.com');   //5
hash.put('Mindy', 'mindy@email.com');  //32
hash.put('Paul', 'paul@email.com');  //32
hash.put('Nathan', 'nathan@email.com'); //10

console.log('====get====');
console.log(hash.get('Gandalf'));
hash.remove('Tyrion');
hash.remove('Aaron');
hash.remove('Donnie');
hash.remove('Ana');
hash.print();
