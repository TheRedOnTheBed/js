/*
 * @Author: TheRedOnTheBed 1352212189@qq.com
 * @Date: 2024-08-19 16:15:43
 * @LastEditors: TheRedOnTheBed 1352212189@qq.com
 * @LastEditTime: 2024-08-19 17:12:10
 * @FilePath: \js\test4.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 订阅者Dep
class Dep {
    constructor() {
        // 存放watcher的对象数据
        this.subs = []
    }
    addSub(sub) {
        this.subs.push(sub) 
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}