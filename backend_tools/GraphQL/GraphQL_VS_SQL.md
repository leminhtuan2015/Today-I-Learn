### GraphQL VS SQL
### GraphQL VS Rest API

-------------------------------------------------------

### GraphQL VS SQL

* GraphQL and SQL both is query language
* GraphQL and SQL is very different:
  * **SQL is a language for work directly with database** (MySQL, SQL Server, Postgre, sqlLite, Oracle)
  * **GraphQL is DO NOT work with any database**, it work on-top of backend as a middle-ware between client and server (wrap the SQL, work on top of SQL)

### GraphQL VS Rest API

* GraphQL used to send/receive data between client and server using **minimum number of HTTP request**
* Main target of GraphQL is **make minimum number of HTTP request between client and server**
  * If you app must be call many APIs, should use GraphQL APIs at your server side
* GraphQL allow client to defind what data API must response.

* GraphQL and Rest API: 
  * both used for API
  * both used for response json data to client
 
* GraphQL: Using when you want to **make minimum number of HTTP request between client and server**
* Rest API: the traditional client server api, need to make each request to API to get single object
