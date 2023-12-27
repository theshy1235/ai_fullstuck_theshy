var majorityElement = function (nums) {
    // o(n)时间复杂度 o(1)的空间复杂度 投票算法 支持或反对
    let cout = 1;  //o(1)
    let majority = nums[0] //o(1)
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = num[i] //新的
        }
        if (majority === nums[i]) {
            count++
        } else {
            count--
        }
        return majority
    }
}