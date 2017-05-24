### Intent Android
### Move Bettween Activities
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

