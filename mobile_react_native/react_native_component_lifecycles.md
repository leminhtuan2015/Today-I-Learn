### Component Lifecycles
### Component APIs (functions of each component)
### Component Class Properties
### Component Instance Properties
### Functions
  * Function **constructor()**
  * Function **componentWillReceiveProps()**
  * Function **setState()**

### Redux: this.props.dispatch({}) + Component API: componentWillReceiveProps()
  
### https://reactjs.org/docs/react-component.html
-----------------------------------


### Component Lifecycles
* **Mounting**: these methods are called when an instance of a component is being created
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

### Component APIs

* **Create instant of component**
  * constructor()
  
* **Mounting**: these methods are called when an instance of a component is being created
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
  
 
### Functions
#### Function constructor()

```js
constructor(props) {
  super(props); // You should call super(props) before any other statement
  this.state = {  // The constructor is the right place to initialize state
    color: props.initialColor
  };
  
  //Here to bind event handlers to the class instance
}
```

* **Don’t try to call setState() from the constructor**
* The constructor for a React component is called before it is mounted
* You should call super(props) before any other statement **Otherwise** this.props will be **undefined** in the constructor, which can lead to bugs
* The constructor is the right place to initialize state
  
#### Function componentWillReceiveProps()

* componentWillReceiveProps is only called when the **props have changed**
* componentWillReceiveProps() is invoked before a mounted component **receives new props**
* Calling **this.setState()** generally **doesn’t trigger componentWillReceiveProps()**
* **this.props.dispatch({})** => that will **change the props** => componentWillReceiveProps() will be called.
  
  
#### Function setState()

* call setState() will changes (**Merge**) to the component state 
* call setState() will re-rendered with the updated state
  
  
### Redux: this.props.dispatch({}) + Component API: componentWillReceiveProps()

* With Redux: at Container we mapping **store** to **props**
* If this.props.dispatch({}) => make store change => make props change => componentWillReceiveProps() will be called.
  
  
  
