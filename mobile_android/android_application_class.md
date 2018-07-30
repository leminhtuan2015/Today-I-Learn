### Application Class

------------------------------------------------

### Application Class

public class Application 

```
java.lang.Object
   ↳	android.content.Context
 	   ↳	android.content.ContextWrapper
 	 	   ↳	android.app.Application
```

* Base class for maintaining global application state.
* AndroidManifest.xml file, have **application** tag, We can custom the default Application class by change android:name=".MyCustomApplication" of application tag


```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.fuji.fujisdk">
   <application
        android:allowBackup="true">
        <activity
            android:name=".activities.LoginActivity"
            android:screenOrientation="portrait"
            android:theme="@style/AppTheme"/>

        <activity
            android:name=".activities.SignupActivity"
            android:screenOrientation="portrait"
            android:theme="@style/AppTheme"/>

    </application>
</manifest>
```
