const express = require("express");


const verifyUSer = require("../middleware/middleware");
const {createTask, fetchAllTask, fetchSpecificTask, deleteSpecificTask} = require("../controllers/task");
const taskRoute = express.Router();

taskRoute.post("/createTask", verifyUSer , createTask);
taskRoute.get('/fetchTask', verifyUSer, fetchAllTask);
taskRoute.get('/fetchSpecificTask/:id', verifyUSer, fetchSpecificTask);
taskRoute.delete('/deleteSpecificTask/:id', verifyUSer, deleteSpecificTask)
module.exports = taskRoute;