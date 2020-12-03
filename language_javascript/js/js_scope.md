### Scope
### Local Scope (Function scope)
### Global Scope
### Block Scope
### Automatically Global

--------------------------------

### Scope
  - In JavaScript, objects and functions are also variables.
  - In JavaScript, scope is the set of variables, objects, and functions you have access to.
  
### Local Scope (Function scope)
  - Variables declared within a JavaScript **function**, become LOCAL to the function.
  - Local variables have local scope: They can only be accessed within the function.

```js
  // code here cannot use x

  function myFunction() {
      var x = "Volvo";

      // code here can use x
  }
  
  // code here cannot use x
```

### Global Scope

  - A variable declared outside a function, becomes GLOBAL.
  - A global variable has global scope: All scripts and functions on a web page can access it. 

```js
    var carName = " Volvo";
    // code here can use carName

    function myFunction() {
        // code here can use carName 
    }
    
    // code here can use carName
```

### Block Scope

* Before ES2015, JavaScript had only two types of scope: **Global Scope** and **Function Scope**. 
* ES2015 provide Block Scope variables by using : **let** and **const** 

* **var** : Variables declared inside a block {} can be accessed from outside the block:

```js
{ 
  var x = 2; 
}
// x CAN be used here

```

* **let** : Variables declared inside a block {} cannot be accessed from outside the block:

```js
{ 
  let x = 2;
}
// x can NOT be used here
```

### Automatically Global
  - If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
  - Do NOT create global variables unless you intend to.

```js
    myFunction();

    // code here can use carName 

    function myFunction() {
        carName = "Volvo";
    }
```





