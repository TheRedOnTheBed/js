/*
 * @Author: TheRedOnTheBed 1352212189@qq.com
 * @Date: 2024-08-04 22:46:08
 * @LastEditors: TheRedOnTheBed 1352212189@qq.com
 * @LastEditTime: 2024-08-04 23:50:48
 * @FilePath: \js\test2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function render() {
    console.log('模拟视图渲染')
}
function observe(obj) {
    // 数据劫持
    if(!obj || typeof obj !== 'object' ) return 
    Object.keys(obj).forEach(key => {
        
    })
}