### Props vs State (Props stands for properties)
### React Native : props vs state
### React Native State
### State Updates are Merged
### React Native Props
----------------------------------------------------------------------

### Props vs State (Props stands for properties)

* Props: **public final x =**
* State : **private x =**
* **Props** and **state** both is variable of **component**
* The main difference between **props** and **state** is that `props` are immutable => **Props are Read-Only**
* All React components must act like **pure functions** (concepts of functional programming) with respect to their props.
* Whether you declare a component as a function or a class, **it must never modify its own props**, if you try to modify its own props => error occur

#### Why are React props immutable?

* Fist: the reason React props immutable because this is the concept of React component, this is the rule of React component
  * `React is pretty flexible but it has a single strict rule: all React components must act like pure functions with respect to their props.`

* Second: props can be a function or primitive variable or object variable (reference variable) => In case props is object variable and you can change the props that mean, you change the object variable => that make the **side effect** for your app and it will generate many uncontrolled bugs for a React App.

* Thrird: React component follow the concept of functional programing **must be Pure** function and **never Side effect**
    * Pure: https://en.wikipedia.org/wiki/Pure_function
    * Side effect: https://en.wikipedia.org/wiki/Side_effect_(computer_science)

#### Example init props and state

* **Props** and **State** init:
  * **Props** is passed as parameters of function contructor of component
    ```js        
    
        ===> props will be passed to function component (Stateless components)

        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
        
        ===> props will be passed to contructor of class component (Statefull components))

        class Welcome extends React.Component {
          render() {
            return <h1>Hello, {this.props.name}</h1>;
          }
        }

        <Welcome name="tuan"/>
    ```
  
  * **State** is the local private variable inside a component
    ```js
        ===> Variavle state is init inside the contructor of component
        
        Class App extends React.Component {
          constructor(props) {
             super(props);
             
             this.state = {
                header: "Header from props...",
                content: "Content from props..."
             }
          }
        }
    ```


### React Native : props vs state
* React native is just **view layer**, Everything in react-native is component, You have to use **Redux, Saga** to make real app
* **Components**, **props**, and **state** are key concepts of the **React Native framework**
* props (short for properties) immutated : **is the immutated attribute of component**
* state (state) mutated : **is the mutated attribute of component**
* props vs state are **attributes of component**
* There are two types of data that control a **component**: **props** and **state**
* Example:

```js
<a href="http://google.com"> LINK </a>
```

* **a** : Is the component
* **href** : Is the **props** of component **a**
* **LINK** : Is the **state** of component **a**

### React Native State (Of Components)

* **State** : is the attribute in each **Components**
* Initial **state** is defined inside the Components class by using the state = {} syntax
* Each time when **setState** is called, the **render()** function in a Component will be called simultaneously
* Each react component has its own state. State is a collection of values that need to be maintained by component itself

```js
 state = {}
```
```js
import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Home extends Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet'
   }
   
   //Update State Of Component
   updateState = () ⇒ this.setState({ myState: 'The state is updated' })
   
   render() {
      return (
         <View>
            <Text onPress = {this.updateState}>
               {this.state.myState}
            </Text>
         </View>
      );
   }
}

export default Home;
```
### State Updates are Merged
##### Impotant (this.setState)

* When you call **setState()**, React merges the object you provide into the current state.
* **this.setState=({newState})** => method **setState** is JUST **Merge** newState to current state

### React Native Props (Of Components)
* Props are Read-Only
* Example : one basic React Native component is the Image. When you create an image, you can use a prop named source to control what image it shows.
* Props are accessed by  {this.props}

```js
export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
```
