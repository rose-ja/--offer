/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let len = Number.POSITIVE_INFINITY;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      len = Math.min(len, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return len === Number.POSITIVE_INFINITY ? 0 : len;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
console.log(minSubArrayLen(7, [])); // 0