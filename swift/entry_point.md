
## 2. App Programming Guide for iOS.
  - https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072-CH1-SW1https://developer.apple.com/swift/resources/

## Entry point (The Main Function)
  @UIApplicationMain statement in AppDelegate.Swift creates a implicit entry point for Swift program
  - The swift Book says: "Code written at global scope is used as the entry point for the program, so you don’t need a main function".
  - If you have a look at your AppDelegate there is a marker @UIApplicationMain which is outside of any scope and considered as entry point.
  - In Swift there is no main file like there is in many other languages, instead, for iOS applications, you tell Xcode which file you want to be the main file by adding `@UIApplicationMain` attribute to a Swift class.
