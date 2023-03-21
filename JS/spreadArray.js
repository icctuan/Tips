// 多维数组转一维数组
const arr = [1, [[4, 5, 6], 2, [[[7, 8, 9]]], 3]];

function spreadArray(n) {
  const xArray = [];

  function mapArray(o) {
    o.forEach((item) => {
      if (Array.isArray(item)) {
        mapArray(item);
      } else {
        xArray.push(item);
      }
    });
  }
  mapArray(n);
  return xArray;
}

console.log(spreadArray(arr));
