### Android Activity
### Types of Activities
-----------------------

### Android Activity

* Android **Activity** is **Controller** in MVC Android
* When you **Start** an activity that mean: Create a new **object instance** of an **activity class**
  
```java
public class MyActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }
}

```

* Start an Activity

```java
        Intent intent = new Intent(context, MyActivity.class);

        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
```

* When you **Start** the **MyActivity** that mean : Create a new **object instance** of the **MyActivity class** and this object will be **stored** in stack
* You can have many the same Activity live in the stack but that is NOT good


### Types of Activities
* Activity is the baseline. Every activity inherits from Activity, directly or indirectly.
  * Activity (Stand)
  * FragmentActivity (support-v4)
  * AppCompatActivity (appcompat-v7 library)
  * ActionBarActivity (appcompat-v7 library)
  
```

java.lang.Object
   ↳	android.content.Context
 	   ↳	android.content.ContextWrapper
 	 	   ↳	android.view.ContextThemeWrapper
 	 	 	   ↳	android.app.Activity
 	 	 	 	   ↳	android.support.v4.app.FragmentActivity
 	 	 	 	 	   ↳	android.support.v7.app.AppCompatActivity
 	 	 	 	 	 	   ↳	android.support.v7.app.ActionBarActivity  
```












