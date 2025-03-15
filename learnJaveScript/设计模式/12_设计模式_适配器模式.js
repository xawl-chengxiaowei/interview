
// 适配器模式
// 是为了解决两个对象之间不匹配的问题，而原对象有不适合直接修改，此时可以使用适配器模式进行一层转换。

function getUsers() {
    return [
        {
            name: 'zs',
            age: 30
        },
        {
            name: 'ls',
            age: 20
        }
    ]
}

//需求不想修改上面代码，但想获取 [{zs: 30}, {ls: 20}]格式的数据
function adaptor(user) {
    return user.map((item, index) => {
        return {
            [item.name]: item.age
        }
    })
}

