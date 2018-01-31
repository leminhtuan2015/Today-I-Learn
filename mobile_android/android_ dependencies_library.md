
### Android Library aar, jar
### Using Android Library
--------------------------

### Android Library aar, jar
* Android have 2 type of Library: **AAR, JAR** 
* **JAR** - Java Archive : Contain java logic code
* **AAR** : Android Archive : Contain **jar** + **Android XML Layout, Android AndroidManifest.xml, Android Resource**

* **jar** and **aar** can call each other, live in one project
* **aar** can contain other **aar** files and other **jar** file
* Android Application can contain both **AAR** and **JAR**

### Using Android Library

#### Using Android Library On Local

```
dependencies {
    compile project(':FujiSDK') // project
    compile files('libs/gcm.jar') // files
    compile files('libs/YouTubeAndroidPlayerApi.jar') // files
    compile(name: 'payment-0.6.0', ext: 'aar') {transitive = true} // Maven
}
```

#### Using Android Library On Remote (Maven)

```
compile 'com.inthecheesefactory.thecheeselibrary:fb-like:0.9.3'
```
