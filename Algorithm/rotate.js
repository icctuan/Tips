/**
 * 轮转数组
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * @param {number[]} nums
 * @param {number} k
 */
// 1. 遍历一次到了开头时的数组会有问题，这个方法还不完善
var rotate = function (nums, k) {
  let total = 0,
    i = 0;
  n = nums[0];

  while (total < nums.length) {
    let r = i + k;
    i = r >= nums.length ? r - nums.length : r;
    let a = nums[i];
    nums[i] = n;
    n = a;
    total++;
  }
};
rotate([1, 2, 3, 4, 5, 6, 7], 2);

// 2. 截取会轮转到前半部分的元素直接拼接
var rotate = function (nums, k) {
  const n = nums.length;
  k %= n;
  const start = n - k,
    back = nums.slice(start),
    fore = nums.slice(0, start),
    newArr = [...back, ...fore];
  for (let i = 0; i < n; ++i) {
    nums[i] = newArr[i];
  }
};

// 3. 翻转数组：
const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k %= nums.length; // 排除轮转多次
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
