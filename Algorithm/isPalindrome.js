// 判断回文数字

// 1. 转字符串，会需要多出额外的空间创建字符串，但前端反而是这种方式更快
var isPalindrome = function (x) {
  // 排除 不是数字、是负数 的临界情况， 以及 个位是0的数字（最高位无法是0）
  if (typeof x !== "number" || x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let palindrome = [...x.toString()].reverse().join("");
  if (Number(palindrome) === x) return true;
  return false;
};

// 2. 不转字符串 通过 取余和小数 相加 计算出后半部分数字
var isPalindrome2 = function (x) {
  // 排除 不是数字、是负数 的临界情况， 以及 个位是0的数字（最高位无法是0）
  if (typeof x !== "number" || x < 0 || (x % 10 === 0 && x !== 0)) return false;

  // 当原始数字 小于或等于 反转后的数字，说明已经获取到一半位数的数字了
  let reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // 偶数 || 奇数(需要去掉一位) 的对比
  return x === reverseNum || x === Math.floor(reverseNum / 10);
};

console.log(isPalindrome2(11));
