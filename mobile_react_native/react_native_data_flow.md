### React Native Data flow
### React Native Redux Data flow
### React Native Redux Dispatch

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
