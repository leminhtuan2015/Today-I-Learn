
### Keep original upload file name

* PATH: node_modules/keystone-storage-namefunctions/index.js

```js
// Generate a random filename
exports.randomFilename = function (file, i, callback) {
	// crypto.randomBytes(16, function (err, data) {
	// 	if (err) return callback(err);
	// 	return callback(null, filenameFromBuffer(data, file.extension));
	// });

	return callback(null, file.originalname);
};
```
