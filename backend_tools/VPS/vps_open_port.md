
### Firewall on VPS CentOS 6, CentOS 7
### Check port on VPS is opening from telnet
### Check port on VPS is opening
### Open/Close port VPS on CentOS

---------------------------------------------------------

### Firewall on VPS CentOS 6, CentOS 7

* CentOS VPS use some tools for manager firewall:
  * CentOS 6 use **iptables**
  * CentOS 7 use **firewall-cmd**
  
* FirewallD **(firewall-cmd)** replace of  **iptables**

### Check port on VPS is opening from telnet

* https://ping.eu/port-chk/

* Method 1: Check port open by **telnet**

```sh
telnet 153.126.183.103 80
# Connected to => port is opened
# Connection refused => port is closed

telnet google.com 80

```

* Method 2: Check port open by **nmap**

```sh
brew install nmap

nmap -p 80 153.126.183.103
nmap -p 80 google.com
```

### Check port on VPS is opening

* Method 1: check port status by **Iptables**

```sh
iptables -L -n
```

=> Port 80, 22 is opened
```
ACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0           tcp dpt:80
f2b-SSH    tcp  --  0.0.0.0/0            0.0.0.0/0           tcp dpt:22
```

* Method 2: check port status by **FirewallD**

```sh
firewall-cmd --list-all
```

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










