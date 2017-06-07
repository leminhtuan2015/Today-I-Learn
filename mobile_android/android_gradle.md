### Gradle
### Gradle Sign App

--------

### Gradle
* Gradle used to build Android project to APK

* **Project level :** have 2 gradle file
  * `setting.gradle` : File config modules contain in project
  * `project/build.gradle` : File config remote repositories for fetching dependencies
  
* **Module level**
  * `project/app/build.gradle` : File config **How to build module**, **dependencies of module**

### Gradle Sign App

```
android {
    signingConfigs {
        release {
            storeFile rootProject.file(keystoreProperties['storeFile'])
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storePassword keystoreProperties['storePassword']
        }

        debug {
            storeFile rootProject.file(keystoreProperties['storeFile'])
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storePassword keystoreProperties['storePassword']
        }
    }
    
    buildTypes {
        debug {
            minifyEnabled false
            signingConfig signingConfigs.debug
        }
        release {
            minifyEnabled false
            signingConfig signingConfigs.release
        }
    }
}
```
