### React Native Data flow
### Redux Data flow
### Redux Dispatch
### Redux Connect (Why, How, When Redux re-render a component (Screen))
### Redux Connect + React Native Navigation : EXCEPTION

----------------------------------------------

### React Native Data flow

* Component
  * state
  * props
  
* If we change the **state of component** by **this.setState({})** => **render()** function of component will be called

* this.setState() -> re render()

### Redux Data flow

* When using Redux in React Native 
* component -> dispatch(action) -> reducer -> new state -> re-render

### Redux Dispatch

* When you call **this.props.dispatch({type: TYPE, data: {}})**
  * All reducers will be called and if which reducer equal the **type** will be used


### Redux Connect

#### Why, How, When Redux re-render a component (Screen)
  * Khi Reducer thay đổi giá trị của store thì chỉ duy nhất component (screen) nào đang active (đang subscribe to store by connect) sẽ được gọi hàm **render()**
  
  * EX: Có n screen, A, B , C , ..., Screen B đang active, khi reducer update store thì chỉ duy nhất Screen B gọi hàm **render** vì Screen B đang **Subscribe** store

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

### Redux Connect + React Native Navigation : EXCEPTION

* Screen A -> B -> C

* When using Redux + React Native Navigation Do not know why **componentWillUnmount** is not called

* Screen A still subscribe the store when we move to screen B => Each time store updated by reducer, screen A still call re render => When update store both A, B screen will be call re render

* This is **React Native Navigation : EXCEPTION** because with nomal React Native, when the component is hide => that will call **componentWillUnmount**  => that component will un-subscribe the store => that will not re render when reducer update store























