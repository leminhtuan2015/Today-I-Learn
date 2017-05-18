### Project Structure
### Mindset

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
* IOS - StoryBoard = Android - XML-Layout
* IOS - Object = Android - Object
