### React Components
### Class Components
### Functional Components

--------------------------------------------------------------

### React Components

* React Native Components = **Class in OOP**
  * States = **private** variables of class
  * Props = **public final** variables of class
  
* Components are independent and reusable bits of code.
* Components come in two types:
    * Class components
    * Function components
    
### Class Components

* Must be extend from **Component**
* Must be have **render function**
* Have state of props
* Can change the state to update view dynamic
* Using when your component is dynamic view

* Class components are JavaScript ES2015 classes that extend a base class from React called **Component**

```js
class App extends Component {
    render () {
        return (
            <Text>Hello World!</Text>
        )
    }
}
```

### Functional Components

* Using when your view is NOT dynamic and the view never change

```js
const PageOne = () => {
    return (
        <h1>Page One</h1>
    );
}
```
