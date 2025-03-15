

// 这个库是将localStorage和sessionStorage 进行了封装,到时候是自己选择使用哪个库,直接使用实例!
class XWCache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
        console.log(this.storage)
    }
    setCache(key, value) {
        if (value) {
            // 将不同类型 value 转换为json字符串的形式
            this.storage.setItem(key, JSON.stringify(value))
        }
    }
    getCache(key) {
        let value = this.storage.getItem(key)
        if (value) {
            value = this.storage.getItem(key, JSON.parse(value))
            return value
        }
    }
    removeItem(key) {
        this.storage.removeItem(key)
    }
    clear() {
        this.storage.clear()
    }
    key(index) {
        return this.storage.key(index)
    }
    length() {
        return this.storage.length
    }
}

const localCache = new XWCache()//这里默认是true!
const sessionCache = new XWCache(false)



export {
    localCache,
    sessionCache
}