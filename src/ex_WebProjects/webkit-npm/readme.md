# Webkit npm

 [![Generic badge](https://img.shields.io/badge/github-webkit-blue.svg)](https://github.com/Sylhare/webkit)
 [![npm version](https://badge.fury.io/js/webkit-npm.svg)](https://badge.fury.io/js/webkit-npm) [![Generic badge](https://img.shields.io/badge/build-passing-green.svg)](https://github.com/Sylhare/webkit) [![Generic badge](https://img.shields.io/badge/maintainability-A-green.svg)](https://github.com/Sylhare/webkit)

Experiment with npm and how to create a package and publish it online. Node Package Manager (npm) needs [node.js](https://nodejs.org/en/) to be installed in order for any application or package to run.

## Getting started

Start the application with
```bash
node index.js
```

It should be running on [localhost:3000](http://localhost:3000/) and you should see "Hello World".

Try going to different pages or using a query like:
```
http://localhost:3000/?firstname=John&lastname=Doe
```

## Package

You should have an account created on [npm](https://www.npmjs.com/). Once it is done, add the user to the machine using:
```bash
node adduser
```

Then you can publish your package (you need to be a level higher of your package to do that).
```bash
node publish
```

To publish a package you need a unique name, you can test if your package name is taken or not with:
```bash
node view unique-package-name
```

## Installation

To install the package you can do:
```bash
node install webkit-npm
```

If you encounter any error:
```groovy
npm WARN ENOENT ENOENT, open '..SourceDirectory\package.json'
npm WARN EPACKAGEJSON ..SourceDirectory\ No description
npm WARN EPACKAGEJSON ..SourceDirectory\ No repository field.
npm WARN EPACKAGEJSON ..SourceDirectory\ No README data
npm WARN EPACKAGEJSON ..SourceDirectory\ No license field.
```

first make sure that the package json is correct the best way it to do it via:
```bash
npm init
```

Then you can test the installation via:
```bash
npm install -d
```

## Sources

- [Creating your first app with Node.js](https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/creating-your-first-app-with-node-js)
- [webkit on npm](https://www.npmjs.com/package/webkit-npm)