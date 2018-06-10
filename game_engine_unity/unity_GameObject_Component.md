### GameObject
### Component


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

#### Adding Components

  * Example add Rigidbody component to a GameObject

  * Method 1:
    * Select a GameObject
    * Component->Physics->Rigidbody from the menu

  * Method 2:
    * Select a GameObject
    * Inspector->Add Component->Physics->Rigidbody




