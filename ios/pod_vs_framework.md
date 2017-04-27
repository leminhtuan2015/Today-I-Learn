### Pod vs Framework
### Add framework to project by Pod

----------------

### Pod vs Framework
  - ***Pod*** and ***Framework*** là 2 khái niệm hoàn toàn độc lập (Không hề liên quan)
    - ***Pod:*** 1 tool Ruby cho phép Đóng gói source thành 1 lib có thể import vào application
    - Add lib vào 1 project
  - ***Framework:***
    - Là support của Apple cho phép đóng gói source thành thư viện giống như (jar - Java, gem - Ruby, ...)
   
### Add framework to project by Pod
  - Để add framework vào project ta có 2 cách:
    - Cách 1: Manual: Project -> Target -> General -> Embedded Binaries -> Add framework
    - Cách 2: Automate: Use Pod

#### Cách 2: Automate: Add framework to project by Pod

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
  
  - Podfile
  ```
    platform :ios, '8.0'

    target 'MyFramework' do
      use_frameworks!

      pod 'MyFramework', :path => '../PATH_TO_MyFramework'
    end
  ```
  
  - Step 3: In application project: run ***$ Pod install***


