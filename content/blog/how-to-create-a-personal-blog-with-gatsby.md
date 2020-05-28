---
path: blogging-with-gatsby
date: 2020-05-28T10:32:32.216Z
title: How To Create a Personal Blog With Gatsby
description: A tutorial to build a personal blog using gatsby and netlify cms
---
Hi, in this article we will create a personal blog by using Gatsby.js and Netlify as the cms and hosting. To begin with, there are several requirement that you have to meet,

Requirement knowledge:

* [React.js ](https://reactjs.org/)
* [GraphQL](https://graphql.org/)
* [Git Command](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

Therefore, if you feel comfortable with all of that you can then continue to the next step.

Pre-requisite:

* Github Accountga
* [Gatsby CLI ](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli)installed

### **Step 1**

Run the Gatsby CLI command on your terminal to create a new Gatsby site based on [Gatsby Personal Starter Blog](https://github.com/thomaswang/gatsby-personal-starter-blog).

```javascript
gatsby new [your-project-name] https://github.com/thomaswangio/gatsby-personal-starter-blog
```

### **Step 2**

Once the installation has finished, head to the directory and run the site locally.

```javascript
cd [your-project-name]
gatsby develop
```

### **Step 3**

Open the project in your code editor ([Visual Studio Code](https://code.visualstudio.com/) Recommended). Now, open the `static/admin/config.yml`. Replace the following line of code with your github username and repo name for the project.

```gitattributes
backend:
- name: test-repo

+ name: github
+ repo: github-username/project-repo
```

Head into `gatsby-config.js` to edit your `siteMetadata` you can also add a Google Analytics tracking ID if you wish to, and your app icon. Now, quit the development server and try running `gatsby build && gatsby serve` .

### **Step 4**

Create a new repository in your github account make sure it has the same name as your project name. Then, push your newly created Gatsby site's to Github by using the following git commands:

```javascript
git init
git add .
git commit -m 'initial commit'
git remote add origin https://github.com/[your-username]/[your-repo-name].git
git push -u origin master
```

After that, open [app.netlify.com](app.netlify.com) and add a "New site from Github". Choose your newly created project repository and click on "Deploy site" with the default deployment settings.

### **Step 5**

As the final step, you need to set up an OAuth application on Github. You can find detailed instruction for that in here: [Netlify's Using an Authorization Provider](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#using-an-authentication-provider).

Once you've configured the authentication provider you will be able to use Netlify CMS at your site to add new posts.

To continue site development you can still run the following command:

```javascript
gatsby develop
```

You can check the site locally on `localhost:8000` and to open the Netlify CMS you can check it on `localhost:8000/admin`

Congratulations!, you are ready to share your knowledge on your newle created personal blog, or you can share anything you want. You can also explore CSS framework to make your site even better. 

Don't forget to check out the [Gatsby Docs](https://www.gatsbyjs.org/) for more detail.