### Project and Modules
### Gradle Project Level
### Gradle Module Level
### Gradle Module Level for Signning App
### Gradle Import Dependencies (AAR) as a sub-project

--------
### Project and Modules
* Each Android project have one or many modules
* **app** is the default module of the project
* Be-side **app** module you can add many other module to the project

* In **project/setting.gradle** : file config the modules of project

```gradle

include ':app' // Inside project
include ':mylibrary' // Inside project

include ':testaar' // Outside project
include ':testaar_1' // Outside project

project(':testaar').projectDir = new File(settingsDir, '../testaar') // Outside project
project(':testaar_1').projectDir = new File(settingsDir, '../testaar_1') // // Outside project

```

### Gradle Project Level
* Gradle used to build Android project to APK

* **Project Level :** have 2 gradle file
  * **project/setting.gradle** : File config modules contain in project
  * **project/build.gradle** : File config remote repositories for fetching dependencies
  
### Gradle Module Level
  * **project/app** is the module of project (One project can contain many modules)
  * **project/app/build.gradle** : File config **How to build module**, **dependencies of module**

### Gradle Module Level for Signning App

```gradle
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

### Gradle Import Dependencies (AAR) as a sub-project

#### Import Other Modules to Project

* Import **FujiSDK** project library into project 
* **project/settings.gradle**

```gradle
include ':app'
include ':FujiSDK'

project(':FujiSDK').projectDir = new File(settingsDir, '../Android')
```

#### Import Modules to Module
* In **project/app/build.gradle** of **app** module

```gradle
dependencies {
    compile fileTree(include: ['*.jar'], dir: 'libs')
    compile 'com.android.support:appcompat-v7:25.2.0'

    compile project(':FujiSDK')
}
```
