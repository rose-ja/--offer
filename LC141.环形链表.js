function ListNode(value, next = null) {
  this.val = value;
  this.next = next;
}

/**
 * 判断单链表是否存在环。
 *
 * @param {ListNode | null} head
 * @returns {boolean}
 */
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

function arrayToList(values, cycleEntryIndex = -1) {
  if (!Array.isArray(values) || values.length === 0) {
    return null;
  }

  const nodes = values.map((value) => new ListNode(value));
  for (let index = 0; index < nodes.length - 1; index += 1) {
    nodes[index].next = nodes[index + 1];
  }

  if (
    Number.isInteger(cycleEntryIndex) &&
    cycleEntryIndex >= 0 &&
    cycleEntryIndex < nodes.length
  ) {
    nodes[nodes.length - 1].next = nodes[cycleEntryIndex];
  }

  return nodes[0];
}

console.log(hasCycle(arrayToList([3, 2, 0, -4], 1))); // true
console.log(hasCycle(arrayToList([1, 2], 0))); // true
console.log(hasCycle(arrayToList([1]))); // false
console.log(hasCycle(null)); // false
console.log(hasCycle(arrayToList([1, 1]))); // false，值相同不代表节点相同
