/*
 * @Author: TheRedOnTheBed 1352212189@qq.com
 * @Date: 2024-08-04 22:46:08
 * @LastEditors: TheRedOnTheBed 1352212189@qq.com
 * @LastEditTime: 2024-08-05 16:20:19
 * @FilePath: \js\test2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let test = {
    name: 'abc',
    location: {
        x: 100,
        y: 100
    }
}
function render() {
    console.log('模拟视图渲染')
}
function observe(obj) {
    // 数据劫持
    if(!obj || typeof obj !== 'object' ) return 
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]) // 给对象的所有属性加上监听
    })
    function defineReactive(obj, key, value) {
        observe(value)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
                console.log('数据获取Get', value)
                return value
            },
            set: function reactiveSetter(newVal) {
                observe(newVal) //如果新值为对象，也需要监听
                if(value !== newVal) {
                    console.log('数据设置Set', value , newVal)
                    render()
                    value = newVal
                }
            }
        })
    }
}
observe(test)
test.name
test.location.x = 123
console.log('日志输出:', test.name)