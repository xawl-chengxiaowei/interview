// const names = ['abc','']

// Array.includes("cba") 判断数组中是否包含该元素.

// 指数运算符. ** 这是指数运算符!
const result2 = 3 ** 3;
// console.log(result2);

// es8里面的语法.
// Object.keys()//这是获取对象中所有的key的!.
// Object.values()//这是获取对象中所有的values的!.
// Object.entries() 将一个对象转换成数组形式.

const obj = {
    name: "cxw",
    age: 18
}

const objEntries = Object.entries(obj);

// objEntries.forEach(item => {
//     console.log(item[0], item[1])
// })

console.log(Object.entries(obj))

const message = "Hello World!"

// 30 是一个30个字符,剩余的填充,后面是40个字符 ,剩下的填充!
const newMessage = message.padStart(30, "*").padEnd(40, "-");

// console.log(newMessage)

// 适用于身份证的填充!.
const cartNumber = "32432222222222222212312";
const sliceStr = cartNumber.slice(-4);//往后截取!
const finalCart = sliceStr.padStart(cartNumber.length, "*")
// console.log(finalCart)

// flat() 方法的使用
// 默认是一层降维.

// Object.fromEntries 使用场景?

const queryString = 'name=cxw&age=23&heigh=1.88';
const queryParams = new URLSearchParams(queryString)
// console.log(queryParams);//这是转换成对象数组的形式

for (let parmas of queryParams) {
    // console.log(parmas)
}
// 将entries 形式转回来 即为数组中数组
const paramsObj = Object.fromEntries(queryParams)
// console.log(paramsObj);

// trimStart 和trimend 去除收尾的空格!

// 空值合并运算符 ??  null 和underfined
let foo = ''
// const bar = foo || 'default value'
const bar = foo ?? 'default value'
// 但是使用|| 是有弊端的, 当为0 或者是空的字符串的时候,也会当做false
// ?? 空值合并运算符是用来代替||的,所以以后可以不使用||而是使用??代替.
// console.log(bar)
// 可选链的使用!
// ?. 的使用非常的有用!
const info2 = {
    name: 'cxw',
    // friend: {
    //     name: "haha",
    //     girlFriend: {
    //         name:"slha"
    //     }
    // }
}
// console.log(info2.friend?.girlFriend?.name)

// ||= &&= ??= 是逻辑与或非的运算
// eg: es12
let message2 = undefined
message2 = message2 || 'defaultValue'
// 相当于这样
// message2 ||= 'defaultValue'
// console.log(message2);

// 现在有一个需求: 有一个对象,我们希望监听一个对象的属性发生变化和设置!



