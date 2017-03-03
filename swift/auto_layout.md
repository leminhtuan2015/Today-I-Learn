### Pixel
### What is autolayout?
### How to autolayout a UIView object?
### Change layout at runtime
### Auto Layout is All About Constraints

--------------------------------------------------------


### Pixel

- **Pixel** (picture element) : 
- Smallest addressable element in an devices screen.
- It is the smallest controllable element of a picture represented on the screen
    
- The word **pixel** is based on a contraction of pix (from word "pictures", where it is shortened to "pics", and "cs" in "pics" sounds like "x") and el (for "element");
  
- If the image have size **1024 px x 1024 px** => Correspond with the matix [1024; 1024] each element in the matix is a pixel.
- We create the image by fill the element in matrix with a color.
  
### What is autolayout?
 - We should NOT build UI in IOS by **pixel**, because We have much device IOS and each device have the diffrent screen size
   => If we build UI in IOS by **pixcel** that will NOT work well on some devices.
   
   EX: If we build UI in Iphone 5s by **pixcel** => On Iphone 6s/7 => Your UIview will be lost it layout.
   
 - Auto alyout will be the solution for above proplems.
   - Auto alyout build UI view by **create constraints** and **NOT pixcel**
   - Auto Layout dynamically calculates the size and position of all the views
   - Based on constraints placed on those views
   - Auto Layout defines your user interface using a series of **constraints**. **Constraints** typically represent a relationship between two views.
   
 - Constraints
   - **Constraints** typically represent a relationship between two views.
   - **Constraints** typically represent for that height/width
   - If we change the Constraints => UI will be update

### How to autolayout a UIView object?
  - The  **SuperView** (root view) of each story-board is the **UIView** 
    - The SuperView 's coordinate is corresponse with the screen coordinate
    - The sub view 's coordinate is corresponse with the **parent view**

  - Each UI view object need 2 attribute to be autolayout
    - Position (x, y)
    - Size (width, height)
  - We must define : x, y, with, height for the UI view you want to be autolayouted
  
  => **To Autolayout** MUST BE DEFINE 4 attributes [x, y, width, height]

### Change layout at runtime
#### Show/Hide a UIView object by use autolayout
  - If you want to show/hide a UI view object you should change the **height constraints** or **width constraints**
  
```swift
  @IBOutlet weak var adsContainerHeightConstraint: NSLayoutConstraint!
  
  self.adsContainerHeightConstraint.constant = 60 // SHOW
  self.view.layoutIfNeeded()
  
  self.adsContainerHeightConstraint.constant = 0 // HIDE
  self.view.layoutIfNeeded()
```

### Auto Layout is All About Constraints
  - As mentioned before, auto layout is a constraint-based layout system. It allows developers to create an adaptive UI that responds appropriately to changes in screen size and device orientation.
  - Constraints express rules for the layout of the UiView in the interface.
  
  - Create constraints: 
    - **Align** – Create alignment constraints, such as aligning the left edges of two views.
    - **Pin** – Create spacing constraints, such as defining the width of a UI control.
    - **Issues** – Resolve layout issues.
    - **Stack** – Embed views into a stack view. Stack view is a new feature since Xcode 7. We will further discuss about it in the next chapter.
    
    ![alt text](https://github.com/leminhtuan2015/Today-I-learned/blob/master/images/auto-layout-4.png?raw=true")
    
