### Javascript Asynchronous
### Javascript Callbacks
### Javascript Callback hell
### Javascript Promises
### Javascript Callbacks - Promises Compare
### Turn "callback based asynchronous" into "Promise based"
### Javascript Async/Await

* https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee

-----------------------------------------------------

### Javascript Asynchronous

* In programming languages like Java, C#, ..., we have **main thread** and other threads that **runs code in parallel** to the **main thread**

* Because a **JavaScript program is single threaded** and all code is executed in a sequence, not in parallel.

* In JavaScript **parallel** handled by using what is called an "asynchronous or non-blocking I/O model"

### Javascript Callbacks

* When an asynchronous operation has a result, it call to a function that will be executed once that result is ready. This function is what we call a **"callback function"**

```js
const request = require(‘request’);
request('https://www.somepage.com', function (error, response, body) {
  if(error){
    // Handle error.
  }
  else {
    // Successful, do something with the result.
  }
});
```

### Javascript Callback hell

* Callbacks are a good way to declare what will happen once an asynchronous operation has a result, but what if you want to use that data in order **(sequence)** to make another request

* So if we want to do a second request based on the result of a first one we have to do it inside the callback function of the first request because that is where the result will be available:

```js
request("http://xxx", function (firstError, firstResponse, firstBody) {
    if(firstError){
        // Handle error.
    }
    else {
        request("http://yyy/", function (secondError, secondResponse, secondBody) {
            if(secondError){
                // Handle error.
            }
            else {
                // Use secondBody for something
            }
        });
    }
});
```

* When you have a callback in a callback like this, the code tends to be a bit less readable and a bit messy
* In some cases you may have a callback in a callback in a callback => **"callback hell"**

### Javascript Promises

* A promise is an object that wraps an asynchronous operation and notifies when it’s done.
* A promise sounds exactly like callbacks, but the important differences are in the usage of Promises
* The methods a promise provides are 
  * **then(…)**  : for when a successful result is available
  * **catch(…)** : for when something went wrong
  
* Instead of nesting callbacks inside callbacks inside callbacks, you chain **.then()** calls together making it more readable and easier to follow
* Example **Promises** will remove **Callback Hell**
  
```js
const axios = require(‘axios’);

axios.get("http://xxx")
.then(function (response) { 
    // Reponse being the result of the first request
    // Returns another promise to the next .then(..) in the chain
    
    return axios.get("http://yyy}");
})
.then(function response { 
    // Reponse being the result of the second request
    // Handle response
})
.catch(function (error) {
    // Handle error.
});
```

* .then() should either return a new Promise or just a value or object which will be passed to the next .then() in the chain

### Javascript Callbacks - Promises Compare

* The main difference between **Callback-based APIs** and **Promise-based API**
* Callback-based APIs is it does not return a value, it just executes the callback function with the result.
* Promise-based API immediately returns a Promise that wraps the asynchronous operation


### Turn "callback based asynchronous" into "Promise based"

* The process of wrapping a callback based asynchronous function inside a Promise and return that promise instead is called **promisification**. 

* We can Turn **callback based asynchronous operation** into **Promise based** <=> **promisifying** a callback-based function.

* We can wrap a callback based asynchronous operation with a Promise like this:

```js
function getAsyncData(someValue){
    return new Promise(function(resolve, reject){
        getData(someValue, function(error, result){
            if(error){
                reject(error);
            } else {
                resolve(result);
            }
        })
    });
}
```

```js
getAsyncData(“someValue”)
// Calling resolve in the Promise will get us here, to the first then(…)
.then(function(result){
    // Do stuff
})
// Calling reject in the Promise will get us here, to the catch(…)
// Also if there is an error in any then(..) it will end up here
.catch(function(error){
    // Handle error
});
```



















