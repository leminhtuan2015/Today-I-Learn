### Export - Import
### Default Export (export default)
### Named Export (export)

---------------------------------------------------------------------
### Export - Import

* The export statement is used when creating JavaScript modules to export live bindings to :
  * functions
  * objects
  * primitive values 
  
* Exported module can be used by other programs with the import statement

```js
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

### Default Export (export default)

* You only have one default export per file
* When you import you have to specify a name and import like so:

```js
import MyDefaultExport from "./MyFileWithADefaultExport";
```

### Named Export (export)

* With named exports, you can have multiple named exports per file
* Then import the specific exports you want surrounded in braces:

```js
// ex. importing multiple exports:
import { MyClass, MyOtherClass } from "./MyClass";
// ex. giving a named import a different name by using "as":
import { MyClass2 as MyClass2Alias } from "./MyClass2";
```

### Default Export + Named Export

* It is possible to use a default along with named imports in the same statement:

```js
import MyDefaultExport, { MyClass, MyOtherClass} from "./MyClass";
```













