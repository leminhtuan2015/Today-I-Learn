### Objective-C Variables
### Objective-C Constants
### Objective-C Pointers
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

### Objective-C Functions

```objc
- (return_type)method_name : (argument1_type)argument1_name : (argument2_type)argument2_name
{
   //body of the function
}
```

### Objective C Class Syntax

* Preprocessor Commands
* Interface
* Implementation
* Properties
* Variables
* Statements & Expressions

#### Preprocessor Commands
