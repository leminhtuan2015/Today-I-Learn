### ViewController in Swift IOS
### Start a ViewController (transition to a new ViewController)
### Navigation ViewController
### Storyboard ID
### Storyboard Segue

-----------------------
### ViewController in Swift IOS
  - ViewController is the **brain** - Controller layer
  - Model is the **muscal** - Model layer
  - Storyboard is the **clothes** - View layer

### Start a ViewController (transition to a ViewController)
  - 2 ways to transition to a ViewController :
    - instantiateViewController
    - performSegue

##### instantiateViewController
```swift
  // Swift 3.0

  let storyboard = UIStoryboard(name: "Main", bundle: nil)
  let controller = storyboard.instantiateViewController(withIdentifier: "someViewController")
  self.present(controller, animated: true, completion: nil)
  
  ---------------------------------------------------------------
  If Is Embeded NavigationController
  
   let storyboard = UIStoryboard(name: "Main", bundle: nil)
   let homeViewController = storyboard.instantiateViewController(withIdentifier: "HomeViewController") as! HomeViewController
   let navController = UINavigationController(rootViewController: homeViewController)
   self.present(navController, animated: true, completion: nil)
   
   OR
   ---------------------------------------------------------------
   
   let storyboard = UIStoryboard(name: Constant.STORY_BOARD_MAIN_NAME, bundle: nil)
   let signupViewController = storyboard.instantiateViewController(withIdentifier: Constant.STORY_BOARD_SIGNUP_ID) as! SignupViewController
   self.navigationController?.pushViewController(signupViewController, animated: true)
  
```

##### performSegue

```swift
  self.performSegue(withIdentifier: Constant.STORY_BOARD_SEGUE_SIGNUP, sender: self)
```
  
- Segue : Should segue from controller to controller NOT from UIButton to controller

http://stackoverflow.com/questions/30009400/what-is-the-difference-between-using-instantiateviewcontrollerwithidentifier-and

http://stackoverflow.com/questions/13013476/ios-how-to-acheive-behavior-like-androids-startactivityforresult

https://developer.apple.com/reference/uikit/uiviewcontroller#//apple_ref/doc/uid/TP40006926-CH3-SW96

http://stackoverflow.com/questions/25444213/presenting-viewcontroller-with-navigationviewcontroller-swift
