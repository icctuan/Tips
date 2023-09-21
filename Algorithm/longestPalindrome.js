/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = (s) => {
  /**
   * 思路：
   * 1. 回文子串，当字符串长度 < 2，直接返回字符串
   * 2. 创建一个基于当前字符位置，传入左右指针，各自移动对比字符的helper函数
   * 3. 遍历字符串，每一个字符都调用该遍历函数(假设该回文子串是偶数，左右指针为i,i+1; 假设是奇数，左右指针都从i开始)，记录最长的回文子串，与之前的最长相比，更新子串。
   */
  if (s.length < 2) {
    return s;
  }

  let right = 0,
    left = 0; // 记录左右指针

  function helper(l, r) {
    // 当左右字符相同时，继续向两边移动对比
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }

    // 记录更长的相同字符的左右指针位置
    if (r - l > right - left) {
      right = r;
      left = l;
    }
  }

  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  // 这里是left + 1 ，因为while里的内容执行一次位移之后再进行下一次判断，记录的是第一次出现不同字符的位置，因此相当于回退到上一次
  return s.slice(left + 1, right);
};

longestPalindrome("babad");
longestPalindrome("cbbd");
