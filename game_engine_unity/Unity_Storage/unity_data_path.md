
### Android Storage
### Unity Data Path

--------------------

### Android Storage
  * **Internal file storage**: Store app-private files on the device file system.
  * **External file storage**: Store files on the shared external file system. This is usually for shared user files, such as photos.
  * **Shared preferences**: Store private primitive data in key-value pairs.
  * **Databases**: Store structured data in a private database.
  
#### Internal File Storage

* Store app-private files on the device file system.
* By default, files saved to the internal storage are private to your app, and other apps cannot access them (nor can the user, unless they have root access)
* Internal storage a good place for internal app data that the user doesn't need to directly access

#### Shared preferences
* If you don't need to store a lot of data and it doesn't require structure, you should use SharedPreferences. The SharedPreferences APIs allow you to read and write persistent key-value pairs of primitive data types: booleans, floats, ints, longs, and strings.

#### Databases
* Android provides full support for SQLite databases. Any database you create is accessible only by your app.

#### External File Storage

* Every Android device supports a shared "external storage" space that you can use to save files


```
Environment.getExternalStorageDirectory().getAbsolutePath() = /storage/emulated/0
context.getPackageName() = com.name.package

<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

Application.persistentDataPath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/" + context.getPackageName() + "/" + "files/"

```

### Unity Data Path

* Android
  * Unity Application.persistentDataPath = External File Storage in Android
  * Application.persistentDataPath = /storage/emulated/0/Android/data/com.name.package/files
