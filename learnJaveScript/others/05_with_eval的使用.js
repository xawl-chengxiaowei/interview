
// 不建议使用!!!
// with 可以有自己的作用域  可以在自己作用域里查找.
var name = 'kebi'
var obj = {
    name:'cxw',
    age:23
}

with(obj){
    console.log(name)
}

// eval 函数 是一个特俗的函数,他可以将传入的字符串当做js 的代码来运行~
eval("console.log('test')")