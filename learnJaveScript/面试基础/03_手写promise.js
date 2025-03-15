
const PROMISE_STATUS_PENDING = "promsie_status_pending"
const PROMISE_STATUS_FULFILLED = "promsie_status_fulfilled"
const PROMISE_STATUS_REJECT = "promsie_status_reject"

class XWPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []

        const resolve = (value) => {
            if (this.status = PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return;
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    this.onFulfilledFns.forEach((fn) => {
                        fn(this.value)
                    })
                })
            }
        }
        const reject = (reason) => {
            if (this.status = PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return;
                    this.status = PROMISE_STATUS_REJECT
                    this.reason = reason
                    this.onRejectedFns.forEach((fn) => {
                        fn(this.reason)
                    })
                })
            }
        }
        executor(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled // 成功的回调函数
        this.onRejected = onRejected// 失败的回调函数

        if (this.status === PROMISE_STATUS_FULFILLED && this.onFulfilled) {
            this.onFulfilledFns.push(this.onFulfilled)
        }
        if (this.status === PROMISE_STATUS_REJECT && this.onRejected) {
            this.onRejectedFns.push(this.onRejected)
        }
        if (this.status === PROMISE_STATUS_PENDING) {
            this.onFulfilledFns.push(this.onFulfilled)
            this.onRejectedFns.push(this.onRejected)
        }
    }
}


const promise = new XWPromise((resolve, reject) => {
    resolve("成功啦~")
})

promise.then((res) => {
    console.log("res", res);
}, (err) => {
    console.log("err", err);
})

promise.then((res) => {
    console.log("res", res);
}, (err) => {
    console.log("err", err);
})

// 1. promise 的改进, then可以多次调用~
