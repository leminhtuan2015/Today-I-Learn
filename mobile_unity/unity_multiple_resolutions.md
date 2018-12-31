
### Designing UI for Multiple Resolutions (CanvasScaler)

------------------------------------------------------------------------------

### Designing UI for Multiple Resolutions (CanvasScaler)

* https://docs.unity3d.com/Manual/HOWTO-UIMultiResolution.html
* CanvasScaler class : https://docs.unity3d.com/ScriptReference/UI.CanvasScaler.html
* CanvasScaler.referenceResolution : https://docs.unity3d.com/ScriptReference/UI.CanvasScaler-referenceResolution.html

* The **Canvas Scaler component** is used for controlling the overall scale and pixel density of UI elements in the Canvas. This scaling affects everything under the Canvas, including font sizes and image borders.

* The **Canvas Scaler component** can be added to a **root Canvas**, a Game Object with a Canvas component on it, which all the UI elements are children of. It is also added by default when creating a new Canvas through the GameObject
 menu.
 
* CanvasScaler.referenceResolution
  * The resolution the UI layout is designed for.

  * If the screen resolution is larger, the UI will be scaled up, and if it's smaller, the UI will be scaled down. This is done in accordance with the Screen Match Mode.
 
 
