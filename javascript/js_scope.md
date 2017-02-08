#### JavaScript Scope
#### Local JavaScript Variables
#### Global JavaScript Variables
#### Automatically Global

--------------------------------

#### JavaScript Scope
  - In JavaScript, objects and functions are also variables.
  - In JavaScript, scope is the set of variables, objects, and functions you have access to.

#### Local JavaScript Variables
  - Variables declared within a JavaScript **function**, become LOCAL to the function.
  - Local variables have local scope: They can only be accessed within the function.

```js
  // code here cannot use x

  function myFunction() {
      var x = "Volvo";

      // code here can use x
```

#### Global JavaScript Variables
  - A variable declared outside a function, becomes GLOBAL.
  - A global variable has global scope: All scripts and functions on a web page can access it. 

```js
    var carName = " Volvo";
    // code here can use carName

    function myFunction() {
        // code here can use carName 
    }
```

#### Automatically Global
  - If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
  - Do NOT create global variables unless you intend to.

```js
    myFunction();

    // code here can use carName 

    function myFunction() {
        carName = "Volvo";
    }
```





