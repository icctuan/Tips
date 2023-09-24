/**
 *  删除有序数组中的重复项 ||
 *  原地 删除重复出现的元素，使元素最多出现2次
 *  返回删除后的数组新长度
 * @param nums 数组
 * @returns number
 */
var removeDuplicates = function (nums) {
  // 思路：
  // 1. 首先元素可以出现2次，那么长度在2以下的数组可以直接返回，也因此左右指针从2开始遍历
  // 2. 考虑是一个有序数组，因此不需要记录出现次数，当且仅当 右指针-2 时的值等于左指针，说明出现次数超过2次，不保留该值
  // 如果不是有序数组，可以考虑用map记录次数
  const n = nums.length;
  if (n <= 2) {
    return n;
  }
  let l = 2,
    r = 2;
  while (r < n) {
    const val = nums[r];
    if (nums[l - 2] !== val) {
      nums[l] = val;
      l++;
    }
    r++;
  }
  return l;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
