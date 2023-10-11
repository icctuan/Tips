/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * @param {number[]} nums
 * @return {number[]}
 */
// 1. 暴力解法O(n²)
var productExceptSelf = function (nums) {
  return nums.map((item, index) => {
    let answer = 1;
    for (let i = 0; i < nums.length; i++) {
      if (i === index) continue;
      answer *= item;
    }
    return answer;
  });
};

// 2. 时间O(n)，空间O(1)
var productExceptSelf = function (nums) {
  const res = [];

  res[0] = 1; // 第一次遍历从左边开始，开始位置没有数，所以设置为1
  for (let i = 1; i < nums.length; i++) {
    // 每个位置等于 当前位置前1位 与 之前的乘积数 的乘积
    res[i] = nums[i - 1] * res[i - 1];
  }

  let right = 1; // 第二次遍历从右边开始，开始位置没有数，所以设置为1，用该值来记录当前的右侧乘积数
  for (let j = nums.length - 1; j >= 0; j--) {
    // 每个位置等于 右侧乘积和 * 左侧综合乘积和（从数组中取）
    res[j] = right * res[j];
    // 更新下一个位置的右侧乘积和
    right = right * nums[j];
  }
  return res;
};

// 3. 时间 O(n), 空间O(n)
// 遍历一次得到正反乘积，再通过两个数组互乘得到结果
var productExceptSelf = function (nums) {
  const n = nums.length;
  const lp = [nums[0]];
  const rp = [nums[n - 1]];
  for (let i = 1; i < n - 1; i++) {
    lp[i] = nums[i] * lp[i - 1]; // 计算了正着乘的数组乘积和
    rp[i] = nums[n - i - 1] * rp[i - 1]; // 计算了倒着乘的数组乘积和
  }

  // 开始替换nums
  nums[0] = rp[n - 2]; // 倒着乘的倒数第二位
  nums[n - 1] = lp[n - 2]; // 正着乘的倒数第二位
  for (let i = 1; i < n - 1; i++) {
    nums[i] = lp[i - 1] * rp[n - 2 - i];
  }
  return nums;
};
productExceptSelf([3, 1, 2, 5]);
// 正着乘lp [3, 3, 6, 30]
// 倒着乘rp [5, 10, 10, 30]
// nums [10, 3*10, 3*5, 6]
