### First-class function
### Function type in 
### Javascript support First-class function

-------------------------------
### First-class function
  - Function are treated like ordinary variables 
  - The language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures

### Function type in 
  - We have Function type for variable in Javascript
  
```js
  if (typeof v === "function") {
  // do something
  }
```

### Javascript support First-class function

```js
  var myFunction = function namedFunction(){
      statements
  }
  
  myFunction()
```

```js
  var y = function() {
      console.log("1")
  }

  y()
```

```js
  function hello(){
    console.log("hehe")
  }
  
  var x = hello
  
  x() // hehe
  hello() // hehe

```

#### NOTICE:

```js
function hello(){}

// hello là biến kiểu Function
// Sau khi khai báo câu lệnh trên thì hello là một biến trỏ đến hàm hello

 var x = hello 
 
// Sau  khi gán biến x = hello thì lúc này x và hello cùng trỏ đến hàm hello 
```










