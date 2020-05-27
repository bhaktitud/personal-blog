---
path: conditional-statement
date: 2020-05-27T15:10:01.269Z
title: Conditional Statement
description: A brief introduction to conditional statement in javascript
---
Hi, You might already heard or familiar with "*Conditional Statement"* before, in which a statement that should return boolean **"True"** or **"False"**. When the statement is True then you do or execute *command A*, or else do the *command B* or do nothing. In Javascript we use if-else conditional statement to handle these kind of problems (well, in fact it also used in other programming language). So this is how it is written,

```javascript
if(condition) {
   //  block of code to be executed if the condition is true
} else if(another_condition){
   //  block of code to be executed if the first condition is not true
} else {
   //  block of code to be executed if all of the above condition are not fullfiled
}
```

As we see that the code structure is chained one to another condition, right?. Do not be hesitate to explore the way it is written, you can write it like this,

```javascript
if(condition) {
   // block of code to be executed if the condition is true
}
if(condition) {
   // block of code to be executed if the condition is true
}
...
```

Why not?!, it depends on the case you are facing with. Or it can also be like this,

```javascript
if(condition) {
   //  block of code to be executed if the condition is true
} else {
   //  block of code to be executed if the above condition is not fulfilled
}
```

That is just an example of how we write conditional statement in Javascript. Now, let see how it is implemented with some "fake condition" which have to be fulfill and what to do if it is **True** or **False**.

Let say you want to check whether the variable contain the same data or not. See the snippet below,

```javascript
let name = "Andy"
if(name == "Andy"){
   console.log(true)
} else {
   console.log(false)
}
```

notice that the "else" condition will not be executed because the first condition is already fulfilled. You can also compare **Number**, **Bollean** or even a **Character**!.

That is all, Explore and go dive into it and try with another case to make yourself more comfortable with the code!. Happy Coding :)