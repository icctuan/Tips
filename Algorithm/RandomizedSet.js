/**
 *  O(1) 时间插入、删除和获取随机元素
 *
 */

// 实现本身比较简单，但是要控制复杂度为O(1)的话需要用hash表
var RandomizedSet = function () {
  this.nums = [];
  this.indices = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const isExist = this.indices.has(val);
  if (isExist) {
    return false;
  }
  this.indices.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // 移除的时候会麻烦点，为了不改变其他元素的位置，把最后一个元素移到要删除的元素处
  const isExist = this.indices.has(val);
  if (!isExist) {
    return false;
  }
  const delIndex = this.indices.get(val);
  const last = this.nums[this.nums.length - 1];
  this.nums[delIndex] = last;
  this.indices.set(last, delIndex);
  this.nums.pop();
  this.indices.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.trunc(this.nums.length * Math.random()); // 取整和floor、ceil都可以
  return this.nums[random];
};

var obj = new RandomizedSet();
var param_1 = obj.insert(3);
var param_2 = obj.remove(2);
var param_3 = obj.getRandom();
console.log(obj, param_1, param_2, param_3);
