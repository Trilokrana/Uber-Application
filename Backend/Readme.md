# Uber Application Backend

This is the backend for the Uber Application. It is built using Node.js, Express, and MongoDB.

## Endpoints

### `/users/register`

#### Description

This endpoint is used to register a new user. It validates the input data, hashes the password, and stores the user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

#### Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

| Field                | Type   | Required | Description                                        |
| -------------------- | ------ | -------- | -------------------------------------------------- |
| `fullname.firstname` | String | Yes      | The first name of the user (minimum 3 characters). |
| `fullname.lastname`  | String | No       | The last name of the user (minimum 3 characters).  |
| `email`              | String | Yes      | The email address of the user (must be valid).     |
| `password`           | String | Yes      | The password for the user (minimum 6 characters).  |

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response

On success:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8c0e5b5d6c9a1b2c3d4e5",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

On validation error:

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    }
  ]
}
```

On server error:

```json
{
  "error": "An unexpected error occurred"
}
```

---

### `/users/login`

#### Description

This endpoint is used to authenticate a user. It validates the input data, checks the email and password, and returns a JSON Web Token (JWT) along with the user details if the credentials are valid.

#### Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

| Field      | Type   | Required | Description                                       |
| ---------- | ------ | -------- | ------------------------------------------------- |
| `email`    | String | Yes      | The email address of the user (must be valid).    |
| `password` | String | Yes      | The password for the user (minimum 6 characters). |

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response

On success:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8c0e5b5d6c9a1b2c3d4e5",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

On validation error:

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

On invalid credentials:

```json
{
  "error": "Invalid email or password"
}
```

On server error:

```json
{
  "error": "An unexpected error occurred"
}
```

---

### `/users/profile`

#### Description

This endpoint is used to retrieve the profile of the authenticated user. It requires a valid JWT token to access.

#### Method

`GET`

#### Headers

| Header          | Value          | Required | Description                |
| --------------- | -------------- | -------- | -------------------------- |
| `Authorization` | `Bearer <JWT>` | Yes      | The JWT token of the user. |

#### Example Request

```http
GET /users/profile HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Example Response

On success:

```json
{
  "_id": "64f8c0e5b5d6c9a1b2c3d4e5",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

On unauthorized access:

```json
{
  "error": "Unauthorized"
}
```

---

### `/users/logout`

#### Description

This endpoint is used to log out the user. It clears the JWT token from cookies and blacklists the token to prevent further use.

#### Method

`GET`

#### Headers

| Header          | Value          | Required | Description                                                |
| --------------- | -------------- | -------- | ---------------------------------------------------------- |
| `Authorization` | `Bearer <JWT>` | No       | The JWT token of the user (optional if stored in cookies). |

#### Example Request

```http
GET /users/logout HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Example Response

On success:

```json
{
  "message": "Logged out successfully"
}
```

On server error:

```json
{
  "error": "An unexpected error occurred"
}
```

---

## Setup Instructions

1. Clone the repository.
2. Navigate to the `Backend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the `Backend` directory with the following variables:
   ```
   PORT=3000
   DB_CONNECT=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. The server will run on `http://localhost:3000`.
