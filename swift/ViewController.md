### ViewController in Swift IOS
### Start a ViewController (transition to a new ViewController)
### Storyboard ID
### Symbols

-----------------------
### ViewController in Swift IOS
  - **ViewController** is the best impotant in IOS 
  - ViewController is the **brain** - Controller layer
  - Model is the **muscal** - Model layer
  - Storyboard is the **clothes** - View layer

### Start a ViewController (transition to a ViewController)
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
### Symbols

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
  // Initiates the segue with the specified identifier from the current view controller's storyboard file.

  func allowedChildViewControllersForUnwinding(from: UIStoryboardUnwindSegueSource)
  // Returns an array of child view controllers that should be searched for an unwind segue destination.

  func childViewControllerContaining(UIStoryboardUnwindSegueSource)
  // Returns the child view controller that contains the source of the unwind segue.

  func canPerformUnwindSegueAction(Selector, from: UIViewController, withSender: Any)
  // Called on a view controller to determine whether it wants to respond to an unwind action.

  func unwind(for: UIStoryboardSegue, towardsViewController: UIViewController)
  // Called when an unwind segue transitions to a new view controller.
```
