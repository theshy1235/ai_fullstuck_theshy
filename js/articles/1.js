const nums = [9, 2, 3, 6, 7]
// 这个函数不单纯，有副作用，不可靠函数
function sortArr(arr) {
    //const res = arr; //同一个地址 引用式赋值
    return res.concat.sort()
}
console.log(sortArr(nums), nums);
// -排序 冒泡 o(n^2) 快排 o(nlogn)
// console.log(nums.sort());
// console.log(nums);