### GraphQL
### GraphQL API vs REST API

--------

### GraphQL

* GraphQL is a tool work at server-side
* GraphQL is a **query language** for your APIs
* GraphQL **is NOT** tied to any specific database or storage engine, GraphQL work with **existing data**

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

* GraphQL query

```js
{
  me {
    name
  }
}
```

* GraphQL JSON response

```js
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```
