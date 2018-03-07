### React Native Data flow
### React Native Redux Data flow

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
