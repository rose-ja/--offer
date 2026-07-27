/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = [];

  for (let i = n - 1; i >= 0; i--) {
    let max1 = nums[left] * nums[left];
    let max2 = nums[right] * nums[right];

    if (max1 > max2) {
      ans[i] = max1;
      left++;
    } else {
      ans[i] = max2;
      right--;
    }
  }

  return ans;
};
