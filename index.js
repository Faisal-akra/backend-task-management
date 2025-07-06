const express = require("express");
const app = express();
const connectDB = require("./config/connect");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
dotenv.config();
connectDB();
app.use(express.json());

app.use('/api/auth', userRouter )

const port = "https://localhost9000";

app.listen(9000, () => {
  console.log(`port is running on ${port}`);
});
