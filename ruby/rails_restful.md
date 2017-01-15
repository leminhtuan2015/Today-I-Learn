### RESTFUL
### Only 7 Method for each controller.
### RESTFUL implement with AJAX
### RESTFUL with AJAX


-------------------------------------------------------------------------------------------------------------------------------

### RESTFUL
  - Representational state transfer (REST) or RESTful
  
### Only 7 Method for each controller.
  - You just need ONLY 7 method for each controller
 
 ```
    - INDEX   - (html list item)
    - NEW     - (HTML form)
    - CREATE  - (redirect)
    - EDIT    - (HTML form)
    - UPDATE  - (redirect)
    - SHOW    - (html item)
    - DELETE  - (redirect)
 ```
 ![Image of Yaktocat](https://github.com/leminhtuan2015/Wiki/blob/master/images/resful.png)

### RESTFUL with AJAX
##### AJAX
  - **AJAX just is the technical of javascript run only on browser**
  - **AJAX (javascript) can only run on web browser**
  - **AJAX make request to server in background (without refresh the page)**
  - AJAX can send and get
      - JSON
      - HTML
      - FILE
      - ANYTHING the same form of HTML can send to server
      
##### Implement AJAX with RESTFUL
  - Step 1:
    - Still have **7** method of REST
  - STEP 2: (so easy)
    - Instead of go to each page of REST now you can make AJAX request to get the HTML code from server and render to browser
    
    
    ```js
    $("#newButtin").click(function(){
          var request = $.ajax({
            url: "script.php",
            method: "POST",
            data: { id : menuId },
            dataType: "html"
          });

          request.done(function( msg ) {
            // Render the html responsed from serverinto browser
            $( "#log" ).empty()
            $( "#log" ).html( msg );
          });

          request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
          });
    });

    ```
