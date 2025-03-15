// 单例模式  一个构造函数一生只能有一个实例 不管new多少次  都是只有这一个实例

const Person = (function () {
    class Person {
        constructor(name, age, score) {
            this.name = name;
            this.age = age;
            this.score = score;
        }
    }
    Person.prototype.say = function () {
        console.log('hello world~')
    }

    function result(...args) {
        let instance = null
        if (!instance) {
            instance = new Person(...args)
            console.log(instance)
        }
        return instance
    }
    return result
})()

let p1 = Person('cxw', 23, 55)
let p2 = Person('lala', 23, 55)
// console.log(p1, p2)




