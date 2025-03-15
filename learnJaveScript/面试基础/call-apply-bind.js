
Function.prototype.XWCall = function (thisArg, ...args) {

    // 1.获取需要被执行的函数。
    // console.log("this", this);// this指向的是foo函数, 因为是foo.XWCall() foo 调用的！！！！！！
    const fn = this;

    // 2. 将thisArg 转为非对象类型(防止转入的是非对象类型)
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    // 3.赋值 调用被执行的函数
    thisArg.fn = fn
    const result = thisArg.fn(...args);
    delete thisArg.fn
    return result
}

Function.prototype.XWApply = function (thisArg, argArray) {

    // 1.获取需要被执行的函数。
    console.log("this", this);// this指向的是foo函数, 因为是foo.XWCall() foo 调用的！！！！！！
    const fn = this;

    // 2. 将thisArg 转为非对象类型(防止转入的是非对象类型)
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    // 3.赋值 调用被执行的函数
    thisArg.fn = fn
    argArray = argArray || []
    const result = thisArg.fn(...argArray);
    delete thisArg.fn
    return result
}

// bind 函数
Function.prototype.XWBind = function (thisArg, ...argArray) {

    // 1.获取需要被执行的函数。
    console.log("this", this);// this指向的是foo函数, 因为是foo.XWCall() foo 调用的！！！！！！
    const fn = this;
    // 2. 将thisArg 转为非对象类型(防止转入的是非对象类型)
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    // 3.赋值 调用被执行的函数
    const proxyFn = (...args) => {
        thisArg.fn = fn
        const finallyArgs = [...argArray, ...args]
        const result = thisArg.fn(...finallyArgs);
        delete thisArg.fn
        return result
    }
    return proxyFn
}

function foo(a, b, c, d) {
    console.log("我是测试", a, b, c, d)
    return a+b+c+d
}

const bar = foo.XWBind("abc", 1, 2)
const bar2 = bar(3,4)
// console.log("bar2",bar2);