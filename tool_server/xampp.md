### XAMPP Apache Webserver MAC OS 


-----------------------------------------


### XAMPP Apache Webserver MAC OS 

* To start XAMPP Apache, you have to disable OSX's built-in Apache server

```sh
sudo apachectl stop

sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist


```
