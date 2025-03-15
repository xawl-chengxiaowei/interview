const obj = {
    name: 'cxw',
    age: 18,
    friend: {
        name: 'lpt'
    }
}

const objStr = JSON.stringify(obj)
console.log(JSON.parse(objStr));

// stringify第二个参数replace的使用!

// 一是:可以传入参数控制哪些属性转换
const objStr2 = JSON.stringify(obj, ['name', 'friend'])

// 二是:有回调函数可以控制每个的属性值
const objStr3 = JSON.stringify(obj, (key, value) => {
    if (key == 'name') {
        value = 'success'
    }
    return value
})

console.log(objStr);
console.log(objStr2)
console.log(objStr3);

// 存储的时候只能是localStorage 格式!
// localStorage.setItem("obj",objStr)