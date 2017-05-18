### Project Structure
### Mindset

--------------------------

### Project Structure
* IOS: **Project** has many **Targets**
  * Target
    * Framework: **.framework**
    * Application
  * Framework in IOS => build .framework (for import in other projects)
  * Application in IOS => build .ipa

* Android: **Project** has many **Modules**
  *  Modules
     * Library: **.aar**
     * Application
  *  Library in Android => build .aar (for import in other projects)
  *  Application in Android => build .apk

* Đối với IOS và Android: **Project** chỉ là wrap lại các **Targets** và **Modules**
  * IOS: Target là

### Mindset

* IOS - ViewController = Android - Activity
* IOS - StoryBoard = Android - XML-Layout
* IOS - Object = Android - Object
