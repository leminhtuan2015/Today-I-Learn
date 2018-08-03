
### Android External Store
### Unity Data Path

--------------------


### Android External Store

* Environment.getExternalStorageDirectory().getAbsolutePath() = /storage/emulated/0
* context.getPackageName() = com.name.package

```
Application.persistentDataPath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/" + context.getPackageName() + "/" + "files/"

```


### Unity Data Path

* Android
  * Application.persistentDataPath = /storage/emulated/0/Android/data/com.name.package/files
