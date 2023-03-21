// 实现链式的加减乘除，计算器
// 用了class，每次调用方法后返回this继续使用实例

function myCalculator(n) {
  class Calculator {
    constructor(val) {
      this.value = val;
    }
    add(o) {
      this.value += o;
      return this;
    }
    minus(o) {
      this.value -= o;
      return this;
    }
    multi(o) {
      this.value = this.value * o;
      return this;
    }
    div(o) {
      this.value = this.value / o;
      return this;
    }
    getValue() {
      return this.value;
    }
  }
  return new Calculator(n);
}

console.log(
  myCalculator(1).add(12).minus(3).multi(10).div(5).getValue(), // 20
  myCalculator(121).add(1).getValue() // 122
);
