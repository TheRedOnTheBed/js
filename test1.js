/*
 * @Author: TheRedOnTheBed 1352212189@qq.com
 * @Date: 2024-04-22 22:51:31
 * @LastEditors: TheRedOnTheBed 1352212189@qq.com
 * @LastEditTime: 2024-04-24 23:20:26
 * @FilePath: \js\text1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 阶乘相加
function f1(num) {
    let sum = 1
    let a = 1
    for(let i = 2; i <= num; i++) {
        a = a*i
        sum += a
    }
}

// 选择排序
function selectSort(arr) {
    if(arr == null || arr.length < 2) {
        return arr
    } 
    for(let i = 0; i < arr.length; i++) {
        let minValueIndex = i
        for(let j = i+1; j < arr.length; j++) {
            minValueIndex = arr[j] < arr[minValueIndex] ? j : minValueIndex
        }
        if(minValueIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minValueIndex]
            arr[minValueIndex] = temp
        }
    }
    return arr
}
console.log('selectSort', selectSort([5,9,6,3,7,2,100,25,42,65,22]))

let arr = [5,9,6,3,7,2,100,25,42,65,22]
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}
// console.log(swap(arr, 5, 0))

// 冒泡排序
function bubbleSort(arr) {
    if(arr == null || arr.length < 2) {
        return arr
    } 
    for(let i = arr.length - 1; i >= 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}
console.log('bubbleSort', bubbleSort(arr))

function insertSort1(arr) {
    if(arr == null || arr.length < 2) {
        return arr
    } 
    for(let end = 1; end < arr.length; end++){
        let newIndex = end
        while(newIndex - 1 >= 0 && arr[newIndex - 1] > arr[newIndex]) {
            swap(arr, newIndex-1, newIndex)
            newIndex--
        }
    }
    return arr
}

function insertSort2(arr) {
    if(arr == null || arr.length < 2) {
        return arr
    } 
    for(let end = 1; end < arr.length; end++){
        for(let pre = end - 1; pre >= 0 && arr[pre] < arr[pre+1]; pre--) {
            swap(arr, pre, pre+1)
        }
    }
    return arr
}
console.log('insertSort', insertSort1(arr))
console.log('insertSort2', insertSort2(arr))

