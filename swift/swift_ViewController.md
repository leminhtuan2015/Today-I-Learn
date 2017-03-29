### ViewController in Swift IOS
### Start a ViewController (move from one ViewController to another ViewController)
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

### 
  - `UIApplication.shared.keyWindow?.rootViewController`
