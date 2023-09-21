/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */

// 主要的思路是：
// 使用左指针记录开始位置，遍历的同时把不同的字符的index存到Map对象中;
// 每次遇到已存在Map对象里的字符时，更新该字符的index，并移动左指针到该字符的下一位重新计算长度
let lengthOfLongestSubstring = function (s) {
  let maxLen = 0,
    left = 0,
    strArr = s.split(""),
    strMap = new Map();
  strArr.forEach((item, index) => {
    if (strMap.has(item) && strMap.get(item) >= left) {
      left = strMap.get(item) + 1;
    }
    strMap.set(item, index);
    maxLen = Math.max(maxLen, index - left + 1);
  });

  return maxLen;
};
