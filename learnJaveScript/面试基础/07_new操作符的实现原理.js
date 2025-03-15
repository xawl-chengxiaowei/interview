

// 先理解什么是构造函数
// 构造函数其实就是我们普普通通的函数的一个，只不过如果通过new 去调用， 那么就可以称之为构造函数

// Array.prototype.shift.call(arguments)
// 理解: 伪数组是没有数组的shift的方法的 但是你要使用你直接使用原型上的shift方法，但是本身值啊。所以
// 这样就可以将shift 方法指向argument这个类数组对象上就成功了。arguments对象一直都没被改变，就是个this指向问题

// Object.create
// 指定一个新对象，带着指定的原型对象和属性

// new 操作符的实现原理
// 需求: new 需要先传入一个函数 然后就是参数。

/**
 * 1、首先创建一个新的空对象
 * 2、设置原型，将对象的原型设置为函数的prototype 对象。
 * 3、然后函数的this指向这个对象，执行构造函数的代码(为这个对象添加属性)
 * 4、判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个引用类型的对象、

 */

function objectFactory() {
    let newObject = {};
    let constructor = Array.prototype.shift.call(arguments)
    let result = null

    // 判断参数是都是一个函数
    if (typeof constructor !== "function") {
        return new TypeError("类型错误")
    }
    // 新建一个空对象， 对象的原型为构造函数的prototype 对象
    newObject = Object.create(constructor.prototype);

    // 将this指向的新建对象，并执行函数
    result = constructor.apply(newObject, arguments)

    // 判断函数的返回值类型，
    // 如果是值类型, 就是函数的返回值如果是基本的数据类型,那么直接返回该对象
    // 如果函数返回值是引用类型，返回的是函数或者是对象,那么我们直接将返回函数返回（注意改变result的指向。）
    if (result && ((typeof result === "object") || typeof result === "function")) return result

    return newObject
}
function foo() {
    console.log("我是一个构造函数");
    return function bar() {
        console.log("123");
    }
}

// objectFactory(foo)
const instancobj = objectFactory(foo)
console.log("value", instancobj());