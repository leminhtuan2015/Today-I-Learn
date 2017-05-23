### Project Structure
### Gradle
----------------------

### Project Structure

* Android **project** is contain many **modules** (at least one module that is **app**)
  * Project level : 
    * **settings.gradle** : Config **modules** it should include in **project**
    * **build.gradle** : Config build script
  * Module level :
    * **build.gradle** Config dependencies
    
* Each module in Android have it own **build.gradle** for build its module
* Android **project**: là tập hợp của các **Modules**, Mặc định mỗi Android project có ít nhất một module **app**

### Gradle

#### Import Other Library to Project

* Import **FujiSDK** project library into project 
* **settings.gradle**

```
include ':app'
include ':FujiSDK'

project(':FujiSDK').projectDir = new File(settingsDir, '../Android')
```

#### Import Library to Module
* In **build.gradle** of **app** module

```
dependencies {
    compile fileTree(include: ['*.jar'], dir: 'libs')
    compile 'com.android.support:appcompat-v7:25.2.0'

    compile project(':FujiSDK')
}
```
