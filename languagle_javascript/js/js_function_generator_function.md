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

* **[function*]** is a new "keyword" for generator functions
