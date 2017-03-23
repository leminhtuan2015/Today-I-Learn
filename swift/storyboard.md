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
   - if you remove connection ***@IBOutlet/@IBAction*** in Controller Xcode will ***NOT*** remove this connection in  StoryBoard XML source code so you have to do it yourself.
   
 ```xml
   <scene sceneID="3sL-BV-g2H">
       <objects>
           <!-- 1: VIEW CONTROLLER -->
           <viewController id="Wsg-xS-efC" customClass="SignupViewController" customModule="FujiSDK">
               <layoutGuides>
                   <viewControllerLayoutGuide type="top" id="QWe-qS-mKa"/>
               </layoutGuides>
               <view key="view" contentMode="scaleToFill" id="ra1-sQ-5Aa">
                   <subviews>
                       <textField opaque="NO" clipsSubviews="YES" contentMode="scaleToFill" >
                       </textField>
                   </subviews>
                   <constraints>
                   </constraints>
               </view>
               <connections>
                   <outlet property="imageLogo" destination="8V1-VF-Ajs" id="aFM-Zy-g4j"/>
               </connections>
           </viewController>
       </objects>
   </scene>
 ```
 
#### Storyboard Custom Class
 - We can mapping the 
 - UIViewController custom class
 - UIView custom class
