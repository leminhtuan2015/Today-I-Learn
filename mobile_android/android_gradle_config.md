
### Android Gradle Config


-----------------------------------------------------------------

### Android Gradle Config

#### compileSdkVersion

* The **compileSdkVersion** is the version of the API the app is compiled against
* If you use API 16 features but set compileSdkVersion to 15, you will get a compilation error
* If you use API 15 features but set compileSdkVersion to 16, that is ok
  
#### buildToolsVersion

* **buildToolsVersion** is the version of the compilers (aapt, dx, renderscript compiler, etc...) that you want to use
