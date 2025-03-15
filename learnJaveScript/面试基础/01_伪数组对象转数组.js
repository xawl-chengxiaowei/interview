

// 箭头函数没有arguments！！！！！
function foo(a, b, c, d) {
    // console.log("##", arguments.length)
    // console.log("##", arguments[0])
    // console.log("##", arguments[1])
    // console.log("##", arguments[2])
    // 伪数组意味着他不是一个数组类型，而是一个对象类型,它有数组的length 方法,
    // 但是他没有forEach map 方法会报错
    // arguments.forEach(item=>{
    //     console.log("item",item);
    // })

    // 1. 如何转呢
    // 1.是for遍历2是Slice()返回一个新数组3是Array.from ()转 [...]解构

    // 2.Array.prototype.slice.call
    const newArr = Array.prototype.slice.call(arguments)
    console.log("newArr", newArr);
//  Array.prototype.slice.call(arguments)
    // 3. Array.from
    const newArr2 = Array.from(arguments)
    console.log("newArr2", newArr2);
}

foo(1, 2, 3, 4)
