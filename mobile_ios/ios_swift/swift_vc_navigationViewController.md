### Navigation ViewController
### Embed an existing view controller within a navigation controller in a storyboard

-------------------------------------

### Navigation ViewController

#### Navigation ViewController Important:
  - Navigation ViewControlle ***Have NO UI itself***, It just use for ***stack other ViewControllers***
  - If a ***Storyboard Entry Point*** point to a NavigationViewController then its the top ViewController will be rendered.
  - Example:
  
  ```swift
  
  ->NavigationController [ViewController1 -> ViewController2 -> ViewController3]
  
  The screen will render the top view in stack NavigationController
  
  ```

  - Navigation ViewController: is the **stack** to store many ViewController
  - A **navigation controller** manages **transitions backward and forward** through a **series of view controllers**
  - We use the terms **push** and **pop** a lot to talk about stacks => in **Navigation ViewController** we will **push** or **pop** a ViewController to present a ViewController
  - In **Navigation ViewControlle** **push** and **pop** a view controller that mean: **Add** or **Remove** a view controller to **stack**
  
  - Go to ViewController in Navigation ViewController
  
```swift
---------------------------------------------------------------
// PRESENT a View Controller (SHOW a VC)

 let storyboard = UIStoryboard(name: "Main", bundle: nil)
 let homeViewController = storyboard
     .instantiateViewController(withIdentifier: "HomeViewController") as! HomeViewController
 let navController = UINavigationController(rootViewController: homeViewController)
 self.present(navController, animated: true, completion: nil)

 ---------------------------------------------------------------
 // PUSH a View Controller (SHOW a VC)
 let storyboard = UIStoryboard(name: Constant.STORY_BOARD_MAIN_NAME, bundle: nil)
 let signupViewController = storyboard
     .instantiateViewController(withIdentifier: Constant.STORY_BOARD_SIGNUP_ID) as! SignupViewController
 self.navigationController?.pushViewController(signupViewController, animated: true)

 ---------------------------------------------------------------
 // POP a View Controller : Come back to previous ViewController

 navigationController?.popViewController(animated: true)
 
 ---------------------------------------------------------------
 // POP TO ROOT of navigation controller 
 
 navigationController?.popToRootViewController(animated: true)
 
---------------------------------------------------------------
// dismiss : close ViewControllers that presented
// dismiss = un-present : come back to the previous ViewController that present this ViewController

navigationController?.dismiss(animated: true, completion: nil)

viewController.dismiss(animated: true, completion: nil)
```

### Embed an existing view controller within a navigation controller in a storyboard
  - Step 1: Select a View controller (nhấn nút màu vàng của một view controller trên storyboard)
  - Step 2: Choose Editor > Embed In > Navigation Controller.

