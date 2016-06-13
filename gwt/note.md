# 1. GWT vs Android

### Cmponents
  - Intent   = Place (Switch between activities)
  - Activity = Activity
  - XML file = HTML widget

### Create instance
  - GWT
    - Each time we switch to other **Activity** the **Activity** will be created a new **instance**, the activities is create at **ActivityMapper**
    - The view in GWT allway be cached, The view in GWT just created one-time, the views cached at ***ClientFactory*
    
### Static variable.
  - The static variable is class scope, static variable will be create when the class is loaded, Static variable will be live throught out the life time of application.
