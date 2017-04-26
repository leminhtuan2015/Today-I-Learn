### Workspace
### Project
### Target
### scheme
### Framework
### Pods install Framework

------------

### Workspace
  - Contains one or more ***projects***. These projects usually relate to one another
  
### Project
  - Contains one or more ***Targets***.
  
### Target
  - A target defines a single product 
  - A Target defines a list of ***build settings*** for that project
  - A target is an end product created by running "build" in Xcode
  - Target might be:
    - an app
    - or a framework
    - or static library
    - or a unit test bundle

### scheme
  - A scheme defines what happens when you press "Build", "Test", "Profile"
  - A scheme represents a collection of targets that you work with together
  
### Framework

#### Framework
  - ***Framework (IOS) = packages (npm javascript), gems (Ruby), jars (Java)***
  - A framework is a dynamic library and resources for that library, such as images and localization strings. Frameworks have the file extension .framework.
  - Frameworks are self-contained, reusable chunks of code and resources that you can import into other IOS App
  
#### Linked Framework (linked frameworks and libraries)
  - Link the library with any target you want to use it in. You need this to be able to import the framework in your code
#### Embedded Framework (Embedded Binaries)
  - Embed the library only in the containing app target. This will actually copy the framework in your app bundle. If you don't embed it your app will crash on startup, because your framework can't be found

#### Use Framework from other project
  - There are 2 ways to use framework:
    - ***Automate*** Use pods : ***Auto manager dependency frameworks for you***
    - ***Manual*** Use Embedded Framework: ***You have to add dependency frameworks into project by yourself***
      - Project -> Target -> General -> Embedded Framework

### Pods install Framework
  - 







