### Configure Apps with Over 64K Methods
### Configure your app for multidex

------------------------------

### Configure Apps with Over 64K Methods
- When your app and the libraries it references reach more than **64K Methods** it will error at build time (Can NOT build)
- You should config multidex for your app.

### Configure your app for multidex
* **app/build.gradle**

```gradle
android {
    defaultConfig {
        ...
        minSdkVersion 21 
        targetSdkVersion 25
        multiDexEnabled true
    }
    ...
}
```

* However, if your minSdkVersion is set to 20 or lower, then you must use the multidex support library as follows:
* **app/build.gradle**

```gradle
android {
    defaultConfig {
        ...
        minSdkVersion 15 
        targetSdkVersion 25
        multiDexEnabled true
    }
    ...
}

dependencies {
  compile 'com.android.support:multidex:1.0.1'
}
```

* **app/src/main/AndroidManifest.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">
    <application
            android:name="android.support.multidex.MultiDexApplication" >
        ...
    </application>
</manifest>
```
