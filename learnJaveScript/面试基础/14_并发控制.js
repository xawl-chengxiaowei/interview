

// 模拟网络请求~
const request = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("请求成功~")
        }, 1000)
    })
}

const array = new Array(100).fill(request);

async function concurrency(ajaxArray, max) {
    // 并发池--存放请求的池子.
    let pool = new Set()
    for (let index = 0; index < ajaxArray.length; index++) {
        const element = ajaxArray[index]()
        pool.add(element)
        element.then(() => {
            pool.delete(element)
        })
        if (pool.size === max) {
            await Promise.race(pool)
        }
    }
}

concurrency(array, 3)



