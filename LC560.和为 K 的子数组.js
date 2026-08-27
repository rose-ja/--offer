/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let need = sum - k;
    if (map.has(need)) {
      ans += map.get(need);
    }
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }

  return ans;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, -1, 0], 0)); // 3
console.log(subarraySum([3], 3)); // 1
