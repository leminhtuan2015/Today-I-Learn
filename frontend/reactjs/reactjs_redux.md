### mapStateToProps
### connect

------------------------------------------------

### mapStateToProps

* mapStateToProps: 
  * **State** here is the global state of redux store (it is NOT state of component)
  * **Props** here is the props of component
* mapStateToProps => Should understand that "map Global State Of Store To Props Of Component"


```js
const mapStateToProps = (globalState)=>{
    # state here is global state of redux store
    return {
        num : globalState.stateOfReducer1.num
    }
}
```

### connect

* Connect the redux store to the view component
* Register the callback function when redux store changed (in React that will callback the render function of component)
* If the redux store changed that will callback the render function of the view component

```js
connect(mapStatetoProps)(ViewComponent)
```

### mapStateToProps + connect

* Step 1: mapStateToProps => return the data object is the mapping between redux state into a object and inject the object from step 1 become the props of Component
* Step 2: connect => register the callback function when redux store changed





