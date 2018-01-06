### JavaScript Class

-----------------------------------------------------
### JavaScript Class

* **Javascript Class declarations (ECMAScript 2015)**

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
* **Javascript Class expressions (ECMAScript 2015)**

```js
// unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```


* **Javascript Class (from function)**
```js
function Person(name) {
  this.name = name
  this.showName = function(){
      console.log("My name is : " + name)
  }
}

var person = new Person("tuan") // Create new Persion object

// Use properties and methods of object

person.name // 'tuan'
person.showName()  // My name is : tuan
```

* **Javascript Class in Nodejs**

```js
function Person(name) {
  this.name = name
  this.showName = function(){
      console.log("My name is : " + name)
  }
}

module.exports = Person
```

```js
// constructor call
var Person = require("../models/Person")
var tuan = new Person('Tuan');

tuan.showName()
```









