### Web Server
### Application Server
### Apache/Nginx
### Why must some app servers be put behind a reverse proxy?

---------------------------------------------

### Web Server

* A web server is a program that takes a request to your website from a user and does some processing on it. Then, it might give the request to your web app
* Web server là một tool nhận HTTP request được gửi đến một IP và thực hiện một vài xử lí trước khi forward những request ấy đến web app của bạn.
* Web server tools:
    * Nginx
    * Apache

### Application Server

* An app server is the thing that actually runs your web app.
* Application server là tool để vận hành web app, execute web app code
* Sau khi Application Server xử lí xong request, sẽ gửi response lại cho phía Web Server để trả dữ liệu về client.
* Một Application Server cũng có thể chạy độc lập mà không cần có Web Server trước nó. Đây chính là việc ta vẫn làm ở môi trường development. Chỉ chạy app server (mặc định là WEBrick) mà không cần đến web server. Tuy nhiên ở môi trường Product thì thường chúng ta sẽ cần đến web server.
* Most Application servers could directly exposed to the Internet on port 80, while others may not.
    * App servers that can be directly exposed to the Internet: Phusion Passenger, Rainbows
    * App servers that may not be directly exposed to the Internet: Mongrel, Unicorn, Thin, Puma. These app servers must be put behind a reverse proxy web server like Apache and Nginx.

* App server tools:
  * Rails: Unicorn, Puma, Passenger
  * Java: Tomcat
 
  
  
### Apache/Nginx

* Hầu hết các app server có thể sử lí các file static nhưng không hiệu quả bằng Apache hay Nginx. 
* Do đó thông thường Apache/Nginx sẽ được set up để sử lí các file static còn các request khác sẽ được gửi qua app server xử lí. 
* Cách làm này sẽ giúp website của bạn được bảo mật hơn bởi các Apache và Nginx đều được phát triển từ rất lâu và chúng có thể giúp website của bạn chống đỡ với những request nguy hiểm.

### Why must some app servers be put behind a reverse proxy?

* Some app servers can only handle 1 request concurrently, per process. If you want to handle 2 requests concurrently you need to run multiple app server instances, each serving the same Ruby app. This set of app server processes is called an app server cluster (hence the name Mongrel Cluster, Thin Cluster, etc). You must then setup Apache or Nginx to reverse proxy to this cluster. Apache/Nginx will take care of distributing requests between the instances in the cluster (More on this in section "I/O concurrency models").




* https://www.justinweiss.com/articles/a-web-server-vs-an-app-server/
* https://stackoverflow.com/questions/4113299/ruby-on-rails-server-options

