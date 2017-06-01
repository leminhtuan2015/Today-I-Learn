### What is browser used for?
### Languages run on browser?
### How browser communicate with server?
### Form, AJAX, Link send data to server

--------------------

### What is browser used for?
  - **Browser** is the compiler of **HTML, JS**
  - **HTML, JS** be executed on broser
  - Code of Javascript (Javascript native, Jquery lib) will be compiled and execute on browser but be side of browser, Javascript can run bu **Node (nodejs)**

### Languages run on browser?
  - HTML
  - Javascript
  - CSS
  
### How browser communicate with server?
  - **Browser** use 3 ways to comunicate with server:
    - Form
    - Link
    - AJAX
  
### Form, AJAX, Link send data to server
- ALL THREE WAY **FROM, LINK, AJAX** WILL BE CONVERT DATA TO JSON OBJECT AND SEND TO SERVER.

- **By Form:**
- <p style="color:red"> Will be sending a JSON object {"firstname": "Mickey", "lastname": "Mouse"}</p>

```html
<form action="action_page.php" method="post">
  <input type="text" name="firstname" value="Mickey">
  <input type="text" name="lastname" value="Mouse">
  <input type="submit" value="Submit">
</form>
```

- **By Link**
- <p style="color:red"> Will be sending a JSON object {"firstname": "Mickey", "lastname": "Mouse"}</p>

```html
<a href="/server/controller/user/?firstname=Mickey&lastname=Mouse" > Link </a>
```
- **By AJAX**
- <p style="color:red"> Will be sending a JSON object {"action": "download", "id": "fileId"}</p>

```javascript
$.ajax({
  type: 'get',
  url: '/moodle/koolsoft/file/?action=download',
  data: {id: fileId},
  success: function (result) {
  }
});
```


