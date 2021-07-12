
### GraphQL
* Both REST APIs and GraphQL APIs are just fancy ways to call functions on Backend server over a network
* GraphQL is the same SQL, this is a language for get data from database
* GraphQL is a query language for APIs
* GraphQL gives clients the power to query for exactly what they need and nothing more.
* GraphQL is implemented at Backend site
* GraphQL work as APIs that return the data for the client 
* Client send a GraphQL query to Backend API and will get exactly what you need, nothing more and nothing less.
* While typical REST APIs will response only single resources in a single request, but GraphQL queries access not just the properties of one resource but also smoothly follow references between them
* GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

### GraphQL vs REST

#### Data Fetching with REST vs GraphQL

* With REST, each request just only access to one enpoint, to get many data from many resources you must request to multiple endpoints
* The core idea of REST is the resource. Each resource is identified by a URL, and you retrieve that resource by sending a GET request to that URL

* In the example with REST:
    * /users/<id>  => get user information
    * /users/<id>/posts  => get user 's post 
    * /users/<id>/followers  => get user 's followers
    * We need to call 3 REST API to get all the data of user

* In the example with GraphQL:

    * query {User(id: 1234){ name posts {title} followers {name} }}
    * We need send only one GraphQL request to get all data of user and the data references with user

#### REST APIs endpoints and GraphQL schema

* REST APIs is usually described as a list of endpoints:
    * GET /books/:id
    * GET /authors/:id
    * GET /books/:id/comments
    * POST /books/:id/comments

* In GraphQL you don’t use URLs/endpoints to identify what is available in the API. Instead, you use a GraphQL schema:

```
type Query {
  book(id: ID!): Book
  author(id: ID!): Author
}

type Mutation {
  addComment(input: AddCommentInput): Comment
}

type Book { ... }
type Author { ... }
type Comment { ... }
input AddCommentInput { ... }
```

### GraphQL Queries, Fields, Arguments and Mutations

#### Fields

* GraphQL is about asking for specific fields on objects

```
{
  hero {
    name
    # Queries can have comments!
    friends {
      name # this is call field
    }
  }
}
```

#### Arguments

* You have the ability to pass arguments to fields, things get much more interesting.

```
{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}
```

#### Mutations

* Mutations is the same POST on REST, it is a way to modify server-side data 
