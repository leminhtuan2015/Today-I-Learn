
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


#### Method 1: Include Android Module (AAR) as a Subproject

* 1. Include all modules to project
  * **Gradle Project Level** : project/settings.gradle

```
include ':app'
include ':FujiSDK'

project(':FujiSDK').projectDir = new File(settingsDir, '../FujiSDK')
```

* 2. Include other modules to app module
  * **Gradle Module Level:** project/app/build.gradle

```
dependencies {
    compile project(':FujiSDK') // project
}
```

#### Method 2: Include .aar file



#### Method 3: Fetch from Remote (Maven)

```
compile 'com.inthecheesefactory.thecheeselibrary:fb-like:0.9.3'
```
