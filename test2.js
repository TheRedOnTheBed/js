/*
 * @Author: TheRedOnTheBed 1352212189@qq.com
 * @Date: 2024-08-04 22:46:08
 * @LastEditors: TheRedOnTheBed 1352212189@qq.com
 * @LastEditTime: 2024-08-08 15:45:24
 * @FilePath: \js\test2.js
 * @Description: Object.defineProperty技术监听对象
 */
let testObj = {
  name: 'abc',
  location: {
    x: 100,
    y: 100,
  },
}
let testArr = [1, 2, 3, 4]
function render() {
  console.log('模拟视图渲染')
}
// 重写数组类型
let arrayMethods = ['pop', 'shift', 'unshift', 'sort', 'reverse', 'splice', 'push']
// 获取数组的原型
let arrayProto = Array.prototype
// 重写原型，实现数组方法
let myArrayProrto = Object.create(arrayProto)
arrayMethods.forEach((method) => {
  myArrayProrto[method] = function () {
    // 执行原生的数组方法
    arrayProto[method].call(this, ...arguments)
    render()
  }
})

function observe(obj) {
  // 数据劫持
  if (Array.isArray(obj)) {
    // 如果是数组类型就给对象的原型赋值我们自己实现的方法
    obj.__proto__ = myArrayProrto
    // return
  }
  if (typeof obj == 'object') {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]) // 给对象的所有属性加上监听
    })
  }
}
// 给属性加上get/set方法
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
      if (value !== newVal) {
        console.log('数据设置Set', value, newVal)
        render()
        value = newVal
      }
    },
  })
}
function $set(data, key, value) {
  defineReactive(data, key, value)
}
// observe(testObj)
// test.name
// testObj.location.x = 123
// console.log('日志输出:', test.name)

// 使用defineProperty这种方式无法对对象中添加属性
// testObj.location.a =

// 数组
observe(testArr)
// testArr = [1,2,3]
testArr[0] = 100
testArr.push(200)
console.log(testArr)
