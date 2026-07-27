/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const len = p.length;
  const arrP = new Array(26).fill(0);
  for (const c of p) {
    arrP[c.charCodeAt() - 'a'.charCodeAt()]++;
  }

  const arrS = new Array(26).fill(0);
  const arr = [];
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    arrS[s[right].charCodeAt() - 'a'.charCodeAt()]++;
    left = right + 1 - len;
    if (left < 0) continue;
    if (_.isEqual(arrP, arrS)) arr.push(left);
    arrS[s[left].charCodeAt() - 'a'.charCodeAt()]--;
  }

  return arr;
};
