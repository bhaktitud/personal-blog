---
path: for-statement
date: 2020-05-27T15:37:57.607Z
title: For Statement
description: A brief introduction to for statement in javascript
tags: ["basic programming", "tutorial", "theory", "javascript"]
likes: 0
---
Hi, in this article we will talk about ***for statement*** in **Javascript**. According to the documentation, "a **for** loop repeats until specified condition evaluates to **false**", *\-developer.mozilla.org*.

the code structure of for statement looks like this,

```javascript
for ([initialExpression]; [condition]; [incrementExpression]){
   // code block to be executed
}
```

**initialExpression** sets a variable before the loop starts (*starting point where the loop should start*).

1. **condition** defines the condition for the loop to run.
2. **incrementExpression** (e.g. **i++**), increases a value every iteration or each time the code block in the loop has been executed (note: this can also be a **decrementExpression** (e.g. **i--**)).

Often we use the for loop statement to handle ***Array*** or ***String*** data so we can access the index of a value easily and process the value. as an example see the code snippet below,

```javascript
let numbers = [1,2,3,4,5]
let result = 0
for(let i = 0; i < numbers.length; i++){
  result += numbers[i]
}
console.log(result)
```

```javascript
Output:
15
```

Supposed we have a list of numbers represented as variable ***numbers*** (Array), and a variable ***result*** where we want to store the summation of the numbers. In the for statement used above, we define the initialExpression as **i = 0**, the condition is **i** should less than the ***length*** of ***array numbers***, and we **increase** the value of **i** on each iteration by 1. Remember that the loop will be stop when the current **condition** is ***false***.

```javascript
result += numbers[i] is similar to result = result + numbers[i]
// You can use each one of them, the result should be the same.
```

```javascript
numbers[i] is a way we access the value of an array. In this case, 
numbers = [1,2,3,4,5], the array length is 5
Step 1:
  i = 0 => numbers[i] equals to 1, i++
Step 2:
  i = 1 => numbers[i] equals to 2, i++
.
.
Final Step:
  i = 4 => numbers[i] equals to 5, i++
Loop terminated since the condition is now false 
  i = 5 and numbers.length = 5, 
so 5 < 5 is false
```

So that is more or less about the for loop statement in **Javascript**. Actually, You can find more detailed explanation in the [documentation](https://developer.mozilla.org), this was just a brief illustration for You to start with.

I recommend You to explore and try with another case to make yourself get use to it. Happy Coding :)