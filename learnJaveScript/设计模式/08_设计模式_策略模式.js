
// 一个问题对应的多种解决方案
// 立即执行函数
const calcPrice = (function () {

    const sale = {
        '100_10': (price) => price = price - 10,
        '200_30': (price) => price = price - 30,
        '300_50': (price) => price = price - 50,
    }
    function calcPrice(price, type) {
        if (!sale[type]) return '没有这种折扣'
        return sale[type](price)
    }
    calcPrice.add = function (type, fn) {
        // 向对象中添加属性
        if (sale[type]) return '已经存在了这种折扣!'
        sale[type] = fn
        console.log(sale)
        return calcPrice
    }
    calcPrice.del = function (type) {
        if (!sale[type]) return '不存在这种类型'
        delete sale[type]
        return calcPrice
    }
    return calcPrice
})()

calcPrice.del('100_10')
calcPrice.add('400_80', function (price) { return price = price - 80 })