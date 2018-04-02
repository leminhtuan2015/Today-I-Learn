### Code Signing
### Certificate
### App ID
### Provisioning profile

-------------------------------------------

### Code Signing
* All apps must be **signed** to launch on a device, or to be uploaded to iTunes Connect
  
#### Sign app step by step

* Step 0: Create Certificate
* Step 1: Create App Id
* Step 2: Create Provision
* Step 3: Double Click on Certificate (file.cer) to add it to Keychain Access
* Step 4: In Xcode link app to Provision file (General tab -> Signing), Xcode can **auto** find Provision file with matched bundle id
* Step 5: Run/Build/Install to Iphone
 
### Certificate (.cer)
* Each account should have only one **Certificate** for sign apps
* Each app have one **Provisioning profile** and one **App id** 

#### Create Certificate

* Step 1: Open Keychain Access
* Step 2: Keychain Access > Certificate Assistant > Request a Certificate From a Certificate Authority > Saved to disk > **CertificateSigningRequest.certSigningRequest**
* Step 3: On https://developer.apple.com/account/ > Certificate > Click on + to create Certificate > browse CertificateSigningRequest.certSigningRequest above
* Step 4: Download file **.cer**, Double click to import to Keychain Access

#### Export Certificate to other machine (.p12)

* Step 1: Open Keychain Access
* Step 2: Select both private key + .cer > Right click > export to **.p12**
* Step 3: Double click on **.p12** to import Certificate on other Macbook


### App ID
* App ID is the bundle id of each app
* Each app on Apple Store have unique id, create App ID that mean create bundle id for your app
  
### Provisioning profile (.mobileprovision)
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
  
#### Create Provisioning profile
* You can create Provisioning profile after you have
 
#### Chý ý
 - Tip & Trick để có thể cài app lên iphone mà không cần qua Apple Store hay không cần Provisioning là bạn phải ***Jail break*** máy

  
  
