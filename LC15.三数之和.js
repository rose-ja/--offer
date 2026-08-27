/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
    if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] < 0) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([])); // []
