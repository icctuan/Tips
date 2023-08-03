// 不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标。

// 创建100个空字符串的数组
const c = new Array(100).toString().split(",");
const b = new Array(100).join(",").split(",");

const newArr = c.map((item, index) => index);

console.log(newArr);

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const d = a.slice(0, 10).reduce((prev, n) => prev + n, 0);
console.log(d);
