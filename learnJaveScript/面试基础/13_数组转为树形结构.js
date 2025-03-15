
/** 数组结构数据 */
const arrayData = [
    { id: 2, title: '中国', parent_id: 0 },
    { id: 3, title: '广东省', parent_id: 2 },
    { id: 4, title: '广州市', parent_id: 3 },
    { id: 5, title: '天河区', parent_id: 4 },
    { id: 6, title: '湖南省', parent_id: 2 },
    { id: 1, title: '俄罗斯', parent_id: 0 }
]

// 递归的写法.
const getChildren = (data, result, pid) => {
    for (let item of data) {
        if (item.parent_id === pid) {
            const newItem = { children: [], ...item };
            result.push(newItem)
            getChildren(data, newItem.children, newItem.id)
        }
    }
}

function arrToTree(data, pid) {
    let result = [];
    getChildren(data, result, pid);
    return result
}

// console.log(arrToTree(arrayData, 0))

// 数组转树的写法.
/** 树状形结构数据treeData */
const treeData = [
    {
        id: 2, title: '中国', parent_id: 0,
        children: [
            {
                id: 3, title: '广东省', parent_id: 2,
                children: [
                    {
                        id: 4, title: '广州市', parent_id: 3,
                        children: [
                            { id: 5, title: '天河区', parent_id: 4 }
                        ]
                    }
                ]
            },
            { id: 6, title: '湖南省', parent_id: 2 }
        ]
    },
    { id: 1, title: '俄罗斯', parent_id: 0, },
]

// 树状结构转数组.

// 太妙了  技巧太完美了!
function treeToArray(data) {
    return data.reduce((pre, cur) => {
        const { children = [], ...item } = cur
        return pre.concat([{ ...item }], treeToArray(children))
    }, [])
}

console.log(treeToArray(treeData));

