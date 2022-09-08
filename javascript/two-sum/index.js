/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (map.has(target - element)) {
            return [i, map.get(target - element)];
        } else {
            map.set(element, i);
        }
    }
};