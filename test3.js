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

let handle = {
  get(target, key) {
    // 如果取的继续为对象，继续去劫持
    if(target[key] !== null && typeof target[key] == 'object') {
      return new Proxy(target[key], handle)
    }
    console.log('数据获取Get', key, target[key])
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    if(key == 'length') return true
    render()
    console.log('数据获取Set', key, value)
    return Reflect.set(target, key, value)
  }
}

let testProxy = new Proxy(testObj, handle)
testProxy.name = 'test'
testProxy.newobj = 'zzp'
console.log(testProxy.location)
