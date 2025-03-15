// 装饰器模式
// 给对象动态地添加职责的方式称为装饰器模式.装饰器模式能都在不改变对象自身的基础上,在程序运行期间给对象动态的添加职责
// 应用
// 当我们接受老代码,需要对他已有的功能做一个扩展的时候.

var horribleCode = function () {
    console.log('我是一堆你看不懂的老逻辑')
}
// // oldCode
// var horribleCode = function () {
//     console.log('我是一堆你看不懂的老逻辑')
//     console.log('我是新的逻辑')
// }

// newCode
var newHorribleCode = function () {
    console.log('我是一堆你看不懂的老逻辑')
}

var _newHorribleCode = newHorribleCode;

// 在JavaScript中有两个相同的函数名时，后一个会覆盖掉前一个函数,在声明的时候就会覆盖.
var newHorribleCode = function () {
    _newHorribleCode();
    console.log('我是新的代码~')
}
// newHorribleCode()

