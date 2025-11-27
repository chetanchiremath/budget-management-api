# 🧪 Complete Testing Guide - Step by Step

## 🎯 Quick Start

**Prerequisites:**
- Server running: `docker-compose up -d`
- Access to: http://localhost:3000/docs

---

## 📋 Testing Methods

### **Method 1: Swagger UI (Easiest - Recommended for Beginners)**
- Visual interface
- No setup needed
- Auto-generates requests
- See responses immediately

### **Method 2: Postman (Advanced)**
- More control
- Save requests
- Create collections
- Better for automation

---

## 🚀 Method 1: Testing with Swagger UI

### **Step 1: Open Swagger UI**
1. Go to: http://localhost:3000/docs
2. You'll see all endpoints organized by tags

### **Step 2: Register a User**

1. Find **`/api/auth/register`**
2. Click **"Try it out"**
3. Replace the example with:
   ```json
   {
     "username": "testuser",
     "email": "test@example.com",
     "password": "test123"
   }
   ```
4. Click **"Execute"**
5. **Copy the `token`** from the response (you'll need it!)

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "...",
    "username": "testuser",
    "email": "test@example.com"
  }
}
```

### **Step 3: Authorize (Add JWT Token)**

1. Click the **"Authorize"** button (top right, lock icon)
2. In the "Value" field, enter: `Bearer YOUR_TOKEN_HERE`
   - Replace `YOUR_TOKEN_HERE` with the token from Step 2
   - Example: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
3. Click **"Authorize"**
4. Click **"Close"**
5. Now all protected endpoints will work!

### **Step 4: Test Each Technology**

#### **✅ Test 1: PostgreSQL (Transactions)**

1. Find **`/api/transactions`** (POST)
2. Click **"Try it out"**
3. Enter:
   ```json
   {
     "userId": "user123",
     "description": "Test transaction from Swagger",
     "amount": 150.75,
     "budgetId": "budget123"
   }
   ```
4. Click **"Execute"**
5. **Success!** Transaction created in PostgreSQL

**Verify:**
- GET `/api/transactions` - See your transaction
- GET `/api/transactions/user/user123` - See user's transactions

---

#### **✅ Test 2: Redis (Tasks)**

1. Find **`/api/tasks`** (POST)
2. Click **"Try it out"**
3. Enter:
   ```json
   {
     "description": "Test task with Redis caching"
   }
   ```
4. Click **"Execute"**
5. **Copy the `taskId`** from response

6. **Check Status (Reads from Redis):**
   - Find **`/api/tasks/{id}`** (GET)
   - Click **"Try it out"**
   - Enter the `taskId` from step 5
   - Click **"Execute"**
   - Status is read from Redis cache!

**Verify in Redis:**
```bash
docker exec -it redis redis-cli
KEYS task:*
GET task:YOUR_TASK_ID:status
```

---

#### **✅ Test 3: Elasticsearch (Search)**

1. **First, create some expenses** (if not already created):
   - POST `/api/expenses`
   - Create a few expenses with different descriptions

2. **Search Expenses:**
   - Find **`/api/search`** (POST)
   - Click **"Try it out"**
   - Enter:
     ```json
     {
       "query": "food",
       "page": 1,
       "size": 10
     }
     ```
   - Click **"Execute"**
   - See matching expenses!

**Try Different Searches:**
- `"query": "flight"` - Find flight expenses
- `"query": "hotel"` - Find hotel expenses
- `"query": "500"` - Find expenses with amount 500

---

#### **✅ Test 4: WebSocket (Notifications)**

**Part A: Connect WebSocket (Browser Console)**

1. Open **Browser Console** (F12 or Right-click → Inspect → Console)
2. Paste this code:
   ```javascript
   const ws = new WebSocket('ws://localhost:3000');
   
   ws.onopen = () => {
     console.log('✅ WebSocket Connected!');
   };
   
   ws.onmessage = (event) => {
     const data = JSON.parse(event.data);
     console.log('📨 Notification received:', data);
     alert('Notification: ' + data.message);
   };
   
   ws.onerror = (error) => {
     console.error('❌ WebSocket Error:', error);
   };
   ```
3. Press Enter
4. You should see: `✅ WebSocket Connected!`

**Part B: Send Notification**

1. In Swagger, find **`/api/notifications/send`** (POST)
2. Click **"Try it out"**
3. Enter:
   ```json
   {
     "message": "Hello from Swagger! This is a real-time notification!"
   }
   ```
4. Click **"Execute"**
5. **Check your browser console!** You should see the notification appear instantly!

---

#### **✅ Test 5: MongoDB (Budgets & Expenses)**

**Create Budget:**
1. POST `/api/budgets`
2. Body:
   ```json
   {
     "name": "Travel Budget",
     "limit": 2000
   }
   ```
3. **Copy the `_id`** from response

**Create Expense:**
1. POST `/api/expenses`
2. Body:
   ```json
   {
     "description": "Flight tickets",
     "amount": 500,
     "budgetId": "PASTE_BUDGET_ID_HERE"
   }
   ```

**Get Budget (Uses Redis Cache):**
1. GET `/api/budgets/{id}`
2. First call: Reads from MongoDB
3. Second call: Reads from Redis (faster!)

---

## 📮 Method 2: Testing with Postman

### **Setup Postman Collection**

#### **Step 1: Create Environment**

1. Open Postman
2. Click **"Environments"** (left sidebar)
3. Click **"+"** to create new
4. Name: `Budget API Local`
5. Add variables:
   - `base_url`: `http://localhost:3000`
   - `token`: (leave empty, will be set after login)

6. Click **"Save"**

#### **Step 2: Create Collection**

1. Click **"Collections"** (left sidebar)
2. Click **"+"** to create new
3. Name: `Budget Management API`
4. Click **"Save"**

---

### **Step 3: Test Endpoints**

#### **1. Register User**

- **Method:** `POST`
- **URL:** `{{base_url}}/api/auth/register`
- **Headers:**
  - `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "test123"
  }
  ```
- **Click "Send"**
- **Copy the `token`** from response
- **Set environment variable:**
  - Go to Environments
  - Set `token` = `YOUR_TOKEN_HERE`

#### **2. Login (Alternative)**

- **Method:** `POST`
- **URL:** `{{base_url}}/api/auth/login`
- **Body:**
  ```json
  {
    "email": "test@example.com",
    "password": "test123"
  }
  ```
- **Save token** to environment variable

#### **3. Create Budget (MongoDB)**

- **Method:** `POST`
- **URL:** `{{base_url}}/api/budgets`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer {{token}}`
- **Body:**
  ```json
  {
    "name": "Travel Budget",
    "limit": 2000
  }
  ```

#### **4. Get Budget (Redis Cache)**

- **Method:** `GET`
- **URL:** `{{base_url}}/api/budgets/{{budget_id}}`
- **Headers:**
  - `Authorization: Bearer {{token}}`
- **First call:** Slower (reads from MongoDB)
- **Second call:** Faster (reads from Redis)

#### **5. Create Task (MongoDB + Redis)**

- **Method:** `POST`
- **URL:** `{{base_url}}/api/tasks`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer {{token}}`
- **Body:**
  ```json
  {
    "description": "Process analytics"
  }
  ```
- **Save `taskId`** from response

#### **6. Check Task Status (Redis)**

- **Method:** `GET`
- **URL:** `{{base_url}}/api/tasks/{{taskId}}`
- **Headers:**
  - `Authorization: Bearer {{token}}`
- **This reads from Redis cache!**

#### **7. Create Transaction (PostgreSQL)**

- **Method:** `POST`
- **URL:** `{{base_url}}/api/transactions`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer {{token}}`
- **Body:**
  ```json
  {
    "userId": "user123",
    "description": "Test transaction",
    "amount": 100.50,
    "budgetId": "budget123"
  }
  ```

#### **8. Search Expenses (Elasticsearch)**

- **Method:** `POST`
- **URL:** `{{base_url}}/api/search`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer {{token}}`
- **Body:**
  ```json
  {
    "query": "flight",
    "page": 1,
    "size": 10
  }
  ```

#### **9. Send Notification (WebSocket)**

**Note:** Postman supports WebSocket (newer versions)

- **New Request** → **WebSocket**
- **URL:** `ws://localhost:3000`
- **Click "Connect"**

**Then send notification via REST:**
- **Method:** `POST`
- **URL:** `{{base_url}}/api/notifications/send`
- **Body:**
  ```json
  {
    "message": "Hello from Postman!"
  }
  ```
- **See message appear in WebSocket tab!**

---

## 🔍 Verification Commands

### **Check PostgreSQL Data:**
```bash
docker exec -it postgres psql -U postgres -d budget_manager
SELECT * FROM transaction_logs;
\q
```

### **Check Redis Data:**
```bash
docker exec -it redis redis-cli
KEYS *
GET task:YOUR_ID:status
GET budget:YOUR_ID
```

### **Check Elasticsearch:**
```bash
curl http://localhost:9200/expenses/_search?pretty
```

### **Check MongoDB:**
```bash
docker exec -it mongo mongosh budget_manager
db.budgets.find()
db.expenses.find()
```

---

## 📊 Complete Test Flow

### **Full Integration Test:**

1. **Register User** → Get token
2. **Create Budget** (MongoDB) → Save budget ID
3. **Create Expense** (MongoDB) → Link to budget
4. **Get Budget** (Redis cache) → Verify caching
5. **Create Task** (MongoDB + Redis) → Save task ID
6. **Check Task Status** (Redis) → Verify cache read
7. **Create Transaction** (PostgreSQL) → Verify SQL insert
8. **Search Expenses** (Elasticsearch) → Verify search
9. **Connect WebSocket** → Verify connection
10. **Send Notification** (WebSocket) → Verify real-time delivery

**If all work, you've tested every technology!** ✅

---

## 🐛 Troubleshooting

### **401 Unauthorized:**
- Token expired or missing
- **Fix:** Re-login and update token

### **500 Server Error:**
- Check Docker logs: `docker-compose logs app`
- Verify services are running: `docker-compose ps`

### **WebSocket Connection Failed:**
- Make sure server is running
- Check if WebSocket is initialized in `index.js`

### **Elasticsearch No Results:**
- Expenses might not be indexed
- Check: `curl http://localhost:9200/expenses/_count`

---

## 💡 Pro Tips

1. **Save requests in Postman** for quick testing
2. **Use environment variables** for tokens and IDs
3. **Check Docker logs** when things don't work
4. **Test one feature at a time** to isolate issues
5. **Use Swagger for exploration**, Postman for automation

---

**Happy Testing!** 🎉

