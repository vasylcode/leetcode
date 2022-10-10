# rotate image

Using two **for** loops to solve this problem.

## How it works?

1. Creating a two **for** loops to iterate the matrix.

```js
for (let i = matrix.length - 1; i >= 0; i--) {
	for (let j = 0; j < matrix.length; j++) {}
}
```

2. Replacing current matrix value and removing the first one, using **shift()**.

```js
matrix[j].push(matrix[i][0]);
matrix[i].shift();
```

3. Return the result.

```js
return matrix;
```

## Solution

```js
const rotate = function (matrix) {
	for (let i = matrix.length - 1; i >= 0; i--) {
		for (let j = 0; j < matrix.length; j++) {
			matrix[j].push(matrix[i][0]);
			matrix[i].shift();
		}
	}
	return matrix;
};
```
