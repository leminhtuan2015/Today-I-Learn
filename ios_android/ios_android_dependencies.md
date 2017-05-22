
### IOS, Android Dependencies
### Where The Dependencies is fetched from? 
### Local Dependencies
--------------------

### IOS Dependencies
* Use **Pod (Ruby Gem)** to manager dependencies
* In **Podfile**

```
pod 'Alamofire', '~> 4.4'

pod 'Alamofire', :git => 'https://github.com/Alamofire/Alamofire.git', :commit => '410e866'
```

### Android Dependencies
* Use **Gradle** to manager dependencies
* In Module level: **app/build.gradle**

```
dependencies {
    compile 'com.inthecheesefactory.thecheeselibrary:fb-like:0.9.3'
}
```
### Where The Dependencies is fetched from?
* IOS
  * XCode downloads the library from Github or any Git repository

* Android
  * Android Studio downloads the library from Maven Repository Server we defined in build.gradle
  * At project level: $ROOT/build.gradle
  
```
allprojects {
    repositories {
        mavenCentral()
        jcenter()
    }
}
```
### Local Dependencies

* IOS

```
pod 'Name', :path => 'path/to/Pod'
```
* Android

```
dependencies {
    compile project(':FujiSDK')
}
```

