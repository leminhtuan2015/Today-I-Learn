### Where do you put business logic in a React/Redux app?


--------------------------------------------------------

### Where do you put business logic in a React/Redux app?

* Don't put business logic in components. You want to keep it separate from the view logic.
* Actions and Reducers are also the wrong place. Well, some might fit into a reducer. But as soon as you have async stuff (i.e. API calls) then it makes sense to have a separate layer for business logic.
* When I started out, I tried thunks (via redux-thunk) and thought they were great. But over time it seemed like they weren't good enough. I struggled big time until I found Redux-Saga, which literally revolutionized the way I think about and write Redux code.
