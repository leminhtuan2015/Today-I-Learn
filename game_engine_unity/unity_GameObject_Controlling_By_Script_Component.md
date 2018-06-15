### Script Component
### GameObjects Interact With Each Other
### Accessing GameObject From Script
### Accessing Components From Script
### Finding child GameObjects
### Finding GameObjects in Scene
-----------------------------------------

### Script Component
  * Unity Script is a Component of GameObject, script component can be attached to GameObjects
  * Script Component is a C#/Javascript code-file implement MonoBehaviour class
  * We make Script Component and attatch to a GameObject for controlling that GameObject, handle logic for that GameObject.
  
#### MonoBehaviour class

  * MonoBehaviour script component always can access to:
    * gameObject (The game object this component is attached to. A component is always attached to a game object.)
    * transform	(The Transform attached to this GameObject)
    * name (The name of the object)
    * ...
    
    
### GameObjects Interact With Each Other

  * If you want GameObjects can interact with each other, you must have **reference variable of game object** in script component of each other

  * In Scene you have 2 GameObject:
    * Camera GameObject
    * Player GameObject
    
  * Your game logic is "Camera alway follow Player" 
    * => you have to make a script component and attach to Camera GameObject to implement logic.
    * => in your **script component of Camera GameObject** you must have **Player GameObject** to get Player position
    * => that mean Camera must have Player reference.
    * => from Camera GameObject if you want to interact with Player GameObject you must have **Player reference variable** in your Camera script component
  
  * Create script component **CameraController.cs** and attach to Camera GameObject, in script store a reference to the Player game object
    * We have 2 way to get Player game object by code or drag-drop in Inspector 
 
 
 ```c#
 using UnityEngine;
using System.Collections;

public class CameraController : MonoBehaviour {

	// store a public reference to the Player game object, so we can refer to it's Transform
	public GameObject player;

	// Store a Vector3 offset from the player (a distance to place the camera from the player at all times)
	private Vector3 offset;

	// At the start of the game..
	void Start ()
	{
		// Create an offset by subtracting the Camera's position from the player's position
		offset = transform.position - player.transform.position;
	}

	// After the standard 'Update()' loop runs, and just before each frame is rendered..
	void LateUpdate ()
	{
		// Set the position of the Camera (the game object this script is attached to)
		// to the player's position, plus the offset amount
		transform.position = player.transform.position + offset;
	}
}
 ```

### Accessing GameObject From Script
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
  
### Accessing Components From Script
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









  
