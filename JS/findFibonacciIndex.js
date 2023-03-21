// 给一个数，判断该数是否是斐波那契数列里的一项，若是则返回第几项，若不是则返回-1

function findFibonacciIndex(num) {
  const fibonacci = [0, 1]; // 斐波那契数列开始数
  let a = 0, // 指针位置
    b = 1;

  while (num > fibonacci[b]) {
    fibonacci.push(fibonacci[a] + fibonacci[b]);
    a++;
    b++;
  }

  return num === fibonacci[b] ? b : -1;
}
const din = findFibonacciIndex(34);
console.log("index", din);
