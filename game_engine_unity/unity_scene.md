### Unity Scene
### Unity Script
### Attach Script to an UI component 

--------------------------------------------------------

### Unity Scene (View Layer)

* Scene: Contain GameObjects, Every Scene have default Camera GameObject
* Scene is the collection of GameObjects
  
### Unity Script (Component of GameObject)

* Unity Script is the C# code, implement logic for each **UI component** (Canvas, Button, Image, ...)
* Unity Script used for handle logic, movment, user input, ... for a GameObject this script component is attatched.
* Unity Script is use for handle events for views (UI component) in **Scene**, Implement logic when user interact with that UI component

### Attach Script to an UI component 

* We need connect UI component with Script for: Implement logic code when user interact with that UI component (View Layout)

* In IOS we connect **StoryBoard** with **ViewController.swift** by **Identify Inspector > Custom class**
* In Android we connect **XML Layout** with **Activity.java** by **Activity.findById()** (static function of Activity class)
* In Unity we connect **UI component** with **script.cs** by **Inspector > Add Component > Scripts**

* We should add **Script** for **Canvas in Scene**, That script will implement logic for that canvas UI component


