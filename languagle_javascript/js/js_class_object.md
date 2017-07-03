### JavaScript Object
### JavaScript Class

-----------------------------------------------------

### JavaScript Object
* JavaScript objects are containers properties and methods

```js
var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}
```

### JavaScript Class

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
