### ViewController in Swift IOS
### Start a ViewController (transition to a new ViewController)
### Storyboard ID
### Symbols (Main API Of UIViewController)

-----------------------
### ViewController in Swift IOS
  - **ViewController** is the best impotant in IOS 
  - ViewController is the **brain** - Controller layer
  - Model is the **muscal** - Model layer
  - Storyboard is the **clothes** - View layer

### Start a ViewController (move from one ViewController to another ViewController)
 - 2 ways to transition to a ViewController :
    - **present ViewController**
    - **perform Segue**
    
 - **FUCKING FUCKING FUCKING - important - important - important**
   - Anytime you go to a new destination view controller IOS will `create a new instance` of that view controller
   - Segues **create a new instance** of the destination view controller
   - `storyboard.instantiateViewController` also **create a new instance** of the view controller
   - => Both `Segue` and `storyboard.instantiateViewController` will **create a new instance** of the view controller

 - First way **`present ViewController`**

```swift
// present UIViewController

let storyboard = UIStoryboard(name: "Main", bundle: nil)
let controller = storyboard
    .instantiateViewController(withIdentifier: "someViewController") as! UIViewController
self.present(controller, animated: true, completion: nil)
```

 - Second way **`perform Segue`**
  
  ```swift
     // performSegue : Use Segue

     self.performSegue(withIdentifier: Constant.STORY_BOARD_SEGUE_SIGNUP, sender: self)
  ```
  
  - `performSegueWithIdentifer` and `instantiateViewControllerWithIdentifier` both are used to move from one viewController to another viewController, but when use `performSegueWithIdentifer` you should also use `prepareForSegue` to pass data to second ViewController
 
### Storyboard ID
  - Storyboard ID: is the ID of a ViewController in Storyboard
  - Each **ViewController** in StoryBoard have its own **ID**
  - **Storyboard ID** used for instantiate a ViewController
  
  - Example:

  ```swift
  let storyboard = UIStoryboard(name: "Main", bundle: nil)
  let controller = storyboard
      .instantiateViewController(withIdentifier: "someViewController") as! UIViewController
  self.present(controller, animated: true, completion: nil)
  ```
  
### Symbols (Main API)

- https://developer.apple.com/reference/uikit/uiviewcontroller#//apple_ref/doc/uid/TP40006926-CH3-SW96

- Configuring a View Controller Using Nib Files

```swift
  init(nibName: String?, bundle: Bundle?)
  // Returns a newly initialized view controller with the nib file in the specified bundle.

  var nibName: String?
  // The name of the view controller's nib file, if one was specified.

  var nibBundle: Bundle?
  // The view controller's nib bundle if it exists.
```
- Interacting with Storyboards and Segues

```swift
  var storyboard: UIStoryboard?
  // The storyboard from which the view controller originated.
  
  func shouldPerformSegue(withIdentifier: String, sender: Any?)
  // Determines whether the segue with the specified identifier should be performed.

  func prepare(for: UIStoryboardSegue, sender: Any?)
  // Notifies the view controller that a segue is about to be performed.

  func performSegue(withIdentifier: String, sender: Any?)
  // Initiates the segue with the specified identifier 
  // from the current view controller's storyboard file.

  func unwind(for: UIStoryboardSegue, towardsViewController: UIViewController)
  // Called when an unwind segue transitions to a new view controller.
```

- Managing the View

```swift
  var view: UIView!
  //The view that the controller manages.

  func loadView()
  //Creates the view that the controller manages.

  func viewDidLoad()
  //Called after the controller's view is loaded into memory.

  func loadViewIfNeeded()
  //Loads the view controller’s view if it has not yet been loaded.

  var viewIfLoaded: UIView?
  //The view controller’s view, or nil if the view is not yet loaded.

  var title: String?
  //A localized string that represents the view this controller manages.

```

- Responding to View Events

```swift
  func viewWillAppear(Bool)
  //Notifies the view controller that its view is about to be added to a view hierarchy.
  
  func viewDidAppear(Bool)
  //Notifies the view controller that its view was added to a view hierarchy.
  
  func viewWillDisappear(Bool)
  //Notifies the view controller that its view is about to be removed from a view hierarchy.
  
  func viewDidDisappear(Bool)
  //Notifies the view controller that its view was removed from a view hierarchy.
```

- Presenting View Controllers
```swift
  func show(UIViewController, sender: Any?)
  //Presents a view controller in a primary context.
  
  func showDetailViewController(UIViewController, sender: Any?)
  //Presents a view controller in a secondary (or detail) context.
  
  func present(UIViewController, animated: Bool, completion: (() -> Void)? = nil)
  //Presents a view controller modally.
  
  func dismiss(animated: Bool, completion: (() -> Void)? = nil)
  //Dismisses the view controller that was presented modally by the view controller.
```
