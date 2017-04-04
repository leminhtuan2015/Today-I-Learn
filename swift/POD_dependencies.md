### POD dependencies
### Dynamic frameworks
### Static libraries
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
  
### Dynamic frameworks

### Static libraries

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
