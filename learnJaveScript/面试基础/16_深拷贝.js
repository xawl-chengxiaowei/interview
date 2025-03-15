//  深拷贝代码实现。

function isObject(value) {
    const valueType = typeof value;
    return (valueType !== null) && (valueType === "object" || valueType === "function");
}


// 递归实现深拷贝!
function deepClone(obj) {
    // 对于基本的数据类型，直接的进行
    if (!isObject(obj)) {
        return obj
    }
    // 判断是否是对象。
    let target = {}
    for (const key in obj) {
        target[key] = deepClone(obj[key])
    }
    return target
}

// 测试代码
const obj = {
    name: "cxw",
    age: 18,
    friend: {
        name: "james",
        address: {
            city: "广州"
        }
    }
}

const newObj = deepClone(obj)
console.log("newObj", newObj)
console.log(newObj === obj)