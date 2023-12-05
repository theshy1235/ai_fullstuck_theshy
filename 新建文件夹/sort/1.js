function bubbleSort(arr) {
    let len = arr.length;// 缓存数组长度
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {//len 伦
            //j < len - 1
            if (arr[j] > arr[j + 1]) {//相邻元素交换位置
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
// 待排 从小到大排
const arr = [5, 8, 6, 4, 3, 4, 9, 2, 1, 7];
bubbleSort
