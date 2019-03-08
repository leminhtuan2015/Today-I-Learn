
### Reactive Programming
### Rx
### Rx support languages
### A Common Use-Case of Rx
### The hardest part of the learning Reactive Programming
### The building blocks of Reactive Programming

------------------------------------------------------------------------------------------

### Reactive Programming

* **Reactive Programming** is an `asynchronous programming paradigm` concerned with `data streams` and the `propagation of change`.

### Rx
* **ReactiveX** or **Rx** is the most popular API for **Reactive programming**
* **Rx (ReactiveX)** is an API for asynchronous programming with observable streams
* Rx is a combination of the best ideas from the Observer pattern, the Iterator pattern, and functional programming
* In Reactive programming , everything can be a stream of data.
* Rx built on the ideals of the `Observable pattern`, `Iterator pattern`, and `Functional Programming`
* `Rx` is based on:
  * Observables
  * Observers : Observer essentially subscribes to an Observable
  * Operators: Operators allow you to transform, combine, manipulate, and work with the sequences of items emitted by Observables
  
### Rx support languages
* Languages
  * Java: RxJava
  * JavaScript: RxJS
  * C#: Rx.NET
  * C#(Unity): UniRx
  * Scala: RxScala
  * Clojure: RxClojure
  * C++: RxCpp
  * Lua: RxLua
  * Ruby: Rx.rb
  * Python: RxPY
  * Go: RxGo
  * Groovy: RxGroovy
  * JRuby: RxJRuby
  * Kotlin: RxKotlin
  * Swift: RxSwift
  * PHP: RxPHP
  * Elixir: reaxive
  * Dart: RxDart

### A Common Use-Case of Rx

* Search word in dictionary:
  * Search for a word in dictionary (search in database or call API to search)
  * Keyword for searching is the user input from textfield
 
* Nếu bắt sự kiện cho việc mỗi lần thay đổi text trong textfield thì sẽ search trong database hoặc call API thì sẽ tốn tài nguyên và làm performent không tốt.

* Cách giải quyết: sẽ thực hiện quá trình search hoặc call API khi user dừng lại việc nhập vào textfield sau 1 giây


```js

// RxJS


const search = (action$, store) =>
  action$.ofType('SEARCH')
  .debounceTime(1000)
  .mergeMap(action =>
    ajax.getJSON(`https://someapi/words/${action.payload}`)
     .map(payload => ({ type: 'SET_RESULTS', payload }))
     .catch(payload => Observable.of({type: 'API_ERROR', payload}))
  )
```

### The hardest part of the learning Reactive Programming

* The hardest part of the learning `Reactive Programming` is thinking in Reactive. It's a lot about letting go of old `imperative` and `stateful` habits of typical programming, and forcing your brain to work in a different paradigm


### The building blocks of Reactive Programming

* Observables
  * Observables are the data source /stream
  * can emit multiple values, just one, or none
  * can also emit errors
  * can be infinite or finite, in which case they emit their completion event
  
* Subscribers
  * Subscribers subscribe to Observables
  * they consume/observe the data
  * they also receive the errors and completion events from the Observable
  
* Operators
  * used to create Observables (timers, ranges, from other data sources)
  * used to transform Observables (map, buffer, group, scan, etc)
  * used to filter Observables (filter, distinct, skip, debounce, etc)
  * used to combine Observables (zip, merge, combine latest, etc)

* Schedulers
  * mechanism that allows us to easily add threading to our Observables and Subscribers
  * subscribeOn() specifies on which Scheduler to Observables should operate
  * observeOn() specifies on which Scheduler/Thread the Subscribers should be notified



























