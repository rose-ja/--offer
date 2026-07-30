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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = -Infinity;
  function dfs(node) {
    if (node === null) return true;
    if (!dfs(node.left)) return false;
    if (node.val <= pre) return false;
    pre = node.val;
    return dfs(node.right);
  }
  return dfs(root);
};
