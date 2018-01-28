#### React Native : Components
#### React Native : Events
#### React Native : Navigator
#### React Native : Redux
--------------------------------------------

#### React Native : Components
* Every view (button, image, text, ...) in React native is sub-class of **Component** class
* Each **Component** have a arrow method named **render() {}** to render view on screen
* **render()** is called each time **state** of component is changed, such as each time when **setState** is called, the **render()** function in a Component will be called simultaneously

#### React Native : Events

```js
class Touch extends Component {
  handlePress(){
    console.log('press');
  }
  handleLongPress(){
    console.log('longPress');
  }
  render() {
    return (
      <TouchableHighlight
        onPress={this.handlePress}
        onLongPress={this.handleLongPress}>
        <View>
          <Text>Press me!</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
```




