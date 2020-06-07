---
path: tutorial-express-js-generator
date: 2020-06-07T05:05:51.584Z
title: Generate Web Skeleton Using Express Generator
description: An explanation on how to build a web skeleton by using express generator
image: assets/express.png
tags:
  - back-end
  - tutorial
  - javascript
---
Hi, in this article we will learn on how to build a web skeleton by using express generator. Unlike our previous tutorial, we build up to the route manually. Express has an application generator tool that lets you create an express app skeleton quickly, which you can then develop by adding your own specific routes, view / templates and database. The process is quite simple to do even if you are non-it engineer, let's follow the steps below to begin creating your very first express application.\
\
You can run the application generator by using `npx` command (available in Node.js 8.2.0) like so:

```javascript
$ npx express-generator 
```

or, you can use `npm` for earlier node versions and install the generator globally. To do this, you can launch the following command,

```javascript
$ npm install -g express-generator
```

And then, you can display the available command options with the `-h` option, like so:

```javascript
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```

Next, let us create an app by using the express command and we will name the app as ***tutorialapp***. The application generator will generate a folder named ***tutorialapp*** with all prepared setup inside the folder. 

```javascript
$ express --view=ejs tutorialapp


   create : tutorialapp/
   create : tutorialapp/public/
   create : tutorialapp/public/javascripts/
   create : tutorialapp/public/images/
   create : tutorialapp/public/stylesheets/
   create : tutorialapp/public/stylesheets/style.css
   create : tutorialapp/routes/
   create : tutorialapp/routes/index.js
   create : tutorialapp/routes/users.js
   create : tutorialapp/views/
   create : tutorialapp/views/error.ejs
   create : tutorialapp/views/index.ejs
   create : tutorialapp/app.js
   create : tutorialapp/package.json
   create : tutorialapp/bin/
   create : tutorialapp/bin/www

   change directory:
     $ cd tutorialapp

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=tutorialapp:* npm start
```

Then head to the folder directory and install its dependencies:

```javascript
$ cd tutorialapp
$ npm install
```

After the installation of the dependencies completed, try to run the project by doing the following command:

On MacOS or Linux,

```javascript
$ DEBUG=tutorialapp:* npm start
```

On Windows,

```javascript
> set DEBUG=tutorialapp:* & npm start
```

Then open up your browser and hit the http://localhost:3000/ to access the app.

![express-tutorial](assets/express-tutorial.png "Express Application Generator Result")

Now, let us enable the automatic server restart whenever there is a file changes. We will use a very convinient tool called [nodemon](https://github.com/remy/nodemon) in this case, so we need to install it before we can use it.

To install nodemon locally in your development environment, run the following command:

```javascript
$ npm install --save-dev nodemon
```

If you choose to install it globally, then run this command:

```javascript
$ sudo npm install -g nodemon
```

Open up your project directory, and open the **package.json** file, right inside the `"scripts"` section, add the following code:

```javascript
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=tutorialapp:* npm run devstart"
  },
```

Finally, you can then start the server by using the following command:\
On Windows, run this command:

```javascript
> SET DEBUG=tutorialapp:* & npm run devstart
```

On MacOS or Linux, run this command:

```javascript
$ DEBUG=express-locallibrary-tutorial:* npm run devstart
```

Congratulations! your express app is up and running, we will go deeper into it in the next tutorial soon, stay tuned!.\
\
If you have any question regarding the tutorial or any related to javascript programming, please do not hesitate to ask me a question. You can comment on the comment section below or sending me an email (kindly send it to support@bhaktidev.com).