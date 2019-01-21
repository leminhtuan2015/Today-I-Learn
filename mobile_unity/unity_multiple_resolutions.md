
### Unity GameObject Real Size and Physical Size
### Unity Screen Scale
### Designing UI for Multiple Resolutions (CanvasScaler)

------------------------------------------------------------------------------

### Unity GameObject Real Size and Physical Size

* **Design resolution (reference resolution)** is the resolution sample used by content creators when creating the scene. 
* But **screen resolution (Physical device resolution)** is the actual resolution of the device that the game is running on.

* Normally, **design resolution** will use the screen resolution of the device that is being used the most by the targeted group on the market, such as: screen resolutions of 800x480 and 1280x720 that are being used by Android devices currently, or screen resolutions of 1136x640 and 960x640 that are being used by iOS devices.

* `When design resolution and screen resolution have the same ratio of width to height`
  * Very easy in this case => Just need to scale up or scale down
  * When design resolution and screen resolution have the same ratio of width to height, supposing the screen resolution is 1600x960, enlarging the background image to 1600/800 = 2 times will perfectly fit the screen. This is the simplest situation, which will not be discussed in detail here.
  
* `When design resolution and screen resolution have difference ratio of width to height`

  * The GameObject in scene will be scaled by below formula

```c#
private float GetScale(int width, int height, Vector2 scalerReferenceResolution, float scalerMatchWidthOrHeight)
{
    return Mathf.Pow(width/scalerReferenceResolution.x, 1f - scalerMatchWidthOrHeight)*
           Mathf.Pow(height/scalerReferenceResolution.y, scalerMatchWidthOrHeight);
}
```

* Khi màn hình vật lý khác với reference resolution thì: Các GameObject sẽ đc scale theo một kích thước ảo.
  * Ví dụ: Reference Resolution là 800x600
    * Nếu trên màn hình vật lý 800x600 thì kích thước của Image sẽ đúng với kích thước thực của ảnh
    * Nhưng nếu trên màn hình 1024x768 thì kích thước của Image sẽ là 1 kích thước ảo bị scale theo kích thước thực của ảnh (scale theo công thức trên)


### Unity Screen Scale

* How to caculate scale

```c#
private float GetScale(int width, int height, Vector2 scalerReferenceResolution, float scalerMatchWidthOrHeight)
{
    return Mathf.Pow(width/scalerReferenceResolution.x, 1f - scalerMatchWidthOrHeight)*
           Mathf.Pow(height/scalerReferenceResolution.y, scalerMatchWidthOrHeight);
}
```

* Reference Resolution: 800x600
  * Screen Match mode: Match Width or Height
  * Match: 0.5

* Screen 1: 800x600
  * UI Scaling: 1

* Screen 2: 1024x768
  * UI Scaling: Pow(1024/800, 0.5) * Pow(768/600, 0.5) = 1.28

* Screen 3: 1920x1080
  * UI Scaling: Pow(1920/800, 0.5) * Pow(1080/600,0.5) = 2.078


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
 
 
