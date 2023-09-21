/**
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 1. 简单的直接整个数组排列
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};

// 3. 因为nums1已经是完整的数组了，从最后一位开始重写整个数组，
//    3个指针分别代表的是n1数组从后往前，n2数组从后往前，新数组从后往前
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    p = m + n - 1; // 都从最后一位开始
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
