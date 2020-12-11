### React Props

* Props are arguments passed into React components.
* Props are passed to components via HTML attributes.
* **React Props** are like function arguments and attributes in HTML.
* **React component** is class in OOP, **React Props** are **Public final** of class in OOP

```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

const myelement = <Car brand="Ford" />;

```
