/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const curr = [];
  const isUsed = new Array(nums.length).fill(false);

  // 判断这个数字是否已经在数组中，不在就加入，在就不加入，一次递归结束后把当前数字弹出
  function dfs() {
    if (curr.length === nums.length) {
      result.push([...curr]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (isUsed[i]) continue;

      curr.push(nums[i]);
      isUsed[i] = true;

      dfs();

      curr.pop();
      isUsed[i] = false;
    }
  }
  dfs();

  return result;
};
