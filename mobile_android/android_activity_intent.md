### Intent Android
### Move Bettween Activities
### Start Activity For Result
### Dismiss/Close a Activity
--------
### Intent Android

- Help move between **activities**
- Help move to other Apps
- Intent is a object to **start (or create new) a Activity**
- Intent maybe contain data to transit between activities

### Move Bettween Activities

```
// Intent(currentActivity, nextActivityClass)

Intent i = new Intent(this, NextActivity.class);
startActivity(i);
```

```java
protected void goToController(Class targetController){
    Intent intent = new Intent(this, targetController);
    this.startActivity(intent);
}

goToController(VideoPlayerController.class);
```
* A goToController B
* B goToController C
* C goToController D
* D goToController A

```
A ----> B ---> C ---> D ---> A
```

* When you `goToController();` => Android will create a new instance of `Controller (Activity)` and display it on screen
* When you `finish();` => remove the controller

### Start Activity For Result
* From your **FirstActivity** call the **SecondActivity**
* Do some logic in **SecondActivity** and return back to **FirstActivity**

```
//FirstActivity

Intent i = new Intent(this, SecondActivity.class);
startActivityForResult(i, 1);

@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {

    if (requestCode == 1) {
        if(resultCode == Activity.RESULT_OK){
            String result=data.getStringExtra("result");
        }
        if (resultCode == Activity.RESULT_CANCELED) {
            //Write your code if there's no result
        }
    }
}//onActivityResult

-------------------------------------------------

//SecondActivity

Intent returnIntent = new Intent();
returnIntent.putExtra("result",result);
setResult(Activity.RESULT_OK,returnIntent);
finish();

// OR If you don't want to return data:

Intent returnIntent = new Intent();
setResult(Activity.RESULT_CANCELED, returnIntent);
finish();

```
### Dismiss/Close a Activity

```
// Closing Activity
finish();
```















