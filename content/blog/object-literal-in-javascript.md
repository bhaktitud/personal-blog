---
path: object-in-javascript
date: 2020-06-02T04:20:33.232Z
title: Object Literal In Javascript
description: A brief introduction to use Object in Javascript.
---
![Object Literal](assets/object-literal.png "Object Literal")

Hi, in this article we will talk about `Object` in Javascript. As we already discuss about [Array In Javascript](https://www.bhaktidev.com/blog/array-in-javascript/) previously, `object` can also be use to store multiple value in it. Usually, `object` store data which has correlation to each other, so we can assume an `object` in Javascript just like an Object in real-life, they have properties for instance  color, height, width, etc. We can access those value of their properties by calling out their ***key***. Let's have a look at how `object` in javascript declared,

```javascript
let person = {}
```

as simple as that, now we have an object variable `person`. The `object person` is still empty, let us **insert** some values to it, you have two different ways to add new properties to an object :

##### Square Bracket Notation :

```javascript
person["key3"] = "value3";
```

##### Dot Notation :

```javascript
person.key3 = "value3";
```

It is your choice whether you want to use square bracket or dot notation, I personally preferred square bracket notation. Alright, let us add `name <String>, age <Int>, marriage <Boolean>` and `gender <String>` properties to our `person object`,

```javascript
person['name'] = "tony";
person['age'] = 27;
person['marriage'] = false;
person['gender'] = 'male';

console.log(person);
```

```javascript
Output:
{
  name: "tony",
  age: 27,
  marriage: false,
  gender: 'male'
}
```

There we have it, now our `object person` has `name, age, marriage (status)` and `gender`, we can add more properties to it but for now that is enough. 

> How can we access the property?

The answer is, as easy as we add it, check it out

```javascript
let person = {}

person['name'] = "tony";
person['age'] = 27;
person['marriage'] = false;
person['gender'] = 'male';

console.log(person.name, person.age, person.marriage, person.gender)
// or
console.log(person['name'], person['age'], person['marriage'], person['gender'])
```

```javascript
Output: 
tony 27 false male
tony 27 false male
```

 Yes, absolutely just like the method how we add the properties. Go ahead, try to explore more by making it more complicated. Happy Coding!

Worth to read:

1. [W3Schools Object Literal](https://www.w3schools.com/js/js_objects.asp)
2. [Working with Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)