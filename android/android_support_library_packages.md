### Android Support Library
### Android Support Library Version (jar/aar)
### Adding Support Libraries

----------------------------------------

### Android Support Library 
* **Current Android OS is 7.0 : API 25** but so much device in the world is **Android 4.0.3, 4.0.4 : API 15** 
* But `API 15` is so much less **classes, functions, features** than `API 25`, therefor you need **Android Support Library** to use some better functions and features in old devices
* **Android Support Library** just is a .aar or .jar file, that will build with your application (.apk)
* The Support Libraries provide additional **classes, function and features** not available in the standard Framework API for easier development and support across more devices

### Android Support Library Version (jar/aar)
```
Android Support Library just is a .jar or .aar file
```

* **v4 Support Library** : This library is designed to be used with Android 1.6 (API level 4) and higher.
* **v7 Support Library** : There are several libraries designed to be used with Android 2.1 (API level 7) and higher
* **v7 appcompat library** : This library adds support for the Action Bar user interface design pattern.
* **v13 Support Library** : This library is designed to be used for Android 3.2 (API level 13) and higher

### Adding Support Libraries
* `project/build.gradle`

```
allprojects {
    repositories {
        jcenter()
        maven {
            url "https://maven.google.com"
        }
    }
}
```

* `module/build.gradle`

```
dependencies {
    ...
    compile "com.android.support:support-core-utils:25.3.1"
}
```
