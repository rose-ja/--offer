/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const arr = [];

    if (nums.length < 3) return arr;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] < 0) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;

        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0){
                arr.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } 
            else if (sum < 0) l++;
            else r--;
        }
    }
    return arr;
};