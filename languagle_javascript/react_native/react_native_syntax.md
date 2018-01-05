#### What is "this" Context
#### Function as a callback
#### Variables
#### Arrow functions
#### Objects
#### Classes (extends)
#### Spread
#### Modules (How to use code from other file)

--------------------

#### What is "this" Context

* Context is most often determined by how a function is invoked. 
* Inside a function, the value of **this** depends on how the function is called.
* When a function is called as a method of an object, **"this"** is set to the **"object"** the method is called on:
* **this** ở trong 1 function chính là con trỏ (object) đang gọi đến function đó.
* Example : **"this"** is the object called the function "foo"

```js
var obj = {
    foo: function() {
        return this;  // "this" is the object call the function "foo"
    }
};

obj.foo() === obj; // true

```

##### "this" in function

* Every function defined its own "this" value, that mean "this" in function is the object that called the function

##### "this" in arrow function

* An arrow function **does not have its own "this"**
* The "this" in arrow function is the enclosing execution context, the this of parent scope.

#### Function as a callback

* When you pass the function as a callback `onPress={this.callback}` the "this" in callback() will be **null** because we do not know which object call the function callback()

* => When use function as a callback you have to use **arrow function**

```js
class HomeView extends Component<{}> {

  buttonPress_func = () => {    
    this.props.navigator.push({     // "this" is the object called buttonPress_func() , that is null because we do not know which object call this function
      screen: 'DetailView',
      title: undefined,
    });
  }

  buttonPress_arrow_func = () => {    
    this.props.navigator.push({     // "this" is the object of parent scope
      screen: 'DetailView',
      title: undefined,
    });
  }
 
 render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.buttonPress_arrow_func}  // "this" is the object of HomeView (the object call render())
          title="Learn More"
          color="#841584"
        />
      </View>
    );
  }
}

export default HomeView
```



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


#### Modules
* Use code from other file

```js
export Class
export Object
export Variable
export Function
```

```js
import OBJECT_NAME from 'PATH/TO/FILE'

OBJECT_NAME = What ever is exported from that file

```
















