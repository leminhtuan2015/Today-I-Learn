### Where do you put business logic in a React/Redux app?
### Redux-Saga (for business logic +  asynchronous actions)

--------------------------------------------------------

### Where do you put business logic in a React/Redux app?
* **Do NOT put your logic conde on component or on reducer, You should put your logic code on models or saga**

* **React Native used just only for building UI (view layer)**

* The goal of React Native is the same as React (for web) in that it is a declarative UI library, React is for building compartmentalized user interfaces

* React doesn't really care where the data comes from or how you manage it, that's up to the engineer to decide. Most commonly you'll see people using Redux/Flux to manage application state and to update that state in response to user input

* Don't put business logic in components (View layer). You want to keep it separate from the view logic.

* Actions and Reducers are also the wrong place. Well, some might fit into a reducer. But as soon as you have async stuff (i.e. API calls) then it makes sense to have a separate layer for business logic.

* When I started out, I tried thunks (via redux-thunk) and thought they were great. But over time it seemed like they weren't good enough. I struggled big time until I found **Redux-Saga**, which literally revolutionized the way I think about and write Redux code.


### Redux-Saga (for business logic layer)

* **redux-saga** is a **redux middleware**, which means this thread can be started, paused and cancelled from the main application with normal redux actions, 
* **redux-saga** can access to the full **redux application state** and it can **dispatch redux actions** as well.
* Sagas introduce a way to use ES6 generators to run additional **business logic and async** code
