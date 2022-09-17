/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
	let l = 0, r = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i;
        while (s[left] === s[right+1]) right++;
        while (s[left-1] && s[left-1] === s[right+1]) {
            left--;
            right++;
        }
        if (right-left > r-l) [r,l] = [right,left]
    }
    
    return s.substring(l,r+1);
};