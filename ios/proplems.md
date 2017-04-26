##### Auto Layout keeps stretching UIImageView
##### Button setImage keep stretching
##### Disable Rotation of UIViewController Embedded Into UINavigationController
##### Export Failed IPA - "No applicable devices found"

---------------- 

### Auto Layout keeps stretching UIImageView

  - http://stackoverflow.com/questions/20844128/auto-layout-keeps-stretching-uiimageview
  - In Storyboard -> select UIImageView -> Attributes Inspector -> In View section -> Changed the **'Mode'** property for the Image View to **'Aspect Fit'** and it worked fine.

### Button setImage keep stretching
  - button.imageView?.contentMode = .scaleAspectFit

### Disable Rotation of UIViewController Embedded Into UINavigationController

```swift
extension UINavigationController {
  override open var shouldAutorotate: Bool {
      get {
          if let visibleVC = visibleViewController {
              return visibleVC.shouldAutorotate
          }
          return super.shouldAutorotate
      }
  }

  override open var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation{
      get {
          if let visibleVC = visibleViewController {
              return visibleVC.preferredInterfaceOrientationForPresentation
          }
          return super.preferredInterfaceOrientationForPresentation
      }
  }

  override open var supportedInterfaceOrientations: UIInterfaceOrientationMask{
      get {
          if let visibleVC = visibleViewController {
              return visibleVC.supportedInterfaceOrientations
          }
          return super.supportedInterfaceOrientations
      }

      // return UIInterfaceOrientationMask.portrait
  }
}
```
##### Export Failed IPA - "No applicable devices found"
 - https://github.com/fastlane/fastlane/issues/3184
 
 ```
 $ gem install CFPropertyList
 $ gem install sqlite3
 ```
 
 
 
 
 
 
 
