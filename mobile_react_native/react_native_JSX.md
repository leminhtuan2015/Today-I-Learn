### What is JSX
### Coding JSX
### Expressions in JSX
### How JSX compiled to JS

----------------------------------------------

### What is JSX?

* **JSX is the technical of Facebook in ReactJS/ReactNative**
* JSX stands for **JavaScript XML**.
* JSX allows us to write HTML in React/RN.
* JSX makes it easier to write and add HTML in React/RN
* **The benefit of JSX : makes it easier to write React/RN applications.**

### Coding JSX

* **JSX converts HTML tags into react/RN elements**.

```js
// This funny tag syntax is neither a string nor HTML, this is called JSX

// JSX:
const element = <h1>Hello, world!</h1>;

// Without JSX:
const myelement = React.createElement('h1', {}, 'Hello, world!');
```

* Above code is called JSX, and it is a syntax extension to JavaScript. 
* We recommend using it with React to describe what the UI should look like. 
* JSX may remind you of a template language, but it comes with the full power of JavaScript.

### Expressions in JSX

* With JSX you can write expressions inside curly braces `{ }`

```jsx
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
```

### How JSX compiled to JS

* Babel compiles JSX down to React.createElement() calls.

```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

COMPILED =============>

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```


































