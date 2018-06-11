### GameObject
### Component
### Script Component (special component of GameObject)
### GameObject Children
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

### GameObject Children
  * A GameObject contains components
  * A GameObject contains children GameObject
  * For example: **Panel GameObject** contain **Button GameObject** contain **Text GameObject**

### Component Properties
  * Each component have properties
  * For example: 
    * Button have Transform component, Transform component have properties is (x, y, z, width, height)
    * Text have Text Script component, Text Script component have properties is (Character, Paragraph)

### GameObject VS Component
  * GameObject VS Component
    * GameObject is the same empty HTML DIV tag
    * Component is the same class of DIV tag (a div tag may have many class)
    * Component properties is the same properties each class
    
```html

<style>
.city {
  background-color: tomato;
  padding: 10px;
}

.name {
  color: white;
}
</style>

<div class="city name">
   <div class="name">
     <p class="city">
     </p>
   </div>
</div>

// GameObject: div tag is the GameObject
// Component: city, name is the components
// Component properties: background-color, padding, color is the component properties
// GameObject Children: p tag is the child GameObject inside parent GameObject

```
    
  * GameObject and Component are different, But some object is both GameObject or Component
  * Some object is both GameObject or Component, such as UI/Button/Panel/Image/... is a GameObject and also is a Component
  * A Button GameObject have:
    * Components is: RectTransform, Image (script), Button (script)
    * Children GameObject is: Text GameObject























