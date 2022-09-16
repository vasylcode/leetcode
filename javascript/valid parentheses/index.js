/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const dictionary = { ")": "(", "]": "[", "}": "{" };
    const arr = s.split("");

    return !arr.reduce((acc, curr) => {
        if (dictionary[curr] === acc[acc.length - 1] && acc) {
          return acc.slice(0, -1)
        }
        return acc + curr;
    })
};