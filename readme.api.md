# API

---

## **Overview**

This is a simple RESTful API built with Express.js. It provides endpoints for user authentication, fetching country information, and simulating delayed responses. It also includes basic JWT-based secure endpoints and some mock data for teams.

---

## **Features**

- **User Authentication**: Register and login functionality with JWT-based authentication.
- **Health Check**: Quick API health status endpoint.
- **Country Information**: Fetch data about countries using [REST Countries API](https://restcountries.com/).
- **Mocked Teams Data**: Provides hardcoded teams information with country details.
- **Error Handling**: Centralized error-handling middleware.
- **Configurable**: Environment variables for configuration.

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone <repository_url>
cd <repository_folder>
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment Variables**

Create a `.env` file in the project root and add the required environment variables. See the [Environment Variables](#environment-variables) section for details.

### **4. Run the Server**

```bash
npm start
```

The server will start on the port specified in the `.env` file.

---

## **Environment Variables**

The project requires the following environment variables to function:

| Variable | Description                   | Example |
| -------- | ----------------------------- | ------- |
| `PORT`   | Port on which the server runs | `3000`  |

---

## **API Endpoints**

### **1. Health Check**

- **GET** `/health-check`
  - **Description**: Verifies the API is running.
  - **Response**: `{ "message": "Api v2 is ready" }`

---

### **2. Country Endpoints**

- **GET** `/countries`

  - **Description**: Fetches data for all countries.
  - **External API**: [REST Countries API](https://restcountries.com/v3.1/all)

- **GET** `/countries-delay`

  - **Description**: Fetches all countries with a simulated delay of 4 seconds.

- **GET** `/countries/code/:code`

  - **Description**: Fetches details of a country by its code.
  - **Example**: `/countries/code/US`
  - **External API**: [REST Countries API](https://restcountries.com/v3.1/alpha/US)

- **GET** `/countries-delay/name/:name`
  - **Description**: Fetches details of a country by its name. Simulates a delay on alternate requests.
  - **Example**: `/countries-delay/name/canada`

---

### **3. User Authentication**

- **POST** `/auth/register`

  - **Description**: Registers a new user.
  - **Request Body**:
    ```json
    {
      "userName": "example",
      "password": "password123"
    }
    ```
  - **Response**:
    - `201`: `{ "message": "Registered!" }`
    - `400`: `{ "message": "user already exists" }`

- **POST** `/auth/login`
  - **Description**: Authenticates a user and returns a JWT token.
  - **Request Body**:
    ```json
    {
      "userName": "example",
      "password": "password123"
    }
    ```
  - **Response**:
    - `200`: `{ "token": "<jwt_token>" }`
    - `401`: `{ "message": "Unauthorized!" }`

---

### **4. Secure Endpoint**

- **GET** `/secure`
  - **Description**: A protected route accessible only with a valid JWT token.
  - **Request Header**:
    ```
    Authorization: Bearer <jwt_token>
    ```
  - **Response**:
    - `200`: `{ "secureMessage": "Leader in Cyber Security Solutions" }`
    - `401`: `{ "message": "Unauthorized!" }`

---

### **5. Teams**

- **GET** `/teams`
  - **Description**: Returns hardcoded data for various teams.
  - **Response**: Array of team objects including flags, country names, and FIFA codes.

---

## **Error Handling**

- The app includes centralized error handling. Any uncaught exceptions or errors in the middleware will result in the following generic response:
  ```json
  {
    "message": "Something went wrong"
  }
  ```

---

## **Technologies Used**

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **Axios**: HTTP client for making API calls.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **dotenv**: Environment variable management.
- **body-parser**: Parsing JSON request bodies.
- **cors**: Cross-Origin Resource Sharing middleware.


