/**
 * 假设我们负责⼀个售卖⼿机的电商⽹站，经过分别交纳 500 元定⾦和 200 元定⾦的两轮预定后(订单已
    在此时⽣成)，现在已经到了正式购买的阶段。 公司针对⽀付过定⾦的⽤户有⼀定的优惠政策。在正式
    购买后，已经⽀付过 500 元定⾦的⽤ 户会收到 100 元的商城优惠券，200 元定⾦的⽤户可以收到 50 元
    的优惠券，⽽之前没有⽀付定⾦的⽤户只能进⼊普通购买模式，也就是没有优惠券，且在库存有限的情
    况下不⼀定保证能买到。
 */
// 传统方式.
var order = function (orderType, pay, stock) {
    if (orderType === 1) {///500元定金购买模式.
        if (pay === true) {//判断是否缴纳500元定金
            console.log('已支付500元定金,得到优惠卷100元')
        } else if (stock > 0) {//stock  判断是否有库存,
            console.log('未支付500元定金,但是有库存,已购买')
        } else {
            console.log('未支付500元定金,没有库存,未购买')
        }
    }

    if (orderType === 2) {
        if (pay === true) {
            console.log('已支付200元定金,得到优惠卷50元')
        } else if (stock > 0) {
            console.log('未支付200元定金,但是有库存,已购买')
        } else {
            console.log('未支付200元定金,没有库存,未购买')
        }
    }

    if (orderType === 3) {
        if (stock > 0) {
            console.log('有库存,可以购买!')
        } else {
            console.log('没库存,无法购买!')
        }
    }
}
// order( 2 , false, 500);
// 现在我们开始重构上述代码
// 现在我们采⽤职责链模式重构这段代码，先把 500 元订单、200 元订单以及普通购买分成 3 个函数。
// 接下来把 orderType、pay、stock 这 3 个字段当作参数传递给 500 元订单函数，如果该函数不符合处
// 理条件，则把这个请求传递给后⾯的 200 元订单函数，如果 200 元订单函数依然不能处理该请求，则
// 继续传递请求给普通购买函数。

var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('已支付500元定金,得到优惠卷100元')
    } else {
        return 'nextSuccess'; // 我不知道下⼀个节点是谁，反正把请求往后⾯传递
    }
}

var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('已支付200元定金,得到优惠卷50元')
    } else {
        return 'nextSuccess';// 我不知道下一个节点是谁,反正把请求往后面传递
    }
}

var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('有库存,普通的购买');
    } else {
        console.log('手机内存空间不足!')
    }
}

class Chain {
    constructor(fn) {
        this.fn = fn;
        this.successor = null
    }
}

Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
}

Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccess') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments)
    }
}

let chainOrder500 = new Chain(order500)
let chainOrder200 = new Chain(order200)
let chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)//添加属性successor, 可以链接下一个链接.
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500);
chainOrder500.passRequest(2, true, 500);

// 通过改进，我们可以⾃由灵活地增加、移除和修改链中的节点顺序，假如某天⽹站运营⼈员 ⼜想出了⽀
// 持 300 元定⾦购买，那我们就在该链中增加⼀个节点即可.
/**
 * 
    var order300 = function () {
        // 具体实现略
    };
    chainOrder300 = new Chain(order300);
    chainOrder500.setNextSuccessor(chainOrder300);
    chainOrder300.setNextSuccessor(chainOrder200);
 */