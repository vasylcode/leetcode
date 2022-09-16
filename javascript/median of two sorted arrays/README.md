# median of two sorted arrays

I used a **concat()** method to unite arrays, and then counting the median value.

## How it works?
1. Firstly, checking if our arrays are equal to zero, if true – return false.
```js
if (nums1.length === 0 && nums2.length === 0) return 0;
```

2. Next combining two arrays using **concat()** method and sorting them using **sort()** method. Variable **nums** is our array for further work.
```js
let nums = (nums1.concat(nums2)).sort((a, b) => (a - b));
```

3. Also creating a **half** variable, which contains our median value index.
```js
let half = Math.floor(nums.length / 2);
```
 
4. Return the result, using ternary operator, where we are checking if our **nums** length has an odd number, it returns 1, which means true and we return a **nums[half]** the middle position value. For example: an odd number array [ 1, 2, 3, 10, 20 ], we got here 5 positions, so middle one is equal to 3 and modulo is equal to 1, so we return middle position, which is equal to 3. Otherwise, if we get modulo equals to 0 (means false and even number) we adding two middle positions and divide them by two. Example: an even number array [ 1, 2, 3, 10, 20, 50 ], we got here 6 positions, the middle ones is 3 and 10, modulo is equal to 0 so we add them and divide by two, then return the value. (3 + 10) / 2 = 6.5.
```js
return ( (nums.length % 2) ? nums[half] : ((nums[half - 1] + nums[half]) / 2) ); 
```

## Solution

```js
const findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length === 0 && nums2.length === 0) return 0;
    
    let nums = (nums1.concat(nums2)).sort((a, b) => (a - b)),
	half = Math.floor(nums.length / 2);
    
    return ( (nums.length % 2) ? nums[half] : ((nums[half - 1] + nums[half]) / 2) ); 
};
```
