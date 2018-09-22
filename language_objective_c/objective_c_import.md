### Objective C Import

---------------------------------------------------

### Objective C Import

* The quoted(" ") is for **local** includes of files **(scope to current project)**
* Header files in **" "** are searched in **user or local directories** (current project)

```objc
#include "headers/my_header.h"
```

* The angle-bracket(<>) is for **global** or system includes.
* Header files in **<>** bracket are searched in **global** or **system**

```objc
#import <Foundation/Foundation.h>
```
