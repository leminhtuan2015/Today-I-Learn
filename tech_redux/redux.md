
### What is Redux?
### Why Should I Use Redux?
### ### Redux Data Flow/ life cyrcle
-----------------------------------

### What is Redux?

* Redux is a pure JavaScript library 
* Redux is a state manager for you JS app with a single global object called Store
* Redux NOT only used for React app, Redux can be used for pure Javascript app, Redux can integrate with any UI framework
* Redux is the one-way data flow

### Why Should I Use Redux?

* Not all app need to use redux.
* In case multiple components (view) that need to share and use the same state => Redux is needed

### Redux Data Flow/ life cyrcle

* An action is dispatched when a user interacts with the application.
* The root reducer function is called with the current state and the dispatched action. The root reducer may divide the task among smaller reducer functions, which ultimately returns a new state.
* The store notifies the view by executing their callback functions.
* The view can retrieve updated state and re-render again.
