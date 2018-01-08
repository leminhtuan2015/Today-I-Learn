### Redux diagram
### Redux Parts

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

#### Redux Store (Model Layer)

* **Store** Contain multiple **Reducer**, each **Reducer** manage one state object
* Unlike in Flux, Redux only has one store for the whole app
* Redux **Store** automatically pass the **current state** of the app and the **action** to **Reducer**

* **Store** is the object that contain all state object of each **Reducer**

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
* **Reducer** is the same model object
* Reducer to update the state of the app.

#### Cycle

* View --(fire_event)--> Container --dispatch(action)--> Store --passing(currentState, action)--> Reducer --update(currentState)--> Done
