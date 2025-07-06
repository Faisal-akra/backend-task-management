const express = require("express");
const register = require("../controllers/user");

const userRouter = express.Router();



userRouter.put('/register', register);


module.exports = userRouter;