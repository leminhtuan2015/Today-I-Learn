### First-class function

  - The language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures
  - In languages with first-class functions, the names of functions do not have any special status; they are treated like ordinary variables with a function type
  - The functions is the variables

```js
//Javascript

var multiply = function(x, y) {
   return x * y;
};
```

```swift
//Swift

func jediTrainer () -> ((String, Int) -> String) {
  func train(name: String, times: Int) -> (String) {
    return "\(name) has been trained in the Force \(times) times"
  }
  return train
}
let train = jediTrainer()
train("Obi Wan", 3)

```
