/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const arr1 = new Array(26).fill(0);
  for (let ch of p) {
    arr1[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }

  let left = 0;
  let ans = [];
  const arr2 = new Array(26).fill(0);
  for (let right = 0; right < s.length; right++) {
    arr2[s[right].charCodeAt() - 'a'.charCodeAt()]++;
    left = right - p.length + 1;
    if (left < 0) continue;
    if (isEqual(arr1, arr2)) ans.push(left);
    arr2[s[left].charCodeAt() - 'a'.charCodeAt()]--;
  }

  return ans;
};

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
