function Stack() {
  let items = []; // 相当于私有属性，不能直接访问
  this.push = function(item){
    items.push(item);
    return item.length;
  }
  this.pop = function() {
    return items.pop();
  }
  this.peek = function() {
    return items[items.length -1];
  }
  this.isEmpty = function() {
    return items.length === 0; 
  }
  this.size = function() {
    return items.length;
  }
  this.clear = function() {
    items = [];
  }
  this.print = function() {
    console.log(items.toString());
  }
}
let stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('zdy');
stack.push('lcc');
stack.print();
stack.pop();
stack.pop();
stack.print();
stack.clear();
console.log(stack.size());

function divideBy2(number) { 
  let arr = [];
  let rem, binaryString = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    arr.push(rem);
    number = Math.floor(number / 2);
  }
  console.log(arr);
  while (arr.length > 0) {
    binaryString += arr.pop().toString();
  }
  return binaryString;
}

function baseConverter(number, base) { // 10进制转任意进制
  let arr = [];
  let rem, baseString = '';
      digits = '0123456789ABCDEF';
  while (number > 0) {
    rem = Math.floor(number % base);
    arr.push(rem);
    number = Math.floor(number / base);
  }
  console.log(arr);
  while (arr.length > 0) {
    baseString += digits[arr.pop()];
  }
  return baseString;
}