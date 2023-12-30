/**
 * 买卖股票的最佳时机 I + II
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * @param {number[]} prices
 * @return {number}
 */

// 1. 动态规划：
// 只有不持有股票时，利润最大

// 交易一次
var maxProfit1 = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map((item) => new Array(2).fill(0));
  dp[0][0] = 0; // 第一天不持有股票
  dp[0][1] = -prices[0]; // 第一天持有股票
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]); // 只交易一次，用 -当天交易值
  }
  return dp[n - 1][0];
};

// 交易多次
var maxProfit2 = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map((item) => new Array(2).fill(0));
  dp[0][0] = 0; // 第一天不持有股票
  dp[0][1] = -prices[0]; // 第一天持有股票
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); // 可交易多次，用前一天的现金 - 当天交易
  }
  return dp[n - 1][0];
};

// // 2. 暴力解法
// var maxProfit = function (prices) {
//   const n = prices.length;
//   let benefit = 0;
//   for (let i = 0; i < n - 1; i++) {
//     let start = prices[i],
//       after = prices.slice(i + 1),
//       max = Math.max(...after);
//     if (max - start > benefit) {
//       benefit = max - start;
//     }
//   }
//   return benefit;
// };

// 3. 找到前一半最大值，后一半最小值，相减

// 交易一次
// 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
console.log(maxProfit1([7, 1, 5, 3, 6, 4])); // 5

// 交易多次
// 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
// 总利润为 4 + 3 = 7 。
console.log(maxProfit2([7, 1, 5, 3, 6, 4])); // 7
