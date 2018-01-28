### Component Lifecycles
### Component APIs
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
  * render()
  * componentDidUpdate()
  
* **Unmounting**: This method is called when a component is being removed
  * componentWillUnmount()
  
* **Change State**
  * setState()
  * forceUpdate()
  
### Component Class Properties
  * defaultProps
  * displayName

### Component Instance Properties
  * props
  * state
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
