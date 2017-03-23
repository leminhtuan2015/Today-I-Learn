# 1 Cordova (old version is named **phonegap**)

## 1.1 Overview:
  - Apache Cordova is an open-source mobile development framework, for developing cross-platform **hybrid applications** using HTML, CSS, and Javascript.

  - Cordove is NOT belong to GOOGLE, it belong to Apache, Cordova can NOT convert any Javascript code to Mobile app, Cordova just **embed** Javascript code to the   **WebView** of Android or IOS device.

  - The core of Apache Cordova applications use **CSS3 and HTML5 for their rendering** and **JavaScript for their logic**.

  - Cordova use of Web-based technologies leads some Apache Cordova applications to run slower than native applications with similar functionality

## 1.2 Cordova Architecture:

### Native app, Webapp, Hybird app
  - http://developer.telerik.com/featured/what-is-a-webview/

  - Wit Android **native** app, we can manage the life-cicle of app, we can manage the state of each activities. but with **hybird** app we just use engine **WebView** to render the HTML, CSS, JS.  => We need other way to manage the life-cicle of **hybird** app.

  - Now in the world we have 3 type of Mobile app.
    - Native app (using native languages like Swift, Objective-C, and Java).
    - Web app  (using HTML, JS, CSS and run app by browser).
    - Hybird app (Code app by HTML, css, js after that use WebView to wrap those HTML, JS, CSS to native app).

## 1.3 WebView

### What is **WebView**
  - The system webview is a native component provided by the operating system to be able to load web content.

  - WebView is a View that displays web pages. Display some HTML, CSS, JS content within your Activity. It uses the WebKit rendering engine to display web pages.

### Cordovar is just use WebView to render HTML, JS, CSS

  - Android app is made from set of **activities**, each *activity* have a life-cicle **BUT** Cordova is can NOT make Javascript have a life-cicle, It just embed the Javascript in (WebView)

  - Cordova is simple embed the **HTML. JS, CSS** to the **WebView** of device and the *WebView* will render that HTML on the screen.

## 1.4 Foreign Function Interface (FFI) or (native bridge).

  - https://en.wikipedia.org/wiki/Foreign_function_interface

  - The technical **FFI** allow you to call other service of other app(other app).

## 1.5 Tutorials

### Content Security Policy (CSP)
  - We can not make inline javascript in Cordova

    - http://stackoverflow.com/questions/31060722/cordova-refuse-to-execute-inline-event-handler-because-it-violates-the-followi

    - https://developer.chrome.com/extensions/contentSecurityPolicy

```html
<button onclick="alert()">Click me</button>    //Bad code
```
Good code is below

```html
<button id="btn">Click me</button>

<script type="text/javascript" src="js/events.js"></script>
```

```js
var showMessage = function() {
  alert("123");
}

document.getElementById("btn").addEventListener("click", showMessage);
```

### Cordova plugin.
#### Structure of a cordova plugin
 - Cordova plugin contain **3** things:
   - plugin.xml                                         (define the plugin)
   - www/file.js                                        (js code)
   - src/ios/native.m **OR** src/android/native.java    (native code)
  
#### plugin.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0" xmlns:android="http://schemas.android.com/apk/res/android" id="com.disusered.simplecrypto" version="0.2.0">
  <name>SimpleCrypto</name>
  <js-module name="SimpleCrypto" src="www/SimpleCrypto.js">
    <clobbers target="cordova.plugins.SimpleCrypto" />
  </js-module>
  <platform name="ios">
    <config-file parent="/*" target="config.xml">
      <feature name="SimpleCrypto">
        <param name="ios-package" value="SimpleCrypto" />
      </feature>
    </config-file>
    <framework src="Foundation.framework" />
    <framework src="Security.framework" />
    <source-file src="src/ios/SimpleCrypto.m" />
  </platform>
</plugin>
```

**Define module**

```xml
  <js-module name="SimpleCrypto" src="www/SimpleCrypto.js">
    <clobbers target="cordova.plugins.SimpleCrypto" />
  </js-module>
```

**clobbers** make us can require the **www/SimpleCrypto.js** by 2 ways:

```js
  // First way
  var cryptor = cordova.plugins.SimpleCrypto
```

```js
  // Second ways
  var cryptor = cordova.require("com.disusered.simplecrypto.SimpleCrypto");
```

#### What will Cordova do when we add a plugin?: (Cordova will automatic create some files )

- Step 1:
  - Copy files in **src/native_file** of plugin in **Plugins**
  
- Step 2:
  - Copy file in **www/js_file** of plugin in **Staging/plugins/*
  
- Step3 : create file cordova_plugin.js

```js
cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.disusered.simplecrypto/www/SimpleCrypto.js",
        "id": "com.disusered.simplecrypto.SimpleCrypto",
        "pluginId": "com.disusered.simplecrypto",
        "clobbers": [
            "cordova.plugins.SimpleCrypto"
        ]-
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.disusered.simplecrypto": "0.2.0",
    "cordova-plugin-whitelist": "1.2.2"
}
// BOTTOM OF METADATA
});
```

- Step 4: Auto define a module:
  - Auto add the below code to each plugin

```js
cordova.define("com.disusered.simplecrypto.SimpleCrypto", function(require, exports, module) {
  // Code of www/file.js
}
```

**File origin**

```js
  var exec = require('cordova/exec');
  var SimpleCrypto = function() {};
  
  SimpleCrypto.prototype.encrypt = function(key, path, name, success, error) {
    exec(success, error, "SimpleCrypto", "encrypt", [key, path, name]);
  }
  
  SimpleCrypto.prototype.decrypt = function(key, name, success, error) {
    exec(success, error, "SimpleCrypto", "decrypt", [key, name]);
  }
  
  var simpleCrypto = new SimpleCrypto();
  module.exports = simpleCrypto;
```

=>

**File after Cordova add to project**

```js
cordova.define("com.disusered.simplecrypto.SimpleCrypto", function(require, exports, module) {  // THIS LINE AUTO ADDED
  var exec = require('cordova/exec');
  var SimpleCrypto = function() {};
  
  SimpleCrypto.prototype.encrypt = function(key, path, name, success, error) {
    exec(success, error, "SimpleCrypto", "encrypt", [key, path, name]);
  }
  
  SimpleCrypto.prototype.decrypt = function(key, name, success, error) {
    exec(success, error, "SimpleCrypto", "decrypt", [key, name]);
  }
  
  var simpleCrypto = new SimpleCrypto();
  module.exports = simpleCrypto;
}  // THIS LINE AUTO ADDED
```

=> auto wrap the **Staging/plugins/com.disusered.simplecrypto/www/SimpleCrypto.js** by the code above.


