### Component Lifecycles
### Component APIs (functions of each component)
### Component Class Properties
### Component Instance Properties

-----------------------------------

### Component Lifecycles
* **Mounting**: these methods are called when an instance of a component is being created
* **Updating**: These methods are called when a component is being re-rendered (update can be caused by changes to props or state)
* **Unmounting**: This method is called when a component is being removed

### Component APIs (functions of each component)
* **Mounting**: these methods are called when an instance of a component is being created
  * constructor()
  * componentWillMount()
  * render()
  * componentDidMount()
  
* **Updating**: These methods are called when a component is being re-rendered (update can be caused by changes to props or state)
  * componentWillReceiveProps()
  * shouldComponentUpdate()
  * componentWillUpdate()
  * render() : **render() will not be invoked if shouldComponentUpdate() returns false.**
  * componentDidUpdate()
  
* **Unmounting**: This method is called when a component is being removed
  * componentWillUnmount()
  
* **Change State**
  * setState() : **setState() will always lead to a re-render unless shouldComponentUpdate() returns false**
  * forceUpdate()
  
### Component Class Properties
  * defaultProps
  * displayName

### Component Instance Properties
  * props
  * state
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
