
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

### Using Android Dependencies

#### Using aar, jar On Local

```
compile files('libs/YouTubeAndroidPlayerApi.jar')
```

#### Using  aar, jar On Remote

```
compile 'com.inthecheesefactory.thecheeselibrary:fb-like:0.9.3'
```
