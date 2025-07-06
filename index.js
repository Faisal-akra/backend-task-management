const express = require("express");
const app = express();
const connectDB = require("./config/connect");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const port = "https://localhost9000";

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
