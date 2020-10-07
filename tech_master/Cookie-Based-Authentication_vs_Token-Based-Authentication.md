### Cookie-Based Authentication vs Token-Based Authentication


![cookie-token-authentication](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/tech_master/cookie-token-auth.png
)

### Cookie-Based Authentication

* Cookie-based authentication is stateful
* Cookie will be automaticlly send to server with each request

* Flow of traditional Cookie-based authentication:

  * 1. User enters their login credentials.
  * 2. Server verifies the credentials are correct and creates a session which is then stored in a database.
  * 3. A cookie with the session ID is placed in the users browser.
  * 4. On subsequent requests, the session ID is verified against the database and if valid the request processed.
  * 5. Once a user logs out of the app, the session is destroyed both client-side and server-side.

### Token-Based Authentication

* Token-based authentication is stateless.
* Every request to the server is accompanied by a token which the server uses to verify the authenticity of the request

* Flow of traditional Token-based authentication:

  * 1. User enters their login credentials.
  * 2. Server verifies the credentials are correct and returns a signed token.
  * 3. This token is stored client-side, most commonly in local storage - but can be stored in session storage or a cookie as well.
  * 4. Subsequent requests to the server include this token as an additional Authorization header or through one of the other methods mentioned above.
  * 5. The server decodes the JWT and if the token is valid processes the request.
  * 6. Once a user logs out, the token is destroyed client-side, no interaction with the server is necessary.

### Advantages of Token-Based Authentication

#### Stateless, Scalable, and Decoupled

* the biggest advantage to using tokens over cookies is the fact that token authentication is stateless
* The back-end does not need to keep a record of tokens. 
* Each token is self-contained, containing all the data required to check it's validity as well as convey user information through claims.

#### Cross Domain and CORS

* Cookie-based => **NOT CORS**
  * Cookies work well with single domains and sub-domains, but when it comes to managing cookies across different domains, it can get **CORS**.

* Token-based => **CORS enabled**
  * Token-based approach with **CORS enabled** makes it trivial to expose APIs to different services and domains

#### Mobile Ready

* APIs **do not only called from browser**, APIs also be **called from native mobile platforms like iOS and Android**
* Native mobile platforms and cookies do not mix well, because native app do not have cookie store (only browser have cookie)
* Token-based are much easier to implement on both iOS and Android. Tokens are also easier to implement for Internet of Things applications and services that do not have a concept of a cookie store.





