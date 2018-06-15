
### Unity Script
### Unity Script Lifecycle (Execution Order)
-----------------------------------------

### Unity Script

* Unity Script is the component of GameObject, use for handle user input, handle GameObject (show, hide, spawn, ...)
* Unity Script is the Controller Layer of GameObject You can use it to handle user input, controll objects in the scene, show/hide/remove/create game object, UI component
* One Script component can be attacched on n GameObject, one GameObject can be have n Script component
* **Script n-----n GameObject**
* **MonoBehaviour** is the base class from which every Unity script.

### Unity Script Lifecycle (Execution Order)

* In Android/IOS the Activity/ViewController is the controller layer, Activity/ViewController have a Lifecycle
* In Unity the Unity Script is the controller layer for each UI object
* In the scene each Unity UI component may have an Unity Script of itself
  * A button may have a Unity Script itself
  * A image may have a Unity Script itself
  * Any UI component may have a Script for itself
  
* **Android app or IOS app each Activity or ViewController have a Lifecycle**
* **Unity app each Unity Script have a Lifecycle, each Unity Script belong to an Unity UI component**
  
* https://docs.unity3d.com/Manual/ExecutionOrder.html

