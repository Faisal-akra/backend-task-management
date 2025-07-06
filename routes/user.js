const express = require("express");
const { register, login, getProfile } = require("../controllers/user");
const middleware = require("../middleware/middleware")

const userRouter = express.Router();

userRouter.put("/register", register);
userRouter.put("/login", login);
userRouter.get("/getProfile/:id", middleware, getProfile);

module.exports = userRouter;
