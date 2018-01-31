
### Android Dependencies aar, jar
### Using Android Dependencies
--------------------------

### Android Dependencies aar, jar

* **jar** - Java Archive : Contain java logic code
* **aar** : Android Archive : Contain **jar** + **Android XML Layout, Android AndroidManifest.xml, Android Resource**

* **jar** and **aar** can call each other, live in one project
* **aar** can contain other **aar** files and other **jar** file

### Using Android Dependencies

#### Using aar, jar On Local

```
compile files('libs/YouTubeAndroidPlayerApi.jar')
```

#### Using  aar, jar On Remote

```
compile 'com.inthecheesefactory.thecheeselibrary:fb-like:0.9.3'
```
