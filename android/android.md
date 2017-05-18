### Project Structure
### Gradle
----------------------

### Project Structure

* Android **project** is contain many **modules**
  * Project level : 
    * **settings.gradle** : Config **modules** it should include in **project**
    * **build.gradle** : Config build script
  * Module level :
    * **build.gradle** Config dependencies
    
* Each module in Android have it own **build.gradle** for build its module

### Gradle

#### Import Other Library

* Import **FujiSDK** project library into project 
* **settings.gradle**

```
include ':app'
include ':FujiSDK'

project(':FujiSDK').projectDir = new File(settingsDir, '../Android')
```
