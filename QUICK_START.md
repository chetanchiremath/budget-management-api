# ⚡ Quick Start - Run the Project NOW

## 🎯 Fastest Way to Get Started

### **Step 1: Start Docker Desktop**

**Important:** Docker must be running before you can use `docker-compose`.

1. Open **Docker Desktop** application on your Mac
2. Wait for it to fully start (whale icon in menu bar should be steady)
3. Verify it's running:
   ```bash
   docker ps
   ```
   Should show empty list (not an error)

---

### **Step 2: Start All Services**

Once Docker is running, execute:

```bash
cd /Users/satwik/Documents/Chetan/Project/Budget-Management-Backend-API
docker-compose up --build
```

**What happens:**
- Downloads MongoDB, Redis, PostgreSQL, Elasticsearch images (first time only - takes 2-5 minutes)
- Starts all database services
- Builds and starts your Node.js API
- Connects everything together

**You'll see output like:**
```
Creating network "budget-management-backend-api_default" ...
Creating mongo ... done
Creating redis ... done
Creating postgres ... done
Creating elasticsearch ... done
Creating budget_manager_app ... done
...
MongoDB connected successfully.
Redis Connected
Server running on port 3000
Visit http://localhost:3000/docs for API documentation
```

---

### **Step 3: Verify It's Working**

Open your browser and visit:

1. **API Documentation**: http://localhost:3000/docs
   - You should see Swagger UI with all API endpoints
   - This confirms the server is running!

2. **Homepage**: http://localhost:3000
   - Should show a welcome page

---

### **Step 4: Test the API**

**Using Swagger UI (Easiest):**

1. Go to http://localhost:3000/docs
2. Find the `/api/auth/register` endpoint
3. Click "Try it out"
4. Enter this test data:
   ```json
   {
     "username": "testuser",
     "email": "test@example.com",
     "password": "test123"
   }
   ```
5. Click "Execute"
6. You should see a success response with user data

**If this works, your API is fully functional! ✅**

---

### **Step 5: Stop Services (When Done)**

Press `Ctrl + C` in the terminal, or in a new terminal:

```bash
cd /Users/satwik/Documents/Chetan/Project/Budget-Management-Backend-API
docker-compose down
```

---

## 🔄 Alternative: Run in Background

If you want to run services in the background:

```bash
# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop when done
docker-compose down
```

---

## ❌ Troubleshooting

### **"Cannot connect to Docker daemon"**
- **Solution**: Start Docker Desktop application first

### **"Port already in use"**
- **Solution**: Something else is using port 3000
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```

### **"Connection refused" to databases**
- **Solution**: Wait a bit longer - databases take time to start
- Check logs: `docker-compose logs`

### **Services keep restarting**
- **Solution**: Check logs for errors:
  ```bash
  docker-compose logs mongo
  docker-compose logs redis
  docker-compose logs postgres
  docker-compose logs elasticsearch
  ```

---

## ✅ Success Checklist

- [ ] Docker Desktop is running
- [ ] `docker-compose up --build` completed without errors
- [ ] Can access http://localhost:3000/docs
- [ ] Can register a user via Swagger UI
- [ ] Server logs show "MongoDB connected successfully"

**If all checked, you're ready to learn the project structure!** 🎉

