/**
 *  删除有序数组中的重复项，
 *  原地 删除重复出现的元素，
 *  返回无重复项的数组新长度
 */
var removeDuplicates = function (nums) {
  // 思路：
  // 1. 首先元素只能出现1次，那么长度为0的数组可以直接返回，也因此左右指针从1开始遍历
  // 2. 考虑是一个有序数组，因此不需要记录出现次数，当且仅当 右指针-1 时的值等于左指针，说明出现次数超过1次，不保留该值
  // 如果不是有序数组，可以考虑用map记录次数
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  let fast = 1,
    slow = 1;

  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return l; // 注意是l，因为本身每次遍历最后就+1了
};

removeDuplicates([1, 1, 2]);
