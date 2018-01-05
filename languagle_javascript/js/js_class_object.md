### JavaScript Object
### JavaScript Class

-----------------------------------------------------

### JavaScript Object
* JavaScript objects are containers properties and methods

```js
var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}
```

### JavaScript Class

* **Javascript Class declarations**

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
* **Javascript Class expressions**

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


* **Javascript Class native**
```js
function Person(name) {
  this.name = name
  this.showName = function(){
      console.log("My name is : " + name)
  }
}

// Create new Persion object

var person = new Person("tuan")

// Use properties and methods of object

person.name
person.showName()
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









