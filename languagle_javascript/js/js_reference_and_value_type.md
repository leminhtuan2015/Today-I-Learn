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
