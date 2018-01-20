### Generators
### Generator function

-----------------------------

### Generators
* You can think of generators as processes (pieces of code) that you can pause and resume:

```js
function* genFunc() {
    console.log('First');
    yield;
    console.log('Second');
}
```

### Generator function

* function* is a new "keyword" for generator functions
* Generator function returns a **Generator** object

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




