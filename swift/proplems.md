### Auto Layout keeps stretching UIImageView
### Button setImage keep stretching

---------------- 

### Auto Layout keeps stretching UIImageView

  - http://stackoverflow.com/questions/20844128/auto-layout-keeps-stretching-uiimageview
  - In Storyboard -> select UIImageView -> Attributes Inspector -> In View section -> Changed the **'Mode'** property for the Image View to **'Aspect Fit'** and it worked fine.

### Button setImage keep stretching
  - button.imageView?.contentMode = .scaleAspectFit
