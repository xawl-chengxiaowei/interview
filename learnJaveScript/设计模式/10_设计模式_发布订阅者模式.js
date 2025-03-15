// 发布订阅模式 可以使用书店购书买书作为例子.
class Observer {
    constructor() {
        this.message = {}
    }
    // type 是监听的这种行为,fn是对应执行的通知,比如监听到需要的书来了,fn执行通知需要买书的人。
    add(type, fn) {
        if (!this.message[type]) {
            // 没有注册过,所以先进行注册
            this.message[type] = []
        }
        this.message[type].push(fn)
    }
    del(type, fn) {
        // 判断是删除fn 还是整体进行删除
        if (!fn) {
            delete this.message[type]
            return;
        }
        if (!type) return;
        this.message[type] = this.message[type].filter(item => item !== fn)
    }
    trigger(type) {
        if (!this.message[type]) return;
        this.message[type].forEach((item, index) => {//触发对应的事件!
            item()
        })
    }
}
let xiaoming = new Observer()
xiaoming.add('a', handlerA)
xiaoming.add('a', handlerB)
// xiaoming.del('a', handlerA)

xiaoming.add('m', handlerC)
xiaoming.add('n', handlerD)
xiaoming.trigger('a')

// console.log(xiaoming)
function handlerA() { console.log('A') }
function handlerB() { console.log('B') }
function handlerC() { console.log('C') }
function handlerD() { console.log('D') }