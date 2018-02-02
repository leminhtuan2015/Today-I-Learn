### Android Create AAR Library

------------------------------------------------------------------------

### Android Create AAR Library

1. In any android project
2. File > New > New Module > Android Library
3. Input the module infomation
4. Gradle will auto add this new module in your project at **project/setting.gradle**

```gradle
include ':app'  // app is the default module of each project
include ':new_module_name'  // this is new module (aar)
```
#### Using this new module in app module

* In the **project/app/build.gradle**

```gradle
  compile project(":new_module_name")
```
