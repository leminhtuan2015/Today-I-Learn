### Web Server
### Application Server
### Apache/Nginx
### Why must some app servers be put behind a reverse proxy?

---------------------------------------------

### Web Server

* A web server is a program that takes a request to your website from a user and does some processing on it. Then, it might give the request to your web app
* Web server là một tool nhận HTTP request được gửi đến một IP và thực hiện một vài xử lí trước khi forward những request ấy đến web app của bạn.

#### List of Web Servers
 * Nginx
 * Apache

### Application Server

* An app server is the thing that actually runs your web app.
* Application server là tool để vận hành web app, execute web app code
* Sau khi Application Server xử lí xong request, sẽ gửi response lại cho phía Web Server để trả dữ liệu về client.
* Một Application Server cũng có thể chạy độc lập mà không cần có Web Server trước nó. Đây chính là việc ta vẫn làm ở môi trường development. Chỉ chạy app server mà không cần đến Web server. Tuy nhiên ở môi trường Product thì thường chúng ta sẽ cần đến web server.
* Most Application servers could directly exposed to the Internet on port 80, while others may not.
    * App servers that can be directly exposed to the Internet: Phusion Passenger, Rainbows
    * App servers that may not be directly exposed to the Internet: Mongrel, Unicorn, Thin, Puma. These app servers must be put behind a reverse proxy web server like Apache and Nginx.

#### List of Application Servers
* https://en.wikipedia.org/wiki/List_of_application_servers
* Rails: 
   * Unicorn, Puma, Passenger
   
* Java: 
   * Tomcat, GlassFish, Jetty, JBoss
   
* JavaScript:
   * Node.js, Deno
   
* Python 
   * WSGI, Gunicorn, CherryPy, Phusion Passenger, Paste, Tornado, Twisted, Web2py, Zope
   
 * .NET
   * Internet Information Services (IIS)
  
### Apache/Nginx

* Hầu hết các app server có thể sử lí các file static nhưng không hiệu quả bằng Apache hay Nginx. 
* Do đó thông thường Apache/Nginx sẽ được set up để sử lí các file static còn các request khác sẽ được gửi qua app server xử lí. 
* Cách làm này sẽ giúp website của bạn được bảo mật hơn bởi các Apache và Nginx đều được phát triển từ rất lâu và chúng có thể giúp website của bạn chống đỡ với những request nguy hiểm.

### Why must some app servers be put behind a reverse proxy?

* Some app servers can only handle 1 request concurrently, per process. If you want to handle 2 requests concurrently you need to run multiple app server instances, each serving the same Ruby app. This set of app server processes is called an app server cluster (hence the name Mongrel Cluster, Thin Cluster, etc). You must then setup Apache or Nginx to reverse proxy to this cluster. Apache/Nginx will take care of distributing requests between the instances in the cluster (More on this in section "I/O concurrency models").

* The web server can buffer requests and responses, protecting the app server from "slow clients" - HTTP clients that don't send or accept data very quickly. You don't want your app server to do nothing while waiting for the client to send the full request or to receive the full response, because during that time the app server may not be able to do anything else. Apache and Nginx are very good at doing many things at the same time because they're either multithreaded or evented.

* Most app servers can serve static files, but are not particularly good at it. Apache and Nginx can do it faster.

* People typically set up Apache/Nginx to serve static files directly, but forward requests that don't correspond with static files to the app server, it's good security practice. Apache and Nginx are very mature and can shield the app server from (perhaps maliciously) corrupted requests.


* https://www.justinweiss.com/articles/a-web-server-vs-an-app-server/
* https://stackoverflow.com/questions/4113299/ruby-on-rails-server-options

