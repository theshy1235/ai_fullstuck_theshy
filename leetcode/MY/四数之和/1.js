function fourSum(nums, target) {
    let res = [];
    if (nums.length < 4) return res;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // 避免重复
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue; // 避免重复
        let left = j + 1, right = nums.length - 1;
        while (left < right) {
          let sum = nums[i] + nums[j] + nums[left] + nums[right];
          if (sum === target) {
            res.push([nums[i], nums[j], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) left++; // 避免重复
            while (left < right && nums[right] === nums[right - 1]) right--; // 避免重复
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    return res;
}