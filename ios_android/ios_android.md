### Project Structure
### Mindset
### Entry-point

--------------------------

### Project Structure
* IOS: **Project** has many **Targets**
  * Target have 2 type
    * Framework: **.framework**
    * Application
  * Target: Framework in IOS => build .framework (for import in other projects)
  * Target: Application in IOS => build .ipa

* Android: **Project** has many **Modules**
  *  Modules have 2 type
     * Library: **.aar**
     * Application
  *  Modules: Library in Android => build .aar (for import in other projects)
  *  Modules: Application in Android => build .apk

* Đối với IOS và Android: **Project** chỉ là file config wrap lại các **Targets** và **Modules**
* Targets + Modules : là những phần chứa code cho mỗi **project**

### Mindset

* IOS - ViewController = Android - Activity
* IOS - StoryBoard = Android - XML-Layout (Both are XML)
* IOS - Object = Android - Object
* IOS - info.plist = Android - manifest.xml

### Entry-point

* IOS Entry-point : **`@UIApplicationMain`**

```
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
}
```
* Android Entry-point: **`android.intent.action.MAIN`**

```
<activity android:name=".MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
    </intent-filter>
</activity>
```



























