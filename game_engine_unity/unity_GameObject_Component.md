### GameObject
### Component
### Script Component
### Component Children
### Component Properties
### GameObject VS Component

-------------------------------------------------------------------------

### GameObject
  * A GameObject contains components
  * Every object in your game is a GameObject
  * Depending on what kind of GameObject object you want to create, you add different combinations of components to a GameObject.
  * A GameObject is a container for many different Components. By default, all GameObjects automatically have a **Transform** Component
  * GameObject is just a empty container, We should add components to GameObject to create a complete GameObject
  
  * Main Camera is a GameObject, every Scene has a Main Camera GameObject by default. It has several components

#### Create a GameObject

  * Click the **GameObject->Create Empty** menu item. Select the new GameObject, and look at the Inspector (Even empty GameObjects have a Transform Component)
  
  * Remember that you can always use the Inspector to see which Components are attached to the selected GameObject
  
  
### Component
  * Component are the functional pieces of every GameObject.
  * Any script you make compiles as a type of component, so the Unity Editor treats your script like a built-in component
  * When you create a script and attach it to a GameObject, the script appears in the GameObject’s Inspector just like a built-in component. This is because scripts become components when you save them in your project.

#### Adding Components to a GameObject

  * Example add Rigidbody component to a GameObject

  * Method 1:
    * Select a GameObject
    * Component->Physics->Rigidbody from the menu

  * Method 2:
    * Select a GameObject
    * Inspector->Add Component->Physics->Rigidbody


### Script Component

 * Unity Script is a Component, script component can be attached to GameObjects
 * Script Component is a C#/Javascript code-file implement MonoBehaviour
 * Unity allows you to create your own Components using scripts. These allow you to trigger game events, modify Component properties over time and respond to user input in any way you like
 
 * Unity supports two programming languages natively:
   * C#
   * javascript
 
* Each time you attach a script component to a GameObject, it creates a new instance of the object defined by the MonoBehaviour

```cshap
using UnityEngine;
using System.Collections;

public class MainPlayer : MonoBehaviour {

    // Use this for initialization
    void Start () {
    
    }
    
    // Update is called once per frame
    void Update () {
      // The Update function is the place to put code that will handle the frame update for the GameObject. 
      // This might include movement, triggering actions and responding to user input, 
      // basically anything that needs to be handled over time during gameplay
    }
}
```

#### Adding Script Components to a GameObject
  * Adding Script Components to a GameObject is the same add other components to a GameObject


### Component Children

  * A GameObject contains components
  * A component contain children component
  * Parent component can contain child component
  * For example: **Panel component** contain **Button component** contain **Text component**
    * Panel > Button > Text



### Component Properties
  * Each component have properties
  * For example: 
    * Button have Transform component, Transform component have properties is (x, y, z, width, height)
    * Text have Text Script component, Text Script component have properties is (Character, Paragraph)

### GameObject VS Component

  * Some object is both GameObject or Component, such as Button is GameObject and also Component
  * A Button GameObject have:
    * Components is: RectTransform, Image (script), Button (script)
    * Children component is: Text component























