### Ways to make request to server
### Make request throught Proxy server (Tor)

-----------------------------

### Ways to make request to server
 - Browser
   - Form
   - Link
   - AJAX
 - Terminal
   - CURL
   - WGET

### Routing request throught Proxy server (Tor)
 - Step run **tor**
 
 ```sh
   tor
 ```
 
 - Step 2: Routing request throught Proxy server
   - After you run tor, it will auto create a **SOCKS** and this SOCKS is listening on **127.0.0.1:9050**
   - You need to route all the request through **127.0.0.1:9050**

  ```sh
    curl --socks5-hostname localhost:9050 https://check.torproject.org
  ```

  ```sh
    curl -x socks5h://127.0.0.1:9050/ https://www.torproject.org/
  ```
  


