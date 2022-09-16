/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length === 0 && nums2.length === 0) return 0;
    
    let nums = (nums1.concat(nums2)).sort((a, b) => (a - b)),
        half = Math.floor(nums.length / 2);
    
    return ( (nums.length % 2) ? nums[half] : ((nums[half - 1] + nums[half]) / 2) ); 
};