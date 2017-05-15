### Closure Expression Syntax
### Closure use for callback
### Swift first-class function
### Function is the special case of **Closure**
### Passing and returning functions

--------------------------------------

### Closure Expression Syntax

- Closure is block of code that can pass to a function as an agrument
  ```swift
  { (parameters) -> [return type] in
      statements
  }
  ```

- **Function** is the special case of **Closure**

### Closure use for callback
  - We can pass functions as parameter
  - Example closure for callback

```swift
  func show(callback: @escaping () -> Void = {}){
      callback()
  }

  show(callback: {
      // this is a body of callback function
      print("hello")
  })

  -----------OR----------------------------

  func callback(){
      // this is a body of callback function
      print("hello")
  }

  show(callback: callback)
```

```swift
func updatePassword(callback: @escaping (_ isSuccess: Bool, _ message: String, _ user: User?) -> Void) {
  callback(true, "OKIE", User())
}
       
func callback(isSuccess: Bool, message: String, user: User?){
 // this is a body of callback function
}
     
// pass callback as an agrument
updatePassword(callback: callback)

```

### Swift first-class function
  - In swift Function are a first-class type
  - We can pass functions as parameters

```swift
  func functionA() {
      println("Hello by functionA")
  }

  func executeFunction(function: () -> ()) {
      function()
  }

  executeFunction(functionA)
```

```swift
  func hello(){
    println("Hello haha")
  }
  
  var x = hello
  
  hello()  //  Hello haha
  x()      //  Hello haha
  
  

```

### Function is the special case of **Closure**
  - Function is the special case of **Closure**
  
```swift
func hello(){
  print("hello")
}

var x = {() -> Void in
  print("Hi")
}

//OR (Other way to create a function/closure)
/*
var x: () -> Void = {() -> Void in
  print("Hi")
}

var x: () -> Void = {_ in
  print("Hi")
}
*/

var y = hello

hello()
x()
y()

=>
hello
Hi
hello

```

### Passing and returning functions

```swift
var callback: (_ status: CallbackType, _ message: String) -> Void = {
  (_ status: CallbackType, _ message: String) -> Void in
    Logger.log(string: "Call back gg login : " + message)
}

-----OR-------
var callback = {(_ status: CallbackType, _ message: String) -> Void in
    Logger.log(string: "Call back gg login : " + message)
}

public func setCallback(callback: @escaping (_ status: CallbackType, _ message: String?) -> Void) {
    self.callback = callback
}

public func getCallback() -> ((CallbackType, String) -> Void) {
    return self.callback
}

getCallback()(nil, "OK")
```







