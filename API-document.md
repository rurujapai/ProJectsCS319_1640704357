Here is the **API Endpoint Documentation** formatted in Markdown:

---

# **API Endpoint Documentation**

## **Base URL**

```
http://localhost:5000/api
```

---

## **Authentication**

### **1. Login**
- **Endpoint**: `/auth/login`
- **Method**: `POST`
- **Description**: Authenticate a user and return a JWT token.
- **Request Body**:
    ```json
    {
        "email": "string",
        "password": "string"
    }
    ```
- **Response**:
    ```json
    {
        "token": "string",
        "user": {
            "id": "integer",
            "name": "string",
            "email": "string",
            "role": "string"
        }
    }
    ```
- **Possible Errors**:
    - `401 Unauthorized`: Invalid email or password.

---

## **User Management**

### **1. Get Users**
- **Endpoint**: `/users`
- **Method**: `GET`
- **Description**: Retrieve a list of all users (admin only).
- **Headers**:
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```
- **Response**:
    ```json
    [
        {
            "id": "integer",
            "name": "string",
            "email": "string",
            "role": "string"
        }
    ]
    ```

---

## **Tour Management**

### **1. Get All Tours**
- **Endpoint**: `/tours`
- **Method**: `GET`
- **Description**: Retrieve all tours.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```
- **Response**:
    ```json
    [
        {
            "id": "integer",
            "name": "string",
            "description": "string",
            "startDate": "string",
            "endDate": "string",
            "status": "string",
            "userId": "integer",
            "destinations": [
                {
                    "id": "integer",
                    "city": "string",
                    "activities": ["string"],
                    "days": "integer"
                }
            ]
        }
    ]
    ```

---

### **2. Get Tour by ID**
- **Endpoint**: `/tours/:id`
- **Method**: `GET`
- **Description**: Retrieve details of a specific tour.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```
- **Response**:
    ```json
    {
        "id": "integer",
        "name": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "status": "string",
        "userId": "integer",
        "destinations": [
            {
                "id": "integer",
                "city": "string",
                "activities": ["string"],
                "days": "integer"
            }
        ]
    }
    ```

---

### **3. Create a Tour**
- **Endpoint**: `/tours`
- **Method**: `POST`
- **Description**: Create a new tour.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**:
    ```json
    {
        "name": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "destinations": [
            {
                "city": "string",
                "activities": ["string"],
                "days": "integer"
            }
        ]
    }
    ```
- **Response**:
    ```json
    {
        "id": "integer",
        "name": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "status": "string",
        "userId": "integer",
        "destinations": [
            {
                "id": "integer",
                "city": "string",
                "activities": ["string"],
                "days": "integer"
            }
        ]
    }
    ```

---

### **4. Update a Tour**
- **Endpoint**: `/tours/:id`
- **Method**: `PUT`
- **Description**: Update an existing tour.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**:
    ```json
    {
        "name": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "destinations": [
            {
                "id": "integer",
                "city": "string",
                "activities": ["string"],
                "days": "integer"
            }
        ]
    }
    ```
- **Response**:
    ```json
    {
        "id": "integer",
        "name": "string",
        "description": "string",
        "startDate": "string",
        "endDate": "string",
        "status": "string",
        "userId": "integer",
        "destinations": [
            {
                "id": "integer",
                "city": "string",
                "activities": ["string"],
                "days": "integer"
            }
        ]
    }
    ```

---

### **5. Delete a Tour**
- **Endpoint**: `/tours/:id`
- **Method**: `DELETE`
- **Description**: Delete a specific tour.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```
- **Response**:
    ```json
    {
        "message": "Tour deleted successfully."
    }
    ```

---

### Summary

- **Authentication**: Login to generate a token.
- **User Management**: Admin-only access to list all users.
- **Tour Management**: Full CRUD for tours with nested destination data.

Feel free to integrate this Markdown directly into your documentation system or README file! Let me know if there are additional changes or endpoints you’d like to include. 😊