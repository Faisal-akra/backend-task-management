const express = require("express");


const verifyUSer = require("../middleware/middleware");
const {createTask, fetchAllTask} = require("../controllers/task");
const taskRoute = express.Router();

taskRoute.post("/createTask", verifyUSer , createTask);
taskRoute.get('/fetchTask', verifyUSer, fetchAllTask)


module.exports = taskRoute;