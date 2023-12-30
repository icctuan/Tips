/**
 * 跳跃游戏 I
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  let cover = nums[0],
    end = nums.length - 1;

  for (let i = 0; i < cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length) {
      return true;
    }
  }

  return false;
  while (cover < end) {
    if (nums[cover] === 0) return false;
    cover += nums[cover];
  }
  return cover >= end;
};
console.log(canJump([2, 3, 1, 1, 4])); // true
// 可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

console.log(canJump([3, 2, 1, 0, 4])); // false
// 无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
