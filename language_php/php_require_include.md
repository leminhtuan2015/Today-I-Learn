
### PHP include and require Statements

* It is possible to insert the content of one PHP file into another PHP file (before the server executes it), with the **include or require** statement.
    * require will throw a fatal error if not found (E_COMPILE_ERROR) and stop the script
    * include will only throw a warning if not found (E_WARNING) and the script will continue
    
```php
include 'filename';

or

require 'filename';
```
