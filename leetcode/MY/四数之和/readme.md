解题思路：
四数之和问题可以看做是三数之和问题的扩展，可以采用类似的思路来解决。

首先对数组进行排序，然后枚举前两个数（i 和 j），再使用双指针法找到剩下的两个数（left 和 right），使它们的和为 target。具体步骤如下：

- 对数组 nums 进行排序，方便后续的操作。
枚举第一个数 i，遍历范围为 [0, nums.length-3]，如果 i>0 且 nums[i] === nums[i-1]，则跳过本次循环，避免重复。
- 枚举第二个数 j，遍历范围为 [i+1, nums.length-2]，如果 j>i+1 且 nums[j] === nums[j-1]，则跳过本次循环，避免重复。
- 定义双指针 left 和 right，分别指向 j+1 和 nums.length-1，当 left<right 时循环：
    - 计算四个数的和 sum = nums[i] + nums[j] + nums[left] + nums[right]，如果 sum 等于 target，则将这四个数加入到结果数组 res 中，并移动 left 和 right 指针，同时跳过重复的元素。
    - 如果 sum 小于 target，则将 left 指针向右移动一位。
    - 如果 sum 大于 target，则将 right 指针向左移动一位。
    返回结果数组 res。
这样的时间复杂度为 O(n^3)，空间复杂度为 O(1)。
