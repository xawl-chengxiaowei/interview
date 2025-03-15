
// // 1.不确定的参数个数求和
function add(...args) {
    return args.reduce((pre, cur) => {
        return pre + cur
    }, 0)
}

// // console.log(add(1, 2, 3));


// // 2. 写一个sleep 延时执行
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("执行完成")
        }, time)
    })
}

const foo = async () => {
    const res = await sleep(5000)
    console.log("res", res);
}
// foo()









