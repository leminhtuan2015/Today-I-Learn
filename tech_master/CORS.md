### What is CORS

* You have to understand that the **CORS behavior is not an error** — it’s a mechanism that’s working as expected in order to protect your users, you, or the site you’re calling

* Cross-origin resource sharing (CORS) is a **browser mechanism** - which enables controlled access to resources located **outside of a given domain**

* Origin = The domain of web on browser, this is set in request header when you make a http request
* **Browser will set the origin in the header of each request with the domain** and you can not override this value

* EX: If you web on browser "myweb.com" and you make a request to the other domain such as "otherweb.com" 
=> **the browser will throw CORS error*

### Same-origin policy

* The same-origin policy is the rules limits the ability for a website to interact with resources **outside of the source domain** (other domain)

### CORS cases

* A different domain (eg. site at example.com calls api.com)
* A different sub domain (eg. site at example.com calls api.example.com)
* A different port (eg. site at example.com calls example.com:3001)
* A different protocol (eg. site at https://example.com calls http://example.com)


### CORS enable

#### CORS enable at server side

* Example CORS setting at server side

```java
public class CORSInterceptor extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        response.addHeader("Access-Control-Allow-Origin", origin(request));
        response.addHeader("Access-Control-Allow-Credentials", "true");
        response.addHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
        response.addHeader("Access-Control-Max-Age", "3600");
        response.addHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
        return super.preHandle(request, response, handler);
    }
}
```

* Access-Control-Allow-Origin
  * This header is meant to be returned by the server, and indicate what client-domains are allowed to access its resources.

* Access-Control-Allow-Credentials
  * This header is only required to be present in the response if your server supports authentication via cookies

* Access-Control-Allow-Headers
  * Provides a comma separated list of request header values the server is willing to support

* Access-Control-Allow-Methods
  * A comma separated list of HTTP request type verbs (eg. GET, POST) which the server is willing to support.

* Origin
  * This header is **part of the request** that the client is making, and will contain the domain from which the application is started. 
  * For security reasons **browsers will not allow you to overwrite this value.**

#### CORS enable at client side

* **credentials: 'include'**

```js
  async callApi()
  {
    await fetch("http://localhost:5555/test",{
       method: 'GET',
       credentials: 'include'
    })
  }
```






