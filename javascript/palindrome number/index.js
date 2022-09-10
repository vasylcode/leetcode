/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let y = x.toString().split('').reverse().join('');
    return x == y;
};