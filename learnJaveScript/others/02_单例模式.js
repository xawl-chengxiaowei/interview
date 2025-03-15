
const Person = (function () {
    let instance = null
    function Person(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby
    }
    Person.prototype.say = function (food) {
        console.log("我爱吃", food)
    }
    function signletom(...args) {
        if (!instance) instance = new Person(...args);
        return instance
    }
    return signletom
})()

const cxw = new Person("cxw", 17, "学习")
console.log(cxw.name)
console.log(cxw.age)
console.log(cxw.hobby)
cxw.say("玉米")

const syl = new Person("syl", 40, "务农")
console.log(syl.name)
console.log(syl.age)
console.log(syl.hobby)
syl.say("香蕉")