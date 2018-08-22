### Protocol
### Protocol-Oriented Programming in Swift
---------------------

### Protocol (~ Interface in Java)
  - https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/Protocols.html
  - A **protocol** defines a blueprint of **methods, properties**, and other requirements
  - The **protocol** can then be adopted by a class, structure, or enumeration to provide an actual implementation of those requirements
  
  
```swift
  protocol SomeProtocol {
      // protocol definition goes here
  }
  
  class SomeClass: SomeSuperclass, FirstProtocol, AnotherProtocol {
      // class definition goes here
  }

  ```
  
### Protocol-Oriented Programming in Swift
  - In Java **protocols** are termed **interfaces**
  - Protocols is exist alot in Swift, protocols may be contain **methods and variable**
  - At the heart of Swift's design are two incredibly powerful ideas: **protocol-oriented programming** and **first class value** semantics
