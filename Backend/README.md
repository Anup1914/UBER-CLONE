# User Registration API Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their details. On successful registration, it returns a JWT authentication token and the user object.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT Token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "scoketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Example Request (cURL)

```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

## Notes

- All required fields must be present and valid.
- The password is securely hashed before storage.
- The response includes a JWT token for authentication.

---

# User Login API Documentation

## Endpoint

`POST /users/login`

## Description

This endpoint allows an existing user to log in using their email and password. On successful login, it returns a JWT authentication token and the user object.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<JWT Token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "scoketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request (cURL)

```bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

## Notes

- Both fields are required.
- The response includes a JWT token for authentication.

---

# User Profile API Documentation

## Endpoint

`GET /users/profile`

## Description

This endpoint returns the authenticated user's profile information. The request must include a valid JWT token in the cookie or Authorization header.

## Authentication

- Requires JWT token (sent as a cookie or in the `Authorization` header).

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "scoketId": null
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request (cURL)

```bash
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <JWT Token>"
```

## Notes

- Only accessible to authenticated users.

---

# User Logout API Documentation

## Endpoint

`GET /users/logout`

## Description

This endpoint logs out the authenticated user by clearing the JWT token cookie and blacklisting the token.

## Authentication

- Requires JWT token (sent as a cookie or in the `Authorization` header).

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged Out"
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request (cURL)

```bash
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <JWT Token>"
```

## Notes

- Only accessible to authenticated users.
- The token is blacklisted and cannot be used again.

---

# Captain Registration API Documentation

## Endpoint

`POST /captains/register`

## Description

This endpoint allows a new captain (driver) to register by providing their personal and vehicle details. On successful registration, it returns a JWT authentication token and the captain object.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.
- `vehicle.color` (string, required): Minimum 3 characters.
- `vehicle.plate` (string, required): Minimum 3 characters.
- `vehicle.capacity` (integer, required): Minimum value 1.
- `vehicle.vehicleType` (string, required): Must be one of `"car"`, `"motorcycle"`, or `"auto"`.

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT Token>",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Duplicate Email Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "Captain already exists"
  }
  ```

### Example Request (cURL)

```bash
curl -X POST http://localhost:PORT/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "jane.smith@example.com",
    "password": "yourpassword",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

## Notes

- All required fields must be present and valid.
- The password is securely hashed before storage.
- The response includes a JWT token for authentication.
