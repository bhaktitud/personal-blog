---
path: express-js-routing
date: 2020-06-03T07:44:58.177Z
title: Express JS Tutorial (Routing)
description: A tutorial on how to setting up your server routes
tags:
  - back-end
  - javascript
  - tutorial
---
Hi, in this tutorial we will learn about routing by using express framework. Assuming that you followed the previous tutorial [Getting Start With Express JS](https://www.bhaktidev.com/blog/getting-start-with-express-js/) , we will continue our tutorial and setup routes for it. 

To remind us about what we did so far, let us check out the following code:

```javascript
const express = require('express');
const app = express();
const port = 3000

app.get('/', function(req, res){
   res.send("Hello world! This is my first server ever!");
});

app.listen(port, () => console.log(`server up and running on port : ${port}`))
```

Apparently, we only have one route so far `path /` with the method `get` , in which usually used to direct user to the main page. We can then add another route like so:

```javascript
const express = require('express');
const app = express();
const port = 3000

app.get('/', function(req, res){
   res.send("Hello world! This is my first server ever!");
});

//new route
app.get('/about', function(req, res){
   res.send("This is an about page");
});

app.listen(port, () => console.log(`server up and running on port : ${port}`))
```

Awesome!, now you can try to run the server by running `nodemon app.js`, open up your browser and try to hit `localhost:3000/about`, but there is a better way to define routes in express by using Express.Router,

> *"Use the `express.Router` class to create modular, mountable route handlers. A `Router` instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”."*
>
> \-[ *ExpressJS Docs*](https://expressjs.com/en/guide/routing.html)

To proceed with create a new file `routers.js`, and then go check and follow the snippet code down below:

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('My Homepage');
});
router.get('/about', function(req, res){
   res.send('My About Page');
});
router.post('/', function(req, res){
  res.send('Test Post route');
})

//export this router to use in our app.js
module.exports = router;
```

Next step, import the `router` in your `app.js` like so:

```javascript
const express = require('express');
const app = express();
const port = 3000
const router = require('./routers.js')

app.use('/', router);

app.listen(port, () => console.log(`server up and running on port : ${port}`))
```

That was all you need to do for this tutorial, to make sure everything is fine, try to re-run the `nodemon app.js` and then open your browser and test the routes you have by hitting its path.

If you have any question regarding the tutorial or anything related to the Javascript Programming, please do not hesitate to [contact me](https://www.bhaktidev.com/contact/) or you can write a comment down below or you can also write an email to support@bhaktidev.com. Happy Coding!