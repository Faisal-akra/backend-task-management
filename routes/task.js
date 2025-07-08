const express = require("express");


const verifyUSer = require("../middleware/middleware");
const {createTask, fetchAllTask, fetchSpecificTask, deleteSpecificTask, fetchTaskByStatus, fetchTaskByPriority} = require("../controllers/task");
const taskRoute = express.Router();

taskRoute.post("/createTask", verifyUSer , createTask);
taskRoute.get('/fetchTask', verifyUSer, fetchAllTask);
taskRoute.get('/fetchSpecificTask/:id', verifyUSer, fetchSpecificTask);
taskRoute.delete('/deleteSpecificTask/:id', verifyUSer, deleteSpecificTask);
taskRoute.get("/fetchTaskByStatus/:status", verifyUSer, fetchTaskByStatus);
taskRoute.get("/fetchTaskByPriority/:priority", verifyUSer, fetchTaskByPriority)




module.exports = taskRoute;