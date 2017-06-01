### IOS/Android API Level
### How Apple/Google update IOS/Android Version

-----------------------------

### IOS/Android API Level

* API : **Include the functions and code (classes, modules)** that your applications can use to interact with the underlying Android system (Android OS)
* Most changes in the API are **additive and introduce new or replacement functionality** the older replaced parts are **deprecated but are NOT removed**
* **API is placed inside IOS/Android (OS)**
* With each **version of IOS/Android (OS)** => **version of API** will be updated (add more or deprecated)
* Choosing a lower API level may support more devices but gain less functionality for your app. you may also work harder to achieve features you could've easily gained if you chose higher API level.

#### Example
* IOS 8.0 : **deployment targets iOS 8.0**
* IOS 9.2 : **deployment targets iOS 9.2**
* IOS 10.3 : **deployment targets iOS 10.3**

```
if Float(UIDevice.current.systemVersion)! < 9.3 {
    //add lower than 9.3 code here
} else {
    //add 9.3 and above code here
}
```
* Android 4.0.3, 4.0.4 : **API 15**
* Android 4.1, 4.1.1 : **API 16**
* Android 4.2, 4.2.2 : **API 17**
* Android 5.0 : **API 21**
* Android 7.0 : **API 24**
* Android 7.1.1, Android 7.1 : **API 25**

### How Apple/Google update IOS/Android Version

* With Apple, they do both:
  * Develop **IOS opera system**
  * Develop **Devices** - IPhone, IPad ...
  
Therefor when Apple have a new IOS version (10.0 -> 10.1), Apple can **immediately** notify to all IOS device for update new IOS version 

* With Google, They just only develop **Android opera system**, and NOT develop **Android devices**

Therefor when Google have a new Android version (7.0 -> 7.1), Google CAN NOT notify to users to update new Android version, instead of that is **Mobibe distributor** such as SamSung, Sony,... 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
