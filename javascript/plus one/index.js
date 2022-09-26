/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const arr = [...(BigInt(digits.join("")) + BigInt(1)).toString()];
  return arr.map(Number);
};