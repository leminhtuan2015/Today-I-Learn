### Code Signing
### Certificate
### App ID (Bundle ID)
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
* Certificate = **Private Key** of you Mac + Apple Account Infomation
* Each account should have only one **Certificate** for sign apps
* Each app have one **Provisioning profile** and one **App id** 

#### Create Certificate
* Step 0: Certificate must contain your **Private Key** => You have create **.certSigningRequest** file on your Macbook first.
* Step 1: Open Keychain Access
* Step 2: Keychain Access > Certificate Assistant > Request a Certificate From a Certificate Authority > Saved to disk > **CertificateSigningRequest.certSigningRequest**
* Step 3: On https://developer.apple.com/account/ > Certificate > Click on + to create Certificate > browse CertificateSigningRequest.certSigningRequest above
* Step 4: Download file **.cer**, Double click to import to Keychain Access

#### Export Certificate to other Mac OS machine (.p12)
* Certificate = **Private Key** of you Mac + Apple Account Infomation => If you want to use Certificate on other Mac you have to export both Certificate + **Private Key** in Keystore.
* If you work in team or you want to develop on other Mac OS, You need export Certificate to .p12 file and import to other Mac

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
  
#### Open Provisioning profile info
* 1st way:

```sh
security cms -D -i file.mobileprovision
```

* 2nd way:
  * In Xcode

#### Create Provisioning profile
* Provisioning profile is just a **plist** file contain infomation
* Provisioning profile contain App Id + certificates infomation
* Certificates + App ID must create first before you create Provisioning profile
* On https://developer.apple.com/account/ > Provisioning profile > select certificates and App Id > Download Provisioning profile
 

  
  
