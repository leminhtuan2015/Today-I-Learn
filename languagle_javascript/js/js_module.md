### Modules


---------------------------------------------------------------------------

### Modules

* Example:

```js
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

* Each module is a piece of code that is executed once it is loaded
* Module contain declarations (variable declarations, function declarations, etc.).
* **Modules are singletons**. Even if a module is imported multiple times, only a single “instance” of it exists
