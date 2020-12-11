### Vuejs Data Binding
### Vuejs Data VS Reactjs state

---------------------------------------

### Vuejs Data Binding

* When the variable in **data** changed => the components referent to that variable will be updated 
* When the variable **message** changed => the content of HTML will be updated auto

```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: "Test"
    }
  }
</script>

```

### Vuejs Data VS Reactjs state

* Vuejs Data = Reactjs state
* In React : When the state object changes, the component re-renders.
* In Vuejs : When the data object changes, the template re-renders.


```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};  // <<<<<<<<< When the state object changes, the component re-renders
  }
  render() {
    return (
      <div>
        <h1>My Car {this.state.brand}</h1>
      </div>
    );
  }
}
```

```js
// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0  // <<<<<<<<<<<<<<<<<<< When the data object changes, the template re-renders
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
