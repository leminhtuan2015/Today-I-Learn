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
function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
```
