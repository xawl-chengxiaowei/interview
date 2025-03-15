
// let reactiveFns = []
// 用数组不好,使用class

class Depend {//depend 是依赖的意思
    constructor() {
        this.reactiveFns = []
    }
    addDepend(fn) {
        this.reactiveFns.push(fn)
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }
}
// 封装需要响应式函数
const depend = new Depend()
function watchFn(fn) {
    depend.addDepend(fn)
}
// 对象的响应式
// 当你的对象发生改变时,你的函数需要发生执行! 
const obj = {
    name: 'cxw',//每一个都对应一个depend对象
    age: 24//每一个都对应一个depend 对象
}

// 监听对象属性发生变化:Proxy 是vue3的响应式原理 Object.defineProperty 就是vue2的响应式原理!
// 使用代理
const objProxy = new Proxy(obj, {
    // 捕获器
    get: function (target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        // depend.notify()//自动的进行通知!,这是都执行
        // 
    }
})

// 封装一个获取depend的函数
const targetMap = new WeakMap()
function getDepend(target, key) {
    // 通过target对象获取map的过程
    let map = targetMap.get(target)
    if (!map) {
        let map = new Map()
        targetMap.set(target, map)
    }

    // 通过key获取depend的过程
    let depend = map.get(key)
    if (!depend) {
        depend = new depend();
        map.set(key, depend)
    }
    return depend
}

// 执行添加到里面
function changeAge() {
    console.log('我是一个age发生改变');
    console.log(objProxy.age);
}
function changeName() {
    console.log('我是一个Name发生改变')
    console.log(objProxy.name)
}
watchFn(changeAge)
watchFn(changeName)

objProxy.name = '改变后的Name'
objProxy.name = '改变后的Name2'//改变一次自动监听响应一次



// 多个对象多个属性的话如何操作呢?
// 每个对象都创建一个map保存,这里我们又将多个map放在WeakMap进行保存!





// function foo() {
//     const newName = obj.name;
//     console.log(obj.name);
// }

// function bar() {
//     console.log('普通的其他函数');
//     console.log("那么我们如果做到响应式时有的函数执行,有的函数不执行呢? 封装一个函数判断! ");
// }

// reactiveFns.forEach((fn) => {
//     fn()
// })
