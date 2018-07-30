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
* This class will take care of our application life cycle
* The Application class in Android is the base class within an Android app that contains all other components such as activities and services
* This class is primarily used for initialization of global state before the first Activity is displayed. Note that custom Application objects should be used carefully and are often not needed at all.
* AndroidManifest.xml file, have **application** tag, We can custom the default Application class by change android:name=".MyCustomApplication" of application tag

```xml
<application 
   android:name=".MyCustomApplication"
   android:icon="@drawable/icon" 
   android:label="@string/app_name" 
   ...>
```


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
