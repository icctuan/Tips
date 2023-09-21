/** 定义链表 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 链表相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0,
    head = null,
    tail = null;
  while (l1 || l2) {
    const n1 = l1?.val || 0;
    const n2 = l2?.val || 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }

    carry = Math.floor(sum / 10);

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([0], [0]);

/**
 * 数组相加，用Map记录，从第一位开始，大于10，向第二位进1位
 * */
var addTwoArrayNumbers = function (l1, l2) {
  const nodeMap = new Map();
  let index = 0;
  while (l1.length || l2.length) {
    let n1 = l1.shift() || 0,
      n2 = l2.shift() || 0;
    const total = nodeMap.has(index) ? nodeMap.get(index) + n1 + n2 : n1 + n2;
    if (total >= 10) {
      nodeMap.set(index, total % 10);
      nodeMap.set(index + 1, Math.floor(total / 10)); // 下一位进位
    } else {
      nodeMap.set(index, total);
    }
    index += 1;
  }
  console.log(Array.from(nodeMap.values()));
};

addTwoArrayNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
addTwoArrayNumbers([2, 4, 3], [5, 6, 4]);
addTwoArrayNumbers([0], [0]);
