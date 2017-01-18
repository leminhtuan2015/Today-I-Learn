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

### Make request throught Proxy server (Tor)

```sh
  curl --socks5-hostname localhost:9050 https://check.torproject.org
```

```sh
  curl -x socks5h://127.0.0.1:9050/ https://www.torproject.org/
```
  


