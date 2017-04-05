
### @UIApplicationMain attribute
### @objc attribute
### @escaping
### File vs Class
### Value Parameters - reference parameter
### Lazy variable (Stored Property)


----------------

### @UIApplicationMain: Entry-point
  - Entry point is declare by ***@UIApplicationMain***
  - Change ***AppDelegate.swift*** ------> ***Main.swift***
  - In ***Main.swift*** change ***class AppDelegate*** ------> ***class Hello***
  
  ```swift
  // file Main.swift
  
  @UIApplicationMain
  class Hello: UIResponder, UIApplicationDelegate { 
     ...
  }
  ```
  
### @objc attribute
  - The @objc attribute makes your Swift API available in Objective-C and the Objective-C runtime
  - You can call Swift from Objective-C 
  
### @escaping

scaping and Non-Escaping in Swift 3

In Swift 1 and 2, closure parameters were escaping by default. If you knew your closure wouldn’t escape the function body, you could mark the parameter with the @noescape attribute.

In Swift 3, it’s the other way around: closure parameters are non-escaping by default. If you intend for it to escape the function, you have to mark it with the @escaping attribute.
 
### File vs Class
  - File .swift can be not contain any class (file swift có thể không chứa class)
  - File .swift can be contain class with difference name (tên class và tên file không cần giống nhau)
  - Function can be placed out of Class
  - Variable can be placed at top-level
  - Expressions are ***NOT*** allowed at the top level (Không cho phép gọi hàm ở top level, mà phải gọi trong class/trong hàm)

  ```swift
    import Foundation

    // Variable can be placed at top-level 
    var test = 10  

    // Function dont need to be inside class
    func hello(){
        print("Hello \(test) \(test1)")
    }

    var test1 = 20

    // Class name and file name are NOT related 
    class A {
        init() {}

        func hello() {
            print("A hello")
        }
    }
  ```
  
  - Call from other swift file:
  
  ```swift
  
  hello() // Hello 10 20
  
  ```
  
### Value Parameters - reference parameter
  - In Swift you ***CAN NOT*** change ***Value Parameters*** of function
  - This is different from JavaScript, Javascript ***CAN*** change ***Value Parameters*** of function
  
  ```swift
  
  func myFunction(name: String){
     name = "changed"  // Error here because you can not change the "name" parameters
     print(name)
  }
  
  ```
### Lazy variable (Stored Property)

```swift
lazy var myLabel: UILabel = {
    var temporaryLabel: UILabel = UILabel()
    ...
    return temporaryLabel
}()
```







