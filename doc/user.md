# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username" : "pokopang",
  "password" : "Pokopang@1000",
  "name" : "Dark Pokopang"
}
```

Response Body (Success) : 

```json
{
  "data" : {
    "username" : "pokopang",
    "name" : "Dark Pokopang"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "pokopang",
  "password" : "Pokopang@1000"
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "pokopang",
    "name" : "Dark Pokopang",
    "token" : "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :
- Authorization: token

Response Body (Success) :

```json
{
  "data" : {
    "username" : "pokopang",
    "name" : "Dark Pokopang"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization: token

Request Body :

```json5
{
  "password" : "Pokopang@1000", // optional, if you want to change password
  "name" : "Dark Pokopang" // optional, if you want to change name
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "pokopang",
    "name" : "Dark Pokopang"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :
- Authorization: token

Response Body (Success) :

```json
{
  "data" : true
}
```
