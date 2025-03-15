// 实现一个 flatten 函数，实现如下的转换功能
const obj2 = {
    a: 1,
    b: [1, 2, { c: true }],
    c: { e: 2, f: 3 },
    g: null,
};
// 转换为
let objRes = {
    a: 1,
    "b[0]": 1,
    "b[1]": 2,
    "b[2].c": true,
    "c.e": 2,
    "c.f": 3,
    g: null,
};

//  实现代码.
const objFlatten = function (obj) {
    const res = {}
    const dfs = (curr, path) => {
        // 判断是基本数据类型还是复杂数据类型
        if ((typeof curr === "object") && curr !== null) {
            const isArray = Array.isArray(curr);
            for (let key in curr) {
                // 路径拼接~  这是重点中的重点!!!!!!
                const newPath = path ? isArray ? `${path}[${key}]` : `${path}.${key}` : key;
                dfs(curr[key], newPath)
            }
        } else {
            res[path] = curr
        }
    }
    dfs(obj)
    return res;
}
// console.log(objFlatten(obj2));


// 判断一个值是否是对象类型

function isObj(obj) {
    return obj !== null && (typeof obj === "object" || typeof obj === "function")
}




