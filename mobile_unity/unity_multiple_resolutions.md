
### Unity Screen Ratio
### Designing UI for Multiple Resolutions (CanvasScaler)

------------------------------------------------------------------------------

### Unity Screen Ratio

* Scale With Screen Size (If the same ratio with the reference resolution)
  * If the current screen resolution is **larger than the reference resolution**, the Canvas will keep having only the resolution of the reference resolution, but will scale up in order to fit the screen.
  
  * If the current screen resolution is **smaller than the reference resolution**, the Canvas will similarly be scaled down to fit.


* If **Different aspect ratio than the reference resolution**
  * If the current screen resolution has a **different aspect ratio than the reference resolution**, scaling each axis individually to fit the screen would result in non-uniform scaling, which is generally undesirable. Instead of this, the ReferenceResolution component will make the Canvas resolution deviate from the reference resolution in order to respect the aspect ratio of the screen. It is possible to control how this deviation should behave using the Screen Match Mode setting.

![image](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_unity/unity_screen_ratio.jpg)


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
 
 
