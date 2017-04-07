### Immutable values
### No side-effects
### Higher-order functions
### Currying
### Recursion
### Lazy-evaluation, or delayed-evaluation
### First class functions
### Pure functions
### References
- https://medium.com/swift-programming/swift-functional-programming-basic-concepts-a6b0c3937d56#.e95ns4kuk
- https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536#.r0t8ym2id
- https://msdn.microsoft.com/en-us/library/mt693186.aspx

--------------------


### Immutable values
  - Immutable values: once a “variable” is set, it cannot be changed. In Ruby, this means you effectively have to treat variables like constants.
### No side-effects
  - No side-effects: when passed a given value, a function must always return the same result. This goes hand in hand with having immutable values; a function can never take a value and change it, as this would be causing a side-effect that is tangential to returning a result.
  
### Higher-order functions
  - Higher-order functions: these are functions that allow functions as arguments, or use functions as the return value. This is, arguably, one of the most critical features of any functional language.
  
### Currying
  - Currying: enabled by higher-order functions, currying is transforming a function that takes multiple arguments into a function that takes one argument. This goes hand in hand with partial function application, which is transforming a multi-argument function into a function that takes less arguments then it did originally.
  
### Recursion
  - Recursion: looping by calling a function from within itself. When you don’t have access to mutable data, recursion is used to build up and chain data construction. This is because looping is not a functional concept, as it requires variables to be passed around to store the state of the loop at a given time.

### Lazy-evaluation, or delayed-evaluation
  - Lazy-evaluation, or delayed-evaluation: delaying processing of values until the moment when it is actually needed. If, as an example, you have some code that generated list of Fibonacci numbers with lazy-evaluation enabled, this would not actually be processed and calculated until one of the values in the result was required by another function, such as puts.
### First class functions

### Pure functions
