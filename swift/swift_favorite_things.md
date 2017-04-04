
### Some favorite things in Swift

----------------

### Some favorite things in Swift
  - Entry point is declare by ***@UIApplicationMain***
  - File .swift can be not contain any class (file swift có thể không chứa class)
  - File .swift can be contain class with difference name (tên class và tên file không cần giống nhau)
  - Function can be placed out of function
  - Variable can be placed at top-level
  
  ```swift
    import Foundation

    var test = 10

    func hello(){
        print("Hello \(test) \(test1)")
    }

    var test1 = 20

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
