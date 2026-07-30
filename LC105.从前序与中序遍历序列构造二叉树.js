/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const n = preorder.length;
  const index = new Map();
  for (let i = 0; i < n; i++) {
    index.set(inorder[i], i);
  }

  // 根据 preorder 的子数组 [preL,preR) 和 inorder 的子数组 [inL,inR) 生成二叉树，其中 inR 没用到，可以省略
  function dfs(preL, preR, inL) {
    if (preL === preR) {
      // 空节点
      return null;
    }
    const leftSize = index.get(preorder[preL]) - inL; // 左子树的大小
    const left = dfs(preL + 1, preL + 1 + leftSize, inL);
    const right = dfs(preL + 1 + leftSize, preR, inL + 1 + leftSize);
    return new TreeNode(preorder[preL], left, right);
  }

  return dfs(0, n, 0); // 左闭右开区间
};
