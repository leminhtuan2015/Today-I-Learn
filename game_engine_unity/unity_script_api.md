
### Script API
### GameObject class
### Component class
### MonoBehaviour class


----------------------------------------

### Script API
  
  * In Android/IOS/Unity we have 2 ways for create a view component:
    * Drag-Drop ui component in storyboard/layout/Scene
    * Create UI programmatically by code
  
  * The same Android-Java or IOS-Swift, in Unity we can create components programmatically
  * We can create Button, Image, TextBox programmatically (by code) => With each component we have a class of it.
  * Each UI component is a class
    * IOS button = UIButton class
    * Android button = Button class
    * Unity button = UnityEngine.UI.Button
  
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

















