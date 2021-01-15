### GraphQL
### GraphQL API vs REST API
### Data Fetching with GraphQL vs REST
### GraphQL server and GraphQL client
### GraphQL server with a database
--------

### GraphQL

* GraphQL is a tool work at server-side
* GraphQL is a **query language** for your APIs, the same SQL - **NOT databases**
    * SQL is NOT the Database, SQL also is the query language, SQL can use in MYSQL DB, SQLServer DB, Postgre DB
* GraphQL **is NOT** tied to any specific database or storage engine, GraphQL work with **existing data**
* GraphQL allow client define the data query at client side (**with REST API, SQL query must be define at server side**)
* GraphQL gives clients the power to ask for exactly data they need, NOT depend at the logic of server 

* Example:

  * GraphQL defining types and fields

  ```graphql
  type Query {
    me: User
  }

  type User {
    id: ID
    name: String
  }
  ```

  * Along with functions for each field on each type:

  ```js
  function Query_me(request) {
    return request.auth.user;
  }

  function User_name(user) {
    return user.getName();
  }
  ```

### GraphQL API vs REST API

#### REST API
  * Client call HTTP REST API
  * Server receive the request
      * Server handle logic
      * Server using SQL to CRUD with database
      * Server response data to client
  * Client recevied the response JSON data from server
      
#### GraphQL API
  * Client define the data query at client side
  * Client the power to ask for exactly what they need 
  * Client controll all data what they get, **NOT the server**.

* GraphQL APIs get all the data your app needs in a single request
  * While typical REST APIs require request from multiple URLs (**each REST API only response for one resource object**)
  * GraphQL APIs can get many resource objects in a single request


### Data Fetching with GraphQL vs REST

#### REST
* With a REST API, you would typically gather the data by accessing multiple endpoints

* Example to get an user data with REST need 3 endpoints:
  * /users/<id>
  * /users/<id>/posts
  * /users/<id>/followers

* **With REST, Client have to make three requests to different endpoints to fetch the enough required data.** 
* With REST Client do not know which data will response from API until you received the JSON response
* With REST, Client can NOT controll which data will fetch or post

#### GraphQL

* With GraphQL Client just send a single query to the GraphQL server that includes the only data requirements
* With GraphQL, Client already know which data you will be received
* With GraphQL, Client totaly controll which data will fetch or post

 ```js
   query {
     User(id: "1234567") {
       name
       posts {
         title
       }
       followers(last: 1000) {
         name
       }
   }
```
  
### GraphQL server and GraphQL client

* GraphQL server is a **query language** for your APIs at *server side*
* Client can access GraphQL server by any HTTP client
* **Client just need to call HTTP request to access GraphQL APIs enpoints, GraphQL can be use any HTTP client to make request  => WHY WE NEED GraphQL client**
  * => ANSWER: In short, we should use a GraphQL client for tasks that are repetitive and agnostic to the app we’re building


### GraphQL server with a database

* GraphQL also doesn’t care about the database or the format that is used to store the data
* GraphQL can be used with any kind of database or even no database at all.
* GraphQL could use a SQL database like AWS Aurora or a NoSQL database like MongoDB.










