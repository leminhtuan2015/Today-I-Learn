### Code Signing and Provisioning
### References
  - https://pewpewthespells.com/blog/migrating_code_signing.html#introduction-to-code-signing
  - https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html


-------------------------------------------

### Code Signing and Provisioning
  - All apps must be **signed** and **provisioned** to launch on a device, or to be uploaded to iTunes Connect

#### Signing
  - **signing identities/identity certificate** là tên gọi của file certificate mà Apple cấp cho dev, ví dụ: ios_distribution.cer.
  - Sử dụng file signing identities/identity certificate để sign lên app, mục đích chỉ ra ai là người tạo ra app
  
#### Provisioning*
  - **provisioning profile** là tên gọi của các file provision mà do Dev tạo ra, file này chứa những thông tin về người tạo ra app và ID của app như
     - certificates that can be used to sign the application
     - bundle id
     - method of deployment
     - team identifier
  - Sử dụng file provisioning profile để provision lên app
  - Mục đích Provisioning là:
    - để app có thể submit lên Appstore
    - để app có thể cài lên được các thiết bị của Apple (IPhone, IPad)

#### CHÚ Ý
 - App đã được Provisioning thì chỉ có thể cài thông qua Apple Store
 - App chưa Provisioning thì có thể cài không cần qua Apple Store
 - Như vậy mục đích của việc Provisioning là Apple chỉ cho phép bạn bán app thông qua duy nhất Apple store mà không được bán  thông qua các chợ đen nào khác
  
### Apple concepts about signing app
#### Basic
  - Xcode : IDE for coding app
  - App ID: Account Apple Developer
  - Member Center: https://developer.apple.com/account/#/welcome (where you can create Provisioning Profiles, App IDs Certificates)
  
#### Advance
  - Keychain Access : Tool manage **Signing Identity***
    - Create ***Certificate Signing Request (CSR)*** (create file to submit to Apple)
    - Store ***Signing Identity*** (Store certificate file)
  - Certificate Signing Request (CSR): The file ***CertificateSigningRequest.certSigningRequest*** contain private key of your Macbook, it is created by ***Keychain Access*** and you will submit it to Apple
  - Signing Identity : The certificate file contain public-private key pair that Apple creates for you (***ios_distribution.cer***), and you will store it in ***Keychain Access*** for signing your ios app
  - Provisioning Profile

