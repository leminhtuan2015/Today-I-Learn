### Redux diagram
### Redux Parts

----------------------------------------------------------------------

### Redux diagram
![Redux diagram](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/languagle_javascript/react_native/react_native_redux_architecture_1.png)

### Redux Parts
* Redux Provider
* Redux Store (Model Layer)
* Redux Container
* Redux Reducer

#### Redux Provider

* **Provider** is a React component given to us by the “react-redux” library. 
* **Provider** serves just one purpose : to “provide” the store to its child components

#### Redux Container

* Connect **Component (View)** <-> **Store (Model)** 

#### Redux Store (Model Layer)

* **Store** is the model layer
* Unlike in Flux, Redux only has one store (state) for the whole app
* Redux **Store** automatically pass the **current state** of the app and the **action** to **Reducer**

#### Redux Reducer
* Reducer to update the state of the app.

#### Cycle

* View --(fire_event)--> Container --(dispatch)--> Store --passing(currentState, action)--> Reducer --update(currentState)--> Done
