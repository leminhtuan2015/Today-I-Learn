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

## Features
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

## Projects

  - The Swift language is managed as a collection of project.

    - *Swift compiler* command line tool. (Responsible for translating Swift source code into efficient, executable machine code)

    - *Standard library* bundled as part of the language.

    - *Core libraries* that provide higher-level functionality.

    - *LLDB debugger* which includes the Swift REPL.

    - *Swift package manager* for distributing and building Swift source code.

# 2. Getting started
## Swift REPL (read-eval-print-loop) *interactive shell*

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

## LLDB Debugger

  - https://swift.org/getting-started/#using-the-build-system

  - Allow you debug app in terminal.

# 3. Tutorial

  - https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/GuidedTour.html#//apple_ref/doc/uid/TP40014097-CH2-ID1

  - https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/TheBasics.html#//apple_ref/doc/uid/TP40014097-CH5-ID309

  - https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/AboutTheLanguageReference.html#//apple_ref/doc/uid/TP40014097-CH29-ID345
## Syntax

  - The Syntax of **Swift** is the same the syntax of **Scala**

### Type Safety and Type Inference

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

  - Swift is type safe. But it also support type inference

  - If you dont specify the type of value you need, Swift uses type inference to work out the appropriate type.

  - Type inference enables a compiler to deduce the type of the variables when it compiles your code.

  - When you use **type inference** Swift will automatically assign the type for the variables.


### Define a variable

```
var a = 42          // variable
let b = 42          // constant
c = 50

var x: Double = 70  // explicit
var y = 70          // implicit
```

### Convert variable type

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

### Swift interpolation

  - "\()"

```
  let apples = 3
  let appleSummary = "I have \(apples) apples."
```

### Array

  - Define an array by "[]"

```swift

var list = ["catfish", "water", "tulips", "blue paint"]  // Create an array

var list = [String]()    // Create an empty list, explicit

var list = []            // Create an empty list, implicit      

```

### Functions and Closures

  - Swift support First-class-function
    - supports passing functions as arguments
    - return them as the values.

  - Use **func** to declare a function

  - Use **->** to define the function’s return type

#### First-class-function
  - Functions are a first-class type. This means that a function can return another function as its value.

##### Return a function
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
##### A function can take another function as one of its arguments.

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

#### Return multiple values from a function.

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
