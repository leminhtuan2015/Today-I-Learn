## App Delegate
  - An object in your app (specifically, an instance of the `AppDelegate class`) that creates the window where your app’s content is drawn and that provides a place to respond to state transitions within the app.

## Application Object
  - An object in your app that’s responsible for managing the life cycle of the app, communicating with its delegate, the app delegate, during state transitions within the app.

## Entry point (The Main Function of project)
  - `@UIApplicationMain` statement in AppDelegate.Swift creates a `implicit entry point` for Swift program
  - The swift Book says: "Code written at global scope is used as the entry point for the program, so you don’t need a main function".
  - If you have a look at your AppDelegate there is a marker @UIApplicationMain which is outside of any scope and considered as entry point.
  - In Swift there is no main file like there is in many other languages, instead, for iOS applications, you tell Xcode which file you want to be the main file by adding `@UIApplicationMain` attribute to a Swift class.
