# roman to integer

Using default **for** loop to solve this problem.

## How it works?

1. Define variables: first to store roman numeral system in key:value, second for result.
```js
let result = 0;
let roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
```

2. Create a **for** loop to iterate incoming string values.
```js
for (let i = 0; i < s.length; i++) {}
```

3. Create **if** statement, which checks if current symbol from incoming string is less than the next symbol.
```js
if (roman[s[i]] < roman[s[i + 1]]) {}
```

4. If statement is **true**, add the difference of subtraction next symbol and current symbol to the **result** variable, then move 2 symbols to the right skipping next iteration.
```js
result += (roman[s[i + 1]] - roman[s[i]]);
i++;
```

5. If it’s **false** – just add current symbol value.
```js
result += roman[s[i]];
```
6. Return the result.
```js
return result;
```

## Solution

```js
const romanToInt = function(s) {
    let result = 0;
    let roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            result += (roman[s[i + 1]] - roman[s[i]]);
            i++;
        } else {
            result += roman[s[i]];
        }
    }
    return result;
};
```
