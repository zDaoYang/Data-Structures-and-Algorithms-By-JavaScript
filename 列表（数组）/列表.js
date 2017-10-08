function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // 初始化空数组来保存列表元素
  this.clear = clear;
  this.find = find; // 找到，返回位对应的index，如果没有，就返回-1
  this.print = print;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = getCurrPos; // 返回当前位置
  this.getElement = getElement;
  this.contains = contains;
}
function clear() {
  this.listSize = 0;
  this.dataStore = [];
}
function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}
function print() { 
  for(let i = 0; i < this.dataStore.length; i++) {
    console.log(this.dataStore[i]);
  }
}
function insert(loc, ele) {
  if (loc < 0) {
    return false;
  } else {
    this.dataStore.splice(loc, 0, ele);
    this.listSize++;
    return true; 
  }
}
function append(element){
  this.dataStore[this.listSize++] = element;
}
function remove(ele) {
  let index = this.find(ele);
  if (index !== -1) {
    this.dataStore.splice(index, 1);
    this.listSize--;
    return true;
  } else {
    return false;
  }
}
function end() {
  return this.dataStore[this.listSize - 1];
}
function prev(ele) {
  let index = this.find(ele);
  if (index === -1) {
    return false;
  } else {
    return this.dataStore[--index];
  }
}
function next(ele) {
  let index = this.find(ele);
  if (index === this.listSize - 1) {
    return false;
  } else {
    return this.dataStore[++index];
  }
}
function getCurrPos(ele) {
  return this.find(ele);
}
function getElement(index) {
  return this.dataStore[index];
}
function contains(ele) {
  for(let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === ele) {
      return true;
    }
  }
  return false;
}
var list1 = new List();

list1.append(12);
list1.append(123);
list1.append(1234);
list1.insert(3, 999);
list1.remove(123);
list1.insert(9, 1000);
list1.print();
console.log(list1.contains(123));

