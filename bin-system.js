/*
 * @Author: TheRedOnTheBed 1352212189@qq.com
 * @Date: 2024-04-16 23:08:40
 * @LastEditors: TheRedOnTheBed 1352212189@qq.com
 * @LastEditTime: 2024-04-18 23:32:37
 * @FilePath: \js\bin-system.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let change32 = (nums) => {
    let res = ''
    for(let i = 31; i >= 0; i--) {
        // console.log('1 << 1', 1 << i)
        res += (nums & (1 << i)) === 0 ? '0' : '1'
    }
    console.log(res)
} 

let change64 = (nums) => {
    let res = ''
    for(let i = 63; i >= 0; i--) {
        // console.log('1 << 1', 1 << i)
        res += (nums & (1 << i)) === 0 ? '0' : '1'
    }
    console.log(res)
} 
let a = 1253
let b = -255
change32(a)
change32(b)
// console.log(Number.MAX_SAFE_INTEGER)
change32(a & b)
// a = -b
a = ~b+1

// change64(Number.MAX_SAFE_INTEGER)
