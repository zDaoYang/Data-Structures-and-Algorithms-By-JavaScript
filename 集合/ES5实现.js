// 集合是由一组无序且唯一（即不能重复）的项组成的
function Set() {
  let items = []; // 也可用对象来实现，但是会有一些问题，比如'123'和123，它们对应的的键值对是items['123'] = '123',items['123'] = 123, 后者会覆盖前者
  this.has = function(value) {
      return items.indexOf(value) !== -1;
  }
  this.add = function(value) {
    if (!this.has(value)) {
      items.push(value);
      return true;
    } else {
      return false;
    }
  }
  this.remove = function(value) {
    let index = items.indexOf(value);
    if (index !== -1) {
      items.splice(index,1);
      return true;
    } else {
      return false;
    }
  }
  this.clear = function() {
    items = [];
  }
  this.size = function() {
    return items.length;
  }
  this.values = function() {
    return items;
  }
  // 集合并操作
  this.union = function(otherSet) {
    let unionSet = new Set();
    let thisValues = this.values();
    for (let i = 0; i < thisValues.length; i++) {
      unionSet.add(items[i]);
    }
    let otherValue = otherSet.values();
    for (let i = 0; i < otherValue.length; i++) {
      unionSet.add(otherValue[i]);
    }
    return unionSet;
  }
  // 集合交操作
  this.intersection = function(otherSet) {
    let intersectionSet = new Set();
    for (let i = 0; i < items.length; i++) {
      if (otherSet.has(items[i])) {
        intersectionSet.add(items[i]);
      }
    }
    return intersectionSet;
  }
  // 集合差操作
  this.difference = function(otherSet) {
    let differenceSet = new Set();
    for (let i = 0; i < items.length; i++) {
      if (!otherSet.has(items[i])) {
        differenceSet.add(items[i]);
      }
    }
    return differenceSet;
  } 
  // 判断当前set是不是otherSet的子集
  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let thisValues = this.values();
      for (let i = 0; i < thisValues.length; i++) {
        if (!otherSet.has(thisValues[i])) {
          return false;
        }
      }
      return true;
    }
  }
}
let set1 = new Set();
let set2 = new Set()
// 测试是否完美支持所有类型
set1.add('2');
set1.add(3);
set1.add('zdy');
set1.add(null);
set1.add(undefined);
set1.add(true);
set1.add({a:1,b:2});
set1.add(function() {console.log(123)});
set1.add([1,2,4,5,6]);

set2.add('1');
set2.add(3);
set2.add('zdy');
// set2.add('2');
console.log(set1.subset(set2))