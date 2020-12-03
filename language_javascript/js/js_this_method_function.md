### Function
### Method
### this

-----------------------------------------------

### Function

* Function is the block of code have it own scope
* Each function have it own scope and the variable in the function only exist in that function scope

### Method

* Method is the function of an Object
* **this** in method refers to the "owner" of the method.

```js
person = {
    name: "Tuan",
    
    sayHello: function() {
      console.log("Hello, My name is: " + this.name) // this.name , this refer to the scope of object person
      return this.name;
    }
}

person.sayHello()
  
// sayHello is the Method of object person
// Hello, My name is: Tuan

```

### this

* In method: **this** refers to the owner object.
* In function: **this** refers to the global object.
* In arrow function: **this** refers to the object that defined the arrow function.
