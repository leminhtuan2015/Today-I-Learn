
### Android XML Namespace

----------------------------------------------------------------------------

### Android XML Namespace

* There a many Android XML namespave : **app, android, tools, ...**
  * **app** is for attributes declared in libraries
  * **tools** namespace is used for attributes that are visible in Design preview only
  
```xml
<menu 
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  xmlns:tools="http://schemas.android.com/tools"
  tools:context=".MainActivity" >
 
  <!-- Other tags  -->
 
</menu>
```
