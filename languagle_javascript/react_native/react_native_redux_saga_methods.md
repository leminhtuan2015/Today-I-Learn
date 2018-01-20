### Redux saga 

* Redux saga expose several methods called Effects, we are going to define several of them:
  * **Fork** performs a non-blocking operation on the function passed.
  * **Take** pauses until action received.
  * **Race** runs effects simultaneously, then cancels them all once one finishes.
  * **Call** runs a function. If it returns a promise, pauses the saga until the promise is resolved.
  * **Put** dispatches an action.
  * **Select** Runs a selector function to get data from the state
  * **takeLatest** means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one.
  * **takeEvery** will return results for all the calls triggered.
