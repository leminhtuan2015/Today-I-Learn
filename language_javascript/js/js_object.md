### Javascript Object
### Javascript Create object
### Convert json to Javascript object

------------------------------------------------------------------

### Javascript Object

* In JS  **{}** use for object
* In JS **[]**  use for array

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



