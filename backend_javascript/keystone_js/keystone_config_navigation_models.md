
### Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {DISPLAY_NAME : MODEL_NAME});

```js
keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users',
	
	'externalLink': {
		label: 'Keystone',
		key: 'keystone',
		path: 'http://keystonejs.com/'
	},
	
	content: {
		novels: 'novels',
		episodes: 'episodes',
		stories: 'stories',
		lines: 'lines',
	}
});
```
