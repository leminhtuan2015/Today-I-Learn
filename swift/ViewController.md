### ViewController in Swift IOS
### Start a ViewController (transition to a new ViewController)
### Storyboard ID

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
    
 - **FUCKING FUCKING FUCKING ME - important - important - important**
   - Anytime you go to a new destination view controller IOS will create a new instance of that view controller
   - Segues create a new instance of the destination view controller
   - `storyboard.instantiateViewController` also create a new instance of the view controller
 
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


  

