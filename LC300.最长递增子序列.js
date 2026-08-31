/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const length = Array.from({ length: nums.length }).fill(1);
  let long = 0;

  for (let curr = 0; curr < nums.length; curr++) {
    for (let prev = 0; prev < curr; prev++) {
      if (nums[prev] >= nums[curr]) continue;

      length[curr] = Math.max(length[prev] + 1, length[curr]);
    }
    long = Math.max(long, length[curr]);
  }

  return long;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([3, 1, 2, 5, 4])); // 3
console.log(lengthOfLIS([7, 7, 7])); // 1
