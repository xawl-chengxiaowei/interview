// class 中的拦截器

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._address = '我是地址'
    }
    eatting() {
        console.log('我的年龄是' + nma)
    }
    get address() {
        console.log('我被拦截')
        return this._address
    }
    set address(adr) {
        console.log('我被设置')
        this._address = adr
    }
}
const p = new Person('cxw', 23)
// console.log(p)

console.log(p.address)
console.log('---------------');
p.address = '你好'

// 私有属性,必须要通过get set 设置进行访问, 不然无法进行访问!
// 当你获取的时候会进行触发,当你设置的时候,会触发!设置