/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.codePointAt(i) - 'a'.codePointAt(0)]++;
  }
  for (let i = 0; i < s.length; i++) {
    arr[t.codePointAt(i) - 'a'.codePointAt(0)]--;
    if (arr[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) return false;
  }
  return true;
};
