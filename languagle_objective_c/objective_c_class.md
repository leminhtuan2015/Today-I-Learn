### Objective C Class Syntax
* Class in Objective C have 2 part
  * Header file (.h)
    * The header file (with the file extension .h) **defines the class and everything about it** for the world to know
  * Implementation file (.m)
    * (.m files) The other half of a class is the implementation file,
    * Implementation files implement all those things that we declare to be available in the header files

* The class is defined in two different sections namely **@interface** and **@implementation**
  * Interface : 
    * **@interface ...  @end**
  * Implementation : 
    * **@implementation ... @end**
  * Properties: 
    * **@property ... @end**
 
* The **instance variables are private** and are only accessible inside the class implementation.
* Properties are introduced in Objective-C to ensure that the instance variable of the class can be accessed outside the class


* **Interface** `Box.h`
```objc
#import <Foundation/Foundation.h>

@interface Box:NSObject
{
//Instance variables
double length;   // Length of a box
double breadth;  // Breadth of a box

//Instance method
- ( void )sayHello;
}
@end
```

* **Implementation** `Box.m`

```objc
#import "Box.h"

@implementation Box
- ( void )sayHello
{
    NSLog( @" static lib Hello" );
}
@end
```
