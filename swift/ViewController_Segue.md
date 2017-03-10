### Segue - Create the Segue
### Pass data between view controllers using the prepare(for:sender:) method
### Unwind segue - Create the unwind segue
### Pass data to previous View Controller when un-segue

-------------------------------------

### Segue - Create the Segue
  - **View Controller** <-> Segue <-> **View Controller**
  - **Segue**: is the **Relationship** between ViewControllers
  - **Segue** is the relationship from one **ViewController** to the other **ViewController**
  - When create a **Segue** you should only **Ctrl drag** (create relationship) from a **ViewController** to other **ViewController** (DO NOT CREATE SEGUE FROM BUTTON TO ViewController)
  - Nghĩa là khi tạo 1 **Segue** mình chỉ nên kéo từ **ViewController** sang một **ViewController** khác, KHÔNG nên tạo **Segue** bằng cách kéo từ một **Button** sang **ViewController**
  - One **ViewController** may have many **Segue** (Relationship) to other **ViewControllers**
  
##### Create the Segue
  - Open storyboard
  - Control-drag one **View Controller** to one (or many) other **View Controlle**
  - Set ID for the segue

### Pass data between view controllers using the prepare(for:sender:) method

```swift
  // This method lets you configure a view controller before it's presented.
  
  // This method is overrided from UIViewController
  
  override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
  }
```

  - From **ViewController A** move to **ViewController B** you can use **Segue**
  - Before you **performSegue** the **ViewController** will automaticly call **`prepare(for segue: `** to get the instance of destination **ViewController**
  - Use for **pass data** between ViewControllers
  
  - `prepare(for segue: ` is the method called right before `self.performSegue(withIdentifier:`
  
  ```swift
      override func prepare(for segue: UIStoryboardSegue, sender: Any?) { }
  ```
  
  - Demo: **Pass data to other ViewController**
  
  ```swift
    import UIKit

    class HomeViewController: BasicViewController {
      
        @IBAction func buttonUserInfo(_ sender: Any) {
            // When clicked this button -> will perform a Segue to move to other ViewController
            
            self.performSegue(withIdentifier: Constant.STORY_BOARD_SEGUE_USER_INFO, sender: self)
        }
        
        override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
            // This function is called BEFORE performSegue
            
            Logger.log(string: "SEGUE \(segue.identifier)")
            
            if segue.identifier == Constant.STORY_BOARD_SEGUE_USER_INFO {
                let vc = segue.destination as! PaymentViewController
                
                // Pass Data to PaymentViewController
                vc.name = "LeMinhTuan"
            }
        }
    
    }
    
  ```

### Unwind segue
  - **Segue** => Create a new instance of ViewController **BUT** **Unwind segue** DO NOT do it, unwind segue return to view controllers that already exist
  - An unwind segue moves **backward** through one or more segues to return the user to a scene managed by an existing view controller
  -  While regular **segues create a new instance** of the destination view controller, unwind segues let you **return to view controllers that already exist**.
  - Use unwind segues to implement navigation back to an existing view controller
  
#### Create the unwind segue

- Open your storyboard.
- On the canvas, Control-drag from the **Any button** to the **Exit** item at the top of the meal detail scene.
















