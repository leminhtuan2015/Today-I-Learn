
### Android Library aar, jar
### Using Android Library In Android Application
--------------------------

### Android Library aar, jar
* Android have 2 type of Library: **AAR, JAR** 
* **JAR** - Java Archive : Contain java logic code
* **AAR** : Android Archive : Contain **jar** + **Android XML Layout, Android AndroidManifest.xml, Android Resource**

* **jar** and **aar** can call each other, live in one project
* **aar** can contain other **aar** files and other **jar** file
* Android Application can contain both **AAR** and **JAR**

### Using Android Library In Android Application

#### 3 ways to add library to app module

```
dependencies {
    compile project(':FujiSDK') // project (method 1)
    compile files('libs/YouTubeAndroidPlayerApi.jar') // files (method 2)
    compile(name: 'payment-0.6.0', ext: 'aar') {transitive = true} // Maven (method 3)
}
```

#### Method 1: Include Android Module (AAR) as a Sub-Module of app module

1. Include all modules to project
  * **Gradle Project Level** : project/settings.gradle

```
include ':app'  // app is the module of project
include ':FujiSDK' // FujiSDK is other module of project

project(':FujiSDK').projectDir = new File(settingsDir, '../FujiSDK')
```

2. Include other modules to **app module**
  * **Gradle Module Level:** project/app/build.gradle

```
dependencies {
    compile project(':FujiSDK') // Include other module as sub-project
}
```

#### Method 2: Include .aar file into ***app module***

1. copy **.aar** files to **project/app/libs**
2. **Gradle Module Level:** project/app/build.gradle

```
compile files('libs/testaar_1-debug.aar')
```


#### Method 3: Fetch from Remote (Maven)

```
compile 'com.inthecheesefactory.thecheeselibrary:fb-like:0.9.3'
```
