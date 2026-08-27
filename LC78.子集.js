/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const results = [];
  const path = [];

  function backtrack(index) {
    if (index === nums.length) {
      results.push([...path]);
      return;
    }

    backtrack(index + 1);

    path.push(nums[index]);
    backtrack(index + 1);
    path.pop();
  }

  backtrack(0);
  return results;
};

console.log(subsets([1, 2, 3]));
// [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
console.log(subsets([0])); // [[], [0]]
console.log(subsets([])); // [[]]
console.log(subsets([1, 1])); // []：LC78 的输入不允许重复数字
