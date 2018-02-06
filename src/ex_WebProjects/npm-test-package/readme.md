# npm test package

Experiment with npm and how to create a package and publish it online. Node Package Manager (npm) needs [node.js](https://nodejs.org/en/) to be installed in order for any application or package to run.

## Getting started

Start the application with
```bash
node index.js
```

It should be running on [localhost:3000](http://localhost:3000/) and you should see "Hello World".

## Package

You should have an account created on [npm](https://www.npmjs.com/). Then you can pack (`node pack`) and publish your package.
```bash
node publish
```

To publish a package you need a unique name, you can test if your package name is taken or not with:
```bash
node view unique-package-name
```