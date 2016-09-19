## View Controller
  - `View Controller` is the object that control the `view`
  - `View Controller` is the `Controller layer` in MVC
  - Every `View Controller` is inherited from `UIViewController`
  
## Understand the View Controller Lifecycle

#### UIViewController class
  - `View controller` is an object that manages a set of views
  - Every `View Controller` is inherited from `UIViewController`
  - UIViewController methods get called as follows:
  
    - Step 1: *`viewDidLoad()`*
      - Called when the view controller’s content view (the top of its view hierarchy) is created and loaded from a storyboard.
      - This method is intended for initial setup
    - Step 2 *`viewWillAppear()`*
      - Intended for any operations that you want always to occur *before* the view becomes visible
      - This method is always called immediately before the content view appears onscreen
    - Step 3 *`viewDidAppear()`*
      - Intended for any operations that you want to occur *as soon as* the view becomes visible
      - This method is always called immediately *after* the content view appears onscreen.

  
