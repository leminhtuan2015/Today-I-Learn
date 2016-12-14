# TIL logs.

shutdown -h +4
(shutdown in 4 minus)

--
ROOTED DEVICE
```sh
su
cp -r data/data/com.hltcorp.gre sdcard/
adb pull sdcard/com.hltcorp.gre/ ~/Desktop
```

https://en.wikipedia.org/wiki/Closure_(computer_programming)

Life circle ViewController
https://developer.apple.com/library/content/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Lesson4.html

http://nshipster.com/method-swizzling/

### TODO LIST.
- use strictjavascript
- inherit diagram
- _ ?, ! option variable swift
- 


| Tables                       |      Are                          |  Cool                     |
|------------------------------|-----------------------------------|---------------------------|
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |


KHI build ios chi can biet team ID xcode se tu dong tim provision

Check dependencies
ENGLISH has conflicting provisioning settings. ENGLISH is automatically signed for development, but a conflicting code signing identity iPhone Distribution has been manually specified. Set the code signing identity value to "iPhone Developer" in the build settings editor, or switch to manual signing in the project editor.
Code signing is required for product type 'Application' in SDK 'iOS 10.1'


XAMPP: LOG php

Step1: 
Change the config in "/Applications/XAMPP/xamppfiles/etc/php.ini"
display_errors=On
error_log="/Applications/XAMPP/xamppfiles/logs/php_error_log"

step2: show log
error_log(print_r($content, true));

tail -f /Applications/XAMPP/xamppfiles/logs/php_error_log


////


$context = context_user::instance($USER->id);
