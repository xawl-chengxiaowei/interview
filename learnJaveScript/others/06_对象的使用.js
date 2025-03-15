// 对象的使用

// Object.defineProperty() 对对象属性进行添加修改等
var obj = {
    name: 'cxw',
    age: 23,
}
//  接受三个参数  操作的对象  操作的属性  属性描述符
Object.defineProperty(obj, "height", {
    // 很多的配置
    value: 1.88
})

// 这个属性是不可枚举的 打印不出来 但是存在的
// console.log(obj.height)

// 属性描述符的类型分为两种.
// 一种是数据属性描述符 一种是存取属性描述符

// 定义多个属性描述符
Object.defineProperties(obj,{
    name:{
        configurable:false
    },
    age:{
        configurable:false
    }
})