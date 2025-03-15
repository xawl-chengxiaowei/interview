
// 迭代器模式又叫游标模式,它是用来遍历集合对象,实际上就是包含一组对象的对象.
// 迭代器模式是指提供⼀种⽅法顺序访问⼀个聚合对象中的各个元素，⽽⼜不需要暴露该对象的内
// 部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来,在使⽤迭代器模式之后，即使不关
// ⼼对象的内部构造，也可以按顺序访问其中的每个元素.

// eg
var eachFn = function (arr, callback) {
     return  arr.map((item, index) => {
        return callback(index, item)
    })
}
let res = eachFn([3, 8, 2], function (i, n) {
    return {
        [i]: n
    }
})
console.log(res);
