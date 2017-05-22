### Android Activity

-----------------------

### Android Activity

* Android activity is **Controller** in MVC Android
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
