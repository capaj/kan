# Deprecation notice:
**This boilerplate is not up to date with best practices and it would not make sense to update it anymore-it is easier to write a new one from scratch. If you need a top notch angular boilerplate, then please use https://github.com/angular-class/NG6-starter/tree/jspm**

# kan

IKAN is a boilerplate that provides a nice starting point for [Koa](http://koajs.com/), [AngularJS](http://angularjs.org/) and [JSPM](http://jspm.io/) based web applications. It is designed to give you quick and organized way to start developing full stack JS web app, with basic modules prebundled and configured. It doesn't try to go far and provide you with a lot of frameworks you might not want to use.

CommonJS everywhere-don't ever repeat yourself. Need an enum on both sides of your app? Just require it... 
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
  The quickest way to get started with KAN is to clone the project and then:

  1. Install dependencies(which installs frontend deps as well):
    
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

### Testing
Here I chose Mocha with Chai on both sides-karma doesn't have to be used with Jasmine. Chai has much more powerful assertions and Mocha is slightly better for instrumentating your test scenarios. To run the tests(backend, then frontend), run
```
npm test
```
or for backend tests
```
npm testback
```
or for frontend tests
```
karma testfront
```
