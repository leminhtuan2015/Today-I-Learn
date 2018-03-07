### React Native Data flow
### React Native Redux Data flow
### React Native Redux Dispatch
### React Native Connect

----------------------------------------------

### React Native Data flow

* Component
  * state
  * props
  
* If we change the **state of component** by **this.setState({})** => **render()** function of component will be called

* this.setState() -> re render()

### React Native Redux Data flow

* When using Redux in React Native 
* component -> dispatch(action) -> reducer -> new state -> re-render

### React Native Redux Dispatch

* When you call **this.props.dispatch({type: TYPE, data: {}})**
  * All reducers will be called and if which reducer equal the **type** will be used


### React Native Connect 
#### Why, How, When Redux re-render a component (Screen)

  * subscribe the store when **did mount** (subscribe mean listening for store change)
  * unsubscribe the store when **will unmount**
  * **subscribe** is the way component will be re-render after reducer change state
  * In React-Native app, we have many **Component** but just which component is subscribing the **Store** will be call re render
  
  * **Example:** Components (Screens) A, B, C , the current component (screen) showing is **B** 
    * **B** is showing => **B** subscribing the **Store** => when store change => re render **B** 

```js
function connect(mapStateToProps, mapDispatchToProps) {
    ...
    // It returns a component

     componentDidMount() {
       // it remembers to subscribe to the store so it doesn't miss updates
       this.unsubscribe = store.subscribe(this.handleChange.bind(this))
     }

     componentWillUnmount() {
       // and unsubscribe later
       this.unsubscribe()
     }

     handleChange() {
       // and whenever the store state changes, it re-renders.
       this.forceUpdate()
     }
}
```
