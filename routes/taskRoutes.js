const express = require('express');
const { sendTask, checkTaskStatus, deleteTask, getAllTasks, updateTaskById } = require('../controllers/taskController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new task
router.post('/', authenticate, sendTask);
router.post('/tasks', authenticate, sendTask);

// Check the status of a task (using Redis)
router.get('/:id', authenticate, checkTaskStatus);

// Delete a task
router.delete('/:id', authenticate, deleteTask);

// Get all tasks from MongoDB and cache them in Redis
router.get('/', authenticate, getAllTasks);

// Update a task in MongoDB and Redis
router.put('/:id', authenticate, updateTaskById);

module.exports = router;
