### Javascript Object
### Javascript Create object
### Convert json to Javascript object
### Change property of Javascript object

------------------------------------------------------------------

### Javascript Object

* In JS  **{}** use for object
* In JS **[]**  use for array
* When change object in a function => object will be changed (the same Java/C#) 

```js

var x = {
  "age": 1,
  "name": {
    "firstName": "Le",
    "lastName": "Tuan"
  },
  
  sayHello(){
    console.log("Hello: " + this.name)
  },

  sayHello1: function(){
    console.log("Hello 1 : " + this.name)
  },

  sayHello2: () => {
    console.log("Hello 2 : " + this.name)
  }
}

function huhu(y){
  y["age"] = 2
  y["name"]["firstName"] = "Le Minh"
}

console.log(x); // { age: 1, name: { firstName: 'Le', lastName: 'Tuan' } }

huhu(x);

console.log(x); // { age: 2, name: { firstName: 'Le Minh', lastName: 'Tuan' } }



```

### Javascript Create object

* **Method 1 : Using object initializers**

```js
    var x = {
        name : "x",
        tellName : function(){
            alert("my name is " + this.name)
        }
    };
```

* **Method 2**

```js
    var x = new Object();      // Khởi tạo một object có tên là x

    x.name ="x";                // add thuộc tính "name" cho object
    x.tellName = function (){   // add thêm function "tellName" cho object x
        alert(this.name)
    };
```

* **Method 3: Using a constructor function**

```js
    function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    var mycar = new Car('Eagle', 'Talon TSi', 1993);
    var kenscar = new Car('Nissan', '300ZX', 1992);
    var vpgscar = new Car('Mazda', 'Miata', 1990);
```

* **Method 4 : Using the Object.create method**

```js
    // Animal properties and method encapsulation
    var Animal = {
      type: 'Invertebrates', // Default value of properties
      displayType: function() {  // Method which will display type of Animal
        console.log(this.type);
      }
    };

    // Create new animal type called animal1 
    var animal1 = Object.create(Animal);
    animal1.displayType(); // Output:Invertebrates

    // Create new animal type called Fishes
    var fish = Object.create(Animal);
    fish.type = 'Fishes';
    fish.displayType(); // Output:Fishes
```

### Convert json to Javascript object

```js
    var jsonString = "{...}" 
    var data = JSON.parse(jsonString);
```

```js
    var data = JSON.parse(JSON.stringify(data));
```

### Change property of Javascript object

```js

  var x = {
    "age": 1,
    "name": {
        "firstName": "Le",
        "lastName": "Tuan"
    }
  }
  
  // Change properties
  
  x["age"] = 2
  x["name"]["firstName"] = "Le Minh"
  
  // Change properties
  x.age = 3
  x.name.firstName = "XXX"

```








