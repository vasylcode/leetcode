# palindrome number

It works by using the JavaScript string methods, called **split**, **reverse** and **join**.

## Solution

```js
const isPalindrome = function(x) {
    let y = x.toString().split('').reverse().join('');
    return x == y;
};
```
