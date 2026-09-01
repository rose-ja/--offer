/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let farth = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farth) return false;
    farth = Math.max(farth, i + nums[i]);
    if (farth >= nums.length - 1) return true;
  }
};
