![current construction logo](https://assets.currentcon.com/logo.png "current construction logo")

# Current Construction Website
======

This is the current construction website repository. The production site is [www.currentcon.com](https://www.currentcon.com). The web server is built using [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/). The client side template engine is [Ejs](https://ejs.co/) and uses HTML, Javascript, some JQuery and CSS.

The website is styled using the [Canvas](http://preview.themeforest.net/item/canvas-the-multipurpose-html5-template/full_screen_preview/9228123) theme.

### Before You Begin
------

It's a good idea to get familiar with the following resources:

  - A basic understanding of [Node.js](https://www.sitepoint.com/build-a-simple-web-server-with-node-js/) and how it works as a web server.
  - Get familiar with [Express.js](https://www.youtube.com/watch?v=pKd0Rpw7O48).
  - Understand how a template engine works with Node.js. Specifically [EJS Templates](https://www.youtube.com/watch?v=VM-2xSaDxJc).
  - And you will need some experience with HTML, Javascript, JQuery and CSS.

### Prerequisites
------

Make sure you have the following installed on your local development machine:

  - Git - [Download and install Git](https://git-scm.com/downloads). OSX and Linux machines may already have git installed.
  - Node.js - [Download and install Node.js](https://nodejs.org/en/download/) and the npm package manager.
  - Docker - [Install Docker locally](https://www.docker.com/). This is only if you want to run the docker environment locally.


### Installing Locally
------

Follow these steps to run the website on your local development machine:

#### Clone the Git Repository

Clone the current-con git repo:

```
$ git clone https://github.com/Shane325/current-construction.git
```

This will clone the latest version of the repo to a `current-construction` folder.

#### Install

Once you've downloaded the repo and installed all the prerequisites, you're just a few steps away from starting to develop. The repo comes with a `package.json` file that contains a list of the node modules needed to run the application.

To install the dependencies, run this in the project root folder

```
$ npm install
```

#### Running the application

To run the application in development mode

```
$ gulp
```

And in production mode

```
$ gulp prod
```

Navigate to `http://localhost:3000` or `http://localhost:8443` (production mode) in your web browser to view the site.
