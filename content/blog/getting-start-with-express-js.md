---
path: getting-start-with-express-js
date: 2020-06-03T03:56:31.643Z
title: Getting Start With Express JS
description: A tutorial about how to build your very first server side by using express js
image: assets/express.png
tags:
  - back-end
  - tutorial
  - javascript
  - expressjs
---
Hi, in this tutorial we will learn how to setup a server for your future website. All basic programming knowledge you have learned in the [Basic Programming Section](https://www.bhaktidev.com/basicprog/) will be a fundamental knowledge and it is recommended to you to follow it carefully.\
\
Prerequisite:

* Nodes Package Manager (NPM) installed
* [NodeJs](https://nodejs.org/en/) installed

If you have not installed any of those items above, you can go here [NodeJS](https://nodejs.org/en/download/package-manager/) and just follow the instruction based on your operating system.

### Step 1

Open up your terminal and type the following command `mkdir express-tutorial` and then `cd express-turorial`. By doing this step, you are making new folder named express-tutorial and you are now in that folder directory. Next, run the following command `npm init -y` to extract `package.json` inside your folder.

### Step 2

As you already have a file `package.json` you can then run `npm install --save express` to install the express framework package module. Make sure that it has installed correctly by running `ls node_modules` and it should show you a folder node_modules.

### Step 3 

That is all, next we need to install `nodemon modules` to make our development process easier. Run the following command in your terminal `sudo npm install -g nodemon` , by adding `-g` will install `nodemon module` globally. Nodemon is used to help us auto restart the server during development, so we don't need to re-run everytime we make changes.

### Step 4

As we already setup the development environment, now create a file called `app.js` in your current directory, and type as the following code below :

```javascript
const express = require('express');
const app = express();
const port = 3000

app.get('/', function(req, res){
   res.send("Hello world! This is my first server ever!");
});

app.listen(port, () => console.log(`server up and running on port : ${port}`))
```

save the file and run `nodemon app.js` , this will start the server. Check in your console / terminal to make sure that the server is up and running on port 3000. Open up your browser, and head to the `localhost:3000` .

Congratulation!, You will see that what you have type appeared `'Hello world! This is my first server ever!'` in the browser. To understand the code deeply you can also referred to the [express documentation](https://expressjs.com/en/5x/api.html) .\
\
If you have any question regarding the tutorial or anything related to the Javascript programming, please do not hesitate to [contact me](http://localhost:8000/contact/) or comment your thought in the comment section below or you can email directly to the support@bhaktidev.com.