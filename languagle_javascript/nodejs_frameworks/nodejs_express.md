### Express

-------------------------------------
### Express

* Express is a minimal and flexible **Node.js web application framework**

### Express Router

```js
var article_controller = require('../controllers/article_controller')
/* GET home page. */

module.exports = function(router){
    router.get('/', function(req, res, next) {
        article_controller.index(req, res, next)
    });

    router.get('/article/delete/:id', function(req, res, next) {
        article_controller._delete(req, res, next)
    });

    router.get('/article/edit/:id', function(req, res, next) {
        article_controller.edit(req, res, next)
    });

    router.post('/article/update', function(req, res, next) {
        article_controller.update(req, res, next)
    });

}

```

```js
req.query.category
    // Link Params
    // http://host/article?category=1
    
req.params.category  
    // router :/article/:category
    // http://host//article/1  
    
req.body.title 
    // form
```

