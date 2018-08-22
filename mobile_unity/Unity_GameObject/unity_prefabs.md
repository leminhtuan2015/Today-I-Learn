
### Unity Prefabs
### When Use Prefab
### Create A Prefab
### Instantiate Prefabs
---------------------------------------

### Unity Prefabs

* Prefabs = GameObject is stored in .prefab file.
* Prefabs is just a way store a GameObject to a file .prefab, we can re-use, clone, instantiate prefab by script
* Unity has a Prefab asset type that allows you to store a GameObject object complete with components and properties. 
* The prefab acts as a template from which you can create new object instances in the scene. 
* Prefabs help you instantiate (create) complicated GameObjects at runtime.
* Any edits made to a prefab asset are immediately reflected in all instances produced from it but you can also override components and settings for each instance individually.
* Changes to the prefab asset itself will be reflected in all instances 

### When Use Prefab

* When you want to create a GameOject at run-time
* When you want to create a GameOject by code (script)
* When you want to have dymamic/random number of GameObject

### Create A Prefab
* You can create a prefab by :
  * Fist create a GameObject
  * Selecting **Asset > Create Prefab**
  * Then dragging a GameObject from the scene onto the "empty" prefab asset that appears

### Instantiate Prefabs

* Create GameObject at run-time (Create GameObject by script)

```c#

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CircleManager : MonoBehaviour {

	// Use this for initialization
	void Start () {
		CreateCircle ();
	}
  
	void CreateCircle() {
		// Prefabs/SmallCircle mus be placed in "Resources" folder
		GameObject circle = Resources.Load ("Prefabs/SmallCircle") as GameObject;

		for (int y = 0; y < 5; y++) {
		    Instantiate(circle, new Vector3(0f, 0f, 0f), Quaternion.identity);
		}
	}
}

```
