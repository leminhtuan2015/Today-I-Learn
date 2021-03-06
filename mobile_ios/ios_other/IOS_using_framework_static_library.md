
### IOS Static Library (.a) vs Framework (.framework)
### Using a Framework (.framework) in Your App
### Using a Static Library (.a) in Your App
### Preference
  * https://www.raywenderlich.com/41377/creating-a-static-library-in-ios-tutorial
  * DEMO : https://github.com/leminhtuan2015/Demo_IOS_StaticLibrary_Framework

--------------------------------------------------------------------------

### IOS Static Library (.a) vs Framework (.framework)
* **.a** and **.framework** is the 2 type of libraries in IOS
* In Xcode 9
  * Static Library (.a) just only use **ObjectiveC**
  * Framework (.framework) can use **ObjectiveC or Swift**

* Static Library **(.a)** : 
  * IOS **static libraries** are not allowed to contain images/assets (only code)
  * Static library has the .a extension.
  * IOS **static libraries** have 2 part
    * Header files (.h) : each static library will be build with Products/include/.h files
    * Binary file (.a) : .a file contain the execute files
  
* Framework **(.framework)** :  
  * IOS **Framework** contain code and resources(images/assets)
  * Framework has the .framework extension.
  * Framework just have only one part (not like static library) because .framework contain folder **Header** inside

### Using a Framework (.framework) in Your App

#### **There are 2 type of adding .framework to project**
  * Type 1: **Linked Frameworks and Libraries** (Use when that is system libraries, system framework)
  * Type 2: **Embedded Binaries** (Use when that is 3rd party libraries, 3rd party framework)
  
  
#### Embedded Binaries ---VS--- Linked Frameworks and Libraries
  * In iOS8 all 3rd party frameworks need to be "embedded".
  * **Embedding Binaries** copies the entire framework to the target => make your app zise grows
  * If you embed the binary it will be included into your product. 
  * If you only **link a library or framework** without embedding it, it will not be part of your product.

#### **Type 1 (Method 1): Using a Framework by Linked Frameworks and Libraries**

1. In the project navigator, select your project.
2. Select your target.
3. Select the "Build Phases" tab.
4. Open "Link Binaries With Libraries" expander.
5. Click the + button.
6. Select your framework.
7. Example : https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_ios/ios_images/adding-frameworks.png

#### **Type 1 (Method 2): Using a Framework by Linked Frameworks and Libraries**

1. In the project navigator, select your project.
2. Select your target.
3. Select the "General" tab.
4. Open "Linked Frameworks and Libraries" expander
5. Click the + button.
6. Select your framework.

#### **Type 2: Using a Framework by Embedded Binaries**

1. In the project navigator, select your project.
2. Select your target.
3. Select the "General" tab.
4. Open "Embedded Binaries" expander
5. Click the + button.
6. Select your framework.

### Using a Static Library (.a) in Your App

#### Method 1: Include the static library project as a Sub-project.

0. **Impotant:** : Make sure in the **Static Library** > Build Phases tab > Copy file > + all the header file in this static library (If not you will receive issue Header .h file not found)

1. Make sure the **Subproject** (the Static Library project will be added to other application project) is **closed**
2. Right-click on the application project => "Add file to " => Add .xcproject file of Static Library project
3. Select your target (Application Project).
4. Select the "General" tab.
5. Open "Linked Frameworks and Libraries" expander
6. Click the + button.
7. Select your static library (.a file)
8. If your Application Project is Swift and Static Library is ObjectiveC (If you use Bridging-Header)
  * => You must create **ProjectName-Bridging-Header.h**

```objc
//  MainProject-Bridging-Header.h

#import <TestStaticLib/TestStaticLib.h>
#import <TestStaticLib/StaticLibrary.h>
```

9. Config Bridging-Header in Application Project
  * 1. Select Application Project 
  * 2. Select tab "Build Settings"
  * 3. Select "Objective-C Bridging Header" => Add "ProjectName/ProjectName-Bridging-Header.h"

10. Now in Application Project you can use code in Static Library



#### Method 2: Reference the headers and the library binary file (.a) directly.

* Because of static library have 2 part
  * Part 1: Header files (.h)
  * Part 2: Binary file (.a)
* => We need to add 2 part (part 1 and part 2) to Application Project

* Add Static Library to Application Project

1. Make folder StaticLibrary > copy .a file to this folder
2. Make foler Headers > copy all .h file of static library to this folder
3. In Xcode Add 2 above folder to project
4. Add binary (.a) file : In Application Project > General tab > Linked Frameworks and Libraries > Add other > select to .a file
5. Add header (.h) files: In Application Project > Build Setting tab >  Header Search Paths > Add "PATH/TO/FOLDER/HEADER_FILES"

6. If your Application Project is Swift and Static Library is ObjectiveC  (If you use Bridging-Header)

```objc
//  MainProject-Bridging-Header.h

#import "TestStaticLibrary_1.h"
```






