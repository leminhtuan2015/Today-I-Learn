### iPhone Resolutions
### Autolayout?
### Change the layout at runtime (Autolayout at runtime)
### StackView

--------------------------------------------------------
### iPhone Resolutions
  - The UIView in IOS **must** be have 4 properties x, y, width, height => (x, y, w, h)
  
  ![](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/swift/images/ios_resolution_small.png)

 -  Maybe on IPhone4 M is the center point but in IPhone7 M is Not the center point
 - => That is why we need Autolayout
 
####  IMPOTANT
- Khi không dùng Autolayout: Trên IPhone4 điểm M (x, y, w, h) thì khi trên IPhone 7 điểm M vẫn là M(x, y. w, h) điều này dẫn đến việc bị lệch layout giữa các devices khác nhau của IPhone

- Khi Autolayout
  - Thường sẽ phải căn 3 hoặc 4 phía.
  - Nếu căn 1 góc sẽ lỗi vì căn 1 phía sẽ chỉ xác định được x hoặc y mà ta cần phải xác định cả x và y
  - Nếu chỉ căn 2 phía thì:
    - Phải căn  mà 2 phía này **KHÔNG đối diện nhau** thì sẽ chả có ý nghĩa gì
    - Nếu chỉ căn 2 phía **đối điện nhau** thì sẽ lỗi vì chỉ xác định được x hoặc y mà ta cần xác định cả x và y
 - Sau khi M (x, y, w, h) được autolayout thì thì lúc này **x, y** sẽ được **ưu tiên** còn **w, h** sẽ là khoảng trống trừ đi độ dài các **constant** trong **constraint**
 - Sau khi autolayout thì độ dài, độ rộng của các UIView sẽ thay đổi theo constraint, chúng sẽ dài ra hoặc thu ngắn lại, việc dài hay ngắn sẽ là khoảng trống xung quanh trừ đi các **constant** trong **constraint**
 - `Autolayout luôn **ưu tiên** (x, y) còn (w, h) thì sẽ phụ thuộc theo (x, y) => ta nên autolayout ở màn hình nhỏ nhất của Storyboard`
  
 
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
    
### StackView
  - Stacks views are really simple: they are contain arrays of sub views
  - The stack view manages the layout of all the sub views
  - The stack view manages the layout of its sub views and automatically applies layout constrants for you
  - You can embed a stack view in another stack view to build more complex user interfaces
  - `Don’t get me wrong. It doesn’t mean you do not need to deal with auto layout. You still need to define the layout constrants for the stack views itself`
  - Why we use **UIStackView**
    - Auto resize its sub views
    - Auto layout its subview
    - Easy to add/remove it subview, easier to build complex user interfaces.
