### Generators
### Generator function

-----------------------------

### Generators
* Hàm loại này có thể chạy tưng phần được, Không nhất thiết sẽ chạy toàn bộ hàm như các hàm thông thường.

* You can think of generators as processes (pieces of code) that you can pause and resume:

* With a nomal function when we invoke a nomal function, all boby of that called function will be execute. But with  Generators function, it work with the deffrent way

* When ivoke a generator function it is NOT executed, it will return an iterator object, we can use iterator object to execute the path of boby 's function.

```js
function* genFunc() {
    console.log('First');
    yield;
    console.log('Second');
}
```

### Generator function

* function* is a new "keyword" for generator functions
* Generator function returns a **iterator** object

```js
function* generatorFunction(i) {
  yield i;
  yield i + 10;
}

var gen = generatorFunction(10); // That will NOT execute the function, returned an iterator object

console.log(gen.next().value);   // execute the function's body until the first yield expression
// expected output: 10

console.log(gen.next().value);   // execute the function's body until the next yield expression
// expected output: 20

console.log(gen.next().value);   // executed all and return undefined
// undefined 
```

* Calling a generator function **does not execute its body immediately**; an iterator object for the function is returned instead. 

* When the iterator's next() method is called, the generator function's body is executed until the first yield expression


















