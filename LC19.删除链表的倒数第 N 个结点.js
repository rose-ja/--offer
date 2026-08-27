function ListNode(value, next = null) {
  this.val = value;
  this.next = next;
}

/**
 * 删除倒数第 n 个节点。
 * n 不合法时返回原链表；LeetCode 题目通常保证 n 合法。
 *
 * @param {ListNode | null} head
 * @param {number} n
 * @returns {ListNode | null}
 */
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  // fast 先走 n 步，建立它与 slow 的固定间距。
  for (let step = 0; step < n; step += 1) {
    if (fast.next === null) {
      return head;
    }
    fast = fast.next;
  }

  // fast 到最后一个真实节点时，slow 位于待删节点的前一个节点。
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}

function arrayToList(values) {
  const dummy = new ListNode(0);
  let tail = dummy;

  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const values = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
}

console.log(listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 2)));
// [1, 2, 3, 5]
console.log(listToArray(removeNthFromEnd(arrayToList([1]), 1))); // []
console.log(listToArray(removeNthFromEnd(arrayToList([1, 2]), 2))); // [2]
console.log(listToArray(removeNthFromEnd(arrayToList([1, 2]), 3))); // [1, 2]
