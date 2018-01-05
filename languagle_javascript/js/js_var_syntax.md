### var syntax

-------------------------------------

### var syntax

* var x = [] // array
* var x = {} // object
* var x = () // variable
* Example:

```js
var x = [1, 2, 3]

var x = {name: "tuan"}

var x = (1 + 2)


class DetailView extends Component<{}> {
 
 // view is a variable
 view = (
  <View style={styles.container}>
   <Button
     //containerViewStyle={styles.buttonContainer}
     color="#E91E63"
     title='BUTTON WITH ICON' />
  
    <TouchableHighlight
       loading={true}
       style={styles.button} >
      <Text> Touch Here </Text>
    </TouchableHighlight>
  </View>
 )

 render() {
    return this.view // view is a variable
  }
}

```
