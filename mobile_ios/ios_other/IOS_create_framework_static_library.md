### IOS Create Framework
### IOS Create Static Library

------------------------------------------------------

### IOS Create Framework

* Framework can be coded by **Objective-C** or **Swift**
* Framework have **only one part** (all code of framework is in .framework file) 
  * .framework file have **Headers** folder that contain all **header file (.h)** of each class

* Create Framework:

1. Open Xcode
2. Create new project => Cocoa Touch Framework
3. Coding by Swift or Objective-c
4. Build project => get .framework file in Products folder

### IOS Create Static Library

* Static library DO NOT like Framework, Static library have 2 separate part **header file (.h)** and **binary file (.a)**
* **Static Library** have 2 part
  * Header files (.h file) In the include folder, The header files is what other project will need to compile. 
  * Binary file (.a file) The lib*.a file contains the executable


* Static Library coded by **Objective-C** 
* If you code Static Library by **Swift** you must create Bridging-Header

* Create Static Library:

1. Open Xcode
2. Create new project => Cocoa Touch Static Library
3. In Project static library > Build Phases tab > Copy files > Adding all header file (.h)
4. Build project => get .a file in Products folder

