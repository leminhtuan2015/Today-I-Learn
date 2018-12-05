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
