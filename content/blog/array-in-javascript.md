---
path: array
date: 2020-05-30T04:20:11.611Z
title: Array in Javascript
description: A brief explanation of Array in Javascript with example
tags:
  - basic programming
  - tutorial
  - theory
  - javascript
likes: 0
image: assets/hiclipart.com.png
---
Hi, In this article we will talk about Array in Javascript. As we all know previously, a variable can only hold / assign one single value, `let x = 'something'` for instance. Using an array you can assign multiple value into it, usually array used to keep dataset which has the same behavior and data type one to another, but this is not limited to, you can assign any multiple data value into a single array variable. Let us have a look at the example below, 

```javascript
let scoreList = [60,75,80,90]
let studentList = ['Tony', 'Nana', 'Joe', 'David']

console.log(scoreList)
console.log(studentList)
```

That is how we declare and assign values to an array variable. In that case, suppose we have two different list of data, score and student's name (sorted to their related score) that we want to log into the console.

```javascript
Output: 
[60,75,80,90]
['Tony', 'Nana', 'Joe', 'David']
```

So, what's next? Let say we want to extract the array to get each value inside it. We can use `for statement` this should be the best practice to extract data from an array list, although you can do it manually, but really?. 

Let's have a look at the code down below, 

```javascript
console.log("score","name")

for(let i = 0; i < scoreList.length; i++){
    console.log(scoreList[i], studentList[i])
}
```

Assuming that you are already know how to use `for statement` the code simply wants to extract the value based on their `index i`, we can use either the length of `scoreList` or `studentList` since they have the same length and related to each other. Finally, we log the result to the console and it should look like this:

```
score name
60 'Tony'
75 'Nana'
80 'Joe'
90 'David'
```

Awesome!, Let's make it a little bit more complicated (that's my learning method at the first time, we should make the problem :D and of course **SOLVE** it!). 

Let us assume that we want to make grading based on the given score. 

`Grade A if score >= 90`

`Grade B if score < 90 & >= 70`

`Grade C if score < 70 & >= 60`

`Grade D if score < 60`

How do we overcome this kind of problem?, Yes absolutely we need to combine the `for statement` and `conditional`. 

```javascript
let scoreList = [60,75,80,90]
let studentList = ['Tony', 'Nana', 'Joe', 'David']

console.log("Name", "Score","Grade")

for(let i=0; i<scoreList.length; i++){
    if(scoreList[i] >= 90){
        console.log(studentList[i], scoreList[i], 'A')
    } else if(scoreList[i] < 90 && scoreList[i] >= 70){
        console.log(studentList[i], scoreList[i], 'B')
    } else if(scoreList[i] < 70 && scoreList[i] >= 60){
        console.log(studentList[i], scoreList[i], 'C')
    } else {
        console.log(studentList[i], scoreList[i], 'D')
    }
}
```

```javascript
Output:
Name Score Grade
Tony 60 C
Nana 75 B
Joe 80 B
David 90 A
```

Alright, we have now our result with the following grade of each student, which is great. Perhaps, you will find that this is the simplest case to try out. Explore more to let yourself get used to it, add another assumption, make the problem even more complicated and try to solve it. Happy Coding :)

Worth to read[](https://www.w3schools.com/js/js_arrays.asp):

1. [W3 Schools Array in JS](https://www.w3schools.com/js/js_arrays.asp)
2. [MDN Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)