
### Unity Script
### Unity Script Lifecycle (Execution Order)
-----------------------------------------

### Unity Script

* Unity Scene / Unity UI component is just **View layer** the same **Storyboard IOS** or **XML layout Android**
* In Android/IOS the Activity/ViewController is the controller layer (logic code)
* Unity Script is the Controller Layer (Place of logic code) You can use it to handle user input, controll objects in the scene, show/hide/remove/create game object, UI component

* **MonoBehaviour** is the base class from which every Unity script.

* The **Start** function will be called by Unity before gameplay begins (ie, before the Update function is called for the first time) and is an ideal place to do any initialization (The same constructor).
* The **Update** function is the place to put code that will handle the frame update for the GameObject

```cshap
using UnityEngine;
using System.Collections;

public class ExampleBehaviourScript : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            GetComponent<Renderer> ().material.color = Color.red;
        }
        
        if (Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }
    }
}
```


### Unity Script Lifecycle (Execution Order)

* In Android/IOS the Activity/ViewController is the controller layer
* In Unity the UnityScript is the controller layer for each UI object, In the same scene each Unity UI component may have an UnityScript
  * A button may have a UnityScript itself
  * A image may have a UnityScript itself
  
* **Android app or IOS app have Lifecycle for each Activity or ViewController but Unity have Lifecycle for each UI component**
  
* https://docs.unity3d.com/Manual/ExecutionOrder.html

