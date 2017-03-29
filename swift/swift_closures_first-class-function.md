### Closure Expression Syntax
### Closure use for callback
### Swift first-class function
### Function is the special case of **Closure**

--------------------------------------

### Closure Expression Syntax

- Closure is block of code that can pass to a function as an agrument
  ```swift
  { (parameters) -> return type in
      statements
  }
  ```

- **Function** is the special case of **Closure**

### Closure use for callback
  - We can pass functions as parameter
  - Example closure for callback

```swift
    class A {
      class func show(callback: @escaping () -> Void = {}){
          callback()
      }
    }

    class B {
        A.show(callback: {
            // this is a body of callback function
            print("hello")
        })
    
        OR

        func callback(){
            // this is a body of callback function
            print("hello")
        }

        A.show(callback: callback)
    }
```

```swift

    class A {
       class func updatePassword(callback: @escaping (_ isSuccess: Bool, _ message: String, _ user: User?) -> Void) {
          callback(true, "OKIE", User())
       }
     }

  class B {
     func callback(isSuccess: Bool, message: String, user: User?){
       // this is a body of callback function
     }
     
     // pass callback as an agrument
     A.updatePassword(callback: callback)
   }

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
