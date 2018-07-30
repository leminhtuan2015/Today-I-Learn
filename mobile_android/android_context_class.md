
### Android Context class
### Typical Uses of Context

------------------------------------------------------------

### Android Context class

* **Context** is the base class for Activity, Service, Application

```
java.lang.Object
   ↳	android.content.Context
 	   ↳	android.content.ContextWrapper
 	 	   ↳	android.app.Application
         
         
java.lang.Object
   ↳	android.content.Context
 	   ↳	android.content.ContextWrapper
 	 	   ↳	android.view.ContextThemeWrapper
 	 	 	   ↳	android.app.Activity
         
         
java.lang.Object
   ↳	android.content.Context
 	   ↳	android.content.ContextWrapper
 	 	   ↳	android.app.Service
```

* As the name suggests, it's the context of current state of the application/object
* You can get the context by invoking getApplicationContext(), getContext(), getBaseContext() or this

### Typical Uses of Context

* Creating new objects: Creating new views, adapters, listeners:

```java
TextView tv = new TextView(getContext());
ListAdapter adapter = new SimpleCursorAdapter(getApplicationContext(), ...);
```

* Accessing standard common resources: Services like LAYOUT_INFLATER_SERVICE, SharedPreferences:

```java
context.getSystemService(LAYOUT_INFLATER_SERVICE)
getApplicationContext().getSharedPreferences(*name*, *mode*);
```

* Accessing components implicitly: Regarding content providers, broadcasts, intent

```java
getApplicationContext().getContentResolver().query(uri, ...);

```





