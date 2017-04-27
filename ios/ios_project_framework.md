### Workspace
### Project
### Target
### scheme
### Framework
### Add framework to application project

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

### Add framework to application project
  - There are 2 ways to use framework:

#### Manual (Use Embedded Framework)
  - add dependency frameworks into project by yourself: Project -> Target -> General -> Embedded Framework -> Select file.framework
 
#### Automate (Use Pod)
  - Step 1: In framework project, create a file ***PROJECT_NAME.podspec***
  
  ```
    mkdir MyFramework
    cd MyFramework
    touch MyFramework.podspec
    vim MyFramework.podspec
    cp abc.framework ./ #copy file abc.framework to MyFramework folder
  ```
  
  - MyFramework.podspec
  
  ```
    Pod::Spec.new do |s|
      s.name          = "MyFramework"
      s.version       = "1.0.0"
      s.summary       = "Sort description of 'MyFramework' framework"
      s.homepage      = "https://fujigame.net/"
      s.license       = "MIT"
      s.author        = "Nick D., Tuan L."
      s.platform      = :ios, "8.0"
      s.source        = { :path => '.' }
      s.public_header_files = "MyFramework.framework/Headers/*.h"
      s.module_map = "MyFramework.framework/Modules/module.modulemap"
      s.vendored_frameworks = "MyFramework.framework"
      s.requires_arc = true

      s.pod_target_xcconfig = { 'SWIFT_VERSION' => '3' }
    end
  ```
  
  - Step 2: In application project, create a file ***Podfile***
  
  ```
  touch Podfile
  vim Podfile
  ```
  
  ```
    platform :ios, '8.0'

    target 'MyFramework' do
      use_frameworks!

      pod 'MyFramework', :path => '../PATH_TO_MyFramework'
    end
  ```
  
  - Step 3: In application project: run ***$ Pod install***





