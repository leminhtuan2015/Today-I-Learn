### Closure Expression Syntax
### Closure use for callback

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
- Example closure for callback

```swift
    func show(callback: @escaping () -> Void = {}){
        callback()
    }

    show(callback: {
        // this is a body of callback function
        print("hello")
    })
    
    OR
    
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
