
// 1.数组去重   [...new Set()]
// 数组去重 [...new Set()]
const arr = ["cxw", "1", "cxw", "lala", "1"]

// console.log([...new Set(arr)])
function arrDistinct(args) {
    const map = new Map();
    args.forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1)
        } else {
            map.set(item, 1)
        }
    });
    let result = []
    for (const [key, value] of map.entries()) {// map.entries 返回一个新的可迭代对象, 改对象包含了此map的每个元素[key,value]对.
        result.push(key)
    }
    return result
}

// console.log("###", arrDistinct(arr));

// 数组扁平化
const arr1 = [
    123,
    ["1", "2", ["3", "4"], "5"],
    ["6", "j"],
    "s"
]
// 方法1
// console.log(arr1.flat(Infinity));
console.log(arr1.flat(Infinity))

// 方法2 递归实现result = result.concat(flatten(element))
function flatten(arr) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (Array.isArray(element)) {
            result = result.concat(flatten(element))
        } else {
            result.push(element)
        }
    }
    return result
}

// console.log("####", flatten(arr1));



