### Function
### Keyword 'this' in Function

-----------------------------

### Function

### Keyword 'this' in Function

* **'this'** in function is the object that called the function

* Case 1

```js
// 'this' is the context (object) that called the Person function
// in this case 'this' is a global context => 'this' is global context, because Person called by global context

var name = "tuan"

function Person(){
  console.log("the name is : " + this.name) 
}

Person() // the name is : tuan
```

* Case 2

```js
// this.name is undefined because 'this' is global context and we have no variable name in global context

function Person(){
  var name = "tuan" 
  console.log("the name is : " + this.name) 
}

Person() // the name is : undefined
```
