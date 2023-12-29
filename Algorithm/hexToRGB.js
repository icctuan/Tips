const hexToRGB = (str) => {
  const regexp = /(^\#([a-fA-F0-9]{3})$)|(^\#([a-fA-F0-9]{6})$)/g;
  const isHex = regexp.test(str);
  if (!isHex) return null;
  const hex = str.slice(1);
  // 兼容3位数格式，还原为6位数
  const hexStr =
    hex.length === 6
      ? hex
      : hex[0].repeat(2) + hex[1].repeat(2) + hex[2].repeat(2);
  const hexStrArr = hexStr.split("");
  // 字符对应的数字位数
  const allNumberStr = "0123456789abcdef";
  // 输入的16进制每个字符对应的index数值
  const hexStrArrIndex = hexStrArr.map((item) => {
    return allNumberStr.indexOf((item + "").toLowerCase()); // 找到字符对应的数字位数，数字自动转字符，大写字符自动转换小写
  });

  // 固定公式计算
  const num1 = hexStrArrIndex[0] * 16 + hexStrArrIndex[1];
  const num2 = hexStrArrIndex[2] * 16 + hexStrArrIndex[3];
  const num3 = hexStrArrIndex[4] * 16 + hexStrArrIndex[5];

  return `rgb(${num1}, ${num2}, ${num3})`;
};

console.log(hexToRGB("#DC143C"));
