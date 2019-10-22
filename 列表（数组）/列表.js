// 列表类
class List {
  constructor() {
    this.listSize = 0; // 列表打消
    this.pos = 0; // 当前位置
    this.dataStore = []; // 初始化空数组来保存列表元素
  }


  // 给列表添加元素
  append(ele) {
    // 后缀自增
    this.dataStore[this.listSize++] = ele
  }

  // 寻找某元素，返回位对应的下标index，如果没有，就返回-1
  find(ele) {
    return this.dataStore.indexOf(ele)
  }

  //从列表中删除元素
  remove(ele) {
    const index = this.find(ele)
    if (index < 0) {
      throw new Error('没有此元素')
    }
    this.dataStore.splice(index, 1)
    this.listSize--
  }

  //给定元素和位置，插入该元素
  insert(index, ele) {
    if (index < 0) {
      throw new Error('下标index不能小于0')
    } else if (index > this.listSize) {
      throw new Error('下标index不能大于列表长度')
    } else {
      this.dataStore.splice(index, 0, ele)
      this.listSize++
    }
  }

  // 清空列表
  clear() {
    this.dataStore = [];
    this.listSize = 0;
  }

  //判断给定值是否在列表中
  contains(ele) {
    if (this.find(ele) > -1) {
      return true
    } else {
      return false
    }
  }

  //根据下标获取元素
  getElement(index) {
    return this.dataStore[index];
  }

  // 打印出列表
  print() {
    console.error(this.dataStore)
  }

}

var list = new List();

list.append(1);
list.append(2);
list.append(3);
list.insert(3, 999);
list.insert(2, 888);
list.remove(2);
list.print();
console.log(list.contains(888));