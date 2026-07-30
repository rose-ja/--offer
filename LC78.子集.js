/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [],
    path = [];

  // 一条分支“选它”，另一条分支“不选它”
  function dfs(index) {
    if (index === nums.length) {
      result.push([...path]);
      return;
    }

    path.push(nums[index]);
    dfs(index + 1);
    path.pop();

    dfs(index + 1);
  }
  dfs(0);

  return result;
};
