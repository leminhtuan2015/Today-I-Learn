### Javascript reference type and value type

* Các kiểu dữ liệu nguyên thuỷ như strings, numbers **always passed by value**
* 2 kiểu dữ liệu là **Array** hoặc **Object** sẽ được hàm coi là  **reference** hay **value** tuỳ thuộc vào **Cách sử dụng biến đó trong hàm như thế nào** (Ví dụ minh hoạ bên dưới)

#### Example 1

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


#### Example 2

```js

var Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  showName(){
      console.log("My name is : " + this.name)
  }
};

function changeData(obj){
  obj.name = "new name"  // CHANGE original
  obj = {name: "new new name", age: 1}  // NOT CHANGE original
}

var person = new Person("tuan", 1)

console.log(person.name) // tuan

changeData(person)

console.log(person.name) // new name


```





