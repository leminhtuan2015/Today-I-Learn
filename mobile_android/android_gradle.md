### Gradle Project Level
### Gradle Module Level
### Gradle Module Level for Signning App
### Gradle Import Dependencies

--------

### Gradle Project Level
* Gradle used to build Android project to APK

* **Project Level :** have 2 gradle file
  * **project/setting.gradle** : File config modules contain in project
  * **project/build.gradle** : File config remote repositories for fetching dependencies
  
### Gradle Module Level
  * **project/app** is the module of project (One project can contain many modules)
  * **project/app/build.gradle** : File config **How to build module**, **dependencies of module**

### Gradle Module Level for Signning App

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

### Gradle Import Dependencies

#### Import Other Modules to Project

* Import **FujiSDK** project library into project 
* **project/settings.gradle**

```
include ':app'
include ':FujiSDK'

project(':FujiSDK').projectDir = new File(settingsDir, '../Android')
```

#### Import Modules to Module
* In **project/app/build.gradle** of **app** module

```
dependencies {
    compile fileTree(include: ['*.jar'], dir: 'libs')
    compile 'com.android.support:appcompat-v7:25.2.0'

    compile project(':FujiSDK')
}
```
