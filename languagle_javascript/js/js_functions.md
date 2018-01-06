### Function
### Keyword 'this' in Function

-----------------------------

### Function

### Keyword 'this' in Function

```js
var name = "tuan"

function Person(){
  console.log("the name is : " + this.name) // 'this' is global context, because Person called by global context
  
  // 'this' is the context (object) called the Person function
  // in this case 'this' is a global context => 
}

Person() // tuan
```
