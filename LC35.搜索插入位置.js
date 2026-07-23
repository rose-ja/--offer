/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length;

  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
