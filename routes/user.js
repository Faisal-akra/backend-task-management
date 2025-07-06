const express = require("express");
const {register, login} = require("../controllers/user");

const userRouter = express.Router();



userRouter.put('/register', register);
userRouter.put('/login', login )


module.exports = userRouter;