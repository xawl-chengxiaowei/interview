
// 题目
// 实现lazy链式调用: person.eat().sleep(2).eat()
// 解法其实就是将所有的任务异步化，然后存到一个任务队列里.

/**
 *    lazy函数可以访问add、top、delay、multipy方法，我们可以借助类来实现
    lazy函数需要链式调用，所以函数的返回值需要是this
    在调用四个方法的时候，并没有输出结果，所以需要#cbs来保存函数调用记录
    #cbs中的每项需要在output中区分执行，所以在记录的时候，使用了type区分类型
    对于add和multipy函数，调用output时再计算结果，所以在记录的时候，没有计算结果
    为什么要使用#定义属性，私有属性避免外面直接修改；其次前面看到这个知识点，练习下。
 */

function Person() {
    this.queue = []
    this.lock = false
}

Person.prototype.eat = function () {
    this.queue.push(() => new Promise((resolve, reject) => {
        console.log("eat")
        resolve();
    }))
    return this
}

Person.prototype.sleep = function (time, flag) {
    this.queue.push(() => new Promise((resolve, reject) => {
        console.log("sleep", flag);
        setTimeout(() => {
            resolve()
        }, time * 1000)
    }))
    return this
}

// 执行eat时候, 队列中所有值都得执行.
Person.prototype.run = async function () {
    if (this.queue.length > 0 && !this.lock) {
        this.lock = true;
        const task = this.queue.shift()
        await task()
        this.lock = false
        this.run()
    }
}

const person = new Person()
person.eat().sleep(1, "1").eat().sleep(3, "2").eat().run()