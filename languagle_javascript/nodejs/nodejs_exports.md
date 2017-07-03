### Exports object
### Exports function

---------------------------------------------------

### Exports object

```js
var obj = {}

module.exports = obj

// When you require

var myObj = require("path/to/module")

// myObj == obj

```

### Exports function

#### Exports function with return
```js
module.exports = function (table_name){
    var TABLE_NAME = table_name
    var media = mongoose.model(TABLE_NAME, media_model)
    return media   // with return object
}

// When you require

var myObj = require("path/to/module")("my_table_name")

// myObj == media

```

#### Exports function without return
```js
module.exports = function(router){
    router.get('/random_story/ad', function(req, res, next) {
	ad_controller.index(req, res, next)
    })
}

// When you require

var myObj = require("path/to/module")(my_router)

// myObj == function
```














