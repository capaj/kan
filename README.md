# ean-jspm

EAN is a boilerplate that provides a nice starting point for [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. It is designed to give you quick and organized way to start developing of MEAN based web apps with useful modules like mongoose and passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.
## Philosophy
Opinionated stack perfect for building large and small angular apps

### Target browsers
* this stack targets anything newer than IE9, inluding IE9. If you need to run on IE8 or older, this boilerplate is not for you.
* stack assumes, that the app will be used on mobiles and tablets and includes [hammer.js](http://hammerjs.github.io/)
angular-touch and angular-gestures to make mobile experience that much better

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js
* NPM - Node.js package manager, should be installed when you install node.js.
* JSPM - package manager for the [SystemJS universal module loader](https://github.com/systemjs/systemjs)
* karma-cli - current runtime component for running karma unit tests
* gulp - The streaming build system

## Quick start
  The quickest way to get started with EAN is to clone the project and then:

  1. Install dependencies:
    
    ```
    $ npm install
    ```
  2. Use Gulp task to run local webserver and watch for changes of js or style files:
    ```
    $ gulp dev
    ```
    Which should open your browser window on:
  
    ```
    http://localhost:8080
    ```
    8080 is default port specified in config-dev.json
