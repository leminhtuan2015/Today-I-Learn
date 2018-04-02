### Code Signing
### Certificate
### Provisioning profile


-------------------------------------------

### Code Signing
* All apps must be **signed** to launch on a device, or to be uploaded to iTunes Connect
  
#### Sign app step by step

* Step 1: Create Certificate
* Step 2: Create Provision
* Step 3: Click on Certificate to add it to Keychain Access
* Step 4: In Xcode link app to Provision file (General tab -> Signing), Xcode can **auto** find Provision file with matched bundle id
* Step 5: Run/Build/Install to Iphone
 
### Certificate

* Each account should have only one **Certificate** for sign apps
* Each app have one **Provisioning profile** and one **App id** 

  
### Provisioning profile
* Sử dụng file provisioning profile để provision lên app
* Mục đích Provisioning là:
  * để app có thể cài lên được các thiết bị của Apple (IPhone, IPad)
  * để app có thể submit lên Appstore
  * nếu KHÔNG Provisioning thì app không thể cài được trên các thiết bị Apple (IPhone, IPad)

* Provisioning profile at local: Users/[TUAN]/Library/MobileDevice/Provisioning\ Profiles
* Provisioning profile Include: 
  * certificates that can be used to sign the application
  * bundle identifier
  * method of deployment
  * team identifier
     
#### Provisioning used for:
 - 1: Phải Provisioning mới có thể cài app lên thiết bị
 - 2: Khi đã Provisioning thì chỉ có thể cài thông qua Apple store
 - => 2 điều trên để khẳng định bạn chỉ có thể bán app thông qua Apple Store
 - Như vậy mục đích của việc Provisioning là Apple chỉ cho phép bạn bán app thông qua **duy nhất Apple store** mà không được bán thông qua các chợ đen nào khác
 
#### Chý ý
 - Tip & Trick để có thể cài app lên iphone mà không cần qua Apple Store hay không cần Provisioning là bạn phải ***Jail break*** máy

  
  
