
### Create POD library

--------------------------------------------------------

### Create POD library (Make your own pod)

- You can use other pod in your own pod by using ***dependency***
- After install pod you can use all source of that library by ***import***

- Step 1:
  ```
  pod lib create [pod name]
  ```

- Step 2: Change your `.podspec` file

  ```swift
  Pod::Spec.new do |s|

    s.name          = "Tuan"
    s.version       = "1.0.0"
    s.summary       = "Sort description of 'FujiSDK' framework"
    s.homepage      = "https://fujigame.net/"
    s.license       = "MIT"
    s.author        = "Nick D., Tuan L."
    s.platform      = :ios, "8.0"
    s.ios.deployment_target = '8.0'
    s.pod_target_xcconfig = { 'SWIFT_VERSION' => '3' }

    s.source        = { :git => 'nami-net@nami-net.git.backlog.jp:/FJ_GAME_PF/fuji_sdk_swift.git', :tag => s.version.to_s }
    s.source_files  = "Tuan", "Tuan/Classes/**/*", "Tuan.podspec"

    s.resource_bundles = {
      'Tuan' => ["Tuan/**/*.{lproj,storyboard,png,jpg,jpeg}"]
    }

    # s.public_header_files = 'Pod/Classes/**/*.h'

      s.dependency 'RxSwift', '~> 3.1.0'
      s.dependency 'Alamofire', '~> 4.4'

      s.framework    = 'StoreKit'
      # s.frameworks = 'UIKit', 'MapKit'

    end

    ```
    
- Step 3: From your Xcode application project

  ```
  platform :ios, '8.0'
  use_frameworks!
  
  target 'FujiSDK-Test' do

    pod 'Tuan', :path => '../Tuan'

  end
  ```


- Step 4: import your pod and have fun

  ```
    import Tuan
  ```
