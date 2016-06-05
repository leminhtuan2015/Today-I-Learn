# 1. Overview.
  - Swift (programming language) designed by *Apple Inc*.
  - Swift is an opensource tool under Apache 2.0 license.
  - First appeared:	June 2, 2014.
  - It is a *compiled programming language*.
  - Paradigm: Swift use multi-paradigm
    - Protocol-oriented programming.
    - object-oriented.
    - functional.
  -  Swift is intended as a replacement for C-based languages (C, C++, and Objective-C).
#### Design patterns
- IOS frameworks rely on design patterns such as model-view-controller and delegation in their implementation
- The first thing to notice is that **iOS apps** use a model-view-controller architecture

#### Features
  - Memory is managed automatically.
  - Supports inferred types.
```
  int i;    // declare type
```
```
  var i;    // inferred-type
```
  - Dont need semicolons (*;*) at the end of each line code.
  - Closures unified with function pointers.
  - Tuples and multiple return values.
  - Generics.
  - Functional programming patterns, e.g., map and filter.

#### Projects
  - The Swift language is managed as a collection of project.
    - *Swift compiler* command line tool. (Responsible for translating Swift source code into efficient, executable machine code)
    - *Standard library* bundled as part of the language.
    - *Core libraries* that provide higher-level functionality.
    - *LLDB debugger* which includes the Swift REPL.
    - *Swift package manager* for distributing and building Swift source code.

# 2. Getting started
#### Swift REPL (read-eval-print-loop) *interactive shell*
  - Swift REPL is a *interactive shell* the same
    - irb                 : Ruby    (interpreted)
    - rails c             : Rails   (interpreted)
    - node (Javascript)   : nodejs  (interpreted)
    - scala               : Scala   (compiled)
    - swift (REPL)        : Swift   (compiled)
    - python              : Python  (interpreted)
    - php -a              : PHP     (interpreted)

  - Swift and Scala both have *interactive shell* but they is *compiled languages*
  - All of the functionality of Swift is available to you from the REPL

#### LLDB Debugger
  - https://swift.org/getting-started/#using-the-build-system
  - Allow you debug app in terminal.
  
# 3. App Programming Guide for iOS.
  - https://developer.apple.com/swift/resources/
  
#### 3.1 The App Bundle (Folder structure)
  - When you build your iOS app, Xcode packages it as a bundle
  - A bundle is a directory in the file system that groups executable code and related resources such as images and sounds together in one place.
  - **App executable (hello.app)** :
    - The executable file contains your app’s compiled code. The name of your app’s executable file is the same as your app name

  - **Info.plist** : 
    - This file contains metadata about your app, which the system uses to interact with your app. 
    - Xcode creates this file for you automatically based on your project’s configuration and settings.
  
  - **MainBoard.storyboard** :
    - Storyboards contain the views and view controllers that the app presents on screen. 
    - Views in a storyboard are organized according to the view controller that presents them. 
    - Storyboards also identify the transitions (called segues) that take the user from one set of views to another.
#### 3.2 The App Life Cycle

#### Entry point (The Main Function)
  @UIApplicationMain statement in AppDelegate.Swift creates a implicit entry point for Swift program
  - The swift Book says: "Code written at global scope is used as the entry point for the program, so you don’t need a main function".
  - If you have a look at your AppDelegate there is a marker @UIApplicationMain which is outside of any scope and considered as entry point.
  
#### The Structure of an App
  - The heart of every iOS app is the **UIApplication** object.
  
![alt tag](https://raw.githubusercontent.com/leminhtuan2015/Today-I-learned/master/swift/images/mvc-ios.png)

![alt tag](https://raw.githubusercontent.com/leminhtuan2015/Today-I-learned/master/swift/images/details-mvc.png)

# 4. Tutorial
#### The Swift Programming Language
  - https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/index.html
  
#### App Programming Guide for iOS
  - https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html

#### Start Developing iOS Apps (Swift)
  - https://developer.apple.com/library/ios/referencelibrary/GettingStarted/DevelopiOSAppsSwift/index.html

### 4.1 Syntax

  - The Syntax of **Swift** is the same the syntax of **Scala**

### 4.2 Type Safety and Type Inference

  - Type Safety: A type safe language encourages you to be clear about the types of variables.

  - Type inference : Type inference refers to the automatic deduction of the data type of an expression in a programming language.

  - For example Java and Javascript
     - Java        : type safety - The Java language is designed to enforce type safety
     - Javascript  : type inference

```java
Int x = 1   // Java type safety
```

```Javascript
var x = 1   // Javascript type inference
```

#### Type Safety
  - Swift is a type-safe language which means if a part of your code expects a String, you can't pass it an Int by mistake.

  - As Swift is type-safe, it performs type-checks when compiling your code and flags any mismatched types as errors.

  - Swift is type safe. But it also support type inference

  - Type inference enables a compiler to deduce the type of the variables when it compiles your code.

  - When you use **type inference** Swift will automatically assign the type for the variables.
  
#### Type Inference
  - Type inference enables a compiler to deduce the type of a particular expression automatically when it compiles your code, simply by examining the values you provide. 
  
  -   - If you dont specify the type of value you need, Swift uses type inference to work out the appropriate type.


### 4.3 Define a variable

- Create a variable :

```
  var a = 42          // variable
  let b = 42          // constant
  c = 50

  var x: Double = 70  // explicit
  var y = 70          // implicit
```

- Swift auto detect you type of variables
- Each variable in Swift must have a type, when one variable is asigned a type that can NOT change anymore.
- Once a constant or variable has a type, that type can’t be changed.

```
var a = 1      // the a variable will be asigned type is Int
a = "hello"    // ERROR, a cannot be re-asigned to String type.
```

### 4.4 Convert variable type

  - Values are never implicitly converted to another type

  - If you need to convert a value to a different type, explicitly make an instance of the desired type.

  - Javascript automatically implicit convert data type, but Swift is never.

```Javascript
1 + "1"

=> '11'
```

```Swift
let label = "The width is "
let width = 94
let widthLabel = label + String(width)
```

### 4.5 Swift interpolation

  - "\()"

```
  let apples = 3
  let appleSummary = "I have \(apples) apples."
```

### 4.6 Array

  - An array is a data type that keeps track of an ordered collection of items.
  - Define an array by "[]"

```swift

var list = ["catfish", "water", "tulips", "blue paint"]  // Create an array

var list = [String]()    // Create an empty list, explicit

var list = []            // Create an empty list, implicit      

```

### 4.7 Functions and Closures

  - Swift support First-class-function
    - supports passing functions as arguments
    - return them as the values.

  - Use **func** to declare a function

  - Use **->** to define the function’s return type

### 4.8 First-class-function
  - Functions are a first-class type. This means that a function can return another function as its value.

####  Return a function
```swift
func makeIncrementer() -> ((Int) -> Int) {
    func addOne(number: Int) -> Int {
        return 1 + number
    }
    return addOne
}
var increment = makeIncrementer()
increment(7)
```
#### A function can take another function as one of its arguments.

``` swift
func hasAnyMatches(list: [Int], condition: (Int) -> Bool) -> Bool {
    for item in list {
        if condition(item) {
            return true
        }
    }
    return false
}
func lessThanTen(number: Int) -> Bool {
    return number < 10
}
var numbers = [20, 19, 7, 12]
hasAnyMatches(numbers, condition: lessThanTen)
```

### 4.9 Return multiple values from a function.

  - Use **Tuple** to return multiple

```
func calculate(scores: [Int]) -> (min: Int, max: Int, sum: Int) {
    var min = scores[0]
    var max = scores[0]
    var sum = 0

    return (min, max, sum)
}

let statistics = calculate([1, 2, 3])

print(statistics.sum)
print(statistics.2)

```

### 4.10 Optional type



