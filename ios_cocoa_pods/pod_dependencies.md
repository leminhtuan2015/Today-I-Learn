### POD dependencies
### Static vs Dynamic Frameworks (Libraries)
### Reject installation if a static library is used as a transitive dependency while using frameworks

---------------------------------

### POD dependencies
  -  ***You can use other pod in your pod when use as dependencies***

  ```
  Pod::Spec.new do |s|
    ......
    
    s.dependency 'Alamofire', '~> 4.4'
    s.dependency 'SwiftyJSON'
    s.dependency 'SomeOtherPod'
    ......

  end
  ```
  
### Static vs Dynamic Frameworks (Libraries)
  - Static frameworks are linked at compile time
  - Dynamic frameworks are linked at runtime, and can be modified without relinking
  - If you’ve ever used a non-Apple framework prior to iOS 8, you were using a static framework which was compiled into the source code of your app
  
  - https://pewpewthespells.com/blog/static_and_dynamic_libraries.html
  - http://code.hootsuite.com/an-introduction-to-creating-and-distributing-embedded-frameworks-in-ios/

### Reject installation if a static library is used as a transitive dependency while using frameworks
  - Some time ***We can NOT use pod as dependency***
  
  ```
  s.dependency 'Google/SignIn'
  
  => Will thought error
  
  Error: [!] The 'Pods' target has transitive dependencies that include static binaries

  ```
  
  - Error mean: 
    - You can't have static binaries that are transitive dependencies of multiple dynamic binaries, since that would lead to duplicate symbols and non-deterministic behavior.
  
    - This is intended behavior -- Google really would need to provide a dynamic framework in order for it to be usable as a transitive dependency when integrating with frameworks, exactly as the error says
    
    - https://github.com/CocoaPods/CocoaPods/issues/2926
    - https://github.com/CocoaPods/CocoaPods/issues/3841#issuecomment-123803940
    - https://github.com/CocoaPods/CocoaPods/issues/3729
    
    
    
  - SOLUTION:
    - Copy all framework, not use as dependencies that worked for me.
    - https://github.com/CocoaPods/CocoaPods/issues/4053
    
    
    
    
    
    
    
    
