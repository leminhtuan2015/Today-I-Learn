### Flutter Widget Property (props)
### Flutter Widget State

--------------------

### Flutter Widget Property (props)

* **Props**: public final x =
* **State**: private x =

* React Native  **Props of components** = Fluter **public final variable or function of Widget** 
* React Native  **State of components** = Fluter **private variable or function of Widget** 

```js
// React Native
class CustomCard extends React.Component {
  render() {
    return (
      <View>
        <Text> Card {this.props.index} </Text>
        <Button
          title='Press'
          onPress={() => this.props.onPress(this.props.index)}
        />
      </View>
    );
  }
}
class App extends React.Component {

  onPress = index => {
    console.log('Card ', index);
  };

  render() {
    return (
      <View>
        <FlatList
          data={[ ... ]}
          renderItem={({ item }) => (
            <CustomCard onPress={this.onPress} index={item.key} />
          )}
        />
      </View>
    );
  }
}
```


```dart
// Flutter
class CustomCard extends StatelessWidget {

  CustomCard({@required this.index, @required this.onPress});
  final index;
  final Function onPress;

  @override
  Widget build(BuildContext context) {
  return Card(
    child: Column(
      children: <Widget>[
        Text('Card $index'),
        FlatButton(
          child: const Text('Press'),
          onPressed: this.onPress,
        ),
      ],
    ));
  }
}
    ...
//Usage
CustomCard(
  index: index,
  onPress: () {
    print('Card $index');
  },
)
```


### Flutter Widget State

#### Stateful and stateless widgets

* In Flutter: A widget is either stateful or stateless
* **React native function components = Flutter stateless widgets**
* **React native class components = Flutter stateful widgets**

* A stateless widget never changes. Icon, IconButton, and Text are examples of stateless widgets
* A stateful widget is dynamic: for example, it can change its appearance in response to events triggered by user interactions or when it receives data. Checkbox, Radio...




