/**
 * 防抖: 触发高频事件 n 秒后再执行，如果 n 秒内高频事件再次触发，则 重置 执行的等待时间（因此下一次执行的时间可能超过n秒）
 *
 * 思路：第一次触发延时执行。在等待执行的过程中，每次触发新的事件时都清除之前的定时器，重新计时
 *
 */

function debounce(fn) {
  let timeout = null; // 定时器
  return () => {
    clearTimeout(timeout); // 清除定时器
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
