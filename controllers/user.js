const userModel = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const errorMsg = "unexpected error";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({
        msg: "All fields is required!",
      });
    }

    const isExist = await userModel.findOne({ email });

    if (isExist) {
      res.status(202).json({
        msg: `user is already exists in this email ${email}`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      msg: "user is registred successfully",
    });
  } catch (error) {
    console.log(errorMsg, error);
    res.status(404).json({
      msg: "user is not registered!",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        msg: "all fields are required!",
      });
    }

    const checkEmail = await userModel.findOne({ email });

    if (!checkEmail) {
      return res.status(404).json({
        msg: "user is not found!",
      });
    }


    const comparePass = await bcrypt.compare(password, checkEmail.password);

    if(!comparePass) {
      return res.status(404).json({
        msg: "Invalid Credentials!"
      })
    }

    const token = jwt.sign({id: checkEmail.id},    process.env.SECRET_KEY, {expiresIn: "10hr" });




    res.status(200).json({
      msg: "user is loged in successfully",
      token: token
    });
  } catch (error) {
    console.log(error, errorMsg);
    res.status(404).json({
      msg: "user is not login!",
    });
  }
};




module.exports = {
  register,
  login,
};
