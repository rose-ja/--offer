/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  function dfs(node) {
    if (node === null) return -1;
    const res = dfs(node.left);
    if (res !== -1) return res;
    if (--k === 0) return node.val;
    return dfs(node.right);
  }
  return dfs(root);
};
