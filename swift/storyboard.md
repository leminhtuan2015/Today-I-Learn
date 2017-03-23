### NIB, XIB
### Storyboard

--------------------------
### NIB, XIB
 - NIBs and XIBs are files that describe user interfaces, and are built using Interface Builder.
 - In fact, the acronym "NIB" comes from "NeXTSTEP Interface Builder", and "XIB" from "Xcode Interface Builder".
 - NIBs and XIBs are effectively the same thing: XIBs are newer and are used while you're developing, whereas NIBs are what get produced when you create a build.
 
### Storyboard
 - In modern versions of iOS and macOS, NIBs and XIBs have effectively been **replaced by storyboards**, although you may still meet them if you work on older projects.
 
#### Storyboard is the XML file
 - When use Storyboard to create UI
   - if you add/remove UIView to Storyboard => StoryBoard auto add/remove this in StoryBoard XML source code
   - if you remove connection ***@IBOutlet/@IBAction*** (connections) in Controller Xcode will ***NOT*** remove this connections in  StoryBoard XML source code so you have to do it yourself.
 
 - Each sence in StoryBoard have 5 main object
   - 1: ViewController tag
   - 2: view tag
   - 3: subviews tag
   - 4: constraints tag
   - 5: connections tag
   
 ```xml
   <scene sceneID="3sL-BV-g2H">
       <objects>
           <!-- 1: ViewController -->
           <viewController id="Wsg-xS-efC" customClass="SignupViewController" customModule="FujiSDK">
               <layoutGuides>
                   <viewControllerLayoutGuide type="top" id="QWe-qS-mKa"/>
               </layoutGuides>
               
               <!-- 2: View -->
               <view key="view" contentMode="scaleToFill" id="ra1-sQ-5Aa">
                   <!-- 3: SubView -->
                   <subviews>
                       <textField opaque="NO" clipsSubviews="YES" contentMode="scaleToFill" >
                       </textField>
                   </subviews>
                   
                   <!-- 4: Constraints -->
                   <constraints>
                   </constraints>
               </view>
               
               <!-- 5: Connections -->
               <connections>
                   <outlet property="imageLogo" destination="8V1-VF-Ajs" id="aFM-Zy-g4j"/>
               </connections>
           </viewController>
       </objects>
   </scene>
 ```
 
#### Storyboard Custom Class
 - In Storyboard by default:
   - ViewController have custom class is: ***UIViewController***
   - View have custom class is: ***UIView***
 - But we can change the custom class of objects in Storboard, for example we can change the custom class of ViewController in Stobyboard :
   - step 1: Create a class extends UIViewController
    ```swift
      class MyViewController: UIViewController {}
    ```
    - step 2: In the ***Indentity Inspector*** you can change the custom class to ***MyViewController***

















