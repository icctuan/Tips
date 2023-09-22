/** 移除元素
 * 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 元素顺序可变，不需要考虑超过数组新长度之后的元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 思路：两个指针左头右尾，当左指针等于val，就把右指针的值赋值到左指针继续检查该值，右指针向中间移动
  // 当右指针等于val，向中间移动右指针
  // 否则，左指针不等于val，向中间移动左指针
  // 当两个指针移动到中间时，结束遍历
  // 最后左指针之前的值都是非val的值，因此返回左指针。
  let l = 0,
    r = nums.length;
  while (l < r) {
    if (nums[l] === val) {
      nums[l] = nums[r - 1];
      r--;
    } else if (nums[r - 1] === val) {
      r--;
    } else {
      l++;
    }
  }
  return l;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
