### Where do you put asynchronous actions in a React/Redux app?
### How to avoid callback hell, handle asynchronous flows in a React/Redux app?
### Redux-Saga (for asynchronous actions, avoid callback hell)

--------------------------------------------------------

### Where do you put business logic in a React/Redux app?
* **Do NOT put your logic cond on component(view layer) or on reducer, You should put your logic code on models or saga**

* **React Native used just only for building UI (view layer)**

* Redux is only a state container that supports **synchronous data flows, synchronous actions** => Redux Cannot handle asynchronous actions

* The goal of React Native is the same as React (for web) in that it is a declarative UI library, React is for building compartmentalized user interfaces

* React doesn't really care where the data comes from or how you manage it, that's up to the engineer to decide. Most commonly you'll see people using Redux/Flux to manage application state and to update that state in response to user input

* Don't put business logic in components (View layer). You want to keep it separate from the view logic.

* Actions and Reducers are also the wrong place. Well, some might fit into a reducer. But as soon as you have async stuff (i.e. API calls) then it makes sense to have a separate layer for business logic.

* When I started out, I tried thunks (via redux-thunk) and thought they were great. But over time it seemed like they weren't good enough. I struggled big time until I found **Redux-Saga**, which literally revolutionized the way I think about and write Redux code.

### How to avoid callback hell, handle asynchronous flows in a React/Redux app?
* If you have asynchronous actions in logic, you may be face callback-hell in your code, So **Redux Saga** will help you handle callback-hell.

* **Redux Saga** allows you to write a complex sequence of synchronous and asynchronous events in a clear and declarative style without **callbacks**


### Redux-Saga (for asynchronous actions, avoid callback hell)

* **redux-saga** is a **redux middleware**
* **redux-saga** can access to the full **redux application state** and it can **dispatch redux actions** as well.
* Redux-Saga introduce a way to use ES6 generators to run additional **business logic and async** code
* Redux-Saga is place to put **business logic and async actions**
