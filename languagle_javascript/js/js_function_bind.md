### bind() function

--------------------------------------------------

### bind() function

* Example

```js
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var retrieveX = module.getX;

console.log(retrieveX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = retrieveX.bind(module);
console.log(boundGetX());
// expected output: 42

```

* bind() : passing 'this' to the called function

* Syntax

```js
fun.bind(thisArg)
```

* thisArg : The value to be passed as the this parameter to the target function when the bound function is called. The value is ignored if the bound function is constructed using the new operator.
