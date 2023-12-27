var threeSum = function (nums) {
    let ans = [];
    if (nums.length < 3) return ans;
    if (nums[0] + nums[1] + nums[2])
        nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let L = i + 1, R = nums.length - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                result.push(nums[i, nums[L], nums[R]]);
                while (L < right && nums[L] === nums[L + 1]) L++;
                while (L < right && nums[R] === nums[R + 1]) L++;
                R--;
                L++;
            }
            if (sum < 0) {
                L++;
            } else (sum > 0){
                R--
            }
        }
        return ans
    }
};