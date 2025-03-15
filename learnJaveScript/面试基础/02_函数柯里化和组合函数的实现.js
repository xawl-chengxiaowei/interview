// 函数柯里化
function XWCurrying(fn) {
    const curried = (...args1) => {
        // 参数传完了
        // fn的length 就是其形参的参数数量
        if (args1.length >= fn.length) {
            return fn.apply(this, args1)
        } else {
            // 参数没有传递完，那就继续传递
            // 没有达到个数的时,需要返回一个新的函数，来继续接受参数
            const curry2 = (...args2) => {
                const finallyArgs = args1.concat(args2)
                return curried.apply(this, finallyArgs)
            }
            return curry2
        }
    }
    return curried
}

function add(a, b, c, d) {
    console.log("change", a, b, c, d)
}
const foo = XWCurrying(add)
const bar = foo(1, 2)
// bar(3, 4)

// 组合函数的实现。
function XWCompose(...fns) {
    const length = fns.length;
    for (let index = 0; index < length; index++) {
        const element = fns[index]
        if (typeof element !== "function") {
            return new TypeError("Expected arguments are function")
        }
    }
    const compose = (...args) => {
        let index = 0
        let result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result
    }
    return compose
}

const add1 = (n1) => {
    return n1 + n1
}
const add2 = (n1) => {
    return n1 * n1
}

const com = XWCompose(add1, add2);
console.log(com(2));

