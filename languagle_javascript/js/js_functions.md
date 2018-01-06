### Function
### Keyword 'this' in Function

-----------------------------

### Function

### Keyword 'this' in Function

```js
var name = "tuan"

function Person(){
  console.log("the name is : " + this.name) 
  
  // 'this' is the context (object) that called the Person function
  // in this case 'this' is a global context => 'this' is global context, because Person called by global context
}

Person() // tuan
```
