### Code Signing and Provisioning
### Apple concepts about signing app
### XCode Signing Identity and Provisioning Profiles
### First time build and submit to Apple store
### References
  - https://pewpewthespells.com/blog/migrating_code_signing.html#introduction-to-code-signing
  - https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html
  - https://medium.com/ios-os-x-development/ios-code-signing-provisioning-in-a-nutshell-d5b247760bef#.3yfeyw82j


-------------------------------------------

### Code Signing and Provisioning
  - All apps must be **signed** and **provisioned** to launch on a device, or to be uploaded to iTunes Connect

#### Signing
  - signing identities = signing certificate
  - **signing identities/signing certificate** là tên gọi của file certificate mà Apple cấp cho dev, ví dụ: ios_distribution.cer.
  - Sử dụng file signing identities/signing certificate để sign lên app, mục đích chỉ ra ai là người tạo ra app
  
#### Provisioning
  - **provisioning profile** là tên gọi của các file provision mà do Dev tạo ra, file này chứa những thông tin về người tạo ra app và ID của app như
     - certificates that can be used to sign the application
     - bundle identifier
     - method of deployment
     - team identifier
  - Sử dụng file provisioning profile để provision lên app
  - Mục đích Provisioning là:
    - để app có thể cài lên được các thiết bị của Apple (IPhone, IPad)
    - để app có thể submit lên Appstore
    - nếu KHÔNG Provisioning thì app không thể cài được trên các thiết bị Apple (IPhone, IPad)

##### Cơ chế của Provisioning là:
 - 1: Phải Provisioning mới có thể cài app lên thiết bị
 - 2: Khi đã Provisioning thì chỉ có thể cài thông qua Apple store
 - => 2 điều trên để khẳng định bạn chỉ có thể bán app thông qua Apple Store
 - Như vậy mục đích của việc Provisioning là Apple chỉ cho phép bạn bán app thông qua **duy nhất Apple store** mà không được bán thông qua các chợ đen nào khác
 
##### Chý ý
 - Tip & Trick để có thể cài app lên iphone mà không cần qua Apple Store hay không cần Provisioning là bạn phải hy sinh ***Jail break*** máy
 - Trong quá trình Dev thì developer có thể trực tiếp cài app lên thiết bị thông qua XCode mà không cần Provisioning
 
### Apple concepts about signing app
#### Basic
  - Xcode : IDE for coding app
  - App ID: Account Apple Developer
  - Member Center: Where you can create Provisioning Profiles, App IDs, Certificates, ...
  
#### For creating Signing Identity
  - ***Keychain Access*** : Tool manage ***Signing Identity/Certificate*** 
  - ***Certificate Signing Request (CSR)*** : The file ***CertificateSigningRequest.certSigningRequest*** contain private key of your Macbook, it is created by ***Keychain Access*** and you will submit it to Apple
  
#### For Signing and Provisioning
  - ***Signing Identity/Certificate*** : The certificate file (.cer) be stored it in ***Keychain Access*** for signing your ios app
  - ***Provisioning Profile*** : The provision file (.provision) contain bundle id, team identifier, ... for provisioning your ios app, provision files be stored in XCode
  
### XCode Signing Identity and Provisioning Profiles
  - Choose Xcode > Preferences > Accounts > Select your team > View Details.
  - If Xcode displays a **Create button**, the signing identity **doesn’t exist in your developer account or on your Mac**
  - If Xcode displays a **Reset button**, the signing identity is **not usable on your Mac** (it is missing the private key)

### First time build and submit to Apple store
 - Hoàn toàn làm mọi thứ trong XCode
 
 - Step 1:  Choose Xcode > Preferences > Accounts > Select your team > View Details
   - Sau khi đăng nhập XCode sẽ hiển thị toàn bộ ***Signing Identities and Provisioning Profiles*** nếu đã tạo
   - Signing Identities and Provisioning Profiles được lưu trên tài khoản Apple Developer của Dev 
   - Signing Identities sẽ hiện nút create nếu bạn chưa 
   - Signing Identities sẽ hiện nút reset nếu đăng nhập tài khoản ở Macbook khác (Macbook đang dùng chính KHÔNG phải là máy tạo ra Signing Identities - do private key không khớp)
   - Signing Identities sẽ hiện trắng (chả có nút gì) nếu hợp lệ (Macbook đang dùng chính là máy tạo ra Signing Identities)
   
 - Step 2: trong mục ***signing identities*** 
   - click ***create*** của IOS Distribution (Nếu chưa có signing identities)
   - click ***reset*** nếu chuyển sang Macbook mới
   
 - Step 3: Lên trang cá nhân Apple Dev
   - Tạo mới provission profile ứng với signing identities ở bước trên
   - edit lại toàn bộ signing identities của provission profile
    
 - Step 4: Đã có signing identities IOS Distribution và provission profile => Buid
  
#### Để có thể build app trên máy Macbook khác (trường hợp dùng 2 Macbook hay khi làm team)
  - Export tài khoản XCode và sau đó Import vào XCode trên những máy khác => Các máy sẽ giống hệt nhau về signing certificate và provisioning profiles
  
  
  
  
  
