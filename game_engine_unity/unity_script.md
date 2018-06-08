
### Unity Script

-----------------------------------------

### Unity Script

* 



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


The Update function is the place to put code that will handle the frame update for the GameObject
