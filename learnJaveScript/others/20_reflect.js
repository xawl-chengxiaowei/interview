// Reflect 经常与proxy 一起使用,是es6新增的一个Api,它是一个对象.
// 字面意思是反射!
// 它主要提供了很多的操作js对象的方法, 有点像Object中的方法
// reflect 和object 类似,里面的方法和代理很类似!
// Proxy 里面的get set 其实还是对里面做了操作!.

const obj = {
    _name: 'cxw',
    age: 23,

    get name(){
        return this._name
    },
    set name(newValue){
        this._name = newValue
    }
}

// reflect 主要是对为了避免对原对象进行操作 reflect 香!

// 结合使用,最好方案!!!
const objProxy = new Proxy(obj, {//第二个参数是捕获器,
    // 获取值时的捕获器
    get: function (target, key) {//第三个参数是receiver 就是代理对象,即为objProxy! 在参数上写这个,那么在原对象obj 中get set 中的方法也会被执行!
        return Reflect.get(target, key)
    },
    // 设置值的时候的捕获器!
    set: function (target, key, newValue) {
        Reflect.set(target, key, newValue)
    },
})

objProxy.name = 'haha'
console.log(objProxy.name)


