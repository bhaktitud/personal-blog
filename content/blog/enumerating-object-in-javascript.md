---
path: enumerating-object-in-javascript
date: 2020-06-03T01:58:05.687Z
title: Enumerating Object In Javascript
description: An explanation on how to enumerate object literal in javascript
tags:
  - basic programming
  - tutorial
  - javascript
---
Hi, in this article we will learn how to enumerate an `object literal` in **Javascript**. Before we proceed make sure you have read the previous article [Object Literal in Javascript](https://www.bhaktidev.com/blog/object-literal-in-javascript/). As we know that an object contains key and value in it so that we cannot enumerate the properties based on index, so we need a 'special' loop to do this operation. 

> Why do we need to enumerate an object?, while we can access / generate it manually.

I am pretty sure you don't want to extract the value inside an object manually, especially when it has dozens of data in it.

Alright, let us use the same case as we do in the previous article, we will use `person object` with the same properties and value inside it.

```properties
let person = {
  name: 'tony',
  age: 27,
  marriage: false,
  gender: 'male'
}
```

Based on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects), starting with [ECMAScript 5](https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) there are three native ways to enumerate an `object` :

> * `for...in` loops\
>   This method traverses all enumerable properties of an object and its prototype chain
> * [`Object.keys(o)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)\
>   This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object `o`.
> * [`Object.getOwnPropertyNames(o)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)\
>   This method returns an array containing all own properties' names (enumerable or not) of an object `o`.

In this tutorial we are going to use the first method `for...in` loops to list/traverse our object properties. Let's check out the following snippet down below,

```javascript
let person = {
  name: 'tony',
  age: 27,
  marriage: false,
  gender: 'male'
}

for(let prop in person){
  console.log(prop+': '+person[prop])
}
```



```
Output: 
name: tony 
age: 27 
marriage: false 
gender: male 
```

That was it, you now know how to iterate your `object` properties by using `for...in` loops. If you have any question regarding basic programming in Javascript please do not hesitate to [contact](https://www.bhaktidev.com/contact/) me or you can write me an email and send it to support@bhaktidev.com. Happy Coding!