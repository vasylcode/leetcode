# longest substring without repeating characters

I used a **new Map()** statement, which holds key-value pairs and start & end points.

## How it works?

1. Creating a map to store the last positions and starting the initial point of window to index 0.
```js
let map = new Map();
let maxLength = 0, start = 0;
```

2. Creating a **for** loop with end point.
```js
for (let end = 0; end < s.length; end++) {}
```

3. Checking, if the current character at end index is present in the map, and if true – it means that the current character is a duplicate, so we update the start index and the result **maxLength** variable.
```js
if (map.has(s[end])) start = Math.max(start, map.get(s[end]) + 1);
map.set(s[end], end);
maxLength = Math.max(maxLength, end - start + 1);
```

6. Return the result.
```js
return maxLength;
```

## Solution

```js
const lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let maxLength = 0, start = 0;
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) start = Math.max(start, map.get(s[end]) + 1);
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};
```
