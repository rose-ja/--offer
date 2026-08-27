/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const results = [];
  const used = new Array(nums.length).fill(false);
  const path = [];
  function backtrack() {
    if (path.length === nums.length) {
      results.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;

      backtrack();

      path.pop();
      used[i] = false;
    }
  }

  backtrack();
  return results;
};

console.log(permute([1, 2, 3]));
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(permute([7])); // [[7]]
console.log(permute([])); // [[]]
