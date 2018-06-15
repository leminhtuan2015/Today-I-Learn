### GameObject
  * Create a GameObject
  * Destroy a GameObject
### Component
  * Attatch Components to a GameObject
  * Component Properties
### Script Component (special component of GameObject)
### GameObject Children
### Component Properties

-------------------------------------------------------------------------

### GameObject
  * A Scene contains GameObjects
  * A GameObject contains components (all GameObjects automatically have a **Transform** Component)
  
  * Every object in your game is a GameObject  
  * Main Camera is a GameObject, every Scene has a Main Camera GameObject by default.

#### Create a GameObject

  * Click the **GameObject->Create Empty** menu item. Select the new GameObject, and look at the Inspector (Even empty GameObjects have a Transform Component)
  
  * Remember that you can always use the Inspector to see which Components are attached to the selected GameObject
  
  * We can create GameObjects at runtime (by code), We can create GameObjects in Unity Script (We should have a GameManager is a empty GameObject, attach any script to this GameObject for run that scripts)
  
#### Destroy a GameObject

  * When destroy a GameObject
    * That GameObject will be removed from the Scene (disappear from screen)
    * All component attached to that GameObject will be destroy too, Script component attached to GameObject is destroy too
    * **After destroy a GameObject, the code in Script component will not work anymore**
  
  
### Component
  * Component are the functional pieces of every GameObject.
  * Any script you make compiles as a type of component, so the Unity Editor treats your script like a built-in component
  * When you create a script and attach it to a GameObject, the script appears in the GameObject’s Inspector just like a built-in component. This is because scripts become components when you save them in your project.

#### Attatch Components to a GameObject

  * Example add Rigidbody component to a GameObject

  * Method 1:
    * Select a GameObject
    * Component->Physics->Rigidbody from the menu

  * Method 2:
    * Select a GameObject
    * Inspector->Add Component->Physics->Rigidbody
    
#### Component Properties
  * A component have properties
  * If properties of component is public => that properties will be show in **Inspector Windown**
  * Script is a component => in Script, public variables (properties) will be show in **Inspector Windown**

### Script Component

 * Unity Script is a Component, script component can be attached to GameObjects
 * One Script component can be attacched on n GameObject, one GameObject can be have n Script component
 * Script Component is a C#/Javascript code-file implement MonoBehaviour
 * Unity allows you to create your own Components using scripts. These allow you to trigger game events, modify Component properties over time and respond to user input in any way you like
 
 * Unity supports two programming languages natively:
   * C#
   * javascript
 
* Each time you attach a script component to a GameObject, it creates a new instance of the object defined by the MonoBehaviour

```c#
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

### GameObject Children
  * A GameObject contains components
  * A GameObject contains children GameObject
  * For example: **Panel GameObject** contain **Button GameObject** contain **Text GameObject**

### Component Properties
  * Each component have properties
  * For example: 
    * Button have Transform component, Transform component have properties is (x, y, z, width, height)
    * Text have Text Script component, Text Script component have properties is (Character, Paragraph)





















