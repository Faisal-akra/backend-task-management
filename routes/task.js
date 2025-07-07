const express = require("express");


const verifyUSer = require("../middleware/middleware");
const createTask = require("../controllers/task");
const taskRoute = express.Router();

taskRoute.post("/createTask", verifyUSer , createTask);


module.exports = taskRoute;