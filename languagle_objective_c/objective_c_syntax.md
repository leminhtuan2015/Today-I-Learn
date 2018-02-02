### Objective-C Variables
### Objective-C Constants
### Objective-C Pointers
### Objective-C Strings
### Objective-C Preprocessors
### Objective-C Functions
### Objective C Class

----------------------------------------------------------------------

### Objective-C Variables

```objc
type variable_list;

int    i, j, k;
char   c, ch;
float  f, salary;
double d;

int d = 3, f = 5;
byte z = 22;   
char x = 'x'; 

```

### Objective-C Constants

```objc
const type variable = value; // first way
#define identifier value  // second way

const int  LENGTH = 10;
#define LENGTH 10 
```
### Objective-C Pointers
* A pointer is a variable whose value is the address of another variable

```objc
#import <Foundation/Foundation.h>

int main ()
{
   int  var = 20;   /* actual variable declaration */
   int  *ip;        /* pointer variable declaration */

   ip = &var;  /* store address of var in pointer variable*/

   NSLog(@"Address of var variable: %x\n", &var  );

   /* address stored in pointer variable */
   NSLog(@"Address stored in ip variable: %x\n", ip );

   /* access the value using the pointer */
   NSLog(@"Value of *ip variable: %d\n", *ip );

   return 0;
}
```

### Objective-C Strings

* **@" Your String Here"**

```objc
#import <Foundation/Foundation.h>

int main ()
{
   NSString *greeting = @"Hello";

   NSLog(@"Greeting message: %@\n", greeting );

   return 0;
}
```

### Objective-C Preprocessors

* **#define**	: Substitutes a preprocessor macro
* **#include** : Inserts a particular header from another file
* **#undef** : Undefines a preprocessor macro
* **#ifdef** : Returns true if this macro is defined
* **#ifndef** : Returns true if this macro is not defined
* **#if** : Tests if a compile time condition is true
* **#else** : The alternative for #if
* **#elif** : #else an #if in one statement
* **#endif** : Ends preprocessor conditional
* **#error** : Prints error message on stderr
* **#pragma** : Issues special commands to the compiler using a standardized method

```objc
#define MAX_ARRAY_LENGTH 20

#import <Foundation/Foundation.h>
#include "myheader.h"

#undef  FILE_SIZE
#define FILE_SIZE 42

#ifndef MESSAGE
   #define MESSAGE "You wish!"
#endif

#ifdef DEBUG
   /* Your debugging statements here */
#endif


```

### Objective-C Functions

```objc
- (return_type)method_name : (argument1_type)argument1_name : (argument2_type)argument2_name
{
   //body of the function
}
```

### Objective C Class Syntax
* The class is defined in two different sections namely **@interface** and **@implementation**
  * Interface : 
    * **@interface ...  @end**
  * Implementation : 
    * **@implementation ... @end**
  * Properties: 
    * **@property ... @end**


* **Interface**
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

* **Implementation**

```objc
#import "Box.h"

@implementation Box
- ( void )sayHello
{
    NSLog( @" static lib Hello" );
}
@end
```









