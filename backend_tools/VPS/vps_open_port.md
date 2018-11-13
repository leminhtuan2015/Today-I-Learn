### Open/Close port VPS on CentOS

---------------------------------------------------------

### Open/Close port VPS on CentOS

#### Open port VPS

* Method 1: Open port by **iptables**

```sh
iptables -I INPUT -p tcp -m tcp --dport PORT_XXX -j ACCEPT
service iptables save
service iptables restart
````
