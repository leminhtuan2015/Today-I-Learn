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
* Method 2: Open port by **FirewallD**

```sh
firewall-cmd --zone=public --add-port=9999/tcp
firewall-cmd --zone=public --add-port=9999/tcp --permanent
firewall-cmd --reload
```

#### Close port VPS

* Method 1: Close port by **iptables**

```sh
vim /etc/sysconfig/iptables # => Delete of remove the lines have port need to close
service iptables save
service iptables restart
```

* Method 2: Close port by **FirewallD**

```sh
firewall-cmd --zone=public --remove-port=9999/tcp
firewall-cmd --zone=public --remove-port=9999/tcp --permanent
firewall-cmd --reload
```










