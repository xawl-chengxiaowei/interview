// 2、const url = 'https://localhost:8080/a/b?name=alex&age=3#token=111';
// 分别说出该url的组成部分
// protocal: 协议
// host: 端口号
// path: 路径地址
// query: 查询条件
// hash:  hash描点

// 实现parseUrl 函数
function parseUrl(url) {
    let parts = {
        query: {},
        hash: {}
    }
    // 字符串分割~~
    // const pairs = url.split("#")
    const url2 = new URL(url);
    // const paramsStr = url2.search.split("&")
    console.log("paramsStr", typeof url2.searchParams);
    for (const [key, value] of url2.searchParams) {
        parts.query[key] = value
    }
    const { protocol, host, pathname, hash } = url2 || {}
    const token = hash.split("=")[1]
    parts.protocal = protocol.slice(0, protocol.length - 1)
    parts.host = host
    parts.path = pathname;
    parts.hash.token = token
    return parts
}

const url = 'https://localhost:8080/a/b?name=alex&age=3#token=111'
const parts = parseUrl(url)
// console.log("parts", parts);

// parts = {
//   protocal: 'https'
//   host: 'localhost:8080'
//   path: '/a/b'
//   query: {
//   	name: 'a',
//   	age: '3'
//   }
//   hash:  {
//   	token: '111'
//   }
// }

// 练习splice  split  slice 的三种不同的用处。
// splice 对数组增加 删除 和替换
// 三个参数  开始位置  删除数量
//  他可以改变原数组并且返回一个新数组
const months = ['Jan', 'March', 'April', 'June'];
months.splice(0, 2)
console.log("test", months)

// split 是对字符串进行切割,转换成数组。
const str = "asdasdasdasdasssss1sad"
console.log("str", str.split(""))

// slice  对元素进行浅拷贝。返回一个新数组。
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// slice 对元素进行切割,第一个元素是开始切割的下标，第二个是结束的下标。
console.log("#######", animals.slice(2, 4))