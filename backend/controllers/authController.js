const userModel = require("../models/userModel.js");
const JWT = require('jsonwebtoken');
const { comparePassword, hashPassword } = require("../helpers/authHelper.js");


 const registerController = async (req, res) => {
    try {
      const { name, email, password, phone, address, answer } = req.body;
  
      //validations
      if (!name) {
        return res.send({ message: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
      if (!phone) {
        return res.send({ message: "Phone number is Required" });
      }
     
  
      //check user
      const existingUser = await userModel.findOne({ email });
      //existing user
      if (existingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
  
      //register user
      const hashedPassword = await hashPassword(password);
  
      //save
      const user = await new userModel({
        name,
        email,
        phone,
        address,
        password: hashedPassword,
        answer,
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Registerd Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registeration",
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
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
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

  module.exports = {
    registerController,
    loginController,
    testController,
  };