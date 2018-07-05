
### Unity Canvas
### Canvas Component
### Canvas Order Rendering UI GameObject 
### Canvas: How to fit screen size for every resolution?

----------------------------------------------------------

### Unity Canvas

* The Canvas is a Game Object with a Canvas component attached on it.
* The Canvas is the area that all **UI elements** should be inside
* All UI elements must be children GameObject of such a Canvas GameObject
* Creating a new UI element (such as an Image using the menu GameObject > UI > Image) automatically creates a Canvas, if there isn’t already a Canvas in the scene.

### Canvas Component

* The Canvas GameObject will have a Canvas UI component attached on it.
* The Canvas GameObject is a special GameObject, Canvas will be rendered on screen without camera capture on it.

* **Canvas Object** have a **Canvas component**,  **Canvas component** have a property name **"RenderMode"**
 * Canvas RenderMode property: 
   * Screen Space - Overlay
     * UI elements on the screen will be rendered on top of the scene
   * Screen Space - Camera
     * This is similar to Screen Space - Overlay
     * But in this render mode the Canvas is placed a given distance in front of a specified Camera. 
     * The UI elements are rendered by this camera
   * World Space
  
### Canvas Order Rendering UI GameObject

* In Canvas have many GameObject, one GameObject may contain many childrent GameObject => Canvas will render GameObject by **Top to Bottom**

### Canvas: How to fit screen size for every resolution?

* Select **Canvas GameObject** > **CanvasScaler component**
* Set **CanvasScaler properties**
  * Set **UI Scale Mode** = **Scale With Screen Size**
  * Set **Screen Match Mode** = **Match With Or Height**
  * Set **Match** = **0.5**
