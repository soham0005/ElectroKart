const userModel = require("../models/userModel.js");
const JWT = require('jsonwebtoken');
const { comparePassword, hashPassword } = require("../helpers/authHelper.js");


const registerController = async (req, res) => {
  const { name, email, password, phone, answer } = req.body; // Include answer here

  // Basic validation
  if (!name || !email || !password || !phone || !answer) {
    return res.status(400).send({
      success: false,
      message: "All fields are required",
    });
  }

  // Proceed with registration logic...
  try {
    // Your existing logic to create the user (make sure to store the answer)
    const user = new userModel({
      name,
      email,
      password,
      phone,
      answer, 
    });

    await user.save();

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

  
  // POST LOGIN
  const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //Check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
  
      //token
      const token = await JWT.sign({ _id: user._id }, "anjfajglag123211jga", {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "Login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };

  //test controller
 const testController = (req, res) => {
    try {
      res.send("Protected Route");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };


  //forgotPasswordController
 const forgotPasswordController = async (req, res) => {
  try {
    const { email, newPassword ,answer} = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //Check
    const user = await userModel.findOne({ email });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email ",
      });
    }

    if (user.answer !== answer) {
      return res.status(404).send({
        success: false,
        message: "Wrong Answer",
      });
    }

    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

  module.exports = {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
  };