### CocoaPods
### Use Pod for install library
### Use Pod for create library


------------------

### CocoaPods
- CocoaPods just a tool to pakage source code (.swift, .storyboard, .*) to a folder
- CocoaPods là 1 tool để đóng gói source code vào trong 1 folder, sau đó khi combile sẽ compile đống source đó thành ***Framework***
- CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects.
- CocoaPods:
  - Intergrate a lib for IOS app
  - Create a lib for IOS app

  ```
  # Xcode 7 + 8
  $ sudo gem install cocoapods
  ```
### Use Pod for install library (Podfile)
  - ***Podfile*** : install lib to IOS application 
  
  ```
    platform :ios, '8.0'
    use_frameworks!

    target 'FujiSDK-Test' do

      pod 'FujiSDK', :path => '../FujiSDK'

    end
  ```

### Use Pod for create library (.podspec)
  - [PROJECT_NAME].podspec là file mô tả sẽ đóng gói những source nào thành thư viện
  - ***FujiSDK.podspec*** : Build your own pod lib and you can user other pod lib in your pod lib
  
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
    ...........
    s.framework    = 'StoreKit'
  end
  ```
