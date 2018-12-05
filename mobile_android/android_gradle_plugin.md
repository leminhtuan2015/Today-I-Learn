### Android Gradle plugin
### Android Gradle plugin version - Gradle version 

--------------------------------------------------------------------

### Android Gradle plugin

- The Android Studio build system is **based on Gradle**.
- The **Android Gradle plugin** `adds several features` that are `specific to building Android apps`
- The following example sets the plugin to version 3.2.1 from the `build.gradle` file:

```gradle
buildscript {
    repositories {
        // Gradle 4.1 and higher include support for Google's Maven repo using
        // the google() method. And you need to include this repo to download
        // Android Gradle plugin 3.0.0 or higher.
        google()
        ...
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'. // THIS ANDROID PROJECT USE GRADEL PLUGIN 3.2.1
    }
}
```

### Android Gradle plugin version - Gradle version 

* 1.0.0 - 1.1.3 (Androi Gradle Plugin) >>>>>>Require>>>>>> 2.2.1 - 2.3 (Gradle version)
* 1.2.0 - 1.3.1 (Androi Gradle Plugin) >>>>>>Require>>>>>> 2.2.1 - 2.9 (Gradle version)
* 1.5.0	2.2.1 (Androi Gradle Plugin) >>>>>>Require>>>>>> 2.13 (Gradle version)
* 2.0.0 - 2.1.2 (Androi Gradle Plugin) >>>>>>Require>>>>>> 2.10 - 2.13 (Gradle version)
* 2.1.3 - 2.2.3 (Androi Gradle Plugin) >>>>>>Require>>>>>> 2.14.1+ (Gradle version)
* 2.3.0+ (Androi Gradle Plugin) >>>>>>Require>>>>>> 3.3+ (Gradle version)
* 3.0.0+ (Androi Gradle Plugin) >>>>>>Require>>>>>> 4.1+ (Gradle version)
* 3.1.0+ (Androi Gradle Plugin) >>>>>>Require>>>>>> 4.4+ (Gradle version)
