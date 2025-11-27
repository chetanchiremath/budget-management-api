# 🚀 Getting Started Guide - Budget Management Backend API

## 📚 Table of Contents
1. [What is This Project?](#what-is-this-project)
2. [Prerequisites](#prerequisites)
3. [Project Components Overview](#project-components-overview)
4. [Setup Methods](#setup-methods)
   - [Method 1: Docker (Recommended - Easiest)](#method-1-docker-recommended---easiest)
   - [Method 2: Local Installation](#method-2-local-installation)
5. [Running the Project](#running-the-project)
6. [Testing the Project](#testing-the-project)
7. [Accessing the API](#accessing-the-api)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 What is This Project?

This is a **Budget Management Backend API** built with Node.js and Express. It allows you to:
- Manage budgets and expenses
- Handle user authentication and profiles
- Search expenses using Elasticsearch
- Send real-time notifications via WebSockets
- Store transaction logs in PostgreSQL
- Cache data using Redis

**Think of it as:** A REST API backend that powers a budget tracking application (like a personal finance app).

---

## 📋 Prerequisites

Before you start, make sure you have:

### Required:
- **Node.js** (version 16 or higher) - You have v23.11.0 ✅
- **npm** (version 8 or higher - You have 10.9.2 ✅)
- **Docker** (optional, but recommended - You have Docker ✅)
- **Docker Compose** (comes with Docker)

### Optional (for local setup without Docker):
- **MongoDB** (version 6 or higher)
- **Redis** (version 6 or higher)
- **PostgreSQL** (version 15 or higher)
- **Elasticsearch** (version 8 or higher)

---

## 🧩 Project Components Overview

### **Core Technologies Used:**

| Component | Technology | Purpose | Port |
|-----------|-----------|---------|------|
| **Backend Server** | Node.js + Express | Main API server | 3000 |
| **Database (Primary)** | MongoDB | Stores budgets, expenses, users | 27017 |
| **Database (Secondary)** | PostgreSQL | Stores transaction logs | 5432 |
| **Cache** | Redis | Fast data caching | 6379 |
| **Search Engine** | Elasticsearch | Advanced search functionality | 9200 |
| **Authentication** | JWT | Secure user authentication | - |
| **Real-time** | WebSocket | Live notifications | - |
| **Documentation** | Swagger/OpenAPI | API documentation | - |

### **What Each Component Does:**

1. **MongoDB**: Stores your main data (budgets, expenses, users, customers, orders, tasks)
2. **PostgreSQL**: Stores transaction history and logs (more structured data)
3. **Redis**: Caches frequently accessed data for faster responses
4. **Elasticsearch**: Powers the search functionality (find expenses by description, etc.)
5. **JWT**: Secures your API - users need tokens to access protected routes
6. **WebSocket**: Sends real-time notifications to connected clients
7. **Swagger**: Interactive API documentation - test endpoints from browser

---

## 🛠️ Setup Methods

You have **two ways** to run this project:

### **Method 1: Docker (Recommended - Easiest)** ✅

**Why Docker?**
- Automatically sets up all services (MongoDB, Redis, PostgreSQL, Elasticsearch)
- No need to install databases manually
- Everything runs in isolated containers
- Same environment everywhere

**Steps:**

1. **Check Docker is running:**
   ```bash
   docker --version
   docker-compose --version
   ```

2. **Start all services:**
   ```bash
   cd /Users/satwik/Documents/Chetan/Project/Budget-Management-Backend-API
   docker-compose up --build
   ```
   
   **What this does:**
   - Downloads and starts MongoDB container
   - Downloads and starts Redis container
   - Downloads and starts PostgreSQL container
   - Downloads and starts Elasticsearch container
   - Builds and starts your Node.js API server
   - All services connect automatically

3. **Wait for services to start** (first time takes 2-5 minutes to download images)

4. **You'll see output like:**
   ```
   MongoDB connected successfully.
   Server running on port 3000
   Visit http://localhost:3000/docs for API documentation
   ```

5. **Access the API:**
   - API: http://localhost:3000
   - Swagger Docs: http://localhost:3000/docs

**To stop all services:**
```bash
docker-compose down
```

**To run in background (detached mode):**
```bash
docker-compose up -d
```

---

### **Method 2: Local Installation**

**Use this if:** You want to run databases directly on your machine (without Docker)

**Steps:**

1. **Install Dependencies:**
   ```bash
   cd /Users/satwik/Documents/Chetan/Project/Budget-Management-Backend-API
   npm install
   ```

2. **Install and Start Services Locally:**

   **MongoDB:**
   ```bash
   # macOS (using Homebrew)
   brew install mongodb-community@6
   brew services start mongodb-community@6
   
   # Or download from: https://www.mongodb.com/try/download/community
   ```

   **Redis:**
   ```bash
   # macOS (using Homebrew)
   brew install redis
   brew services start redis
   
   # Or download from: https://redis.io/download
   ```

   **PostgreSQL:**
   ```bash
   # macOS (using Homebrew)
   brew install postgresql@15
   brew services start postgresql@15
   
   # Create database
   createdb budget_manager
   ```

   **Elasticsearch:**
   ```bash
   # macOS (using Homebrew)
   brew install elasticsearch
   brew services start elasticsearch
   
   # Or download from: https://www.elastic.co/downloads/elasticsearch
   ```

3. **Configure Environment Variables:**
   
   The `.env` file should already exist. Verify it has:
   ```env
   PORT=3000
   MONGO_DB_URI=mongodb://localhost:27017/budget_manager
   REDIS_URL=redis://localhost:6379
   POSTGRES_URL=postgresql://postgres:postgres@localhost:5432/budget_manager
   ELASTIC_SEARCH_URL=http://localhost:9200
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   ```

4. **Start the Server:**
   ```bash
   npm start
   ```

---

## ▶️ Running the Project

### **Using Docker (Recommended):**

```bash
# Start everything
docker-compose up --build

# Or run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop everything
docker-compose down
```

### **Using Local Installation:**

```bash
# Make sure all services are running first (MongoDB, Redis, PostgreSQL, Elasticsearch)
# Then start the API
npm start
```

### **What Happens When You Start:**

1. **Server initializes** Express app
2. **Connects to MongoDB** - Retries if connection fails
3. **Connects to Redis** - For caching
4. **Connects to PostgreSQL** - For transaction logs
5. **Connects to Elasticsearch** - For search
6. **Seeds initial data** - Creates sample budgets/expenses (if database is empty)
7. **Starts listening** on port 3000
8. **Swagger docs** become available at `/docs`

---

## 🧪 Testing the Project

### **1. Check if Server is Running:**

Open your browser and visit:
- **Homepage**: http://localhost:3000
- **API Documentation**: http://localhost:3000/docs

You should see:
- Homepage: Welcome message
- Swagger Docs: Interactive API documentation interface

### **2. Test API Endpoints:**

**Using Swagger UI (Easiest):**
1. Go to http://localhost:3000/docs
2. You'll see all available endpoints
3. Click "Try it out" on any endpoint
4. Fill in parameters and click "Execute"
5. See the response

**Using curl (Command Line):**

```bash
# Test homepage
curl http://localhost:3000/

# Test API health (if you have a health endpoint)
curl http://localhost:3000/api/budgets
```

**Using Postman or Insomnia:**
- Import the OpenAPI spec from `openapi.yaml`
- Test endpoints with a GUI tool

### **3. Run Automated Tests:**

```bash
# Run Jest tests
npm test

# Run Mocha tests
npm run test:mocha

# Run tests in watch mode (auto-rerun on changes)
npm test:watch

# Generate test coverage report
npm run coverage
```

### **4. Test Database Connections:**

**Check MongoDB:**
```bash
# If using Docker
docker exec -it mongo mongosh

# Then in MongoDB shell:
show dbs
use budget_manager
show collections
```

**Check Redis:**
```bash
# If using Docker
docker exec -it redis redis-cli

# Then in Redis CLI:
ping  # Should return PONG
keys *  # List all keys
```

**Check PostgreSQL:**
```bash
# If using Docker
docker exec -it postgres psql -U postgres -d budget_manager

# Then in PostgreSQL:
\dt  # List tables
SELECT * FROM transactions;  # View transactions
```

**Check Elasticsearch:**
```bash
# Open in browser
http://localhost:9200

# Or use curl
curl http://localhost:9200
```

---

## 🌐 Accessing the API

### **Available Endpoints:**

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/` | GET | Homepage | No |
| `/docs` | GET | Swagger API Documentation | No |
| `/api/auth/register` | POST | Register new user | No |
| `/api/auth/login` | POST | Login user | No |
| `/api/budgets` | GET | Get all budgets | Yes |
| `/api/budgets` | POST | Create budget | Yes |
| `/api/expenses` | GET | Get all expenses | Yes |
| `/api/expenses` | POST | Create expense | Yes |
| `/api/users/profile` | GET | Get user profile | Yes |
| `/api/search` | POST | Search expenses | Yes |
| `/api/notifications` | POST | Send notification | Yes |

### **Example: Register a User**

**Using Swagger UI:**
1. Go to http://localhost:3000/docs
2. Find `/api/auth/register`
3. Click "Try it out"
4. Enter:
   ```json
   {
     "username": "testuser",
     "email": "test@example.com",
     "password": "password123"
   }
   ```
5. Click "Execute"
6. You'll get a response with user data

**Using curl:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### **Example: Login and Get Token**

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Response will include a token:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { ... }
}
```

**Use the token for protected routes:**
```bash
curl -X GET http://localhost:3000/api/budgets \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🔍 Troubleshooting

### **Problem: Server won't start**

**Check:**
1. Are all services running? (MongoDB, Redis, PostgreSQL, Elasticsearch)
2. Are ports 3000, 27017, 6379, 5432, 9200 available?
3. Check `.env` file exists and has correct values
4. Check console for error messages

**Solution:**
```bash
# Check if ports are in use
lsof -i :3000
lsof -i :27017
lsof -i :6379
lsof -i :5432
lsof -i :9200

# Kill process if needed
kill -9 <PID>
```

### **Problem: "Cannot connect to MongoDB"**

**If using Docker:**
```bash
# Check if MongoDB container is running
docker ps

# Check MongoDB logs
docker logs mongo

# Restart MongoDB container
docker restart mongo
```

**If using local MongoDB:**
```bash
# Check if MongoDB service is running
brew services list | grep mongodb

# Start MongoDB
brew services start mongodb-community@6
```

### **Problem: "Cannot connect to Redis"**

**If using Docker:**
```bash
docker logs redis
docker restart redis
```

**If using local Redis:**
```bash
redis-cli ping  # Should return PONG
# If not, start Redis: brew services start redis
```

### **Problem: Dependencies not installed**

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Problem: Port already in use**

```bash
# Find what's using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or change PORT in .env file
```

---

## ✅ Quick Start Checklist

- [ ] Node.js installed (v16+) ✅
- [ ] npm installed ✅
- [ ] Docker installed (optional but recommended) ✅
- [ ] `.env` file exists with correct values
- [ ] Dependencies installed (`npm install`)
- [ ] Services running (Docker or local)
- [ ] Server starts without errors
- [ ] Can access http://localhost:3000
- [ ] Can access http://localhost:3000/docs
- [ ] Can register a user via Swagger
- [ ] Can login and get JWT token

---

## 🎓 Next Steps

Once the project is running:

1. **Explore Swagger Docs**: http://localhost:3000/docs
   - Try different endpoints
   - See request/response examples
   - Understand the API structure

2. **Read Project Structure Guide**: See `PROJECT_STRUCTURE.md` (we'll create this next)

3. **Test Core Features:**
   - Register a user
   - Create a budget
   - Add expenses
   - Search expenses
   - Send notifications

4. **Check Database:**
   - See what data was created
   - Understand data relationships

---

## 📞 Need Help?

If something doesn't work:
1. Check the console output for error messages
2. Verify all services are running
3. Check the `.env` file configuration
4. Review the troubleshooting section above

---

**Ready to start?** Let's run the project! 🚀

