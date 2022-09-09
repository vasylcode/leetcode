# add two numbers

It works by using a **while loop** and **carry value**, which continues until all list elements have been traversed. What is carry value? If you add two numbers and you got **number >= 10** – your output value is 0 and carry value – 1, then you add this to your next iteration value. Example:

- 2 + 5 = 7, output value = 7, carry value = 0
- 4 + 6 = 10, output value = 0, carry value = 1
- 3 + 4 = 7, add the existing carry value, output value = 8, carry value = 0

![add two numbers example](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

## How it works?

1. Initialize a new **mem** variable to store the carry value and **result** & **addNode** a new ListNode to be returned.
```js
let mem = 0;
let result = addNode = new ListNode(0);
```

2. Creating a **while** loop, which continues until all lists elements (in **l1**, **l2** and **mem**) have been traversed.
```js
while (l1 || l2 || mem) {}
```


3. In each iteration we check if there is a value in **l1** & **l2** – we use it to sum, otherwise we use **0**, then add **mem**.
```js
let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + mem;
```

4. Write down the carry value into **mem** variable (using Math.floor method) and **sum**.
```js
mem = Math.floor(sum / 10);
sum %= 10;
```
- It can be also write down as:
```js
if (sum >= 10) mem = 1; sum = sum - 10;
```

5. Add the sum to the new ListNode and move to the next **l1**, **l2** values, if they exist, update the **addNode**.
```js
addNode.next = new ListNode(sum);
l1 = l1 ? l1.next : null;
l2 = l2 ? l2.next : null;
addNode = addNode.next;
```

6. Return the result.
```js
return result.next;
```

## Solution

```js
const addTwoNumbers = function(l1, l2) {
    let mem = 0;
    let result = addNode = new ListNode(0);
    
    while (l1 || l2 || mem) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + mem;
        mem = Math.floor(sum / 10);
        sum %= 10;
        addNode.next = new ListNode(sum);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        addNode = addNode.next;
    }
    
    return result.next;
};
```
