# NPM - Node Package Manager

Package is a collection of code managed and maintained by package management system.

## Package management system

- Software that automates installing and updating packages.
- Deals with the version you required and install the dependencies of the package.

## Semantic Versioning


Specifying what version of a set of code. 

## INIT, nodemon

##npm init

```javascript
{
  "name": "npm-app-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.14.1"
  },
  "devDependencies": {
    "jasmine-node": "^1.14.5"
  }
}
```

## npm install moment --save

Adds the dependencies in package.json

###^ Update minor versions  "moment": "^2.[4].1"
4 is the minor version.

###~ Update patch versions  "moment": "~2.4.[1]"
1 is the patch version.

##npm install jasmine-node --save-dev

install under [devDependencies] which is not required to run the application for user.

## Nodemon

- Restart the node server , if there any change in the app.
- npm install -g nodemon 

###cmd - nodemon app.js


















