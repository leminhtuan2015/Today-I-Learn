### Workspace
### Project
### Target
### scheme
### Framework
### Use Framework

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

#### Use Framework from project
  - There are 2 ways to use framework:
    - ***Automate*** Use pods : ***Auto manager dependency frameworks for you***
    - ***Manual*** Use Embedded Framework: ***You have to add dependency frameworks into project by yourself***
      - Project -> Target -> General -> Embedded Framework

### Use Framework
  - There are 2 ways to use framework:

#### Manual (Use Embedded Framework)
  - add dependency frameworks into project by yourself: Project -> Target -> General -> Embedded Framework -> Select file.framework
 
#### Automate (Use Pod)
  - Step 1: In framework project, create a file ***PROJECT_NAME.podspec***
  - Step 2: In application project, create a file ***Podfile***

```
Pod::Spec.new do |s|
  
  s.name          = "FujiSDK"
  s.version       = "1.0.0"
  s.summary       = "Sort description of 'FujiSDK' framework"
  s.homepage      = "https://fujigame.net/"
  s.license       = "MIT"
  s.author        = "Nick D., Tuan L."
  s.platform      = :ios, "8.0"
  s.source        = { :git => "nami-net@nami-net.git.backlog.jp:/FJ_GAME_PF/fuji_sdk_swift.git" }
  s.source_files  = "FujiSDK", "FujiSDK/**/*.{h,m,swift}", "FujiSDK.podspec"

  s.resource_bundles = {"FujiSDK" => ["FujiSDK/**/*.{lproj,storyboard,png,jpg,jpeg}"]}

  s.dependency 'Alamofire', '~> 4.4'

  s.pod_target_xcconfig = { 'SWIFT_VERSION' => '3' }
  
  s.framework    = 'StoreKit'
end
```





