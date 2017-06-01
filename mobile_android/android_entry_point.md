### Android Entry-point

----

* The entrypoint of Android is the main Activity we declare in **AndroidManifest.xml**

```
android.intent.action.MAIN
```

```
<activity
    android:name=".HomeActivity"
    android:label="@string/app_name">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />

        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
```
