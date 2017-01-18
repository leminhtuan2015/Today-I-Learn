### What is Tor?
### How Tor work?
### How to use Tor?
### How to use Tor as a socks5 proxy
### Proxy settings : Routing all your browser network traffic through Tor proxy

----------------
### What is Tor? (The Onion Router)
 - Tor the same a **SOCKS Proxy server** you can use to protect the personal privacy (hide you IP)
 - Tor is free software for enabling anonymous communication. The Tor Project is a nice distributed anonymizing network
 - Using Tor makes it more difficult for Internet activity to be traced back to the use
 - Tor consisting of more than seven thousand (**7000** or more now) relays to conceal a user's IP
 - Tor's use is intended to protect the personal privacy of users, as well as their freedom and ability to conduct confidential communication by keeping their Internet activities from being monitored

![](https://github.com/leminhtuan2015/Wiki/blob/master/images/Tor-onion-network.png)


### How Tor work?
- After run tor on terminal, it will create a SOCKS proxy at your computer **localhost:9050**
- Typically Tor listens for SOCKS connections on port 9050. Tor Browser listens on port 9150.
- Now you can routing your request through this SOCKS and you request will use Tor proxy (your IP be hidden)

```sh
curl --socks5-hostname 127.0.0.1:9050 http://icanhazip.com/
```


### How to use Tor?

##### Install Tor on MAC as browser
  - Dowload browser at:   https://www.torproject.org/
  - Tor browser: Tor itself and a built-in copy of **Firefox**, Tor Browser it’s a modified version of **Firefox**
  - Tor terminal tool (Tor without graphical interface)
  
##### Install Tor on MAC as a terminal tool
  - We can use Tor without graphical interface.
  - These are advanced installation instructions for running Tor in a command line
  
  ```sh
    sudo port install tor 
    # Or: sudo brew install tor
  ```
  
### How to use Tor as a socks5 proxy
 - You can definitely use Tor as a socks5 proxy.
 - When you start a Tor session, it also comes with a socks5 proxy at port 9150 on your computer (localhost:9050)
 - After running Tor now you can connect to socks5 proxy
 
  ```sh
  curl --socks5-hostname 127.0.0.1:9050 http://icanhazip.com/
  ```
  - Or you also can config your network computer/ network browxer to connect to socks5 proxy

### Proxy settings : Routing network traffic through Tor
  - After you run Tor, it will auto create a **SOCKS** listening on **127.0.0.1:9050** 
      => You must be route network traffic to **127.0.0.1:9050**
      
  - This script make your browser connect to **Tor proxy server**
  - When run Tor, you computer will not automaticaly be routed through Tor => you must be do this
  - In order for all your system traffic being routed through Tor you need to adjust your system’s network proxy
  - Setting proxy network
  - To use SOCKS directly you can point your application directly at Tor:
    - host: 127.0.0.1 (localhost) 
    - port 9050
  
```sh
  #!/usr/bin/env bash

  # 'Wi-Fi' or 'Ethernet' or 'Display Ethernet'
  INTERFACE=Wi-Fi

  # Ask for the administrator password upfront
  sudo -v

  # Keep-alive: update existing `sudo` time stamp until finished
  while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

  # trap ctrl-c and call disable_proxy()
  function disable_proxy() {
      sudo networksetup -setsocksfirewallproxystate $INTERFACE off
      echo "$(tput setaf 64)" #green
      echo "SOCKS proxy disabled."
      echo "$(tput sgr0)" # color reset
  }
  trap disable_proxy INT

  # Let's roll
  sudo networksetup -setsocksfirewallproxy $INTERFACE 127.0.0.1 9050 off
  sudo networksetup -setsocksfirewallproxystate $INTERFACE on

  echo "$(tput setaf 64)" # green
  echo "SOCKS proxy 127.0.0.1:9050 enabled."
  echo "$(tput setaf 136)" # orange
  echo "Starting Tor..."
  echo "$(tput sgr0)" # color reset

  tor
```


