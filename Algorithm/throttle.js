/**
 *
 * 节流：高频事件触发，n 秒内只执行一次，n秒内再次触发不会响应
 *
 * 思路：每次触发高频事件都判断当前是否有正在执行的延时函数，如果有，则本次触发不会被响应，直到 n 秒后开放一次执行机会
 *
 */

function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    // 在函数开头判断标记是否为true
    if (!canRun) {
      return;
    }

    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      // 在setTimeout计时结束，执行函数时，把canRun标记设置为true(关键)，表示可以执行下一次循环了。
      // 当定时器没有执行的时候，canRun标记永远是false，在函数if判断的地方被return跳过执行
      canRun = true;
    }, 500);
  };
}
