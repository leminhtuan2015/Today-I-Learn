### Unity Scene
### Unity Script
### Connect Scene with Script
### Unity Canvas
--------------------------------------------------------

### Unity Scene (View Layer)

* Unity scene is the same layout in Android or Storyboard in IOS
  * Unity scene = XML layout in Android
  * Unity scene = Storyboard in IOS

* Unity Scene is just a **View Layer**
  
### Unity Script (Controller Layer)

* Unity Script is the same **Activity** in Android or **ViewController** in IOS
  * Unity Script = **Activity** in Android
  * Unity Script = **ViewController** in Android

* Unity Script is use for handle events for views in **Scene**, Implement logic

### Connect Scene with Script

* We need connect Scene with Script for: Implement logic code when user interact with Scene(View Layout)

* In IOS we connect **StoryBoard** with **ViewController.swift** by **Identify Inspector > Custom class**
* In Android we connect **XML Layout** with **Activity.java** by **Activity.findById()** (static function of Activity class)
* In Unity we connect **Scene** with **script.cs** by **Inspector > Add Component > Scripts**

* We should add **Script** for **Canvas in Scene**, That script will implement logic for that scene

### Unity Canvas
* Unity Canvas is the same **div** html tag, That can contain other views
