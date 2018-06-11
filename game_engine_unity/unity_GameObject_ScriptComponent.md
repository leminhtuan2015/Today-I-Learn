### Script Component
### Accessing GameObject
### Accessing components
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
  * From script component, you can access a GameObject by:
  
  ```c#
  this.gameObject
  
  transform.gameObject
  ```
