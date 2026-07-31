/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const curr = [];

  function dfs(index, target) {
    if (target === 0) {
      result.push([...curr]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[index] > target) break;
      curr.push(candidates[i]);
      dfs(i, target - candidates[i]);
      curr.pop();
    }
  }
  dfs(0, target);

  return result;
};
