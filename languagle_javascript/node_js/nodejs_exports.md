### Exports object
### Exports function

---------------------------------------------------

### Exports object

```js
var obj = {}

module.exports = obj

```

### Exports function

```js
module.exports = function (table_name){
    var TABLE_NAME = table_name
    var media = mongoose.model(TABLE_NAME, media_model)
    return media   // with return object
}

```

```js
module.exports = function(router){
	router.get('/random_story/ad', function(req, res, next) {
		ad_controller.index(req, res, next)
	})
}
```
