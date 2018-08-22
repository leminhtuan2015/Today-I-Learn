
### Unity Script
### Unity Script Lifecycle (Execution Order)
### Script API
### GameObject class
### Component class
### MonoBehaviour class
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

### Script API
  * Everything in Unity extends from **GameObject** class
  * Every Script is extends from **MonoBehaviour** (MonoBehaviour extend from GameObject)
  * Every Script have some default variables:
    * Inherited Members
      * enabled
      * gameObject (The game object this component is attached to. A component is always attached to a game object.)
      * transform	(The Transform attached to this GameObject)
      * name (The name of the object)

    * Public Methods
      * AddComponent
      * GetComponent
      * GetComponents
      * GetComponentInChildren
      * GetComponentInParent
      * ...
  
### GameObject class

  * Description
    * Class in UnityEngine
    * Inherits from: Object
    * Implemented in: UnityEngine.CoreModule
    * Base class for all entities in Unity scenes
  
  * Properties
    * isStatic
    * layer
    * tag
    * scene
  * Component (default)
    * transform
    
  * Public Methods
    * AddComponent
    * GetComponent
    * GetComponents
    * GetComponentInChildren
    * GetComponentInParent
    * ...
    
  * Static Methods
    * Find
    * FindGameObjectsWithTag
    * FindWithTag
    * ...
  
### Component class

  * Description
    * class in UnityEngine
    * Inherits from: Object
    * Implemented in: UnityEngine.CoreModule
    * Base class for everything attached to GameObjects (Base class for components)
    
  * Properties
    * gameObject (The game object this component is attached to. A component is always attached to a game object.)
    * tag
    
  * Component (default)
    * transform
    
  * Public Methods
    * AddComponent
    * GetComponent
    * GetComponents
    * GetComponentInChildren
    * GetComponentInParent
    * ...
  

### MonoBehaviour class

  * Description
    * class in UnityEngine
    * Inherits from: Behaviour
    * Implemented in:UnityEngine.CoreModule
    * MonoBehaviour is the base class from which every Unity script derives.
    
  * Properties
    * runInEditMode
    * useGUILayout
    
  * Inherited Members
    * enabled
    * gameObject (The game object this component is attached to. A component is always attached to a game object.)
    * transform	(The Transform attached to this GameObject)
    * name (The name of the object)

  * Public Methods
    * AddComponent
    * GetComponent
    * GetComponents
    * GetComponentInChildren
    * GetComponentInParent
    * ...
