### ViewController Communicate

----------------------

### ViewController Communicate
  - present/dismiss : Use for UIViewControllers
  - pushViewController/popViewController : Use for UIViewControllers inside UINavigationViewController
  
#### {} is ViewControllers in Storyboard : present/dismiss
#### [] is a NavigationViewController (contain some other ViewController) : pushViewController/popViewController

  - {VC <-> VC <-> VC}
  - {VC <-> ***[VC <-> VC]*** <-> VC }
  - UINavigationViewController is a subclass of UIViewController
  
  - A UINavigationController is a subclass of UIViewController that manages a stack of view controllers and adds a back button
  - ***present*** ViewController is a method of the UIViewController class you use to present a modal view controller
  

