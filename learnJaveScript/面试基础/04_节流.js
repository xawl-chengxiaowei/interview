
// 节流函数 -- 一段一段的间隔的触发
// interval 时间间隔~

function throttle(fn, interval) {
    let lastTime = 0;
    const _throttle = () => {
        const newTime = new Date().getTime();
        const remainTime = interval - (newTime - lastTime);
        if (remainTime <= 0) {// 等于0的时候就触发他
            fn()
            lastTime = newTime
        }
    }
    return _throttle
}
