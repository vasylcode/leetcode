# remove element

Using default **for** loop to solve this problem.

## How it works?

1. Creating a variable to store the result.

```js
let count = 0;
```

2. Creating a **for** loop to iterate all the number in **nums** array.

```js
for (let i = 0; i < nums.length; i++) {}
```

3. Creating an **if** statement, if current number from array is not equal to value from **val** argument – adding to the array a current number and increasing a count varialbe by 1.

```js
if (nums[i] !== val) nums[count++] = nums[i];
```

4. Return the result.

```js
return count;
```

## Solution

```js
const removeElement = function (nums, val) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) nums[count++] = nums[i];
	}
	return count;
};
```
