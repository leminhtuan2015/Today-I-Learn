
### Reactive Programming

* **Reactive Programming** is an `asynchronous programming paradigm` concerned with `data streams` and the `propagation of change`.

### Rx
* **ReactiveX** or **Rx** is the most popular API for **Reactive programming**
* **Rx (ReactiveX)** is an API for asynchronous programming with observable streams
* **Rx** built on the ideals of the `Observable Pattern`, `Iterator Pattern`, and `Functional Programming`
* `Rx` is based on:
  * Observables
  * Observers : Observer essentially subscribes to an Observable
  * Operators: Operators allow you to transform, combine, manipulate, and work with the sequences of items emitted by Observables

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
