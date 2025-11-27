# **Budget Management API - A Comprehensive, Microservices-Based API for Managing Budgets, Expenses, Users, and More! 💰**

**Welcome to the Budget Management API**, a robust backend platform for managing budgets, expenses, users, orders, and notifications. Built with **Node.js** and **Express**, it supports **WebSockets** and **REST APIs**. The API integrates with **PostgreSQL**, **MongoDB**, **Redis**, and **Elasticsearch**, and is containerized with **Docker**. It includes interactive **Swagger/OpenAPI** documentation for exploring and testing endpoints.

<p align="center">
  <a href="https://budget-manage-app.vercel.app" target="_blank">
    <img src="images/logo.png" alt="Budget Management API Logo" style="border-radius: 8px;" width="35%">
  </a>
</p>

Below is a _very_ _comprehensive_ guide to setting up, running, and utilizing this API. 💸🚀

## **Table of Contents**

1. [Overview](#overview)
2. [Live Deployment](#live-deployment)
3. [Technologies Used](#technologies-used)
   - [Microservices Architecture](#microservices-architecture)
   - [Microservices Diagram](#microservices-diagram)
   - [Full Architecture Diagram](#full-architecture-diagram)
4. [Project Structure](#project-structure)
5. [Setup Instructions](#setup-instructions)
6. [Available Endpoints](#available-endpoints)
7. [Schemas](#schemas)
8. [Features and Integrations](#features-and-integrations)
9. [Environment Variables](#environment-variables)
10. [Demo Frontend UI](#demo-frontend-ui)
11. [Swagger Documentation](#swagger-documentation)
12. [Dockerization](#dockerization)
13. [Testing](#testing)
14. [Contributing](#contributing)
15. [Author](#author)

## **Overview**

The Budget Management API is designed to handle complex budget management requirements, including:

- Budget and expense tracking.
- User management and authentication.
- Real-time notifications via WebSockets.
- Task management with direct MongoDB operations.
- Advanced search capabilities with Elasticsearch.
- Compatibility with modern cloud environments using Docker.
- REST API for flexible data access.
- ...and so much more!

The purpose of this API is to demonstrate the capabilities of modern backend technologies and provide a foundation for building scalable, real-time applications. It can be used as a reference for developers looking to implement similar features in their projects. Simply clone the repository, set up the environment, and start building the frontend or additional functionality on top of the existing API! 

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white)
![REST](https://img.shields.io/badge/REST%20API-FF6F00?style=for-the-badge&logo=apachespark&logoColor=white)
![WebSockets](https://img.shields.io/badge/WebSockets-006699?style=for-the-badge&logo=websocket&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![OpenAPI](https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PM2](https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=pm2&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white)
![Microservices](https://img.shields.io/badge/Microservices-00BFFF?style=for-the-badge&logo=farcaster&logoColor=white)

## **Live Deployment**

The Budget Management API is deployed live at **[https://budget-management-backend-api.onrender.com](https://budget-management-backend-api.onrender.com).**

Additionally, a mock frontend UI is also available, hosted at **[https://budget-manage-app.vercel.app](https://budget-manage-app.vercel.app).**

You can access the API and test the endpoints directly from the browser. Feel free to use the API for your own projects or applications. Simply add some attribution to the original repository and the creator. Also, be sure that you use your own credentials and tokens, otherwise your data may clash with mine and other users' data!

> [!IMPORTANT]
> Be mindful of the rate limits and usage policies when testing the live API. Additionally, because the API is hosted on the free plan of Render, it may take a while (1-2 minutes) to wake up if it has been inactive for some time. Kindly be patient during this process!

> [!NOTE]
> Backup Frontend: https://budget-management-system.netlify.app.

### Deployment and Technology Status

[![API Status](https://img.shields.io/website?label=API%20Status&url=https%3A%2F%2Fbudget-management-backend-api.onrender.com)](https://budget-management-backend-api.onrender.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Connected-brightgreen?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-Connected-red?logo=redis&logoColor=white)](https://redis.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Connected-blue?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Elasticsearch](https://img.shields.io/badge/Elasticsearch-Connected-yellow?logo=elasticsearch&logoColor=white)](https://www.elastic.co/elasticsearch/)
[![Swagger Docs](https://img.shields.io/badge/Swagger%20Docs-Available-brightgreen?logo=swagger&logoColor=white)](https://budget-management-backend-api.onrender.com/docs)
[![Docker](https://img.shields.io/badge/Docker-Configured-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![WebSockets](https://img.shields.io/badge/WebSockets-Connected-brightgreen?logo=websocket&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-Active-green?logo=openapiinitiative&logoColor=white)](https://www.openapis.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-green?logo=vercel&logoColor=white)](https://budget-manage-app.vercel.app)
[![Render](https://img.shields.io/badge/Render-Deployed-green?logo=render&logoColor=white)](https://budget-management-backend-api.onrender.com)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-green?logo=netlify&logoColor=white)](https://budget-management-system.netlify.app)

## **Technologies Used**

| **Technology**      | **Purpose**                                               |
|---------------------|-----------------------------------------------------------|
| **Node.js**         | Core application framework.                               |
| **Express.js**      | Web application framework for building APIs.              |
| **MongoDB**         | Primary NoSQL database for managing budgets and expenses. |
| **PostgreSQL**      | Relational database for transaction logs.                 |
| **Redis**           | In-memory database for caching.                           |
| **Elasticsearch**   | Advanced search engine for querying data.                 |
| **WebSocket**       | Real-time communication for notifications.                |
| **Swagger/OpenAPI** | API documentation and testing.                            |
| **Docker**          | Containerization for easy deployment.                     |

### Microservices Architecture

The Budget Management API is designed with a microservices architecture, allowing for modular development and deployment. Each service can be developed, deployed, and scaled independently, providing flexibility and resilience.

1. **Authentication/User Service**: Handles user registration, login, and JWT token management (+ profile management as well).
2. **Budget Service**: Manages budgets, including creation, updates, and retrieval.
3. **Expense Service**: Manages expenses associated with budgets, including CRUD operations.
4. **Customer Service**: Manages customer data, including creation and updates.
5. **Search Service**: Provides advanced search capabilities using Elasticsearch.
6. **Order Service**: Manages orders, including creation and updates.
7. **Transaction Service**: Logs transactions for budgets and expenses.
8. **Notification Service**: Sends real-time notifications to users via WebSockets.
9. **Task Management Service**: Handles task management with direct MongoDB operations.

This architecture allows for easy integration of additional services, such as order management, task management, and notification services, without affecting the core functionality of the API.

#### Communication Between Services

Each service communicates with others using REST APIs for standard HTTP communication and WebSockets for real-time notifications. This ensures that services can operate independently while still being able to interact with each other as needed.

Also, the API is designed to be modular, allowing for easy addition of new services or features without disrupting existing functionality. This modularity is achieved through the use of separate directories for each service, with shared utilities and configurations in a common structure.

> [!TIP]
> Each service does not live in its own directory, but rather is organized within the main project structure. This allows for easier management and deployment of the entire application as a single unit, while still maintaining the modularity of the microservices architecture.

### Microservices Diagram

<p align="center">
  <a href="https://www.mermaidchart.com/app/projects/ab86aba4-5205-4ad5-bdfc-85dfba04f62f/diagrams/0ecda876-0581-4897-bac3-b6800daa2a14/version/v0.1/edit" target="_blank">
   <img src="images/microservices-diagram.png" alt="Microservices Architecture Diagram" style="border-radius: 8px;" width="100%">
  </a>
</p>

> [!NOTE]
> This diagram illustrates the microservices architecture of the Budget Management API, showing how different services interact with each other and external clients. Each service can be independently developed and deployed, allowing for scalability and maintainability.

### Full Architecture Diagram

<p align="center">
  <a href="https://www.mermaidchart.com/app/projects/ab86aba4-5205-4ad5-bdfc-85dfba04f62f/diagrams/b164e25e-68b3-417e-8753-5b718e23d996/version/v0.1/edit" target="_blank">
   <img src="images/architecture-diagram.png" alt="Architecture Diagram" style="border-radius: 8px;" width="100%">
  </a>
</p>

> [!NOTE]
> This architecture diagram illustrates the modular nature of the Budget Management API, showcasing how different services interact with each other and external clients. It also highlights the use of Docker for deployment and scaling.

## **Project Structure**

```plaintext
Budget-Management-Backend-API/
├── .env                           # Environment variables configuration
├── .env.example                   # Example environment configuration file
├── .gitignore                     # Git ignore file
├── .prettierrc                    # Prettier configuration for code formatting
├── LICENSE                        # License information
├── README.md                      # Documentation for the project
├── __tests__/app.test.js          # Main test file for application
├── docker-compose.yml             # Docker Compose configuration
├── Dockerfile                     # Dockerfile for containerizing the application
├── index.js                       # Main entry point for the application
├── nodemon.json                   # Nodemon configuration file
├── openapi.yaml                   # OpenAPI specification for the API
├── package.json                   # NPM package configuration file
├── start.sh                       # Script to start the application
├── redis-mongo-flow/              # Directory for Redis-Mongo integration flow
│   ├── app.js                     # Express app for Redis-Mongo flow
│   ├── config.js                  # Configuration for Redis-Mongo flow
│   ├── package.json               # NPM configuration for this module
│   ├── README.md                  # Documentation specific to Redis-Mongo flow
│   ├── seed.js                    # Data seeder for Redis-Mongo flow
│   ├── test.js                    # Test file for Redis-Mongo flow
├── round-robin/                   # Directory for round-robin load balancer
│   ├── config.js                  # Configuration for round-robin implementation
│   ├── index.js                   # Main entry point for round-robin logic
│   ├── README.md                  # Documentation for round-robin functionality
├── docs/                          # Documentation directory
│   ├── swaggerConfig.js           # Swagger configuration for API docs
├── services/                      # Services and utilities
│   ├── dataSeeder.js              # Seeder for MongoDB
│   ├── elasticService.js          # Elasticsearch client and utility functions
│   ├── jwtService.js              # JSON Web Token (JWT) utilities
│   ├── postgresService.js         # PostgreSQL client and utilities
│   ├── redisService.js            # Redis client and utilities
│   ├── websocketService.js        # WebSocket server and utilities
├── controllers/                   # Route controllers for the API
│   ├── authController.js          # Authentication-related endpoints
│   ├── budgetController.js        # Budget management endpoints
│   ├── customerController.js      # Customer management endpoints
│   ├── expenseController.js       # Expense management endpoints
│   ├── notificationController.js  # Notification management endpoints
│   ├── orderController.js         # Order management endpoints
│   ├── searchController.js        # Search-related endpoints
│   ├── taskController.js          # Task management endpoints
│   ├── transactionController.js   # Transaction log endpoints
│   ├── userController.js          # User profile management endpoints
├── middleware/                    # Middleware utilities
│   ├── authMiddleware.js          # JWT authentication middleware
├── models/                        # Mongoose schemas
│   ├── budget.js                  # Schema for budgets
│   ├── customer.js                # Schema for customers
│   ├── expense.js                 # Schema for expenses
│   ├── order.js                   # Schema for orders
│   ├── task.js                    # Schema for tasks
│   ├── user.js                    # Schema for users
├── routes/                        # Express router files
│   ├── authRoutes.js              # Routes for authentication
│   ├── budgetRoutes.js            # Routes for budgets
│   ├── customerRoutes.js          # Routes for customers
│   ├── expenseRoutes.js           # Routes for expenses
│   ├── index.js                   # Main router entry point
│   ├── notificationRoutes.js      # Routes for notifications
│   ├── orderRoutes.js             # Routes for orders
│   ├── searchRoutes.js            # Routes for Elasticsearch
│   ├── taskRoutes.js              # Routes for tasks
│   ├── transactionRoutes.js       # Routes for transactions
│   ├── userRoutes.js              # Routes for user profiles
├── views/                         # Static assets and templates
│   ├── android-chrome-192x192.png # Android Chrome app icon
│   ├── android-chrome-512x512.png # Android Chrome high-res icon
│   ├── apple-touch-icon.png       # Apple Touch icon
│   ├── favicon.ico                # Favicon
│   ├── favicon-16x16.png          # 16x16 favicon
│   ├── favicon-32x32.png          # 32x32 favicon
│   ├── home.html                  # HTML template for homepage
│   ├── manifest.json              # Web app manifest
├── and many more files...         # Additional files and directories
```

## **Setup Instructions**

### Prerequisites

- Node.js (>= 16)
- Docker and Docker Compose (if using containerized setup)
- MongoDB, PostgreSQL, Redis, and Elasticsearch services.

### Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hoangsonww/Budget-Management-Backend-API.git
   cd Budget-Management-Backend-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
  - Create a `.env` file in the root directory:
    ```env
    MONGO_DB_URI=mongodb://localhost:27017/budget_manager
    POSTGRES_URL=postgresql://user:password@localhost:5432/budget_manager
    REDIS_URL=redis://localhost:6379
    ELASTIC_SEARCH_URL=http://localhost:9200
    JWT_SECRET=your_secret_key
    ```
  - Replace placeholders with your actual configuration.

4. Start the application:
   ```bash
   npm start
   ```

5. Access the application:
  - API: `http://localhost:3000`
  - Swagger: `http://localhost:3000/docs`

## **Available Endpoints**

| **Endpoint**               | **Method** | **Description**                          |
|----------------------------|------------|------------------------------------------|
| `/api/auth/register`       | POST       | Register a new user.                     |
| `/api/auth/login`          | POST       | Login and receive a JWT token.           |
| `/api/auth/logout`         | POST       | Logout and invalidate the token.         |
| `/api/auth/verify-email`   | POST       | Verify the user's email address.         |
| `/api/auth/reset-password` | POST       | Reset the user's password.               |
| `/api/users/profile`       | GET        | Get the authenticated user's profile.    |
| `/api/budgets`             | GET        | Get all budgets.                         |
| `/api/budgets`             | POST       | Create a new budget.                     |
| `/api/budgets/:id`         | GET        | Get a specific budget.                   |
| `/api/budgets/:id`         | PUT        | Update a budget.                         |
| `/api/budgets/:id`         | DELETE     | Delete a budget.                         |
| `/api/customers`           | GET        | Get all customers.                       |
| `/api/customers`           | POST       | Create a new customer.                   |
| `/api/customers/:id`       | GET        | Get a specific customer.                 |
| `/api/customers/:id`       | PUT        | Update a customer.                       |
| `/api/customers/:id`       | DELETE     | Delete a customer.                       |
| `/api/expenses`            | GET        | Get all expenses.                        |
| `/api/expenses`            | POST       | Add a new expense.                       |
| `/api/expenses/:budgetId`  | GET        | Get all expenses for a budget.           |
| `/api/expenses/:id`        | PUT        | Update an expense.                       |
| `/api/expenses/:id`        | DELETE     | Delete an expense.                       |
| `/api/orders`              | GET        | Get all orders.                          |
| `/api/orders`              | POST       | Create a new order.                      |
| `/api/orders/:id`          | GET        | Get a specific order.                    |
| `/api/orders/:id`          | PUT        | Update an order.                         |
| `/api/orders/:id`          | DELETE     | Delete an order.                         |
| `/api/transactions`        | GET        | Get all transactions.                    |
| `/api/transactions`        | POST       | Add a new transaction.                   |
| `/api/transactions/:id`    | GET        | Get a specific transaction.              |
| `/api/transactions/:id`    | PUT        | Update a transaction.                    |
| `/api/transactions/:id`    | DELETE     | Delete a transaction.                    |
| `/api/tasks`               | GET        | Get all tasks.                           |
| `/api/tasks`               | POST       | Add a new task.                          |
| `/api/tasks/:id`           | GET        | Get a specific task.                     |
| `/api/tasks/:id`           | PUT        | Update a task.                           |
| `/api/tasks/:id`           | DELETE     | Delete a task.                           |
| `/api/notifications`       | POST       | Send a real-time notification.           |
| `/api/search`              | POST       | Search for expenses using Elasticsearch. |

Additionally, the root `/` endpoint provides a welcome message and information about the API.

<p align="center">
  <img src="images/home.png" alt="Available Endpoints" style="border-radius: 8px;">
</p>

More endpoints and features are available in the API. Refer to the [Swagger documentation](https://budget-management-backend-api.onrender.com/docs) for detailed information.

## **Schemas**

### **User**
| **Field**   | **Type** | **Description**             |
|-------------|----------|-----------------------------|
| `username`  | String   | Unique username.            |
| `email`     | String   | Unique email address.       |
| `password`  | String   | Hashed password.            |
| `createdAt` | Date     | User creation date.         |

### **Budget**
| **Field**   | **Type** | **Description**             |
|-------------|----------|-----------------------------|
| `name`      | String   | Budget name.                |
| `limit`     | Number   | Budget limit.               |
| `createdAt` | Date     | Budget creation date.       |

### **Expense**
| **Field**     | **Type** | **Description**              |
|---------------|----------|------------------------------|
| `budgetId`    | String   | ID of the associated budget. |
| `description` | String   | Expense description.         |
| `amount`      | Number   | Expense amount.              |
| `createdAt`   | Date     | Expense creation date.       |

### **Order**
| **Field**    | **Type** | **Description**                |
|--------------|----------|--------------------------------|
| `customerId` | String   | ID of the associated customer. |
| `amount`     | Number   | Order amount.                  |
| `status`     | String   | Order status.                  |
| `createdAt`  | Date     | Order creation date.           |

### **Customer**
| **Field**   | **Type** | **Description**              |
|-------------|----------|------------------------------|
| `name`      | String   | Customer name.               |
| `email`     | String   | Customer email address.      |
| `phone`     | String   | Customer phone number.       |

### **Task**

| **Field**     | **Type** | **Description**              |
|---------------|----------|------------------------------|
| `description` | String   | Task description.            |
| `status`      | String   | Task status.                 |
| `createdAt`   | Date     | Task creation date.          |

## **Features and Integrations**

### **WebSocket**
- Real-time notifications for clients.
- Notifications can be sent using the `/api/notifications` endpoint.

### **Docker**
- Build and run the app with Docker:
  ```bash
  docker-compose up --build
  ```

### **Elasticsearch**
- Advanced search for expenses.
- Search endpoint: `/api/search/expenses`.

### **Redis**
- In-memory caching for improved performance.
- Redis URL: `redis://localhost:6379`.
- Caching is used for user sessions and other data.

### **PostgreSQL**
- Relational database for transaction logs.
- PostgreSQL URL: `postgresql://user:password@localhost:5432/budget_manager`.
- Used for storing transaction logs and other relational data.

### **MongoDB**
- Primary NoSQL database for managing budgets and expenses.
- MongoDB URL: `mongodb://localhost:27017/budget_manager`.
- Used for storing budgets, expenses, and user data.

## **Services Interaction**

The Budget Management API interacts with various services and databases to provide a comprehensive backend solution. The architecture includes a frontend UI, an API gateway, and multiple external services. Here is a high-level overview of the service interaction:

```plaintext
          +--------------------+
          |    Frontend UI     |
          +--------------------+
                    |
                    | HTTP Requests
                    |
          +--------------------+
          |   API Gateway /    |
          |    Express.js      |
          +--------------------+
                    |
                    | RESTful API / WebSocket Responses
                    |
          +--------------------+
          |  Application Core  |
          |--------------------|
          |  Controllers /     |
          |  Services          |
          +--------------------+
            |        |         |
     +------+        |         +-------------+
     |               |                       |
+----------+   +-----------+           +----------------+
| MongoDB  |   | PostgreSQL |          | Elasticsearch  |
| NoSQL DB |   | Relational |          | Search Engine  |
+----------+   +-----------+           +----------------+
     |               |                       |
     |               |                       |
+----------+                                 |
|   Redis  |                                 |
|   Cache  |                                 |
+----------+                                 |
     |                                       |
     +---------------------------------------+
                    |
          +----------------------+
          |   External Services  |
          |  (Email, SMS, etc.)  |
          +----------------------+
```

## **Environment Variables**

Ensure your `.env` file looks like this before getting started:

```env
# Server Configuration
PORT=

# MongoDB Configuration
MONGO_DB_URI=
MONGO_DB_USERNAME=
MONGO_DB_PASSWORD=

# Redis Configuration
REDIS_HOST=
REDIS_PORT=
REDIS_URL=

# JWT Secret Key
JWT_SECRET=

# Elasticsearch Configuration
ELASTIC_SEARCH_URL=

# PostgreSQL Configuration
POSTGRES_URL=
```

## **Demo Frontend UI**

The Budget Management API includes a demo frontend UI for interacting with the backend.

It gives developers an idea of how the API can be used in a real-world application. The frontend UI is built using React, Redux, and Material-UI components.

To run the frontend UI, follow these steps:

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
   
2. Install dependencies: (use `npm install --legacy-peer-deps` if you encounter peer dependency issues)
   ```bash
    npm install
    ```
   
3. Start the development server:
   ```bash
   npm start
   ```
   
4. Access the frontend UI at `http://localhost:3001` (or whichever port is specified in the console).

Alternatively, it is also deployed live at [https://budget-manage-app.vercel.app](https://budget-manage-app.vercel.app). Feel free to use the live version for testing and exploration.

For more information, refer to the [Frontend README](frontend/README.md) in the `frontend` directory to learn about the frontend UI components, features, and usage.

### **UI Images**

Here are some screenshots of the frontend UI:

**Home:**

<p align="center">
  <img src="images/home-ui.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Dashboard:**

<p align="center">
  <img src="images/dashboard.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Budgets:**

<p align="center">
  <img src="images/budgets.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Expenses:**

<p align="center">
  <img src="images/expenses.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Profile:**

<p align="center">
  <img src="images/profile.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Login:**

<p align="center">
  <img src="images/login.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Register:**

<p align="center">
  <img src="images/register.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Forgot Password:**

<p align="center">
  <img src="images/forgot-password.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

**Users:**

<p align="center">
  <img src="images/users.png" alt="Frontend UI" style="border-radius: 8px;">
</p>

## **Swagger Documentation**

- Comprehensive API documentation is available at `/docs`.
- Includes all endpoints, schemas, and examples.
- Use Swagger UI to test and interact with the API.
- The Swagger UI looks like this:

<p align="center">
  <img src="images/swagger.png" alt="Swagger UI" style="border-radius: 8px;">
</p>

## **Dockerization**

The Budget Management API can be run in a Docker container for easy deployment and scaling.

You can build and run the app using Docker Compose:

```bash
docker-compose up --build
```

## **Testing**

The Budget Management API includes unit tests for all endpoints and services.

To run the tests, use the following command:

```bash
npm test
```

The test results will be displayed in the console.

**Watch Mode:** To run tests in watch mode, which automatically re-runs tests on file changes, use:

```bash
npm test:watch
```

**Coverage Report:** To generate a code coverage report, use:

```bash
npm test:coverage
```

**Mocha and Chai tests:** In addition to the Jest tests, the project also includes Mocha and Chai tests for the application. These tests can be run using:

```bash
npm run test:mocha
```

## **Contributing**

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request. We will review your changes and merge them if they look good.

## **Author**

This project is built with ❤️ by:

- **Son Nguyen** - [hoangsonww](https://github.com/hoangsonww)

For more information about me, you can visit my personal website or connect with me on LinkedIn:

- **Website:** [https://sonnguyenhoang.com](https://sonnguyenhoang.com)
- **Email:** [hoangson091104@gmail.com](mailto:hoangson091104@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/hoangsonw](https://www.linkedin.com/in/hoangsonw)
- **GitHub:** [@hoangsonww](https://github.com/hoangsonww)

Feel free to reach out if you have any questions or feedback! 🚀

---

Thank you for using the **Budget Management API**. For questions, feedback, or support, please open an issue or [contact me directly](mailto:hoangson091104@gmail.com).

Created with ❤️ by [Son Nguyen](https://sonnguyenhoang.com) in 2024. All rights reserved.

---

[⬆️ Back to Top](#budget-management-api---a-comprehensive-microservices-based-api-for-managing-budgets-expenses-users-and-more-)
