# valid parentheses

Using a **reduce** method to solve this problem.

## How it works?
1. Creating a dictionary with different types of brackets.
```js
const dictionary = { ")": "(", "]": "[", "}": "{" };
```

2. Turning input string into array.
```js
const arr = s.split("");
```

3. Returning true/false statement, where we are comparing two values and returning the results.
```js
return !arr.reduce((acc, curr) => {
	if (dictionary[curr] === acc[acc.length - 1] && acc) {
		return acc.slice(0, -1);
	}
	return acc + curr;
});
```

## Solution

```js
const isValid = function(s) {
    const dictionary = { ")": "(", "]": "[", "}": "{" };
    const arr = s.split("");

    return !arr.reduce((acc, curr) => {
        if (dictionary[curr] === acc[acc.length - 1] && acc) {
			return acc.slice(0, -1);
        }
        return acc + curr;
    });
};
```
