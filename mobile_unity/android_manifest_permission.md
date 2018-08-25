### Unity Android Manifest
### Unity Android Manifest remove uses-permission

--------------------------------------------------

### Unity Android Manifest

* When build APK Android: Unity will merge all **AndroidManifest.xml** in one and build.
* If you want to change **AndroidManifest.xml**:
  * Make your own **AndroidManifest.xml** at **Assets/Plugins/Android/AndroidManifest.xml**

### Unity Android Manifest remove uses-permission

* In **Assets/Plugins/Android/AndroidManifest.xml**

```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" tools:node="remove" />
```
