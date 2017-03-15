### Pixel in multiple devices IOS (IPhone 4, IPhone 5, IPhone 6, IPhone 7)
### Autolayout?
### Change the layout at runtime (Autolayout at runtime)

--------------------------------------------------------


### Pixel in multiple devices IOS (IPhone 4, IPhone 5, IPhone 6, IPhone 7)
  - The UIView in IOS must be have 4 properties x, y, width, height => (x, y, w, h)
  - (x, y, w, h) in multiple devices will be changed
  - Những điều sau sẽ xảy ra trong trường hợp **CHƯA autolayout**
    - (IPhone 5) = 1.5 * (IPhone 4)
    - (IPhone 6) = 1.5 * (IPhone 4)
    - (IPhone 7) = 2.0 * (IPhone 4)
    - 1.5 hay 2.0 là tỷ lệ giữa các màn hình của IP6 và IP7 so với IP4 (một UIView object của IP7 sẽ to gấp đôi so với IP4)
    - Example: The UIView in IPhone 4s have (x, y, w, h) = (1, 1, 1, 1) => on IPhone 7 that will be (2, 2, 2, 2)
    - Việc chuyển đổi (x, y, w, h) theo tỷ lệ hình như này sẽ không giải quyết được vấn đề 1 view lằm cân đối trên tất cả các màn hình, ví dụ ở IP4 có A(5, 5, 5, 5) sẽ lằm chính gữa màn hình nhưng khi sang IP7 thì A sẽ trở thành A(10, 10, 10, 10) và lúc này trên IP7 A không c lằm chính giữa nữa (bị lệch) => Auto-layout sẽ giải quyết vấn đề này
    
  - Khi đã **autolayout** thì (x, y, w, h) của một UIView sẽ không còn được chuyển đổi theo tỷ lệ như trên nữa
  
### Autolayout?
 - We should NOT build UI in IOS by **pixel**, because We have much device IOS and each device have the diffrent screen size . If we build UI in IOS by **pixcel** that will NOT work well on some devices.
   
 - EX: If we build UI in Iphone 5s by **pixcel** => On Iphone 6s or 7 => Your UIview will be lost it layout.
   
 - Auto alyout will be the solution for above proplems.
   - Auto alyout build UI view by **create constraints** and **NOT pixcel**
   - Auto Layout dynamically calculates the size and position of all the views
   - Based on constraints placed on those views
   - Auto Layout is a series of **constraints**. **Constraints** represent a relationship between two views.
   
 - Constraints
   - **Constraints** represent a relationship between two views.
   - **Constraints** represent for that height/width
   - If we change the Constraints => UI will be update

 - How to autolayout a UIView object?
   - **Autolayout** MUST BE DEFINE 4 attributes ** x, y, width, height**
   - Each View object we must define 4 attribute: **x, y, with, height** for the UI view you want to be autolayouted
     - Position (x, y)
     - Size (width, height)
     
- Auto Layout is All About Constraints
   - As mentioned before, auto layout is a constraint-based layout system. It allows developers to create an adaptive UI that responds appropriately to changes in screen size and device orientation.
   - Constraints express rules for the layout of the UiView in the interface.
  
   - Create constraints: 
        - **Align** – Create alignment constraints, such as aligning the left edges of two views.
        - **Pin** – Create spacing constraints, such as defining the width of a UI control.
        - **Issues** – Resolve layout issues.
        - **Stack** – Embed views into a stack view. Stack view is a new feature since Xcode 7. We will further discuss about it in the next chapter.
    
### Change layout at runtime
  - Show/Hide a UIView object by use autolayout
  - If you want to show/hide a UI view object you should change the **height constraints** or **width constraints**
  
    ```swift
      @IBOutlet weak var adsContainerHeightConstraint: NSLayoutConstraint!

      self.adsContainerHeightConstraint.constant = 60 // SHOW
      self.view.layoutIfNeeded()

      self.adsContainerHeightConstraint.constant = 0 // HIDE
      self.view.layoutIfNeeded()
    ```
    
