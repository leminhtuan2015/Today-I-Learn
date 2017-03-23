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
   - if you remove connection ***@IBOutlet/@IBAction*** in Controller Xcode will ***NOT*** remove this connection in  StoryBoard XML source code you have to do it yourself
 
#### Storyboard Custom Class
