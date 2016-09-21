## View Controller
  - Every app has at least one view controller, and most apps have several
  - Each view controller manages a portion of your app’s user interface as well as the interactions between that interface and the underlying data
  - `View Controller` is the object that control the `view`
  - `View Controller` is the `Controller layer` in MVC
  - Every `View Controller` is inherited from `UIViewController`
  
- https://developer.apple.com/library/content/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457-CH2-SW1

#### Types Of View Controllers
  - There are two types of view controllers:
    - Content view controllers manage a discrete piece of your app’s content and are the main type of view controller that you create.
    - Container view controllers collect information from other view controllers (known as child view controllers) and present it in a way that facilitates navigation or presents the content of those view controllers differently.
  
## Understand the View Controller Lifecycle

#### UIViewController class
  - `View controller` is an object that manages a set of views
  - Every `View Controller` is inherited from `UIViewController`
  - UIViewController methods get called as follows:
  
    - Step 1: **`viewDidLoad()`**
      - Called when the view controller’s content view (the top of its view hierarchy) is created and loaded from a storyboard.
      - This method is intended for initial setup
    - Step 2 **`viewWillAppear()`**
      - Intended for any operations that you want always to occur **before** the view becomes visible
      - This method is always called immediately before the content view appears onscreen
    - Step 3 **`viewDidAppear()`**
      - Intended for any operations that you want to occur **as soon as** the view becomes visible
      - This method is always called immediately **after** the content view appears onscreen.

  
