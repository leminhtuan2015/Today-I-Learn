### Function
### Method
### this

-----------------------------------------------

### Function

* Function is the block of code have it own scope
* Each function have it own scope and the variable in the function only exist in that function scope

### Method

* Method is the function of an Object

```js
person = {
  name: "Tuan",
  sayHello : function() {
    console.log("Hello, My name is: " + this.name)
    return this.name;
  }
}

```

### this
