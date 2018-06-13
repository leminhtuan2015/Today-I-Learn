
### Unity Canvas
### Canvas Component
### Canvas: How to fit screen size for every resolution?

----------------------------------------------------------

### Unity Canvas

* The Canvas is a Game Object with a Canvas component attached on it.
* The Canvas is the area that all **UI elements** should be inside
* All UI elements must be children GameObject of such a Canvas GameObject
* Creating a new UI element (such as an Image using the menu GameObject > UI > Image) automatically creates a Canvas, if there isn’t already a Canvas in the scene.

### Canvas Component

* The Canvas GameObject will have a Canvas component attached on it.
* The Canvas GameObject is a special GameObject, Canvas will be rendered on screen without camera capture on it.
* Canvas component have a property name "RenderMode"
* RenderMode property of Canvas component have 3 value:
  * Screen Space - Overlay // UI elements on the screen will be rendered on top of the scene
  * Screen Space - Camera
  * World Space

### Canvas: How to fit screen size for every resolution?

1. Select **Canvas GameObject**
2. Select **CanvasScaler component** of Canvas GameObject
3. Select **UIScaleMode property** of CanvasScaler component
4. **UIScaleMode property**
  * Set **UIScaleMode property** = **Scale With Screen Size**
