/**
 * 多数元素
 * 给定一个大小为 n 的数组 nums，返回在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * @param {number[]} nums
 * @returns {number}
 */
var majorityElement = function (nums) {
  // 思路：排序，既然出现次数大于 n / 2 ，那么排序之后的中间元素就是出现次数大于n / 2的数
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// 方法二：摩尔投票法，维护候选众数majority，当遍历的值与众数不等，count-1,当count === 0，将当前值作为候选众数。
// 空间复杂度O(1), 时间复杂度O(n)
var majorityElement2 = (nums) => {
  let count = 1;
  // 将第一个数赋予 majority
  let majority = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }

    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};
