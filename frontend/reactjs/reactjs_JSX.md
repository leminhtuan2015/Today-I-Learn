### What is JSX?

* JSX stands for JavaScript XML.
* JSX allows us to write HTML in React. **HTML code can be write in JS code**
* JSX makes it easier to write and add HTML in React.

```js

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    const myelement = <h1>My Car {this.state.brand}</h1>;  // <<<< THIS IS JSX

    return (
      myelement
    );
  }
}

```
