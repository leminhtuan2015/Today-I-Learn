### Variables
### PHP `isset()` `unset()`

-----------------------------

### Variables

* Like SHELL script, PHP code keep create variable by `$`

#### Value variable

```php
$_string = "Hello world!";
$_int = 5;
$_float = 10.5;
```

#### Object variable

```php
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("black", "Volvo");
```

#### CONSTANTS

```php
<?php

define('MIN_VALUE', '0.0');   // RIGHT - Works OUTSIDE of a class definition.
define('MAX_VALUE', '1.0');   // RIGHT - Works OUTSIDE of a class definition.

//const MIN_VALUE = 0.0;         RIGHT - Works both INSIDE and OUTSIDE of a class definition.
//const MAX_VALUE = 1.0;         RIGHT - Works both INSIDE and OUTSIDE of a class definition.

class Constants
{
  //define('MIN_VALUE', '0.0');  WRONG - Works OUTSIDE of a class definition.
  //define('MAX_VALUE', '1.0');  WRONG - Works OUTSIDE of a class definition.

  const MIN_VALUE = 0.0;      // RIGHT - Works INSIDE of a class definition.
  const MAX_VALUE = 1.0;      // RIGHT - Works INSIDE of a class definition.

  public static function getMinValue()
  {
    return self::MIN_VALUE;
  }

  public static function getMaxValue()
  {
    return self::MAX_VALUE;
  }
}

?> 
```

#### Array

```php
 /* First method to create array. */
 $numbers = array(1, 2);

 /* Second method to create array. */
 $numbers[0] = 1;
 $numbers[1] = 2;
         
/* First method to associate create array. */    
$salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500);

 /* Second method to create array. */
 $salaries['mohammad'] = "high";
 $salaries['qadir'] = "medium";
 $salaries['zara'] = "low";
         
```


### PHP `isset()` `unset()`

* `isset` - Determine if a variable is declared and is different than NULL
* `unset` -  Unset a given variable, make variable NULL












