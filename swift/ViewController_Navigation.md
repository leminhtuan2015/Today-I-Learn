### Navigation ViewController

-------------------------------------

### Navigation ViewController

  - Navigation ViewController: is the stack to store many ViewController
  - We use the terms **push** and **pop** a lot to talk about stacks => in **Navigation ViewController** we will **push** or **pop** a ViewController to present a ViewController
  
  - Go to ViewController in Navigation ViewController
  
```swift
---------------------------------------------------------------
// present UINavigationController

 let storyboard = UIStoryboard(name: "Main", bundle: nil)
 let homeViewController = storyboard
     .instantiateViewController(withIdentifier: "HomeViewController") as! HomeViewController
 let navController = UINavigationController(rootViewController: homeViewController)
 self.present(navController, animated: true, completion: nil)

 ---------------------------------------------------------------
 // pushViewController

 let storyboard = UIStoryboard(name: Constant.STORY_BOARD_MAIN_NAME, bundle: nil)
 let signupViewController = storyboard
     .instantiateViewController(withIdentifier: Constant.STORY_BOARD_SIGNUP_ID) as! SignupViewController
 self.navigationController?.pushViewController(signupViewController, animated: true)

 ---------------------------------------------------------------
 // popViewController : Come back to previous ViewController

 navigationController?.popViewController(animated: true)
```

  - https://makeapppie.com/2016/07/11/programmatic-navigation-view-controllers-in-swift-3-0/
