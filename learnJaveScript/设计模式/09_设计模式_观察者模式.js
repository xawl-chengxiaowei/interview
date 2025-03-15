// 观察者模式  eg: 观察学生是否发生变化,发生变化就改变.
// 观察者-老师
class Observers {
    constructor(name, fn) {
        this.name = name;
        this.fn = fn
    }
}

// 观察者-校长及老师
let xiaozhang = new Observers('校长', (state) => { console.log('因为:' + state + '校长叫你去办公室') })
let teacher = new Observers('老师', (state) => { console.log('因为:' + state + '老师叫你去叫家长') })
console.log(xiaozhang, teacher)

// 被观察者- 状态,记录观察者的数组
class subject {
    constructor(state) {
        this.state = state,
        this.observers = [];//校长,老师这些!
    }

    setState(state) {
        this.state = state;
        // 设置技能的时候,要通过遍历,判断是否触发了观察者的函数技能
        this.observers.forEach((item, value) => {
            item.fn(this.state)
        })
    }

    addObserver(name) {
        // 遍历查找
        this.observers.filter((item) => item !== name)
        this.observers.push(name)
    }

    delObserver(name) {
        this.observers = this.observers.filter((item) => item !== name)
    }
}

let xiaoming = new subject('study')

xiaoming.addObserver(xiaozhang)
xiaoming.addObserver(teacher)
xiaoming.delObserver(teacher)
// xiaoming.setState('玩手机')
console.log(xiaoming)