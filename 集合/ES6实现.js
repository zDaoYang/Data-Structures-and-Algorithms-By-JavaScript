// ES6中原生支持set数据结构
let set1 = new Set();
let set2 = new Set();
set1.add(1);
set1.add('123');
set1.add('zdy');
set1.add(false);
set1.add(null);
set1.add(undefined);
set1.add([1,2,4,5,6]);
set1.add([{a:1,b:2}]);
set1.add(() => {console.log('hahaha')});
console.log(set1.size);
console.log(set1.has('123'))
set1.clear();
console.log(set1.size)
