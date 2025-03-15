const setValue = new Set()

setValue.add(10)
setValue.add(20)
setValue.add({})

// 创建独一无二的数
// 数组去重!
// console.log(setValue)

const arr = [22, 33, 10, 99]

const arrSet = new Set(arr)
// 这是set 数据结构,需要转换为 数组[]数据结构!
// 1. let arrSet2 = Array.from(arrSet)
// 2. 使用结构
let arrSet2 = [...arrSet]
// console.log(arrSet2);

// weakSet 只能存放的是对象数据类型.
// 对对象是一个弱引用.弱应用为null,会被垃圾回收.
const weakSet = new WeakSet()

// js中对象中不能使用对象作为key.
const map = new Map();
map.set({1:123},"aaa")
map.set({2:123},"bbb")
console.log(map);
// { { '1': 123 } => 'aaa', { '2': 123 } => 'bbb' }  箭头是为了区分!

// weakMap 是只能使用key作为对象,不接受其他的类型作为对象.


