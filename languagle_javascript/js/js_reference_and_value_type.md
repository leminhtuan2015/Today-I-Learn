
### Example 1

* Primitive type variables like strings and numbers are always passed by value.
* **Arrays** and **Objects** are passed by **reference** or by **value** based on these conditions:
  
```js
// If you are setting the value of an object or array it is Pass by Value.
// Pass by Value

object1 = {prop: "car"};
array1 = [1,2,3];
```

```
// If you are changing a property value of an object or array then it is Pass by Reference.
// Pass by Reference

object1.prop = "car";
array1[0] = 9;
```

```js
function changeData(obj){
  obj.name = "new name"    // CHANGE original
  obj = {name: "new new name"}  // NOT CHANGE original
}

var obj = {name: "my name"}

console.log(obj) // { name: 'my name' }

changeData(obj)

console.log(obj) // { name: 'new_name' }
```


### Example 2







