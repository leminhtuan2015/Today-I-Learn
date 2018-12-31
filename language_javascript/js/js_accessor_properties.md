### Accessor properties


---------------------

### Accessor properties

* Accessor properties are represented by “getter” and “setter” methods. 
* In an object literal they are denoted by `get` and `set`:

```js
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};


let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
// We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.
```

* Accessor properties are only accessible with get/set
* Once a property is defined with get prop() or set prop(), it’s an accessor property
