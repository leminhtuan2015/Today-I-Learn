### Android Configtion
### Android Configtion ApplicationID vs Package Name
----------------------------------

### Android Configtion

* 1: **applicationId** "vn.fujigame.remonster"
* 2: **versionCode** 114
* 3: **versionName** "2.0.2"
* 4: **signingConfigs** Signed Your App By KeyStore
* 5: **package name** "com.fuji.platform"

### Android Configtion ApplicationID vs Package Name
* **applicationId** != **package name**
* **package name** == **folder structure**
* **applicationId** is diffrent from **package Name**
  * **applicationId** can be `com.xxx` but **package name** can be `com.yyy`
  * **applicationId** can be `com.xxx` but **folder structure** can be `module_name/app/src/main/java/com/yyy` 

* **package Name** is the same **folder structure**
  * **package name** is `com.yyy` => **folder structure** must be `module_name/app/src/main/java/com/yyy`

