
### Keep original upload file name
### Show image of File type
### Clean up bundle React JS of admin ui

-----------------------------------------------------------------


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
### Show image of File type

* PATH: node_modules/keystone/fields/types/file/FileColumn.js

```js
import React from 'react';

import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';
import ImageThumbnail from '../../components/ImageThumbnail';

var LocalFileColumn = React.createClass({
    renderValue: function () {
	var value = this.props.data.fields[this.props.col.path];
	if (!value || !value.filename) return;
	return value.filename;
    },

    render: function () {
	var value = this.props.data.fields[this.props.col.path];
	var href = value && value.url ? value.url : null;
	var label = value && value.filename ? value.filename : null;

	let fileUrl = value.url;

	var image = (
		<ImageThumbnail
			component="a"
			href={fileUrl}
			target="__blank"
			style={{ float: 'left', marginRight: '1em', maxWidth: '50%' }}
		>
			<img src={fileUrl} style={{ 'max-height': 100, 'max-width': '100%' }} />
		</ImageThumbnail>
	);

	var cell = (
		<ItemsTableCell href={href} padded interior field={this.props.col.type}>
			<ItemsTableValue>{label}</ItemsTableValue>
		</ItemsTableCell>
	);

	if(fileUrl && (fileUrl.includes(".png") || fileUrl.includes(".jpg") || fileUrl.includes(".jpeg"))){
		return image;
	}

	return cell;
    },
});

module.exports = LocalFileColumn;
```

### Clean up bundle React JS of admin ui

* PATH: node_modules/keystone/admin/bundles/js

```sh
cd node_modules/keystone/admin/bundles/js
rm -r js
```












