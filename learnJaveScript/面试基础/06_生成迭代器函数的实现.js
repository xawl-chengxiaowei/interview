

// 1. 迭代器
// 迭代器就是一个对象,可以对我们可以迭代的数据进行一个控制，他必须有一个参数next()方法,控制迭代器是否完成。
// 比如我们需要对一个数组进行迭代,我们可以写一个生成迭代器的一个函数。
// next() 方法有两个要求,需要返回含有下面两个属性的对象
// 1. 是done 如果迭代完成 返回true ，否则返回false
// 2. 是value，如果迭代没有完成, 返回的当前对应的值，迭代完成就可省

function createArrayIterator(arr) {
    let index = 0
    return {
        next() {
            if (index < arr.length) {
                return { done: false, vlaue: arr[index++] }
            } else {
                return { done: true, vlaue: undefined }
            }
        }
    }
}


// 2. 可迭代对象
// 可迭代对象和迭代器是不用的概念,当一个对象实现了iterable Protocol协议时， 它就是一个可迭代对象。
//  这个对象的要求是必须要实现@@iterator方法， 在代码中使用Symbol.iterator 访问该属性。
//  当我们要问一个问题。 我们专程这样的一个东西有什么好处呢？
// 当一个对象编程一个可迭代对象的时候，进行某些迭代操作，比如 for of 操作时，其实就会调用他的@@iterator 方法

// const names = ["abc", "cba", "nba"]
// const nums = [10, 22, 33, 12]

// const iteratorArr = createArrayIterator(names)

// console.log("###1", iteratorArr.next());
// console.log("###2", iteratorArr.next());
// console.log("###3", iteratorArr.next());
// console.log("###4", iteratorArr.next());

// 可迭代对象的实现。这是一个可迭代的对象。
const iteratorObj = {
    names: ["abc", "cba", "nba"],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}

// for of 可以遍历的东西必须是一个可迭代对象。
// for (const item of iteratorObj) {
//     console.log("我是可迭代的对象", item);
// }

// 3. 生成器
// 概念：生成器是ES6新增的一种函数控制，使用的方案，他可以让我们更加灵活的控制函数什么时候继续指定，暂停执行，
// 生成器函数也是一个函数， 但是和普通的函数是有一些区别的。
// 首先是， 生成器函数的前面需要加一个符* 
// 其次， 生成式函数可以通过yield来控住函数的执行流程
// 最后， 生成器函数的返回值是一个生成器。

// 生成器事实上是一种特殊的迭代器。

function* foo() {
    console.log("函数开始执行~")

    const value1 = 100
    console.log("第一段代码:", value1)
    yield

    const value2 = 200
    console.log("第二段代码:", value2)
    yield

    const value3 = 300
    console.log("第三段代码:", value3)
    yield

    console.log("函数执行结束~")
}

// 调用生成器函数的时候，会给我们返回一个生成器的一个对象、
const generator = foo()
// 执行第一段代码
generator.next()
// 执行第二段代码
generator.next()
generator.next()




