/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  let firstNode = head,
    secondNode = firstNode.next,
    thirdNode = secondNode.next;

  secondNode.next = firstNode;
  firstNode.next = swapPairs(thirdNode);

  return secondNode;
};
