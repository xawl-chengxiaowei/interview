const obj = {
    name: 'cxw',
    age: 23
}

// Object 中definedProperty中一个属性描述符实现操作!
// Object.defineProperty(obj, "name", {
//     set: function () {
//         console.log('name 属性被设置');
//     },
//     get: function () {
//         return 'name属性被访问';
//     }
// })

// console.log(obj.name)
// obj.name = 'haha'
// 但是不建议使用, 不好!我们应该使用proxy!

// Proxy的使用
// es6 中新增加了一个类Proxy.也就是如果我们希望监听一个对象的相关操作,那么我们可以先创建一个代理对象,
// 之后对改对象的所有操作,都可以通过代理对象来完成,代理对象可以监听我么想要对原对象进行了哪些操作!

const objProxy = new Proxy(obj, {//第二个参数是捕获器
    // 获取值时的捕获器
    get: function (target, key) {
        return target[key]
    },
    // 设置值的时候的捕获器!
    set: function (target, key, newValue) {
        target[key] = newValue
    },
    // 监听in的操作符
    has: function () {

    },
    // 监听delete操作符
    deleteProperty: function () {

    }
})

objProxy.name = 'hha'

// console.log(objProxy.name);

// Reflect 经常与proxy 一起使用,是es6新增的一个Api,它是一个对象.
// 字面意思是反射!
// 它主要提供了很多的操作js对象的方法, 有点像Object中的方法
// reflect 和object 类似,里面的方法和代理很类似!

// Proxy 里面的get set 其实还是对里面做了操作!.
