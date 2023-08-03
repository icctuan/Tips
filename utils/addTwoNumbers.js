// 数组相加
var addTwoNumbers = function (l1, l2) {
  const new1 = new Map();
  const [min, max] = l1.length > l2.length ? [l2, l1] : [l1, l2];
  for (let i = 0; i < max.length; i++) {
    const all = min[i] ? max[i] + min[i] : max[i];
    const total = new1.has(i) ? new1.get(i) + all : all;
    if (total >= 10) {
      new1.set(i, total % 10);
      new1.set(i + 1, 1);
    } else {
      new1.set(i, total);
    }
  }
  console.log(Array.from(new1.values()));
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([0], [0]);


// 链表相加
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var _addTwoNumbers = function (l1, l2) {
  const initNum = l1.val + l2.val;
  const curNum = initNum % 10;
  let result = new ListNode(curNum);
  let cur = result; // 这一步很关键，不能直接用result，无法构成链表
  let curl1 = l1.next;
  let curl2 = l2.next;
  let nextNum = Math.floor(initNum / 10);
  while (curl1 || curl2 || nextNum) {
    const n1 = curl1 ? curl1.val : 0;
    const n2 = curl2 ? curl2.val : 0;
    const sum = n1 + n2 + nextNum;
    nextNum = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);

    cur = cur.next;
    curl1 = curl1 ? curl1.next : curl1;
    curl2 = curl2 ? curl2.next : curl2;
  }
  return result;
};

_addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
_addTwoNumbers([2, 4, 3], [5, 6, 4]);
_addTwoNumbers([0], [0]);
