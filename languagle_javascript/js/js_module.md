### Modules
### Modules import/export

---------------------------------------------------------------------------

### Modules
* http://exploringjs.com/es6/ch_modules.html#sec_modules-in-javascript

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
#### What is module?
* Each module is a piece of code that is executed once it is loaded
* Module contain declarations (variable declarations, function declarations, etc.).
* **Modules are singletons**. Even if a module is imported multiple times, only a single “instance” of it exists

#### Use case
* Modules help developer’s **separate functionality** and **organize the codebase**
* **One of the largest reasons for modules is** :  JavaScript’s global namespace which can become easily polluted
* **Functions are the only thing in JavaScript that create a new scope**; thus anything **NOT declared within a function** is apart of the global namespace
* Everything we declare in JavaScript **NOT within a function** all is at global scope. => Need module to separate code

* Module helps: 
  * Code Organization: let us divide up functionality of our application, provide encapsulation
  * Code reusability
  
  
### Modules import/export

* Use import/export to deal with module

* When we **import** module in JS compiler will runs the code inside the imported file.

  
  
  
  
