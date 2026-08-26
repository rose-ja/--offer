/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let map = new Map();
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    map.set(ch, (map.get(ch) ?? 0) + 1);

    while (map.get(ch) > 1) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

console.log(lengthOfLongestSubstring('abba'));
console.log(lengthOfLongestSubstring('pwwkew'));
