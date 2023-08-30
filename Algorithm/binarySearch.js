/**
 * 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;

function binarySearch(nums, target) {
  const min = 0;
  max = nums.length - 1;
  mid = Math.ceil(max / 2);

  while (min < max) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    mid = Math.ceil((max - min) / 2);
  }

  return -1;
}
