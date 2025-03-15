

// 发布订阅- 监听到一个行为发生, 立马去触发其他是该行为对应的事件.


class Observer {
    constructor() {
        this.message = {}
    }
    add(type, fn) {
        const exist = Object.keys(this.message).includes(type)
        if (exist) {
            this.message[type].push(fn)
            return;
        }
        this.message[type] = [fn]
        // console.log(typeof this.message[type]);
    }
    del(type, fn) {
        const exist = Object.keys(this.message).includes(type)
        if (!exist) return "没有该类型~";
        if (!this.message[type].length) {
            delete this.message[type]
        }
        console.log(this.message[type].length);
        // this.message[type] = this.message[type].filters(item => item !== fn)
        const currentIndex = this.message[type].indexOf(fn)
        this.message[type].splice(currentIndex, 1)
    }
    trigger(type) {
        const exist = Object.keys(this.message).includes(type)
        if (!exist) return "没有改类型~"
        if (this.message[type].length) {
            this.message[type].forEach((fn) => {
                fn()
            })
        }
    }
}

function foo1() {
    console.log("我是a 对应的事件1~")
}
function foo2() {
    console.log("我是a 对应的事件2~")
}


const person = new Observer()

person.add("a", foo1)
person.add("a", foo2)

// console.log("person", person);

person.trigger("a")
person.del("a", foo2)
person.trigger("a")


