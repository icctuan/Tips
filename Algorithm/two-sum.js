/**
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 */

// 1. 暴力解法：
var twoSum = function (nums, target) {
  if (!nums || typeof target !== "number") return;
  let len = nums.length;
  for (let a = 0; a < len; a++) {
    for (let b = a + 1; b < len; b++) {
      if (nums[a] + nums[b] === target) {
        return [a, b];
      }
    }
  }
};

// 2.空间换时间，用 Map，Map查询的时间复杂度是O(1)
var twoSum2 = function (nums, target) {
  if (!nums || typeof target !== "number") return;
  const hasMap = new Map(),
    len = nums.length;
  for (let a = 0; a < len; a++) {
    const ele = nums[a];
    const rest = target - ele;
    if (hasMap.has(rest)) {
      return [hasMap.get(rest), a];
    } else {
      hasMap.set(ele, a);
    }
  }
};
