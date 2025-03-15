

//  参考github: https://juejin.cn/post/7288340985230409747
// 这文档题库挺常见的

// 1. 实现一个Object.create
// mdn 解释:Object.create() 
// 静态方法以一个现有对象作为原型，创建一个新对象。
function create(obj) {
    function Fun() {
    }
    Fun.prototype = obj;
    Fun.prototype.constructor = Fun
    return new Fun()
}

// 2. 实现instanceof
// 用于检测构造函数的prototpe属性是否出现在实例对象的原型链上
// console.log( create instanceof Object)
// Object.getPrototypeOf() 静态方法返回执行对象的原型.

function customInstanceOf(object, constructor) {
    let prototype = constructor.prototype;
    while (object !== null) {
        if (object === prototype) {
            return true
        }
        object = Object.getPrototypeOf(object)// Object.getPrototypeOf返回执行对象的原型.
    }
    return false
}

function Bar(name) {
    this.name = name
}

// const person = new Bar("cxw")
// console.log(customInstanceOf("213", Array));

// 实现类型判断函数.
// console.log(Object.prototype.toString.call([1,2,3]).slice(8, -1).toLowerCase()); // 可以正确判断所有的数据类型!
function getType(value) {
    if (value === null) return "null"
    if (typeof value === "object") {// [object String]
        return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()// 开始从第8位,到最后一位.
        // 判断一个数据类型
        // Object.prototype.toString.call(value).slice(8,-1).toLowerCase()
    }
    return typeof value
}
// console.log("getType",getType([1,2,3]));
// 实现Object.assign() 方法

// Object.getOwnPropertyNames()

// 静态方法返回一个数组, 其中包含给定对象中所有的自有属性.
const obj = {
    name: "cxw",
    habby: "游泳"
}
// console.log("###", Object.getOwnPropertyNames(obj))

// 手写Object.assign();
Object.myAssign = function (...args) {
    const target = args.shift();
    if (target === null || target === undefined) throw new TypeError("type error");
    const targetObj = Object(target);
    args.forEach(obj => {
        if (obj !== null && obj !== undefined) {
            Object.keys(obj).forEach((key) => {
                targetObj[key] = obj[key]
            })
        }
    })
    return targetObj
}
// console.log("#myassign", Object.myAssign(obj, { key: "#1234" }, { name: "lalala" }));

// 函数科里化.
function XWCurrying(fn) {
    const Curry1 = (...args1) => {
        if (args1.length >= fn.length) {
            return fn.apply(this, args1)
        } else {
            const curry2 = (...args2) => {
                const finallyArgs = [...args1, ...args2];
                return Curry1.apply(this, finallyArgs)
            }
            return curry2
        }
    }
    return Curry1
}

// find 函数的使用, 直接找到的是对应的值!find 找值并返回! findIndex 返回的是下标!
let nums = [1, 5, 2, 7, 3, 3, 9]
const res = nums.find((item, index) => {
    return item == 3
})
console.log(res)

console.log(null == underfined)


