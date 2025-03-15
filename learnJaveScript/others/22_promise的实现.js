// promise结构的设计
// 代码一定要规范!
const PROMISE_STATUS_FULFILLED = 'fulfulled'
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_REJECT = 'reject'

class XWPromise {
    constructor(executor) {//这是调用直接
        this.status = PROMISE_STATUS_PENDING
        // value 和 reason 是resolve和reject里面传入的值!
        this.value = undefined
        this.reason = undefined
        this.onFulFilledFns = []
        this.onRejectFns = []
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    console.log('resolve 被调用!')
                    // 这里要开始执行then传递进来的回调函数!
                    // this.onfulfilled(this.value)
                    this.onFulFilledFns.forEach(Fn => {
                        Fn(value)
                    })
                })
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                // 使用queueMicrotask 微任务 代替settimeout宏任务效果更好,效果一直.
                queueMicrotask(() => {
                    if (this.state !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECT
                    this.reason = reason
                    console.log('reject 被调用!')
                    // this.onreject(this.reason)
                    this.onRejectFns.forEach((Fn) => {
                        Fn(reason)
                    })
                })
            }
        }
        executor(resolve, reject)
    }
    // 里面的参数都是回调函数,
    then(onfulfilled, onreject) {
        // 将传入的值保存起来!
        // this.onfulfilled = onfulfilled
        // this.onreject = onreject
        if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
            // 宏任务里面的直接后面的 直接执行
            onfulfilled(this.value)
        }
        if (this.status === PROMISE_STATUS_REJECT && onreject) {
            onreject(this.reason)
        }
        // 将成功回调的函数和失败的回调直接放在数组中
        if (this.status === PROMISE_STATUS_PENDING) {
            this.onFulFilledFns.push(onfulfilled)
            this.onRejectFns.push(onreject)
        }
    }
}

const promise = new XWPromise((resolve, reject) => {
    console.log('正在pending状态~')
    // 两个只执行其中之一!
    resolve(111)
})

promise.then((res) => {
    console.log('这是成功时res1的值:', res)
}, err => {
    console.log('接受失败时,失败值', err)
})
promise.then((res) => {
    console.log('这是成功时res2的值:', res)
}, err => {
    console.log('接受失败时,失败值', err)
})

