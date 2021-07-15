### mapStatetoProps
### connect

------------------------------------------------

### mapStateToProps

* mapStateToProps: 
  * **State** here is the root state of redux store (it is NOT state of component)
  * **Props** here is the props of component
* mapStateToProps => Should understand that "map Root State Of Store To Props Of Component"


```js
const mapStateToProps = (state)=>{
    # state here is root state of redux store
    return {
        num : state.counter.num
    }
}
```

### connect

* Linking the state of redux store to the view component
* Associate view component with the state of Redux store
* If the state of redux changed that will update the view

```js
connect(mapStatetoProps)(App)
```

### mapStateToProps + connect

* Step 1: mapStateToProps => return the data object is the mapping between redux state into a object
* Step 2: connect => inject the object from step 1 become the props of Component





