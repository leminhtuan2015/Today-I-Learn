### Unity Scene
### Unity Canvas
### Unity Script
### Connect UI component with Script

--------------------------------------------------------

### Unity Scene (View Layer)

* Unity scene is the same layout in Android or Storyboard in IOS
  * Unity scene = XML layout in Android
  * Unity scene = Storyboard in IOS

* Unity Scene is just a **View Layer**

### Unity Canvas (UI component)
* Unity Canvas is the UI component, the same **div** html tag, That can contain other views (other UI component)
* Unity Canvas contain Button, Image, Label, ScrollView, ...
  
### Unity Script (Controller Layer)

* Unity Script is the C# code, implement logic for each **UI component** (Canvas, Button, Image, ...)
* Unity Script is the same **Activity** in Android or **ViewController** in IOS
  * Unity Script = **Activity** in Android
  * Unity Script = **ViewController** in IOS

* Unity Script is use for handle events for views (UI component) in **Scene**, Implement logic when user interact with that UI component

### Connect UI component with Script

* We need connect UI component with Script for: Implement logic code when user interact with that UI component (View Layout)

* In IOS we connect **StoryBoard** with **ViewController.swift** by **Identify Inspector > Custom class**
* In Android we connect **XML Layout** with **Activity.java** by **Activity.findById()** (static function of Activity class)
* In Unity we connect **UI component** with **script.cs** by **Inspector > Add Component > Scripts**

* We should add **Script** for **Canvas in Scene**, That script will implement logic for that canvas UI component


