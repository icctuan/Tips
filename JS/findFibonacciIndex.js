// 给一个数，判断该数是否是斐波那契数列里的一项，若是则返回第几项，若不是则返回-1
function findFibonacciIndex(num) {
  const fibonacci = [1, 1];
  let a = 0,
    b = 1;

    while(num)
  function Loop(num) {
    const c = fibonacci[a] + fibonacci[b];
    fibonacci.push(c);
    a++;
    b++;
    if (c === num) {
      console.log("final", b);
      return b;
    } else if (num < c) {
      return -1;
    } else {
      Loop(num);
    }
  }
  return Loop;
}
const din = findFibonacciIndex();
const a = din(5);
console.log(a);
// const a = findFibonacciIndex(5)

// console.log(a);
