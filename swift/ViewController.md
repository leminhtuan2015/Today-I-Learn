### ViewController in Swift IOS
### Start a ViewController (transition to a new ViewController)
### Navigation ViewController
### Storyboard ID

-----------------------
### ViewController in Swift IOS
  - **ViewController** is the best impotant in IOS 
  - ViewController is the **brain** - Controller layer
  - Model is the **muscal** - Model layer
  - Storyboard is the **clothes** - View layer

### Start a ViewController (transition to a ViewController)
  - 2 ways to transition to a ViewController :
    - instantiate ViewController.
    - perform Segue.
    
 - First way `present UIViewController`

  ```swift
    // present UIViewController

    let storyboard = UIStoryboard(name: "Main", bundle: nil)
    let controller = storyboard.instantiateViewController(withIdentifier: "someViewController") as! UIViewController
    self.present(controller, animated: true, completion: nil)
  ```

  - Second way `perform Segue`
  
  ```swift
     // performSegue : Use Segue

     self.performSegue(withIdentifier: Constant.STORY_BOARD_SEGUE_SIGNUP, sender: self)

  ```


### Navigation ViewController
  - Navigation ViewController: is the stack to store many ViewController
  
  ```swift
    ---------------------------------------------------------------
    // present UINavigationController

     let storyboard = UIStoryboard(name: "Main", bundle: nil)
     let homeViewController = storyboard.instantiateViewController(withIdentifier: "HomeViewController") as! HomeViewController
     let navController = UINavigationController(rootViewController: homeViewController)
     self.present(navController, animated: true, completion: nil)

     ---------------------------------------------------------------
     // pushViewController

     let storyboard = UIStoryboard(name: Constant.STORY_BOARD_MAIN_NAME, bundle: nil)
     let signupViewController = storyboard.instantiateViewController(withIdentifier: Constant.STORY_BOARD_SIGNUP_ID) as! SignupViewController
     self.navigationController?.pushViewController(signupViewController, animated: true)

     ---------------------------------------------------------------
     // popViewController : Come back to previous ViewController

     navigationController?.popViewController(animated: true)
  ```
  - http://rshankar.com/navigation-controller-in-ios/
  - https://makeapppie.com/2016/07/11/programmatic-navigation-view-controllers-in-swift-3-0/
  - https://makeapppie.com/2016/06/27/using-segues-and-delegates-for-navigation-controllers-in-swift-3-0/
 
### Storyboard ID
  - Storyboard ID: is the ID of a ViewController in Storyboard
  - Each **ViewController** in StoryBoard have its own **ID**
  - **Storyboard ID** used for instantiate a ViewController
  
  - Example:

  ```swift
    let storyboard = UIStoryboard(name: "Main", bundle: nil)
    let controller = storyboard.instantiateViewController(withIdentifier: "someViewController") as! UIViewController
    self.present(controller, animated: true, completion: nil)
  ```


  
  
  
  
  
  
  
  
  
  
  
  - TODO
  
http://stackoverflow.com/questions/30009400/what-is-the-difference-between-using-instantiateviewcontrollerwithidentifier-and

http://stackoverflow.com/questions/13013476/ios-how-to-acheive-behavior-like-androids-startactivityforresult

https://developer.apple.com/reference/uikit/uiviewcontroller#//apple_ref/doc/uid/TP40006926-CH3-SW96

http://stackoverflow.com/questions/25444213/presenting-viewcontroller-with-navigationviewcontroller-swift
