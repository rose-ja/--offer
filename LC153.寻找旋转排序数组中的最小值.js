/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const mid = (l + r) >> 1;
    if (nums[mid] > nums[r]) l = mid + 1; // mid 在左段 → 丢左段
    else r = mid; // mid 在右段 → 丢右段后半
  }
  return nums[l];
};
