# two sum

I used a **new Map()** statement, which holds key-value pairs and remembers the original insertion order of the keys, to solve this problem.

## How it works?

1. Creating the **new Map()** object.
```js
let map = new Map();
```

2. Iterate each element in **nums** array.
```js
for (let i = 0; i < nums.length; i++) {}
```

3. In each iteration check if required number (required number = target sum - current number) is present in the **map**.
4. If present, return {current number index, required number index} (the order does not matter) as  result.
5. Otherwise add the current iteration number as key and its index as value to the **map**. Repeat this until find the result.
```js
if (map.has(target - element)) {
	return [i, map.get(target - element)];
} else {
	map.set(element, i);
}
```

## Solution

```js
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
```
