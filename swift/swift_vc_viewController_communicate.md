### ViewController Communicate
### Start/Init/Instance a ViewController
----------------------

### ViewController Communicate
  - present/dismiss : Use for ***UIViewControllers***
  - pushViewController/popViewController : Use for ***UIViewControllers inside UINavigationViewController***
  
#### {} is ViewControllers in Storyboard : present/dismiss
#### [] is a NavigationViewController (contain some other ViewController) : pushViewController/popViewController

  - {VC <-> VC <-> VC}
  - {VC <-> ***[VC <-> VC]*** <-> VC }
  
  - UINavigationViewController is a subclass of UIViewController
  - A UINavigationController manages a stack of ViewControllers and adds a ***back button***
  - ***present*** ViewController is a method of the UIViewController class you use to present a ***modal*** ViewController
  - You also can ***present*** a UINavigationViewController (UINavigationViewController is a subclass of UIViewController)
  
### Start/Init/Instance a ViewController
 - Use function ***instantiateViewController***

  ```swift
    let storyboard = UIStoryboard(name: "Main", bundle: nil)
    let viewController = storyboard.instantiateViewController(withIdentifier: "VC_ID") as! UIViewController
  ```

  - Show (Modal) the other ViewController from ViewController
  
  ```swift
    self.present(viewController, animated: true, completion: nil)
    self.present(anyNavigationController, animated: true, completion: nil)
    
    // dissmis
    viewController.dismiss(animated: true, completion: nil)
    navigationController?.dismiss(animated: true, completion: nil)
  ```
  
  - Show (Push) the other ViewController from inside NavigationViewController
  
  ```swift
    self.navigationController?.pushViewController(viewController, animated: true)
    
    // dissmiss
    
    self.navigationController?.popViewController(animated: true)
  ```

