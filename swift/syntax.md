## Tutorial
#### The Swift Programming Language
  - https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/index.html
  
#### App Programming Guide for iOS
  - https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html

#### Start Developing iOS Apps (Swift)
  - https://developer.apple.com/library/ios/referencelibrary/GettingStarted/DevelopiOSAppsSwift/index.html

## Syntax

  - The Syntax of **Swift** is the same the syntax of **Scala**

## Type Safety and Type Inference

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


## Define a variable

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

## Convert variable type

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

## Interpolation

  - "\()"

```
  let apples = 3
  let appleSummary = "I have \(apples) apples."
```

## Array

  - An array is a data type that keeps track of an ordered collection of items.
  - Define an array by "[]"

```swift

var list = ["catfish", "water", "tulips", "blue paint"]  // Create an array

var list = [String]()    // Create an empty list, explicit

var list = []            // Create an empty list, implicit      

```

## Functions and Closures

  - Swift support First-class-function
    - supports passing functions as arguments
    - return them as the values.

  - Use **func** to declare a function

  - Use **->** to define the function’s return type

## First-class-function
  - Functions are a first-class type. This means that a function can return another function as its value.

#### Return a function
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

## Return multiple values from a function.

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

## Functions and Methods
  - `Functions and Methods are deffrent`
  - A function is a reusable, is a block of code that can be referred (called) to from many places in a program.
  - Declare a function by `func`
  - Call a function by call the name of function.
  
```swift
  func greet(name: String, day: String) -> String {
      return "Hello \(name), today is \(day)."
  }
```

  - Methods is exist in Class, we call methods on the object of class.
  - Call a method using the dot syntax
  - For example: insert is a method of array object (array is a object)
  
```swift
  var array = ["apple", "banana", "dragonfruit"]
  array.insert("cherry", atIndex: 2)
  array
```
## Classes and Initializers


