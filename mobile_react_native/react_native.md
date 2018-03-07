#### What is difference between React native vs React JS?
#### React Native
#### React Native File Structure


------------------------------
#### What is difference between React native vs React JS?

* ReactJS is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.
* React Native is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use ReactJS to build your components, and implements ReactJS under the hood.
* Both are open sourced by Facebook.

#### React Native
* React Native lets you build mobile apps using only JavaScript
* With React Native, you don't build a mobile web app, an HTML5 app, or a hybrid app; you build a real mobile app that's indistinguishable from an app built using Objective-C or Java

##### Install
* brew install watchman
* npm install -g react-native-cli
* react-native init new-app
* cd new-app
* react-native start
* react-native run-ios

#### React Native File Structure
* **android/** — This is the directory where all of the native Android code lives. If you dive in there you’ll find .gradle files, .java files, and .xml files. This is the directory you would open with Android Studio. You’ll rarely have to work in this directory.

* **ios/** — Like the android directory this is where all of your native iOS code lives. You’ll find your xcode project in there, .plist files, .h files, .m files, etc. So if you want to open your project in xcode you would open ios/<PROJECT_NAME>.xcodeproj. You’ll rarely have to work in this directory.

* **index.android.js** : Android entry file
* **index.ios.js** : iOS entry file

* **index.ios.js** — This is the **entry point** for your ios app into the React Native code. It’s where you’ll want to register your app (via **AppRegistry**).

* **index.android.js** — Same as index.ios.js just for Android. You’ll notice that it’s exactly the same code as the ios one, we’ll work on that in the next section

* **package.json**: Config file of project

* **node_modules/**: Contain Javascript dependencies modules

* Create a new folder named **src** to contain all Javascript (React) files
  * src/components
  * src/helpers
  * src/styles
  * src/
  * ...