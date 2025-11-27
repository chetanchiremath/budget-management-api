# 📚 Complete Learning Guide - Budget Management API

## 🎯 Overview

This guide will teach you **every technology** used in this project, with practical examples from the codebase and step-by-step testing instructions.

---

## 📋 Table of Contents

1. [PostgreSQL](#1-postgresql-relational-database)
2. [Swagger/OpenAPI](#2-swaggeropenapi-api-documentation)
3. [Docker](#3-docker-containerization)
4. [WebSockets](#4-websockets-real-time-communication)
5. [Redis](#5-redis-caching)
6. [Elasticsearch](#6-elasticsearch-search-engine)
7. [Testing Guide](#7-testing-guide)

---

## 1. PostgreSQL (Relational Database)

### **What is PostgreSQL?**
PostgreSQL is a **relational database** (like MySQL) that stores data in **tables with rows and columns**. Unlike MongoDB (NoSQL), it uses **SQL queries** and enforces relationships between data.

### **Why Use It Here?**
- Stores **transaction logs** (structured, relational data)
- Better for **analytics and reporting**
- **ACID compliance** (data integrity)

### **How It's Used in This Project**

**Location:** `services/postgresService.js` and `controllers/transactionController.js`

**Connection Setup:**
```javascript
// services/postgresService.js
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: config.postgresUrl
});
```

**Example Usage (Creating a Transaction):**
```javascript
// controllers/transactionController.js
const query = `
  INSERT INTO transaction_logs (user_id, description, amount, budget_id)
  VALUES ($1, $2, $3, $4) RETURNING *;
`;
const values = [userId, description, amount, budgetId];
const result = await pool.query(query, values);
```

**Key Concepts:**
- **Pool**: Connection pool (reuses connections)
- **$1, $2, $3**: Parameterized queries (prevents SQL injection)
- **RETURNING ***: Returns the inserted row

### **Learning Resources**
1. **PostgreSQL Tutorial**: https://www.postgresqltutorial.com/
2. **Node.js + PostgreSQL**: https://node-postgres.com/
3. **SQL Basics**: Learn SELECT, INSERT, UPDATE, DELETE

### **How to Test PostgreSQL**

#### **Using Swagger UI:**
1. Go to http://localhost:3000/docs
2. Find `/api/transactions` endpoint
3. Click "Try it out"
4. Enter this data:
   ```json
   {
     "userId": "user123",
     "description": "Test transaction",
     "amount": 100.50,
     "budgetId": "budget123"
   }
   ```
5. Click "Execute"
6. You'll see the transaction created!

#### **Using Postman:**
1. **Create Transaction:**
   - Method: `POST`
   - URL: `http://localhost:3000/api/transactions`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "userId": "user123",
       "description": "Test transaction",
       "amount": 100.50,
       "budgetId": "budget123"
     }
     ```

2. **Get All Transactions:**
   - Method: `GET`
   - URL: `http://localhost:3000/api/transactions`

3. **Get User Transactions:**
   - Method: `GET`
   - URL: `http://localhost:3000/api/transactions/user/user123`

#### **Direct Database Query (Optional):**
```bash
# Connect to PostgreSQL in Docker
docker exec -it postgres psql -U postgres -d budget_manager

# View all transactions
SELECT * FROM transaction_logs;

# Count transactions
SELECT COUNT(*) FROM transaction_logs;

# Exit
\q
```

---

## 2. Swagger/OpenAPI (API Documentation)

### **What is Swagger?**
Swagger is an **interactive API documentation** tool. It automatically generates a web UI where you can:
- See all API endpoints
- Test endpoints directly in the browser
- See request/response examples
- Understand data models

### **Why Use It Here?**
- **Auto-documentation** from code comments
- **Interactive testing** (no Postman needed)
- **Team collaboration** (everyone sees the same API)

### **How It's Used in This Project**

**Location:** `docs/swaggerConfig.js` and controller files

**Setup:**
```javascript
// index.js
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swaggerConfig');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
```

**Documentation in Code:**
```javascript
/**
 * @swagger
 * /api/budgets:
 *   post:
 *     summary: Create a new budget
 *     tags: [Budgets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 */
```

### **Learning Resources**
1. **Swagger/OpenAPI Guide**: https://swagger.io/docs/
2. **JSDoc for Swagger**: https://github.com/Surnet/swagger-jsdoc
3. **OpenAPI Specification**: https://swagger.io/specification/

### **How to Test with Swagger**

1. **Open Swagger UI:**
   - Go to: http://localhost:3000/docs
   - You'll see all API endpoints organized by tags

2. **Test an Endpoint:**
   - Find `/api/auth/register`
   - Click "Try it out"
   - Fill in the request body:
     ```json
     {
       "username": "testuser",
       "email": "test@example.com",
       "password": "test123"
     }
   - Click "Execute"
   - See the response below

3. **Authenticate (Get JWT Token):**
   - Use `/api/auth/login` with the credentials you just created
   - Copy the `token` from response
   - Click "Authorize" button (top right)
   - Paste token: `Bearer YOUR_TOKEN_HERE`
   - Now all protected endpoints will work!

4. **Test Protected Endpoints:**
   - After authorization, try `/api/budgets` (GET or POST)
   - No need to manually add headers - Swagger does it!

### **Swagger Features to Explore:**
- **Schemas**: See data models
- **Try it out**: Test endpoints
- **Authorize**: Add JWT token
- **Responses**: See example responses

---

## 3. Docker (Containerization)

### **What is Docker?**
Docker **packages your application and all dependencies** into a "container" that runs the same way everywhere. Think of it as a **virtual machine** but lighter.

### **Why Use It Here?**
- **Easy setup**: No need to install MongoDB, Redis, PostgreSQL, Elasticsearch manually
- **Consistent environment**: Works the same on any machine
- **Isolation**: Each service runs in its own container

### **How It's Used in This Project**

**Files:**
- `Dockerfile` - Builds your Node.js app
- `docker-compose.yml` - Orchestrates all services

**Dockerfile (Builds Your App):**
```dockerfile
FROM node:18              # Base image
WORKDIR /usr/src/app      # Working directory
COPY package*.json ./      # Copy dependencies file
RUN npm install           # Install dependencies
COPY . .                  # Copy your code
EXPOSE 3000              # Expose port
CMD ["node", "index.js"]  # Run command
```

**docker-compose.yml (Orchestrates Services):**
```yaml
services:
  app:          # Your Node.js API
  mongo:        # MongoDB database
  redis:        # Redis cache
  postgres:     # PostgreSQL database
  elasticsearch: # Elasticsearch search
```

### **Learning Resources**
1. **Docker Tutorial**: https://docs.docker.com/get-started/
2. **Docker Compose**: https://docs.docker.com/compose/
3. **Node.js + Docker**: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

### **How to Test Docker**

#### **Basic Commands:**
```bash
# Start all services
docker-compose up -d

# View running containers
docker-compose ps

# View logs
docker-compose logs app
docker-compose logs -f app  # Follow logs

# Stop all services
docker-compose down

# Rebuild after code changes
docker-compose up --build
```

#### **Verify Services:**
```bash
# Check if containers are running
docker ps

# Check MongoDB
docker exec -it mongo mongosh

# Check Redis
docker exec -it redis redis-cli ping

# Check PostgreSQL
docker exec -it postgres psql -U postgres -d budget_manager

# Check Elasticsearch
curl http://localhost:9200
```

#### **Common Docker Workflow:**
1. **Make code changes**
2. **Rebuild**: `docker-compose build app`
3. **Restart**: `docker-compose restart app`
4. **Check logs**: `docker-compose logs -f app`

---

## 4. WebSockets (Real-Time Communication)

### **What are WebSockets?**
WebSockets provide **persistent, two-way communication** between client and server. Unlike HTTP (request-response), WebSockets keep a connection open for **real-time updates**.

### **Why Use It Here?**
- **Real-time notifications**: Instantly notify users (e.g., "Budget exceeded!")
- **Live updates**: No need to refresh the page
- **Better UX**: Instant feedback

### **How It's Used in This Project**

**Location:** `services/websocketService.js` and `controllers/notificationController.js`

**Setup:**
```javascript
// services/websocketService.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');
});
```

**Sending Notifications:**
```javascript
// controllers/notificationController.js
const { broadcastNotification } = require('../services/websocketService');

broadcastNotification({ message: "Budget exceeded!" });
```

**How It Works:**
1. Client connects to WebSocket server
2. Server keeps connection open
3. When notification is sent, all connected clients receive it instantly

### **Learning Resources**
1. **WebSocket Guide**: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
2. **ws Library**: https://github.com/websockets/ws
3. **Real-time Apps**: https://ably.com/topic/websockets

### **How to Test WebSockets**

#### **Method 1: Using Browser Console**

1. **Open Browser Console** (F12)
2. **Connect to WebSocket:**
   ```javascript
   const ws = new WebSocket('ws://localhost:3000');
   
   ws.onopen = () => {
     console.log('Connected!');
   };
   
   ws.onmessage = (event) => {
     console.log('Received:', JSON.parse(event.data));
   };
   ```

3. **Send Notification via API:**
   - Use Swagger: http://localhost:3000/docs
   - Go to `/api/notifications/send`
   - Send: `{ "message": "Test notification!" }`

4. **See Message in Console!** You'll see the notification appear instantly.

#### **Method 2: Using Postman**

1. **Create WebSocket Request:**
   - New Request → WebSocket
   - URL: `ws://localhost:3000`
   - Click "Connect"

2. **Send Notification via REST API:**
   - POST to `http://localhost:3000/api/notifications/send`
   - Body: `{ "message": "Hello from Postman!" }`

3. **See Message in WebSocket Tab!**

#### **Method 3: Using Online Tool**
- Go to: https://www.websocket.org/echo.html
- Connect to: `ws://localhost:3000`
- Send notification via API
- See it appear in the tool!

#### **Test Flow:**
```bash
# Terminal 1: Start server (if not running)
docker-compose up

# Terminal 2: Connect WebSocket
# (Use browser console or Postman)

# Terminal 3: Send notification
curl -X POST http://localhost:3000/api/notifications/send \
  -H "Content-Type: application/json" \
  -d '{"message": "Test notification!"}'

# See it appear in WebSocket client!
```

---

## 5. Redis (Caching)

### **What is Redis?**
Redis is an **in-memory data store** (like a super-fast database). It stores data in **RAM**, making it **extremely fast** for caching.

### **Why Use It Here?**
- **Speed**: Much faster than database queries
- **Caching**: Store frequently accessed data
- **Task status**: Quick lookups for task status

### **How It's Used in This Project**

**Location:** `services/redisService.js` and `controllers/taskController.js`

**Connection:**
```javascript
// services/redisService.js
const redis = require('redis');
const redisClient = redis.createClient({ url: config.redisUrl });
await redisClient.connect();
```

**Caching Task Status:**
```javascript
// controllers/taskController.js
// Store in Redis
await redisClient.set(`task:${taskId}:status`, 'completed');

// Retrieve from Redis
const status = await redisClient.get(`task:${taskId}:status`);
```

**Caching Budgets:**
```javascript
// controllers/budgetController.js
// Check cache first
const cached = await redisClient.get(`budget:${id}`);
if (cached) {
  return JSON.parse(cached); // Return cached data
}

// If not in cache, get from database
const budget = await Budget.findById(id);

// Store in cache for next time
await redisClient.set(`budget:${id}`, JSON.stringify(budget));
```

### **Learning Resources**
1. **Redis Tutorial**: https://redis.io/docs/getting-started/
2. **Node.js Redis**: https://github.com/redis/node-redis
3. **Redis Commands**: https://redis.io/commands/

### **How to Test Redis**

#### **Method 1: Direct Redis CLI**

```bash
# Connect to Redis
docker exec -it redis redis-cli

# Test commands
PING                    # Should return PONG
SET mykey "Hello"      # Set a value
GET mykey              # Get the value
KEYS *                 # List all keys
DEL mykey              # Delete a key

# Exit
exit
```

#### **Method 2: Test via API (Tasks)**

1. **Create a Task:**
   - Swagger: `/api/tasks` (POST)
   - Body: `{ "description": "Test task" }`
   - Note the `taskId` from response

2. **Check Task Status:**
   - Swagger: `/api/tasks/{id}` (GET)
   - Use the taskId from step 1
   - This reads from Redis!

3. **Verify in Redis:**
   ```bash
   docker exec -it redis redis-cli
   KEYS task:*         # See all task keys
   GET task:YOUR_ID:status  # Get specific task status
   ```

#### **Method 3: Test Budget Caching**

1. **Get a Budget:**
   - Swagger: `/api/budgets/{id}` (GET)
   - First call: Hits database (slower)
   - Second call: Hits Redis cache (faster!)

2. **Check Redis:**
   ```bash
   docker exec -it redis redis-cli
   KEYS budget:*       # See cached budgets
   GET budget:YOUR_ID  # Get cached budget
   ```

#### **Redis Key Patterns in This Project:**
- `task:{id}:status` - Task status
- `budget:{id}` - Cached budget
- `expense:{id}` - Cached expense

---

## 6. Elasticsearch (Search Engine)

### **What is Elasticsearch?**
Elasticsearch is a **powerful search engine** that can search through millions of documents **very quickly**. It's like Google for your database.

### **Why Use It Here?**
- **Fast search**: Search expenses by description
- **Full-text search**: Find "flight" even if description says "Flight tickets"
- **Scalable**: Handles large amounts of data

### **How It's Used in This Project**

**Location:** `services/elasticService.js` and `controllers/searchController.js`

**Setup:**
```javascript
// services/elasticService.js
const { Client } = require('elasticsearch');
const esClient = new Client({ host: config.elasticSearchUrl });

// Create index (like a table)
await esClient.indices.create({
  index: 'expenses',
  body: {
    mappings: {
      properties: {
        description: { type: 'text' },
        amount: { type: 'float' }
      }
    }
  }
});
```

**Searching:**
```javascript
// controllers/searchController.js
const result = await esClient.search({
  index: 'expenses',
  body: {
    query: {
      match: { description: "flight" }
    }
  }
});
```

### **Learning Resources**
1. **Elasticsearch Guide**: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
2. **Elasticsearch + Node.js**: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
3. **Search Concepts**: https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html

### **How to Test Elasticsearch**

#### **Method 1: Direct Elasticsearch API**

```bash
# Check cluster health
curl http://localhost:9200/_cluster/health

# List all indices
curl http://localhost:9200/_cat/indices

# Search expenses
curl -X POST http://localhost:9200/expenses/_search \
  -H "Content-Type: application/json" \
  -d '{
    "query": {
      "match": {
        "description": "flight"
      }
    }
  }'
```

#### **Method 2: Test via API (Search Endpoint)**

1. **Search Expenses:**
   - Swagger: `/api/search` (POST)
   - Body:
     ```json
     {
       "query": "flight",
       "page": 1,
       "size": 10
     }
     ```

2. **Try Different Searches:**
   - `"query": "food"` - Find food expenses
   - `"query": "hotel"` - Find hotel expenses
   - `"query": "500"` - Find expenses with amount 500

3. **View Results:**
   - See matching expenses
   - See total count
   - See pagination info

#### **Method 3: Check What's Indexed**

```bash
# See all documents in expenses index
curl http://localhost:9200/expenses/_search?pretty

# Count documents
curl http://localhost:9200/expenses/_count
```

#### **Understanding Search Results:**
```json
{
  "total": 5,           // Total matching documents
  "page": 1,            // Current page
  "size": 10,           // Results per page
  "expenses": [         // Array of matching expenses
    {
      "description": "Flight tickets",
      "amount": 500,
      "budgetId": "..."
    }
  ]
}
```

---

## 7. Testing Guide

### **Complete Testing Workflow**

#### **Step 1: Start the Server**
```bash
docker-compose up -d
```

#### **Step 2: Open Swagger UI**
- Go to: http://localhost:3000/docs
te
#### **Step 3: Register a User**
1. Find `/api/auth/register`
2. Click "Try it out"
3. Enter:
   ```json
   {
     "username": "testuser",
     "email": "test@example.com",
     "password": "test123"
   }
   ```
4. Click "Execute"
5. **Copy the token** from response

#### **Step 4: Authorize**
1. Click "Authorize" button (top right)
2. Enter: `Bearer YOUR_TOKEN_HERE`
3. Click "Authorize"
4. Click "Close"

#### **Step 5: Test Each Feature**

**Budgets (MongoDB):**
- POST `/api/budgets` - Create budget
- GET `/api/budgets` - List all budgets
- GET `/api/budgets/{id}` - Get specific budget (uses Redis cache!)

**Expenses (MongoDB):**
- POST `/api/expenses` - Create expense
- GET `/api/expenses` - List expenses

**Tasks (MongoDB + Redis):**
- POST `/api/tasks` - Create task (stores in MongoDB, caches in Redis)
- GET `/api/tasks/{id}` - Check status (reads from Redis)

**Transactions (PostgreSQL):**
- POST `/api/transactions` - Create transaction log
- GET `/api/transactions` - List all transactions
- GET `/api/transactions/user/{userId}` - Get user transactions

**Search (Elasticsearch):**
- POST `/api/search` - Search expenses
- Try: `{ "query": "flight" }`

**Notifications (WebSocket):**
- Open browser console
- Connect WebSocket: `new WebSocket('ws://localhost:3000')`
- POST `/api/notifications/send` - Send notification
- See it appear in console!

---

## 🎓 Learning Path

### **Week 1: Basics**
1. **PostgreSQL**: Learn SQL basics, understand transactions
2. **Swagger**: Explore the UI, test endpoints
3. **Docker**: Understand containers, basic commands

### **Week 2: Intermediate**
4. **Redis**: Learn caching patterns, key-value storage
5. **Elasticsearch**: Understand indexing, search queries

### **Week 3: Advanced**
6. **WebSockets**: Build real-time features
7. **Integration**: Combine all technologies

---

## 📝 Practice Exercises

### **Exercise 1: PostgreSQL**
- Create a transaction
- Query transactions by user
- Update a transaction
- Delete a transaction

### **Exercise 2: Redis**
- Cache a budget
- Check if it's cached
- Clear the cache
- Re-fetch from database

### **Exercise 3: Elasticsearch**
- Search for "food" expenses
- Search for expenses > $100
- Search by budget ID

### **Exercise 4: WebSockets**
- Connect to WebSocket
- Send a notification
- Receive it in real-time

### **Exercise 5: Full Flow**
1. Create a budget (MongoDB)
2. Create an expense (MongoDB)
3. Index expense in Elasticsearch
4. Search for the expense
5. Create transaction log (PostgreSQL)
6. Cache budget in Redis
7. Send notification (WebSocket)

---

## 🔍 Code Locations Reference

| Technology | Service File | Controller Usage |
|------------|--------------|-------------------|
| **PostgreSQL** | `services/postgresService.js` | `controllers/transactionController.js` |
| **Redis** | `services/redisService.js` | `controllers/taskController.js`, `controllers/budgetController.js` |
| **Elasticsearch** | `services/elasticService.js` | `controllers/searchController.js` |
| **WebSocket** | `services/websocketService.js` | `controllers/notificationController.js` |
| **Swagger** | `docs/swaggerConfig.js` | All controllers (via JSDoc comments) |
| **Docker** | `Dockerfile`, `docker-compose.yml` | Infrastructure |

---

## ✅ Quick Test Checklist

- [ ] PostgreSQL: Create a transaction via Swagger
- [ ] Redis: Create a task, check status (reads from Redis)
- [ ] Elasticsearch: Search for expenses
- [ ] WebSocket: Connect and receive notification
- [ ] Swagger: Test all endpoints
- [ ] Docker: View logs, restart services

---

## 🚀 Next Steps

1. **Read the code** in each service file
2. **Test each feature** using Swagger
3. **Experiment** with different queries
4. **Modify code** and see what happens
5. **Build something new** using these technologies

**Happy Learning!** 🎉

