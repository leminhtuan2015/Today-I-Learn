### React Native Data flow
### React Native Redux Data flow

----------------------------------------------

### React Native State

* Component
  * state
  * props
  
* If we change the **state of component** by **this.setState({})** => **render()** function of component will be called

* this.setState() -> re render()

### React Native Redux State

* When using Redux in React Native 
* component -> dispatch(action) -> reducer -> new state -> re-render
