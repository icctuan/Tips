// 给一个字符串，循环输出每一个字符，当输出到最后一个字符时再从头开始
// 用了闭包

function LoopString(s) {
  let i = 0;
  const strArr = Array.from(s);
  return function () {
    const res = strArr[i];
    i === strArr.length - 1 ? (i = 0) : i++;
    return res;
  };
}
const bar = LoopString("bar");
console.log(bar(), bar(), bar(), bar(), bar()); // 'b', 'a', 'r', 'b', 'a'
