
// 防抖 -- 最后一段开始计时。
function debounce(fn, delay) {
    let timer = null
    const _debounce = (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
    return _debounce
}