
### Script API
### GameObject class
### Component class
### MonoBehaviour class


----------------------------------------

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

















