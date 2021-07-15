### Redux coding steps
### HTML code for Redux with pure Javascript app

----------------------------------------------------------

### Redux coding steps

* Step 1: Create reducers
  * Reducer is a function return one state
  * We can understand that **each reducer is a state and is a piece of global state**
  * Reducer is the function for handle logic for update it own state and return that state
  * Reducer return it own state object
  * **Reducers = small states**

* Step 2: Create redux store 
  * From the reducers (small states), use **createStore** function for create a redux store javascript object
  * Redux store is the **Global state** that contain all the state of each reducers
  * **Store = Global state = contain all small states of each reducer**

* Step 3: Connect redux store to the views
  * When store object is changed, we nee to update the UI
  * We need to connect/subscribe the Store with the UI => this is the way of callback when store is change
  * **Callback UI when store is changed**


### HTML code for Redux with pure Javascript app

```html

<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<meta content="utf-8" http-equiv="encoding">

<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>

    $(document).ready(function () {

        // Create a "reducer" function that determines what the new state should be when something happens in the app

        function reducer1(state = 0, action) {
            if (action && action.type == "increase") {
                return ++state;
            } else if (action && action.type == "decrease") {
                return --state;
            } else {
                return state;
            }
        }

        function reducer2(state = 10, action) {
            if (action && action.type == "square") {
                return Math.pow(state, 2);
            } else if (action && action.type == "square_root") {
                return Math.sqrt(state);
            } else {
                return state;
            }
        }

        const rootReducer = Redux.combineReducers({
            state1: reducer1,
            state2: reducer2
        })

        // Create a new Redux store with the `createStore` function
        // and use the reducers for the update logic
        const store = Redux.createStore(rootReducer);

        // component the mutated state in state view
        function renderView1() {
            let globalState = store.getState();

            console.log("renderView1: " + JSON.stringify(globalState))

            // updates state view - renders state
            view1.html("Value: " + globalState.state1);
        };

        // component the mutated state in state view
        function renderView2() {
            let globalState = store.getState();

            console.log("renderView2: " + JSON.stringify(globalState))

            // updates state view - renders state
            view2.html("Value: " + globalState.state2);
        };

        // View component associated with the Store
        // The callback function will be triggered after the state of redux store changed
        // renderView1 and renderView2 are callback functions that will be called every time the store is updated.
        store.subscribe(renderView1);
        store.subscribe(renderView2);

        // ----------------------------------------------------------------//

        // creates view controls & append to body
        let controlsView = $(
            `<div id="view-controls">
                <button id="btnIncrease">+ increase</button>
                <button id="btnDecrease">- decrease</button>
                <button id="btnSquare">square</button>
                <button id="btnSquareRoot">square root of 2</button>
            </div>`);

        // create state view - this is what gets updated by the render method
        let view1 = $(`<div>View1</div>`);
        let view2 = $(`<div>View2</div>`);

        let body = $('body');
        body.append(view1);
        body.append(view2);
        body.append(controlsView);

        let btnIncrease = $("#btnIncrease");
        let btnDecrease = $("#btnDecrease");
        let btnSquare = $("#btnSquare");
        let btnSquareRoot = $("#btnSquareRoot");

        btnIncrease.click((e) => {
            store.dispatch({ type: "increase" });
        });

        btnDecrease.click((e) => {
            store.dispatch({ type: "decrease" });
        });

        btnSquare.click((e) => {
            store.dispatch({ type: "square" });
        });

        btnSquareRoot.click((e) => {
            store.dispatch({ type: "square_root" });
        });
    });

</script>

```
