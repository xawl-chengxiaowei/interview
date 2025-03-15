
const arr = ["1", "b", "c"]


// 返回的是一个数组迭代器对象
// const iterator = arr.entries()
// console.log("arr1",iterator.next().value);
// console.log("arr2",iterator.next().value);
// console.log("arr3",iterator.next().value);
for (const [index, value] of arr.entries()) {
    console.log("index", index);
    console.log("value", value);
}

// 练习splice  split  slice 的三种不同的用处。
// splice 对数组增加 删除 和替换
// 三个参数  开始位置  删除数量
//  他可以改变原数组并且返回一个新数组
const months = ['Jan', 'March', 'April', 'June'];
months.splice(0, 2)
console.log("test", months)

// split 是对字符串进行切割,转换成数组。
const str = "asdasdasdasdasssss1sad"
console.log("str", str.split(""))

// slice  对元素进行浅拷贝。返回一个新数组。
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// slice 对元素进行切割,第一个元素是开始切割的下标，第二个是结束的下标。
console.log("#######", animals.slice(2, 4))