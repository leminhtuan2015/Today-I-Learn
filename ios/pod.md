### CocoaPods
### Use Pod for install library
### Use Pod for create library

------------------

### CocoaPods
- CocoaPods just a tool to pakage source code (.swift, .storyboard, .*) to a Lib
- CocoaPods là 1 tool để đóng gói source code thành 1 thư viện để có thể import vào application project, sau đó khi combile sẽ compile đống source thư viện đó thành ***Framework***
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

    target 'FRAMEWORK_NAME' do

      pod 'FRAMEWORK_NAME', :path => 'PATH_TO_FRAMEWORK'

    end
  ```

### Use Pod for create library (.podspec)
  - [FRAMEWORK_NAME].podspec là file mô tả sẽ đóng gói những source nào thành thư viện
  - ***FRAMEWORK_NAME.podspec*** : Build your own pod lib and you can user other pod lib in your pod lib
  
  - Step 1: Create lib folder
  ```
    mkdir MyLib
    cd MyLib
    touch MyLib.podspec
    mkdir MyLib
  ```
  
  - Step 2: Edit MyLib.podspec file
  ```
Pod::Spec.new do |s|

  s.name          = "MyLib"
  s.version       = "1.0.0"
  s.summary       = "Sort description of MyLib"
  s.homepage      = "https://fujigame.net/"
  s.license       = "MIT"
  s.author        = "Nick D., Tuan L."
  s.platform      = :ios, "8.0"
  s.source        = { :path => '.' }
  s.source_files  = "MyLib", "MyLib/**/*.{h,m,swift}"
  s.resource_bundles = {"MyLib" => ["MyLib/**/*.{lproj,storyboard,png,jpg,jpeg}"]}

  s.dependency 'Alamofire', '~> 4.4'

  s.framework    = 'StoreKit'
end
  ```
  
  - Step 3: Add all your source code file in ***MyLib/MyLib***, create .swift file, .storyboard file ....
  
  ```
    cd MyLib/MyLib
    touch Tuan.swift
    vim Tuan.swift # add the follow source code
  ```
  
  ```
  import Foundation

  public class Tuan {

      public init() {}

      public func hello() {
        print("Hello Le")

      }

  }
  ```
  
  - Step 4: install Lib, in application project
  
  ```
    platform :ios, '8.0'

    target 'MyProject' do
      use_frameworks!

      pod "MyLib", path: "PATH_TO_MyLib"

    end
  ```
  
  
