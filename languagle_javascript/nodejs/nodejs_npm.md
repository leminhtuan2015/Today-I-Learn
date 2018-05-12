### What is NPM?
### Setup new NPM 
### What is a Package/Module?
### Download a Package
### Using a Package

----------------------------------------------

### What is NPM?
* npm = Node Package Manager
* npm is a package manager for **JavaScript**, it is the same **pod** of IOS
* npm is the package manager for JavaScript and it is the largest ecosystem of open source libraries in the world.
* The NPM program is installed on your computer when you install Node.js

### Setup new NPM 

```sh
npm init // This will ask you a bunch of questions, and then write a package.json for you
npm install // By default, npm install will install all modules listed as dependencies in package.json
```

### What is a Package/Module?
* A package in Node.js contains all the files you need for a module.
* Modules are JavaScript libraries you can include in your project.

### Download a Package

```shell
npm install express

npm install express --save // install and add this package to package.json file
```

* NPM creates a folder named "node_modules", where the package will be placed. All packages you install in the future will be placed in this folder.

### Using a Package

```js
var uc = require('upper-case');
```
