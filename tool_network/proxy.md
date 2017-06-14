### What is Proxy?
### How Proxy work?
### Why Use a Proxy?
### SOCKS (Socket Secure Internet protocol)
### SOCKS proxy and an HTTP proxy
### What’s the Difference Between a VPN and a Proxy?
### How To Route Web Traffic Using a SOCKS Tunnel (Create a Server proxy)

-----------------
### Proxy
- In computer networks, a **proxy server** or **proxy** is a server (a computer system or an application) that acts as an intermediary for requests from clients
- A proxy or proxy server is basically another computer
- Your computer sends your requests to the **proxy server** which then processes your request and returns what you were wanting
- Proxy an **intermediary** between your computer and the rest of the computers on the internet.
- You  <-----> **Proxy** <-----> Internet 

![](https://github.com/leminhtuan2015/Wiki/blob/master/images/proxy-server1.jpg)

- Your IP will be hidden.

![](https://github.com/leminhtuan2015/Wiki/blob/master/images/proxy-server.jpg)

### How Proxy work?
 - When a proxy server receives a request for an Internet resource (such as a Web page) the proxy server acting as a client on behalf of the user, uses one of its own IP addresses to request the page from the server out on the Internet. When the page is returned, the proxy server relates it to the original request and forwards it on to the user
 
### Why Use a Proxy?
 - Proxy servers are used for both **legal** and **illegal** purposes.
   - **legal**
     - When use Proxy, It’s the proxy that’s connecting to the server, not you, so your IP isn’t disclosed.
     - To prevent DoS
     - Make parent block porn website from childrent
     - Hide your home IP address from the rest of the world
     - This can provide you with more privacy then if you were simply connecting directly to the internet
     - By connecting to the internet through proxies, the home IP address of your machine will not be shown but rather the IP of the proxy server will be shown
     
 -  A basic advantage of using Proxy is that they make you more anonymous
 
##### Request without a proxy


[Your Computer] <----------> [Internet]

 
 - You’re connecting directly to the server.
   - It knows your external IP
   - It knows the cookies you have on your computer
   - It knows what browser you’re using and **what plugins you have installed**
   - It knows where you’re coming from.

### SOCKS
 - SOCKS (Socket Secure) is an Internet protocol that exchanges network packets between a client and server through a proxy server
 - Socks (or "SOCKS") is a protocol that a proxy server can use to accept requests from client users in a company's network so that it can forward them across the Internet. 
 
### SOCKS proxy and an HTTP proxy
 - Both proxy **SOCKS proxy** and **HTTP proxy** is **Proxy server**
 - HTTP proxies (The oldest type of proxy server) proxy HTTP requests, while SOCKS proxies proxy socket connections.
 - A HTTP Proxy will only proxy connections that use the http protocol
 - A SOCKS proxy is operating at a lower level and so an application, which supports SOCKS proxying, can use it to proxy a connection. Tor uses SOCKS because it is opens up the range of applications that can use it (IRC, SSH, etc)
  
### What’s the Difference Between a VPN and a Proxy?
 - Virtual Private Networks, like proxies, make your traffic appear as if it comes from a remote IP address. 
 
### How To Route Web Traffic Using a SOCKS Tunnel (Create a Server proxy)
##### Required
  - A VPS, A server Amazon, Google, ......
  - You have the permission to access to this server through SSH

##### Open a SOCKS proxy
  - A SOCKS proxy is basically an SSH tunnel.
  - A SOCKS proxy is basically an SSH tunnel in which specific applications forward traffic down the tunnel to the server, and then on the server , the proxy forwards the traffic out to the Internet.
  -  **To create a SOCKS proxy you have to ssh to the server proxy** because after you ssh to a server, a SOCKS automaticly created on local computer
  
  - STEP 1: Setting Up the Tunnel
  
  ```sh
    ssh user@server -D port
  ```
  - The above command will do two things:
    - Open a SSH tunnel to server
    - Create a SOCKS5 proxy listen on **localhost:port**
    
  - STEP 2: Route Traffic Using a SOCKS Tunnel
    
    ```
    curl --socks5-hostname localhost:port http://icanhazip.com/ 
    ```


