#### Variables
#### Arrow functions
#### Objects
#### Classes (extends)
#### Spread
#### Modules

--------------------
#### Variables
* **var**, **let**, **const**
* **var**: var is function scoped 
* **let**: let is block scoped, Only exist in nearest block scoped
* **const**: As let and Can not modify


#### Arrow functions

```js
buttonPress = () => {console.log("press")} 
```

```js
buttonPress(){console.log("press")}
```

##### function expression

```js
var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
```
#### Object

* Object in Javascript is a JSON

```js
const info = {
  name: 'Spencer',
  company: 'Handlebar Labs',
  location: {
    city: 'Nashville',
    state: 'Tennessee',
  },
};
```

#### Classes (extends)

```js
class Pet {
    
    // biến trong class
    food = `something eatable`; 

    // Hàm (method) trong class
    eat() {
        console.log('I can eat ${ this.food }'); 
    }
    
    // Hàm khởi tạo (constructor) cho class Pet
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }
}

let myPet = new Pet('Beo', 2);



class Cat extends Pet {

    static numberOfLegs = 4; // biến static trong class
  
    // Hàm static trong class
    static lazy() { 
        console.log(`All cats are lazy`);
    }

    constructor(name, age) {
        super(name, age); // gọi lên hàm dựng của parent class: Pet
        this.food = `fishes`;
    }
}

let myCat = new Cat();

```
