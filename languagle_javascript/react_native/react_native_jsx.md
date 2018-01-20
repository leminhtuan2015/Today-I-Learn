### JSX

* JSX = JS + XML (Use can see **Javascript code + XML code** in a one file)
* React Native is "just" JavaScript + XML 
* **React Native = JavaScript + XML**

```js
setupView = (image) => {
  return (
    <View id="status">
      {ImageManager(image)}
    </View>
   )
}
```

```js
import React, { Component } from 'react';
import {Image}
  from "react-native"

const ImageManager = (image) => {
   if(image == "sunny"){
     return (
           <Image style={{width: 32, height: 32}}
             source={require("../resources/images/sunny.png")} />
      )
   } else if(image == "rainny") {
      return (
           <Image style={{width: 32, height: 32}}
             source={require("../resources/images/rain.png")} />
      )
   }
}

export default ImageManager
```

* With other Mobile Platform
  * Web view layer = HTML
  * Android view layer = XML
  * IOS view layer = XML
  
* And also : **React view layer = XML**

* React Native actually **translates your markup (JSX) to real, native UI element**
  * **<View>** might become an iOS-specific **UIView**
  * **<Text>** might become an iOS-specific **Label**
  * ...

* The update cycle in React Native is the same as in React: when **props or state change**, React Native re-renders the
views.
                                                                                                                         
* JSX combining markup and the JavaScript that controls it into a single file.
