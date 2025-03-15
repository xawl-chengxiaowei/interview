function Foo(name, age) {
    // console.log('foo~', '执行函数体代码~')
    // 这里的this 绑定的是自动创建的对象{},并且返回
    this.name = name;
    this.age = age;
}
// foo 是一个普通的函数
// foo()

// 换一种方式调用foo函数: 通过new 关键字去调用一个函数,那么这个函数就是构造函数l
// 可以不写foo() 中的小括号
var result = new Foo('cxw', 23)
// console.log(result.__proto__)

function Bar() {

}
const res = new Bar
// 在原型对象上添加属性
Bar.prototype.name = 'cxw'
Bar.prototype.age = 23
// console.log(Bar.prototype === res.__proto__)
// console.log(res.__proto__)   

//  原型和构造函数 创建对象 最佳方案
function Foo1(name, age, height) {
    this.name = name;//this指向的是new 出来的实例,每个属性都不一样,所以用this绑定
    this.age = age;
    this.height = height;
}

// 绑定共同的方法,直接绑定在原型链上就好!
Foo1.prototype.eatting = function () {
    console.log(this.name + '正在吃')//这里的this一样啊  也是new出来的 谁引用调用谁,p1.eatting() 所以指向的是p1
}
let p1 = new Foo1('cxw', 23, 177)
p1.eatting()
const p2 = new Foo1('cxy', 25, 170)
p2.eatting()