### Redux diagram
### Redux Parts
### Redux life cycle

----------------------------------------------------------------------

### Redux diagram
![Redux diagram](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/languagle_javascript/react_native/react_native_redux_architecture_1.png)

### Redux Parts
* Redux Provider (provide Store object to View)
* Redux Store (Contain all Reducer (Model object), Store Contain **multiple Reducer**, each **Reducer** manage one **State object**)
* Redux Container (Connect **View** <-> **Store** )
* Redux Reducer (The same model object, each **Reducer** manage one **state object** )

#### Redux Provider

* **Provider** is a React component given to us by the “react-redux” library. 
* **Provider** serves just one purpose : to “provide” the store to its child components

#### Redux Container

* Connect **Component (View)** <-> **Store** 

```js
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CounterView from '../components/views/CounterView.js'; // CounterView is a Component (View)

// 'stateObject' is the state object from <Provider store={Store}>
// Provider is given the store as a prop
// data = stateObject = store.getState()

const mapStateToProps = (stateObject) => ({
  data: stateObject
})

// 'dispatch' is the action from <Provider store={Store}>
// increment = store.dispatch(store.getState(), type)

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

// Connect View to Store
const CounterViewContainer = connect(mapStateToProps, mapDispatchToProps)(CounterView)

export default CounterViewContainer
```

#### Redux Store (Model Layer)

* **Store** Contain multiple **Reducer**, each **Reducer** manage one state object
* Unlike in Flux, Redux only has one store for the whole app
* Redux **Store** automatically pass the **current state** of the app and the **action** to **Reducer**
* **Store** is the object that contain all state object of each **Reducer**

* State (also called the state tree) is a broad term, but in the Redux API it usually refers to the single state value that is managed by the store and returned by getState(). It represents the entire state of a Redux application, which is often a deeply nested object.

* By convention, the top-level state is an object or some other key-value collection like a Map, but technically it can be any type. Still, you should do your best to keep the state serializable. Don't put anything inside it that you can't easily turn into JSON.

* Example:

```js
each reducer manage one state object
we have reducer 1 will manage the state object = {number: 0}
we have reducer 2 will manage the state object = {number1: 0}

// combine all sub state object to one state object
const reducers = combineReducers({
 CountReducer,
 CountReducer1,
});

// create only one state object for all application
let Store = createStore(reducers)

console.log("Store state: " + JSON.stringify(Store.getState()))

State of app is all state object of each reducer

=> {"CountReducer":{"number":0},"CountReducer1":{"number1":0}}

```

```js
export const CountReducer = (stateObject = {number: 0}, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return {number: stateObject.number + 1};
  case 'DECREMENT':
    return {number: stateObject.number - 1};
  default:
    return stateObject
  }
}

export default CountReducer
```

```js
export const CountReducer1 = (stateObject = {number1: 0}, action) => {
  switch (action.type) {
  case 'INCREMENT1':
    return {number1: stateObject.number1 + 10};
  case 'DECREMENT1':
    return {number1: stateObject.number1 - 10};
  default:
    return stateObject
  }
}

export default CountReducer1
```

```js
import { createStore, combineReducers } from 'redux'
import CountReducer from '../reducers/CountReducer'
import CountReducer1 from '../reducers/CountReducer1'

// combineReducers : The resulting reducer calls every child reducer, and gathers their results into a single state object
const reducers = combineReducers({
 CountReducer,
 CountReducer1,
});

// Pass current state and action for reducers
let Store = createStore(reducers)

console.log("Store state: " + JSON.stringify(Store.getState()))
// Store state: {"CountReducer":{"number":0},"CountReducer1":{"number1":0}}

export default Store;

```

#### Redux Reducer

* Each **Reducer** manager one state object
* **Reducer** is the same model object, all business logic should be here
* Reducer to update the state of the app.

### Redux life cycle

* **View** --(fire_event)--> **Container** --dispatch(action)--> **Store** --passing(currentState, action)--> **Reducer** --update(currentState)--> Done
