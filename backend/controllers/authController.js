const {Otpdata} = require("../models/otpModel.js")
const userModel = require("../models/userModel.js");
const JWT = require('jsonwebtoken');
const { comparePassword, hashPassword } = require("../helpers/authHelper.js");
const nodemailer = require("nodemailer")


 const registerController = async (req, res) => {
    try {
      const { name, email, password, phone} = req.body;
        console.log(name, email, password, phone);
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
        // address,
        password: hashedPassword,
        // answer,
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
          // address: user.address,
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

  const otpController = async (req,res) => {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.email,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN 
      }
    });
    const { email} = req.body;
    try {
      const user = await userModel.findOne({ email });
      const existing_user_otp = await Otpdata.findOne({email})
  
      if (!user) {
        return res.status(401).json({ message: 'User not registered' });
      }
      
      const otp = Math.floor(100000 + Math.random() * 900000);
      const mailOptions = {
        from: `"Electrokart" ${process.env.email}`, 
        to: email, // list of receivers
        subject: 'Electrokart Login OTP', 
        text: `Your OTP to login to Electrokart is: ${otp}`, 
      };
  
      if (existing_user_otp) { 
        await Otpdata.deleteOne({ email });
      }
      let info = await transporter.sendMail(mailOptions);
       console.log('Email sent: ' + info.response);
      const newotp = await  Otpdata.create({otp:otp, email:email})
      res.status(201).json({ message: 'Otp successfully sended', newotp });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

 const testController = (req, res) => {
    try {
      res.send("Protected Route");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };

  const otpVerifyController = async (req, res) => {
    const { otp, email } = req.body;
    try {
      const user = await Otpdata.findOne({otp});
      const Userid = await userModel.findOne({email}); 
      if (!user ||  user.email !== email ) {
        return res.status(401).json({ message: 'Invalid OTP' });
      }
  
      const token = JWT.sign({ id: Userid._id }, `${process.env.JWT_SECRET}`, { expiresIn: '1h' });
      await Otpdata.deleteOne({ otp });
      res.status(201).json({ message: 'Otp successfully verified', token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //forgotPasswordController
 const forgotPasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
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


 const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while Update profile",
      error,
    });
  }
};

  module.exports = {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    otpController,
    otpVerifyController,
  };