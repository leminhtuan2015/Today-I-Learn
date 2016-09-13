# Firebase

### Overview
  - https://en.wikipedia.org/wiki/Firebase
  - Firebase is a cloud services provider and backend as a service company based in San Francisco, California. The company makes a number of products for software developers building mobile or web applications. Firebase was founded in 2011 by Andrew Lee and James Tamplin and launched with a realtime cloud database in April 2012.[6] Firebase's primary product is a realtime database which provides an API that allows developers to store and sync data across multiple clients. The company was acquired by Google in October 2014
  

### API

#### Detecting Connection State (Check online/offline)
- Firebase clients provide a special location at /.info/connected which is updated every time the client's connection state changes. Here is an example: 

```js
	var connectedRef = FirebaseComment.mainApp.database().ref(".info/connected");
	connectedRef.on('value', function(snap) {
		  if (snap.val() === true) {
			  console.log("YOU ARE ON-LINE")
		  }else{
			  console.log("YOU ARE OFF-LINE")
		  }
		});
```
OR 
```js
	var connectedRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/.info/connected");
	connectedRef.on("value", function(snap) {
	  if (snap.val() === true) {
	    alert("connected");
	  } else {
	    alert("not connected");
	  }
	});
```

#### Read data from database. (register on data changed)

##### on()
  - `on()` is used to listen for data changes at a particular location
  - Your callback will be triggered for the initial data and again whenever the data changes, (The event will be trigged right after you register and callback will be trigged each time your data on server changed)
  - If you listen many time => you will receive callback many time
 
##### once()
  - Listens for exactly ONE time, and then stops listening
  - once()  equivalent to calling on(), and then calling off() inside the callback function.
  - once() = on() + off()
  
```js
	firebaseRef.once('value', function (dataSnapshot) {
	  // code to handle new value
	}, function (err) {
	  // code to handle read error
	});
```

#### Stop listening location on server.
  - off() will stop on()
  - Remove listeners registered on data nodes

```js
    // Stop listening the node on server.
    FirebaseComment.mainApp.database().ref("url/to/node").off("value");
```

Or

```js
	currentConnection = FirebaseComment.mainApp.database().ref("url").on("value",
	    function(dataSnapshot) {
		console.log("value changed ON view" + JSON.stringify(dataSnapshot.val()));
	});		
	
	FirebaseComment.mainApp.database().ref("url/to/node").off("value", currentConnection);
```

### Write data (insert data to server)
  - set() write data to node
  

#### Set an object
```js
	FirebaseComment.mainApp.database().ref("url/to/node").set({key1: value1, key2: value2},
		    function(error) {
			  if (error) {
			      console.log('Synchronization failed storeData');
			  } else {
			      console.log('Synchronization succeeded storeData' + 
			  }
		});
```

OR

#### Set a value
```js
	FirebaseComment.mainApp.database().ref("url/to/node").set(value,
		    function(error) {
			  if (error) {
			      console.log('Synchronization failed storeData');
			  } else {
			      console.log('Synchronization succeeded storeData' + 
			  }
		});
```
### Remove data (delete a data node)

```js
	FirebaseComment.mainApp.database().ref("url/to/node").remove(
		function(error) {
			  if (error) {
			      console.log('Synchronization failed unview');
			  } else {
			      console.log('Synchronization succeeded unview');
			  }
		});
```

### Dis-connection
  - Firebase socket just disconnection when you close app or close browser.
  - When lost wifi or lost internet Firebase socket NOT be closed. (Firebase socket still alive if lost wifi/internet and AUTOMATICLY re-connect when you re-connect to wifi or internet)
  - The code `onDisconnect()` will be executed on `SERVER SIDE`. all firebase onDisconnection code is run at server side
  - When you lost wifi or lost internet your Firebase socket NOT close or disconnect, them will be cached and will AUTO reconnect to server if you have wifi.
  - onDisconnect > just called when you shutdown the app
 

### - firebase.on, once => có thể hiểu là đăng ký các kết nối đến server , nếu có mạng sẽ thực thi ngay, nếu k có mạng sẽ lưu vào cache và chờ đến khi có mạng sẽ TỰ ĐỘNG tạo kết nối và thực thi

