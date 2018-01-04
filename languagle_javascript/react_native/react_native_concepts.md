#### React Native : props vs state
#### React Native : components
--------------------------------------------

#### React Native : props vs state (Of Components)
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

##### State (Of Components)

* **state** : is the attribute in each **Components**
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


##### Props (Of Components)

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

#### React Native : components
* Every view (button, image, text, ...) in React native is sub-class of **Component** class
* Each **Component** have a arrow method named **render() {}** to render view on screen
* **render()** is called each time **state** of component is changed, such as each time when **setState** is called, the **render()** function in a Component will be called simultaneously










