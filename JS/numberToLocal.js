// 数字转千分位

// number.toLocalString()的这个方法可以直接转
const num = 123456789.9;
num.toLocaleString(); // '123,456,789.9'

// 自己实现随意位数unitNum的转换，还可以改分隔符，这里默认就用','
function numberToLocal(n, unitNum = 3) {
  if (!n) return;
  const integer = Math.floor(n);

  const float = n.toString().split(".")[1];
  const integerStr = integer.toString();
  let end = integerStr.length;
  let start = end - unitNum;
  let newStr = "";
  while (end > 0) {
    const affix = end === integerStr.length ? "" : ",";
    newStr = `${integerStr.substring(start, end)}${affix}` + newStr;
    start -= unitNum;
    end -= unitNum;
    start < 0 && (start = 0);
  }
  return float ? `${newStr}.${float}` : newStr;
}

console.log(numberToLocal(45812465165.254, 3)); // 45,812,465,165.254
