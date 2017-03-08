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
