## The App Bundle (Folder structure)
  - When you build your iOS app, Xcode packages it as a bundle
  - A bundle is a directory in the file system that groups executable code and related resources such as images and sounds together in one place.
  - **App executable (hello.app)** :
    - The executable file contains your app’s compiled code. The name of your app’s executable file is the same as your app name

  - **Info.plist (information property list)** : 
    - This file contains metadata about your app, which the system uses to interact with your app. 
    - Xcode creates this file for you automatically based on your project’s configuration and settings.
  
  - **MainBoard.storyboard** :
    - Storyboards contain the views and view controllers that the app presents on screen. 
    - Views in a storyboard are organized according to the view controller that presents them. 
    - Storyboards also identify the transitions (called segues) that take the user from one set of views to another.
  
## The Structure of an App
  - The heart of every iOS app is the **UIApplication** object.
  
![alt tag](https://raw.githubusercontent.com/leminhtuan2015/Today-I-learned/master/swift/images/mvc-ios.png)

![alt tag](https://raw.githubusercontent.com/leminhtuan2015/Today-I-learned/master/swift/images/details-mvc.png)
