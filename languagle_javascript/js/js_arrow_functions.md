
### Arrow functions

  - An arrow function expression has a shorter syntax than a function expression
  
  ```js
    () => {
        console.log('Hello I am typescript');
    }
    
    equivalent to:
    
    function(){
        console.log('Hello I am typescript');
    }
     
  ```

  ```js
    var f = function(){
        console.log("Hello")
    }
    
    equivalent to:

    var f = () => { 
        console.log("Hello")
    }
  ```
  
  ```js
  app.post('/add-item', (req, res) => {

  });

  equivalent to:

  app.post('/add-item', function(req, res) {

  });
  
  ```
