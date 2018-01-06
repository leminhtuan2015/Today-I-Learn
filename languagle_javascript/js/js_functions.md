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
  console.log("the name is : " + this.name) // the name is : tuan
}

Person() // the name is : tuan , because in this case 'this' = global context => this.name = tuan

var p = new Person() // the name is : undefined , because is this case 'this' = object p => this.name is p.name => undefined
```

* Case 2

```js
// this.name is undefined because 'this' is global context and we have no variable name in global context

function Person(){
  var name = "tuan" 
  console.log("the name is : " + this.name) // the name is : undefined
}

Person() // the name is : undefined
```

* Case 3

```js
// Before call Person method global context have no variable 'name'
// After call Person method the global context have : name = "tuan"

function Person(){
  this.name = "tuan" 
  console.log("the name is : " + this.name) 
}

console.log("the name is : " + this.name) //the name is : undefined

Person() // the name is : tuan

console.log("the name is : " + this.name) //the name is : tuan
```





