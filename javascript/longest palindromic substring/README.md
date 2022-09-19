# longest palindromic substring

Using a **for** and **while** loops to solve this problem.

## How it works?

1. Creating a two points, which contains positions of substring.
```js
let l = 0, r = 0;
```

2. Creating a for loop to iterate the **s** string, and two variable here, called **left** and **right**, to use them in **while** loops.
```js
for (let i = 0; i < s.length; i++) {}
```

3. Creating the first **while** loop. If current element in string is the same as next one - we increase rigth variable.  
```js
while (s[left] === s[right+1]) right++;
```

4. Creating one more **while** loop, if previous element is the same as next element - we decrease the left variable and increase the rigth one.
```js
while (s[left-1] && s[left-1] === s[right+1]) {
	left--;
	right++;
}
```

5. Next one is if statement, where we change the variables **r, l** to the **rigth, left** ones.
```js
if (right-left > r-l) [r,l] = [right,left];
```

6. Returning the substring.
```js
return s.substring(l, r+1);
```

## Solution
```js
const longestPalindrome = function(s) {
	let l = 0, r = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i;
        while (s[left] === s[right+1]) right++;
        while (s[left-1] && s[left-1] === s[right+1]) {
            left--;
            right++;
        }
        if (right-left > r-l) [r,l] = [right,left];
    }
    
    return s.substring(l, r+1);
};
```