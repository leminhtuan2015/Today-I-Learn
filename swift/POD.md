### CocoaPods
### CocoaPods as lib
### CocoaPods as dependency


------------------

### CocoaPods

- CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects.
- CocoaPods:
  - Intergrate a lib for IOS app
  - Create a lib for IOS app

  ```
  # Xcode 7 + 8
  $ sudo gem install cocoapods
  ```
### CocoaPods as lib
  - ***Podfile***
  
  ```
    platform :ios, '8.0'
    use_frameworks!

    target 'FujiSDK-Test' do

      pod 'FujiSDK', :path => '../FujiSDK'

    end
  ```

### CocoaPods as dependency
  - ***FujiSDK.podspec***
  
  ```
      Pod::Spec.new do |s|

      s.name          = "FujiSDK"
      
      ...........
      
      s.platform      = :ios, "8.0"
      s.source        = { :git => "nami-net@nami-net.git.backlog.jp:/FJ_GAME_PF/fuji_sdk_swift.git" }
      s.source_files  = "FujiSDK", "FujiSDK/**/*.{h,m,swift}", "FujiSDK.podspec"
      s.resource_bundles = {"FujiSDK" => ["FujiSDK/**/*.{lproj,storyboard,png,jpg,jpeg}"]}
    
      s.dependency 'Alamofire', '~> 4.4'
      s.dependency 'SwiftyJSON'
      
      ............

      s.framework    = 'StoreKit'
    end

  ```
