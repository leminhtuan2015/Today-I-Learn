### Script Component
### Accessing GameObject
### Accessing Components
### Finding child GameObjects
### Finding GameObjects in Scene
-----------------------------------------

### Script Component
  * Unity Script is a Component, script component can be attached to GameObjects
  * Script Component is a C#/Javascript code-file implement MonoBehaviour class
  * **Transform** is the very important component, by default every GameObject must have a transform component (all GameObjects implicitly have a Transform)
  
#### MonoBehaviour class

  * MonoBehaviour script component always can access to **transform** component is attached to a game object.

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
  
  * From script component, you can access a Child GameObject this script component is attached to by:
  
  ```c#
    transform.GetChild (0).gameObject
  ```
  
### Accessing Components
  * How to access to other Components attached to the same GameObject?
  * For example: A GameObject have 4 components
    * Transform component
    * SpriteRenderer component
    * PlayScript script component
    * Rigidbody2D component
    
  * => From PlayScript script component we want to get Rigidbody2D component of this Game Object
  
  ```c#
    void Start () {
    
      // Access transform component of this GameObject is so easy
      this.transform
    
      // Access Rigidbody2D component of this GameObject
      Rigidbody2D rb = GetComponent<Rigidbody2D>();
    }
  ```
  
### Finding child GameObjects

  ```c#
    using UnityEngine;

    public class WaypointManager : MonoBehaviour {
        public Transform[] waypoints;

        void Start() {
            waypoints = new Transform[transform.childCount];
            int i = 0;

            foreach (Transform t in transform) {
                waypoints[i++] = t;
            }
        }
    }
  ```

  ```c#
    transform.Find("Gun");
  ```

### Finding GameObjects in Scene

  ```c#
    GameObject player;

    void Start() {
        player = GameObject.Find("MainHeroCharacter");
    }

  ```









  
