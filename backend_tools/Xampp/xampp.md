### XAMPP Apache Web Server


-----------------------------------------


### XAMPP Apache Web Server

* **XAMPP = Apache + MariaDB + PHP + Perl**
* XAMPP is a free and open-source cross-platform **web server** solution stack package developed by Apache Friends.
* XAMPP = Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages.
* To start XAMPP Apache, you have to disable OSX's built-in Apache server

```sh
sudo apachectl stop

sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist


```
