### IOS/Android API Level


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

* Android 4.1, 4.1.1 : **API 16**
* Android 4.2, 4.2.2 : **API 17**
* Android 5.0 : **API 21**
* Android 7.0 : **API 24**
* Android 7.1.1, Android 7.1 : **API 25**
