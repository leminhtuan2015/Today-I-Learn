### Script Component
### Accessing GameObject
### Accessing Components
### Finding child GameObjects
### Finding GameObjects in Scene
-----------------------------------------

### Script Component
  * Unity Script is a Component, script component can be attached to GameObjects
  * Script Component is a C#/Javascript code-file implement MonoBehaviour class
  
#### MonoBehaviour class

  * Inherited Members
    * enabled
    * gameObject (The game object this component is attached to. A component is always attached to a game object.)
    * transform	(The Transform attached to this GameObject)
    * name (The name of the object)
    * ...

### Accessing GameObject
  * How to access a GameObject from a script component
  
  * By default MonoBehaviour class have **gameObject** and **transform**
    * **gameObject**: The game object this component is attached to. A component is always attached to a game object.
    * **transform**: The Transform component attached to this GameObject.
    
  * From script component, you can access a GameObject this script component is attached to by:
  
  ```c#
  this.gameObject
  
  transform.gameObject
  ```
  
  * From script component, you can access a parent GameObject this script component is attached to by:
  
  ```c#
  // parent (GameObject) -> child (GameObject)
  
  transform.parent.gameObject
  
  // transform.parent: return a transform component of parent GameObject
  // transform.parent.gameObject : return a gameObject this transform component is attached
  
  ```
  
  * From script component, you can access a grandparent GameObject this script component is attached to by:
  
  ```c#
  // grandparent (GameObject) -> parent (GameObject) -> child (GameObject)
  
  transform.parent.parent.gameObject
  
  // transform.parent.parent: return a transform component of grandparent GameObject
  // transform.parent.parent.gameObject : return a gameObject this transform component is attached
  
  ```
  
  
  
  
  
  
  
  
  
  
  
  
