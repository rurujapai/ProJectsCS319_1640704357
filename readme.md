Here’s a comprehensive **README.md** for your project:

---

# **Tour Management System**

This project is a Tour Management System built with **Angular** (Frontend), **Node.js + Express.js** (Backend), and **MySQL** (Database). It allows users to manage tours, destinations, and authentication using JWT.

---

## **Features**

- User authentication using JWT.
- CRUD operations for tours and destinations.
- Responsive frontend built with Angular.
- Backend APIs with Node.js and Express.js.
- MySQL database integration.

---

## **Prerequisites**

- **Node.js** (v14 or above)
- **Angular CLI** (v15 or above)
- **MySQL** (v8.0 or above)

---

## **Environment Variables**

Create an `.env` file in the root directory of the **backend** with the following keys:

```plaintext
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=tour_management
DB_DIALECT=mysql

# JWT Configuration
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600
```

---

## **Setup Instructions**

### **1. Backend Setup**

#### **Step 1: Navigate to the Backend Directory**

```bash
cd backend
```

#### **Step 2: Install Dependencies**

```bash
npm install
```

#### **Step 3: Configure the Database**

Ensure your MySQL server is running and matches the credentials provided in the `.env` file. The database and tables will be automatically created when the server starts.

#### **Step 4: Start the Backend Server**

```bash
node index.js
```

The backend server will run on `http://localhost:5000`.

---

### **2. Frontend Setup**

#### **Step 1: Navigate to the Frontend Directory**

```bash
cd frontend
```

#### **Step 2: Install Dependencies**

```bash
npm install
```

#### **Step 3: Start the Frontend Server**

```bash
ng serve
```

The Angular application will run on `http://localhost:4200`.

---

## **Running the Application**

1. Start the **Backend** server first:
   - Open a terminal, navigate to the `backend` directory, and run `node app.js`.

2. Start the **Frontend** server:
   - Open another terminal, navigate to the `frontend` directory, and run `ng serve`.

3. Access the application:
   - Open a browser and navigate to `http://localhost:4200`.

---

## **Endpoints**

### **Authentication**
- `POST /auth/login`: Authenticate and receive a JWT token.

### **Tours**
- `GET /tours`: Retrieve all tours (requires JWT).
- `POST /tours`: Create a new tour (requires JWT).
- `GET /tours/:id`: Get details of a specific tour (requires JWT).
- `PUT /tours/:id`: Update a tour (requires JWT).
- `DELETE /tours/:id`: Delete a tour (requires JWT).

---

## **Database Structure**

- **User Table**:
  - `id`: Primary Key
  - `name`: String
  - `email`: String
  - `password`: String (hashed in production)
  - `role`: Enum (`admin`, `customer`)

- **Tour Table**:
  - `id`: Primary Key
  - `name`: String
  - `description`: String
  - `startDate`: Date
  - `endDate`: Date
  - `status`: Enum (`planned`, `completed`)
  - `userId`: Foreign Key (links to User)

- **Destination Table**:
  - `id`: Primary Key
  - `city`: String
  - `activities`: JSON
  - `days`: Integer
  - `tourId`: Foreign Key (links to Tour)

---

## **Additional Notes**

### **JWT Handling**
- The token is stored in the **Frontend** (LocalStorage).
- The token is included in the `Authorization` header for all API requests.

### **Seeding Data**
- Mock user data is created automatically during the backend startup if no users exist.
  - Admin Credentials:
    - Email: `admin@admin.com`
    - Password: `password`

### **Default Cities**
- Predefined cities include `Tokyo`, `Kyoto`, `Osaka`, `Nagoya`, and `Hokkaido`.

---

## **Future Enhancements**
- Add user registration functionality.
- Implement role-based access control (e.g., `admin` vs. `customer` permissions).
- Add unit and integration tests.

---


# ProJectsCS319_1640704357
