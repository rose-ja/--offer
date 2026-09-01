/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const step = k % nums.length;
  function reverseRange(left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  reverseRange(0, nums.length - 1);
  reverseRange(0, step - 1);
  reverseRange(step, nums.length - 1);

  return nums;
};
