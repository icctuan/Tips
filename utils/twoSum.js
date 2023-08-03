// 找出一个数组中两个元素相加 等于target 的 元素的index

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const searchNums = nums.slice(i + 1);
    const another = searchNums.findIndex((o) => o + nums[i] === target);
    if (another !== -1) {
      return [i, another + i + 1];
    }
  }
};


var _twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 17));
