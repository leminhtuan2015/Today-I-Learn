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

#### Redux Reducer

* **Reducer** is the same model object
* Reducer to update the state of the app.

#### Cycle

* View --(fire_event)--> Container --dispatch(action)--> Store --passing(currentState, action)--> Reducer --update(currentState)--> Done
