### Project Structure
### Mindset
### Entry-point
### Set View for Controller
### Get Views for Controller


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
class AppDelegate: UIResponder, UIApplicationDelegate {}
```
* Android Entry-point: **`android.intent.action.MAIN`** (AndroidManifest.xml)

```
<activity android:name=".MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
    </intent-filter>
</activity>
```
### Set View for Controller

* IOS
  * In Storyboard -> Select a Sence -> ViewController -> tab  Indentity Inspector -> Custom Class -> Select Controller class

* Android

```java
setContentView(R.layout.activity_user_info);
```

### Get Views for Controller

* IOS

```swift
@IBOutlet weak var playButton: UIButton!

@IBAction func playButton(_ sender: Any) {
  changeVideoState() 
}
```
* Android

```java
Button btnSignup = (Button)findViewById(R.id.btnSignup);

btnSignup.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View view) {
      // LOGIC
    }
});
```






















