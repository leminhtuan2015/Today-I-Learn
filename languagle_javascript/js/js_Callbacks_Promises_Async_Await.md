### Javascript Asynchronous
### Javascript Callbacks
### Javascript Callback hell
### Javascript Promises
### Javascript Async/Await

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
  
* **Promises** will remove **Callback Hell**
  
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

