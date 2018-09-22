### Nodejs Global variable

--------------------------------------------
### Nodejs Global variable

```js
  var path = require('path')

  global.app_root = path.resolve(__dirname)
  
  global.db = mongoose.createConnection(uri)
```
