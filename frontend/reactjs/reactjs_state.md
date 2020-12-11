### React State
### Creating the state Object
### Changing the state Object

------------------------------------------------------

### React State

* React components has a **built-in state object**. 
  * Each **Component class** have build-in property is **State object** 
  * If you want to view the **State object** of component => console.log(this.state)

* When the state object changes, the component re-renders (the function render() will be execute).

### Creating the state Object

* The default build-in **State object** is empty: default State = **{}**

```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};  // Specify the state object in the constructor method:
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

### Changing the state Object

* To change a value in the state object, use the **this.setState()** method.

* **SHOULD NOT CHANGE THE STATE OBJECT DIRECTLY**: 
  * Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).




