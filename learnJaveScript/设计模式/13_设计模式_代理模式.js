
// 代理模式
// 顾名思义就是帮助其他人做事,即为: 为其他对象提供一种代理以控制对这个对象的访问,代理可以是任何的对象
// eg:
// 假如xiaoming要送酸奶小妹玫瑰花，却不知道她的联系方式或者不好意思，想委托大叔去送这些玫瑰,
// 那大叔就是个代理，那我们如何来做呢？

// 函数式
// var girl = function (name) {
//     this.name = name
// }

// var xiaoming = function (girl) {
//     this.girl = girl;
//     this.sendGift = function (gift) {
//         console.log("Hi " + girl.name + ", 小明送你一个礼物:" + gift)
//     }
// }

// var proxyTom = function (girl) {
//     this.girl = girl;
//     this.sendGift = function (gift) {
//         // 替小明送花.
//         (new xiaoming(girl)).sendGift(gift)
//     }
// }

// var proxy = new proxyTom(new girl('奶茶小妹'));
// proxy.sendGift('999个玫瑰')

// 类式
class Girl {
    constructor(name) {
        this.name = name
    }
}

class Xiaoming {
    constructor(girl) {
        this.girl = girl
    }
    sendGift(gift) {
        console.log('hello,' + this.girl.name + ',小明送你:' + gift)
    }
}

class ProxyTom {
    constructor(girl) {
        this.girl = girl
    }
    sendGift(gift) {
        (new Xiaoming(this.girl)).sendGift(gift)
    }
}
var proxy = new ProxyTom(new Girl('奶茶小妹'))
proxy.sendGift('999朵玫瑰!')
