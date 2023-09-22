/**
 *  删除有序数组中的重复项
 *  原地 删除重复出现的元素
 * @orm
 */
var removeDuplicates = function (nums) {
  let l = 0,
    r = 0;
  let mapVal = new Map();
  while (r < nums.length) {
    const item = nums[r];
    if (!mapVal.get(item)) {
      mapVal.set(item, 1);
      nums[l] = item;
      l++;
    }
    r++;
  }
  return l; // 注意是l，因为本身每次遍历最后就+1了
};

removeDuplicates([1, 1, 2]);
