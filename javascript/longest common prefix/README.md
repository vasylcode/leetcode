# longest common prefix

Using an **every()** and **startsWith** methods to solve this problem.

## How it works?
1. Creating variables for result **prefix** and **first** for first word from array.
```js
let prefix = "";
let first = strs[0];
```

2. Creating **for** loop to iterate all the letters of first word and then to compare them.
```js
for (let i = 1; i <= first.length; i++) {}
```

3. In loop defining the variable called **checkedPrefix**, which contains sliced prefix from first word.
```js
let checkedPrefix = first.slice(0, i);
```

4. Creating an **if** statement, to compare other words with checkedPrefix.
```js
if (strs.every((first) => first.startsWith(checkedPrefix))) {}
```

5. If true – add new value to result **prefix** variable.
```js
prefix = checkedPrefix;
```

## Solution

```js
const longestCommonPrefix = function(strs) {
    let prefix = "";
    let first = strs[0];
    for (let i = 1; i <= first.length; i++) {
        let checkedPrefix = first.slice(0, i);
        if (strs.every((first) => first.startsWith(checkedPrefix))) {
            prefix = checkedPrefix;
        }
    }
    return prefix;
};
```