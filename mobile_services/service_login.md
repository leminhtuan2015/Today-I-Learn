### IOS Social Login
### Android Social Login


------------------------------------------------------

* NOTICE For Login: 
  * **Android** : Google Login need add **google-services.json** to project
  * **IOS** : Google Login **NOT** need add **GoogleService-Info.plist** to project
  
* NOTICE For Firebase:

  * **Android** : Firebase do need add **google-services.json** to project
  * **IOS** :  Firebase do need add **GoogleService-Info.plist** to project


### IOS Social Login

#### Google (GoogleService-Info.plist, NOT need to add to Xcode project)
* On Server Create a Firebase Project
* On Firebase project create IOS app (Dont need the same bundle id with app)
* Get Client_ID from **GoogleService-Info.plist** (at Firebase console)
* Install Google SDK on project (Pod or add .framework to project)
* Set GG Client_ID in code at client
* Config Info/URL on setting
* Config openURL on AppDelegate
* Done

#### Facebook
* On Facebook Develop create a Facebook App
* Make app is live + Enable Single Sign On for Your App
* Copy XML contain Facebook ID to **info.plist**
* Install Facebook SDK on project (Pod or add .framework to project)
* Config Info/URL on setting
* Config openURL on AppDelegate
* Done



### Android Social Login

#### Google (google-services.json, HAVE TO add into your YourProjectName/app/google-services.json)
* On Server Create a Firebase Project
* On Firebase project create Android app
* Download and add **google-services.json** file to your project (YourProjectName/app/google-services.json)
* Install Google Service on project (compile 'com.google.android.gms:play-services-auth:11.8.0')

#### Facebook
* On Facebook Develop create a Facebook App
* Make app is live + Enable Single Sign On for Your App
* Install Facebook SDK on project (compile 'com.facebook.android:facebook-android-sdk:[4,5)')
* Set **facebook_app_id** in AndroidManifest.xml.

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
```
* Provide the Development and Release Key Hashes for Your App






