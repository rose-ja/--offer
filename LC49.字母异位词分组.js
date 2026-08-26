/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const s = Array.from(str).sort().join('');
    if (!map.has(s)) {
      map.set(s, []);
    }
    map.get(s).push(str);
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([''])); // [[""]]
console.log(groupAnagrams(['a'])); // [["a"]]
console.log(groupAnagrams([])); // []
