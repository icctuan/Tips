/** H 指数
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。
 * 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且每篇论文 至少 被引用 h 次。如果 h 有多种可能的值，h 指数 是其中最大的那个。
 * @param {number[]} citations
 * @return {number}
 */

// 说实话题目的含义更难点，关键是弄懂h指数的意义，至少发表h篇论文，每篇论文至少被引用h次，这个h是两个地方都要能用的。隐藏了一个 最大指数h不会超过发布的论文总篇数 这个条件。

var hIndex = function (citations) {
  citations.sort((a, b) => a - b); // 从小到大排列，因为准备从后往前遍历
  let n = 0,
    i = citations.length - 1;
  while (i >= 0 && citations[i] > n) {
    // 从后往前遍历
    if (citations[i] === 0) break; // 遇到0时，前面都是0了，直接结束
    n++; // 遇到当前引用数比
    i--;
  }
  return n;
};
hIndex([8, 0, 8, 8, 8]); // 4
hIndex([3, 0, 6, 1, 5]); // 3
