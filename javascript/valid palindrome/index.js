/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let letters = s.replace(/[^0-9a-zA-Z]/g,"");
    let lowercase = letters.toLowerCase();
    return lowercase == lowercase.split("").reverse().join("");
};