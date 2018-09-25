### Javascript Object


------------------------------------------------------------------

### Javascript Object

* In JS  **{}** use for object
* In JS **[]**  use for array

* Create object

```js
var x = {
    name : "x",
    tellName : function(){
        alert("my name is " + this.name)
    }
};
```

```js
var x = new object();       // Khởi tạo một object có tên là x

x.name ="x";                // add thuộc tính "name" cho object
x.tellName = function (){   // add thêm function "tellName" cho object x
    alert(this.name)
};
```

