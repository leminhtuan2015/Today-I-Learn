#### React Native : props vs state

--------------------------------------------

#### React Native : props vs state (Of Components)
* **Components**, **props**, and **state** are key concepts of the **React Native framework**
* props (properties) immutated
* state (state) mutated
* **props** = short for properties
* props vs state are attributes of component
* There are two types of data that control a **component**: **props** and **state**

##### State (Of Components)

* **state** : is the attribute in each **Components**
* Initial **state** is defined inside the Components class by using the state = {} syntax

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
