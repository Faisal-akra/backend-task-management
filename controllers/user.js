const userModel = require("../models/user.js");
const bcrypt = require('bcrypt');

const errorMsg = "unexpected error";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({
        msg: "All fields is required!",
      });
    }

    const isExist = await userModel.findOne({email});

    if (isExist) {
      res.status(202).json({
        msg: `user is already exists in this email ${email}`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    userModel.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(200).json({
      msg: "user is registred successfully"
    })
  } catch (error) {
    console.log(errorMsg, error);
  }
};

module.exports = register;
