/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let maxLength = 0, start = 0;
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) start = Math.max(start, map.get(s[end]) + 1);
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};