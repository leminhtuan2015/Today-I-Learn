#1 Cordova (old version is named **phonegap**)

##1.1 Overview:

  - https://en.wikipedia.org/wiki/Apache_Cordova

  - https://cordova.apache.org/

  - https://github.com/apache?utf8=%E2%9C%93&query=cordova-

  - Apache Cordova is an open-source mobile development framework, for developing cross-platform **hybrid applications** using HTML, CSS, and Javascript.

  - Cordova command-line runs on Node.js and is available on NPM.

  - **What you can do on Browser, you can 100% do it on Mobile App as well.**

  - Cordove is NOT belong to GOOGLE, it belong to Apache, Cordova can NOT convert any Javascript code to Mobile app, Cordova just **embed** Javascript code to the   **WebView** of Android or IOS device.

  - Apache Cordova embeds the HTML5 code inside a native **WebView** on the device, using a foreign function interface to access the hardware of devices (camera, GPS...).

  - The core of Apache Cordova applications use **CSS3 and HTML5 for their rendering** and **JavaScript for their logic**.

  - Cordova use of Web-based technologies leads some Apache Cordova applications to run slower than native applications with similar functionality

  - Cordova applications are **hybrid**(hỗn hợp), meaning that they are neither truly native mobile application (because all layout rendering is done via Web views instead of the platform's native UI framework) nor purely Web-based (because they are not just Web apps, but are packaged as apps for distribution and have access to native device APIs).

  - The issues for some Apache Cordova applications is that it run slower than native app.

##1.2 Cordova Architecture:

![cordovaapparchitecture.png](https://bitbucket.org/repo/LBgyxe/images/3318572151-cordovaapparchitecture.png)

### Native app, Webapp, Hybird app
  - http://developer.telerik.com/featured/what-is-a-webview/

  - Wit Android **native** app, we can manage the life-cicle of app, we can manage the state of each activities. but with **hybird** app we just use engine **WebView** to render the HTML, CSS, JS.  => We need other way to manage the life-cicle of **hybird** app.

  - Now in the world we have 3 type of Mobile app.
    - Native app (using native languages like Swift, Objective-C, and Java).
    - Web app  (using HTML, JS, CSS and run app by browser).
    - Hybird app (Code app by HTML, css, js after that use WebView to wrap those HTML, JS, CSS to native app).

![apps.png](https://bitbucket.org/repo/LBgyxe/images/3753108653-apps.png)

##1.3 WebView

### What is **WebView**
  - The system webview is a native component provided by the operating system to be able to load web content.

  - WebView is a View that displays web pages. Display some HTML, CSS, JS content within your Activity. It uses the WebKit rendering engine to display web pages.

  - We build a mobile app using web technologies and present the whole thing in a WebView  => all web technologies can run on native app.

### Cordovar is just use WebView to render HTML, JS, CSS

  - Android app is made from set of **activities**, each *activity* have a life-cicle **BUT** Cordova is can NOT make Javascript have a life-cicle, It just embed the Javascript in (WebView)

  - Cordova is simple embed the **HTML. JS, CSS** to the **WebView** of device and the *WebView* will render that HTML on the screen.

##1.4 Foreign Function Interface (FFI) or (native bridge).

  - https://en.wikipedia.org/wiki/Foreign_function_interface

  - The technical **FFI** allow you to call other service of other app(other app).

### How HTML5, Javascript access hardware of device (such as camera, recorder, GPS, file-system, data ex: phone-number, sms).

  - Apache Cordova embeds the HTML5 code inside a native WebView on the device, using a **foreign function interface** to access the hardware of devices.

  - https://software.intel.com/en-us/articles/the-development-of-mobile-applications-using-html5-and-phonegap-on-intel-architecture-based


##1.5 Tutorials

### Content Security Policy (CSP)
  - We can not make inline javascript in Cordova

    - http://stackoverflow.com/questions/31060722/cordova-refuse-to-execute-inline-event-handler-because-it-violates-the-followi

    - https://developer.chrome.com/extensions/contentSecurityPolicy

```html
<button onclick="alert()">Click me</button>    //Bad code
```

=====>  Good code is below


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
