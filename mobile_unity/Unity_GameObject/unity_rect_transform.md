
### Rect Transform
### Rect Transform VS Transform

-------------------------------------------------------------

### Rect Transform

* A GameObject **MUST HAVE** 4 properties to display on screen
  * x
  * y
  * width
  * height
  
* Rect Transform Pivot
  * Should be is : 1
  
* Rect Transform (X, Y)
  * (X, Y) of Rect Transform is at **center of GameObject**
  * Toạ độ (x, y) Rect Transform của GameObject chính là toạ độ của điểm **tâm của GameObject**.

### Rect Transform VS Transform

* Rect Transform extends from Transform
* Rect Transform -> UI Object (UI Object must be inside a canvas)
* Transform -> GameObject


### 


```
object.GetComponent<RectTransform>().offsetMin = new Vector2 (10,12); //left-bottom  // left = 10, bottom = 12
object.GetComponent<RectTransform>().offsetMax = new Vector2 (20,40); //right-top.   // right = 20, top = 40

rectTransform.offsetMin.x    // Left
rectTransform.offsetMin.y    // Bottom
rectTransform.OffsetMax.x    // Right
rectTransform.offestMax.y    // Top
```
