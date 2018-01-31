### Add .xcproject to project
### Add .framework to project

--------------------------------------------------------------------------
### Add .xcproject to project

### Add .framework to project

#### **There are 2 type of adding .framework to project**
  * Type 1: **Linked Frameworks and Libraries** (Use when that is system libraries, system framework)
  * Type 2: **Embedded Binaries** (Use when that is 3rd party libraries, 3rd party framework)

#### **Type 1 (First Way): Linked Frameworks and Libraries**

1. In the project navigator, select your project.
2. Select your target.
3. Select the "Build Phases" tab.
4. Open "Link Binaries With Libraries" expander.
5. Click the + button.
6. Select your framework.
7. Example : https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_ios/ios_images/adding-frameworks.png

#### **Type 1 (Second Way): Linked Frameworks and Libraries**

1. In the project navigator, select your project.
2. Select your target.
3. Select the "General" tab.
4. Open "Linked Frameworks and Libraries" expander
5. Click the + button.
6. Select your framework.

#### **Type 2: Embedded Binaries**

1. In the project navigator, select your project.
2. Select your target.
3. Select the "General" tab.
4. Open "Embedded Binaries" expander
5. Click the + button.
6. Select your framework.
